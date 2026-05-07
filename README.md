# QAMS Global - Certificate Management UI

A modern, responsive frontend application for QAMS Global certificate management and verification.

## 🚀 Features

- **Certificate Search** - Search and verify certificates with sample data
- **Contact Form** - Beautiful contact form with validation
- **Responsive Design** - Works on all devices
- **Smooth Animations** - Framer Motion animations throughout
- **Modern UI** - Built with React, Tailwind CSS, and Vite

## 📋 Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Lenis** - Smooth scrolling

## 🛠️ Installation

```bash
cd client
npm install
```

## 💻 Development

```bash
cd client
npm run dev
```

Server runs at `http://localhost:5173`

## 🏗️ Build

```bash
cd client
npm run build
```

Output is in `client/dist`

## 📦 Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Set root directory to `client`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

### Netlify

1. Connect your GitHub repository to Netlify
2. Set base directory to `client`
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Page sections
│   │   └── ui/          # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   ├── context/         # React context
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## 🎨 Components

### Sections
- **HeroSlider** - Hero section with slider
- **TrustBar** - Trust indicators
- **StatsSection** - Statistics display
- **ServicesSection** - Services overview
- **HowItWorks** - Process explanation
- **CertificationsSection** - Certifications display
- **IndustriesGrid** - Industries served
- **AboutSection** - About company
- **MissionSection** - Mission statement
- **SearchCertificate** - Certificate search (with sample data)
- **Testimonials** - Customer testimonials
- **FAQSection** - Frequently asked questions
- **PolicySection** - Policies
- **CTABanner** - Call to action
- **ContactSection** - Contact form (no backend)

## 🔍 Certificate Search

The certificate search uses sample data:
- `QAMS-ISO9001-2024-0001` - Precision Industries Ltd
- `QAMS-ISO45001-2024-0002` - Buildtech Construction
- `QAMS-ISO27001-2024-0003` - DataSecure Solutions

## 📝 Contact Form

The contact form validates input and shows a success message. No backend integration.

## 🎯 Environment Variables

No environment variables needed for frontend-only deployment.

## 📄 License

ISC

## 👨‍💻 Author

QAMS Global

---

**Frontend Only** - No backend API required. All data is static/sample data.
