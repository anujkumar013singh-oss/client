import app from "../../api/index.js"

// In-memory storage for Netlify
let contacts = []
const sampleCertificates = [
  { certNumber: "QAMS-ISO9001-2024-0001", orgName: "Precision Industries Ltd", standard: "ISO 9001:2015", address: "Noida, Uttar Pradesh", scope: "Manufacturing and supply of precision industrial components.", issuedOn: "2024-02-01", expireOn: "2027-01-31", status: "Active" },
  { certNumber: "QAMS-ISO45001-2024-0002", orgName: "Buildtech Construction", standard: "ISO 45001:2018", address: "Gurugram, Haryana", scope: "Construction project management and site safety systems.", issuedOn: "2024-04-15", expireOn: "2027-04-14", status: "Active" },
  { certNumber: "QAMS-ISO27001-2024-0003", orgName: "DataSecure Solutions", standard: "ISO 27001:2013", address: "Bengaluru, Karnataka", scope: "Information security management for software delivery operations.", issuedOn: "2024-06-10", expireOn: "2027-06-09", status: "Active" },
]

export const handler = async (event, context) => {
  try {
    // Parse request
    const method = event.httpMethod
    const path = event.path
    const body = event.body ? JSON.parse(event.body) : {}
    const queryStringParameters = event.queryStringParameters || {}

    // Health check
    if (path === "/" || path === "/health") {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "ok", message: "Server is healthy" })
      }
    }

    // Contact form
    if (path === "/api/contact" && method === "POST") {
      const { name, email, phone, service, message } = body

      if (!name || name.trim().length < 2) {
        return {
          statusCode: 400,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ success: false, error: "Name must be at least 2 characters" })
        }
      }

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {
          statusCode: 400,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ success: false, error: "Valid email is required" })
        }
      }

      if (!message || message.trim().length < 20) {
        return {
          statusCode: 400,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ success: false, error: "Message must be at least 20 characters" })
        }
      }

      const contact = {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        phone: phone || null,
        service: service || null,
        message: message.trim(),
        createdAt: new Date().toISOString()
      }

      contacts.push(contact)

      return {
        statusCode: 201,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          success: true,
          message: "Thank you. We will be in touch within 24 hours.",
          contactId: contact.id
        })
      }
    }

    // Search certificates
    if (path === "/api/search" && method === "GET") {
      const cert = String(queryStringParameters.certNumber || queryStringParameters.cert || "").trim()

      if (!cert) {
        return {
          statusCode: 400,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ success: false, error: "Certificate number is required" })
        }
      }

      const certificate = sampleCertificates.find(
        (item) => item.certNumber.toLowerCase() === cert.toLowerCase()
      )

      if (!certificate) {
        return {
          statusCode: 404,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ found: false, error: "Certificate not found" })
        }
      }

      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ found: true, certificate })
      }
    }

    // Get all certificates
    if (path === "/api/certificates" && method === "GET") {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ certificates: sampleCertificates })
      }
    }

    // Get all contacts
    if (path === "/api/contacts" && method === "GET") {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contacts: contacts, total: contacts.length })
      }
    }

    // 404
    return {
      statusCode: 404,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Route not found" })
    }
  } catch (err) {
    console.error("Error:", err.message)
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Server error" })
    }
  }
}
