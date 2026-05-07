import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express()

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }))
app.use(express.json())

// In-memory data storage
const contacts = []
const sampleCertificates = [
  { certNumber: "QAMS-ISO9001-2024-0001", orgName: "Precision Industries Ltd", standard: "ISO 9001:2015", address: "Noida, Uttar Pradesh", scope: "Manufacturing and supply of precision industrial components.", issuedOn: "2024-02-01", expireOn: "2027-01-31", status: "Active" },
  { certNumber: "QAMS-ISO45001-2024-0002", orgName: "Buildtech Construction", standard: "ISO 45001:2018", address: "Gurugram, Haryana", scope: "Construction project management and site safety systems.", issuedOn: "2024-04-15", expireOn: "2027-04-14", status: "Active" },
  { certNumber: "QAMS-ISO27001-2024-0003", orgName: "DataSecure Solutions", standard: "ISO 27001:2013", address: "Bengaluru, Karnataka", scope: "Information security management for software delivery operations.", issuedOn: "2024-06-10", expireOn: "2027-06-09", status: "Active" },
]

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Server is running" })
})

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is healthy" })
})

// Contact form endpoint
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body

    // Validation
    if (!name || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: "Name must be at least 2 characters" })
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: "Valid email is required" })
    }

    if (!message || message.trim().length < 20) {
      return res.status(400).json({ success: false, error: "Message must be at least 20 characters" })
    }

    // Store contact
    const contact = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: phone || null,
      service: service || null,
      message: message.trim(),
      createdAt: new Date().toISOString(),
      ipAddress: req.ip
    }

    contacts.push(contact)

    res.status(201).json({
      success: true,
      message: "Thank you. We will be in touch within 24 hours.",
      contactId: contact.id
    })
  } catch (err) {
    console.error("Contact form error:", err.message)
    res.status(500).json({ success: false, error: "Server error" })
  }
})

// Search certificates endpoint
app.get("/api/search", (req, res) => {
  try {
    const cert = String(req.query.certNumber || req.query.cert || "").trim()

    if (!cert) {
      return res.status(400).json({ success: false, error: "Certificate number is required" })
    }

    const certificate = sampleCertificates.find(
      (item) => item.certNumber.toLowerCase() === cert.toLowerCase()
    )

    if (!certificate) {
      return res.status(404).json({ found: false, error: "Certificate not found" })
    }

    res.json({ found: true, certificate })
  } catch (err) {
    console.error("Search error:", err.message)
    res.status(500).json({ success: false, error: "Server error" })
  }
})

// Get all certificates (for admin/testing)
app.get("/api/certificates", (req, res) => {
  res.json({ certificates: sampleCertificates })
})

// Get all contacts (for admin/testing)
app.get("/api/contacts", (req, res) => {
  res.json({ contacts: contacts, total: contacts.length })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message)
  res.status(500).json({ success: false, error: "Internal server error" })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route not found" })
})

const PORT = process.env.PORT || 5055

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Please stop the other process or use a different port.`)
    process.exit(1)
  } else {
    console.error("Server error:", err.message)
    process.exit(1)
  }
})

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason)
  process.exit(1)
})

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error)
  process.exit(1)
})
