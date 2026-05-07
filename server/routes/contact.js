import express from "express"
import nodemailer from "nodemailer"
import { body, validationResult } from "express-validator"
import Contact from "../models/Contact.js"

const router = express.Router()

router.post(
  "/",
  [
    body("name").trim().isLength({ min: 2 }),
    body("email").isEmail().normalizeEmail(),
    body("phone").optional({ checkFalsy: true }).matches(/^[0-9+\-\s()]{7,20}$/),
    body("service").optional().isIn(["Audit", "Training", "Certification", "Other"]),
    body("message").trim().isLength({ min: 20 }),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() })

      const contact = await Contact.create({ ...req.body, ipAddress: req.ip })

      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: process.env.EMAIL_SERVICE || "gmail",
          auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        })
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: "info@qamsglobal.com",
          subject: `New QAMS Global enquiry from ${contact.name}`,
          text: `${contact.name} (${contact.email}) requested ${contact.service}.\n\n${contact.message}`,
        })
      }

      res.status(201).json({ success: true, message: "Thank you. We will be in touch within 24 hours." })
    } catch (err) {
      next(err)
    }
  },
)

export default router
