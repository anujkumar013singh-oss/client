import express from "express"
import Certificate from "../models/Certificate.js"

const router = express.Router()

const fallbackCertificates = [
  { certNumber: "QAMS-ISO9001-2024-0001", orgName: "Precision Industries Ltd", standard: "ISO 9001:2015", address: "Noida, Uttar Pradesh", scope: "Manufacturing and supply of precision industrial components.", issuedOn: "2024-02-01", expireOn: "2027-01-31", status: "Active" },
  { certNumber: "QAMS-ISO45001-2024-0002", orgName: "Buildtech Construction", standard: "ISO 45001:2018", address: "Gurugram, Haryana", scope: "Construction project management and site safety systems.", issuedOn: "2024-04-15", expireOn: "2027-04-14", status: "Active" },
  { certNumber: "QAMS-ISO27001-2024-0003", orgName: "DataSecure Solutions", standard: "ISO 27001:2013", address: "Bengaluru, Karnataka", scope: "Information security management for software delivery operations.", issuedOn: "2024-06-10", expireOn: "2027-06-09", status: "Active" },
]

router.get("/", async (req, res, next) => {
  try {
    const cert = String(req.query.certNumber || req.query.cert || "").trim()
    if (!cert) {
      return res.status(400).json({ success: false, error: "Certificate number is required" })
    }

    let certificate = null

    if (global.mongoReady) {
      try {
        certificate = await Certificate.findOne({
          certNumber: new RegExp(`^${cert.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i")
        }).lean()
      } catch (dbErr) {
        console.error("Database query error:", dbErr.message)
      }
    }

    certificate ||= fallbackCertificates.find((item) => item.certNumber.toLowerCase() === cert.toLowerCase())

    if (!certificate) {
      return res.status(404).json({ found: false, error: "Certificate not found" })
    }

    res.json({ found: true, certificate })
  } catch (err) {
    next(err)
  }
})

export default router
