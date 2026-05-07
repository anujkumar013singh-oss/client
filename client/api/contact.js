export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, company, service, message } = req.body

    // Validation
    if (!name || name.trim().length < 2) {
      return res.status(400).json({ success: false, errors: [{ msg: 'Name is required and must be at least 2 characters' }] })
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, errors: [{ msg: 'Valid email is required' }] })
    }
    if (phone && !/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      return res.status(400).json({ success: false, errors: [{ msg: 'Phone must be 10 digits' }] })
    }
    if (!message || message.trim().length < 20) {
      return res.status(400).json({ success: false, errors: [{ msg: 'Message must be at least 20 characters' }] })
    }

    // Store contact submission (you can integrate with a database here)
    // For now, we'll just log it and return success
    const contactSubmission = {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : '',
      company: company ? company.trim() : '',
      service: service || 'Certification',
      message: message.trim(),
      createdAt: new Date().toISOString(),
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    }

    // TODO: Add database integration (MongoDB Atlas, Vercel Postgres, etc.)
    // For production, you should store this in a database
    
    console.log('Contact form submission:', contactSubmission)

    return res.status(201).json({ 
      success: true, 
      message: 'Thank you. We will be in touch within 24 hours.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    })
  }
}
