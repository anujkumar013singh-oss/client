# QAMS Global - Certificate Management UI

A modern, responsive frontend application for QAMS Global certificate management and verification. Built with React, Vite, and Tailwind CSS.

## 🌟 Features

- **Certificate Search** - Search and verify certificates with sample data
- **Contact Form** - Beautiful contact form with validation
- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Framer Motion and GSAP animations
- **Modern UI** - Clean, professional design with Tailwind CSS
- **Fast Performance** - Built with Vite for optimal speed

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **Lenis** - Smooth scrolling
- **Lucide React** - Icon library

## 📋 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Page sections
│   │   └── ui/              # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── styles/              # Global styles
│   ├── utils/               # Utility functions
│   ├── context/             # React context
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies
```

## 🚀 Quick Start

### Installation

```bash
cd client
npm install
```

### Development

```bash
cd client
npm run dev
```

Server runs at `http://localhost:5173`

### Build

```bash
cd client
npm run build
```

Output is in `client/dist`

### Preview

```bash
cd client
npm run preview
```

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Configure project settings:
   - **Framework**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Click Deploy

**Your site will be live at**: `https://your-project.vercel.app`

### Netlify

1. Connect your GitHub repository to [Netlify](https://netlify.com)
2. Configure build settings:
   - **Base Directory**: `client`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Click Deploy

**Your site will be live at**: `https://your-site.netlify.app`

### GitHub Pages

1. Update `vite.config.js`:
```javascript
export default {
  base: '/repository-name/',
  // ... rest of config
}
```

2. Build and deploy:
```bash
cd client
npm run build
git add dist
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 🎨 Components

### Page Sections
- **HeroSlider** - Hero section with image slider
- **TrustBar** - Trust indicators and logos
- **StatsSection** - Key statistics
- **ServicesSection** - Services overview
- **HowItWorks** - Process explanation
- **CertificationsSection** - Certifications display
- **IndustriesGrid** - Industries served
- **AboutSection** - Company information
- **MissionSection** - Mission statement
- **SearchCertificate** - Certificate search (sample data)
- **Testimonials** - Customer testimonials
- **FAQSection** - Frequently asked questions
- **PolicySection** - Policies and terms
- **CTABanner** - Call to action
- **ContactSection** - Contact form

## 🔍 Sample Data

### Certificate Search
Try searching with these certificate numbers:
- `QAMS-ISO9001-2024-0001` - Precision Industries Ltd
- `QAMS-ISO45001-2024-0002` - Buildtech Construction
- `QAMS-ISO27001-2024-0003` - DataSecure Solutions

### Contact Form
The contact form validates input and shows a success message. No backend integration required.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Vite** for fast development and optimized builds
- **Code splitting** for faster page loads
- **Image optimization** with modern formats
- **CSS minification** and tree-shaking
- **Lazy loading** for components

## 🔧 Configuration

### Tailwind CSS
Configured in `client/tailwind.config.js` with custom colors and utilities.

### Vite
Configured in `client/vite.config.js` with React plugin and optimizations.

### ESLint
Configured in `client/eslint.config.js` for code quality.

## 📚 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌐 Environment Variables

No environment variables needed for frontend-only deployment.

## 📄 License

ISC

## 👨‍💻 Author

QAMS Global

## 🤝 Support

For issues or questions, please contact QAMS Global at:
- **Email**: info@qamsglobal.com
- **Phone**: +91 120 4917144
- **Address**: Sector 10, Noida, Uttar Pradesh, India

---

**Frontend Only** - No backend API required. All data is static/sample data.

**Last Updated**: May 8, 2026
**Version**: 1.0.0
