import express from "express"
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

      res.status(201).json({ success: true, message: "Thank you. We will be in touch within 24 hours." })
    } catch (err) {
      next(err)
    }
  },
)

export default router
