// Sample certificate data (in production, this should come from a database)
const sampleCertificates = [
  { 
    certNumber: "QAMS-ISO9001-2024-0001", 
    orgName: "Precision Industries Ltd", 
    standard: "ISO 9001:2015", 
    address: "Noida, Uttar Pradesh", 
    scope: "Manufacturing and supply of precision industrial components.", 
    issuedOn: "2024-02-01", 
    expireOn: "2027-01-31", 
    status: "Active" 
  },
  { 
    certNumber: "QAMS-ISO45001-2024-0002", 
    orgName: "Buildtech Construction", 
    standard: "ISO 45001:2018", 
    address: "Gurugram, Haryana", 
    scope: "Construction project management and site safety systems.", 
    issuedOn: "2024-04-15", 
    expireOn: "2027-04-14", 
    status: "Active" 
  },
  { 
    certNumber: "QAMS-ISO27001-2024-0003", 
    orgName: "DataSecure Solutions", 
    standard: "ISO 27001:2013", 
    address: "Bengaluru, Karnataka", 
    scope: "Information security management for software delivery operations.", 
    issuedOn: "2024-06-10", 
    expireOn: "2027-06-09", 
    status: "Active" 
  },
]

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const { cert } = req.query

    if (!cert || cert.trim().length === 0) {
      return res.status(400).json({ success: false, error: 'Certificate number is required' })
    }

    // Search for certificate (case-insensitive)
    const searchTerm = cert.trim().toLowerCase()
    const certificate = sampleCertificates.find(
      (item) => item.certNumber.toLowerCase() === searchTerm
    )

    if (!certificate) {
      return res.status(404).json({ found: false })
    }

    return res.status(200).json({ 
      found: true, 
      certificate 
    })
  } catch (error) {
    console.error('Certificate search error:', error)
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    })
  }
}
