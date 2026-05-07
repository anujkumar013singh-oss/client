# QAMS Global - ISO Certification Website

A modern, responsive website for QAMS Global, an ISO certification, audit, and training body.

## 🚀 Features

- **Hero Section**: Animated image slider with expert avatars
- **Navigation**: Responsive navbar with mobile drawer
- **Mission Section**: Animated text with company values
- **Contact Form**: Full-featured form with MongoDB integration
- **Certificate Search**: Live search for ISO certifications
- **Modern Design**: Built with React, TailwindCSS, and Framer Motion

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling framework
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Swiper** - Image carousel
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB Atlas** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email service
- **Express Validator** - Input validation

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB Atlas account

### Local Development

1. **Clone the repository**
```bash
git clone <repository-url>
cd test-2
```

2. **Install dependencies**
```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

3. **Set up environment variables**

**Backend (.env)**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/db
CLIENT_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_SERVICE=gmail
PORT=5055
```

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:5055
```

4. **Start development servers**
```bash
# Backend (terminal 1)
cd server
npm run dev

# Frontend (terminal 2)
cd client
npm run dev
```

5. **Access the application**
- Frontend: http://localhost:5173
- Backend: http://localhost:5055

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd client
vercel --prod
```

### Backend (Render/Railway)
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📁 Project Structure

```
test-2/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/         # Custom hooks
│   │   ├── styles/        # Global styles
│   │   └── utils/         # Utility functions
│   ├── public/           # Static assets
│   └── package.json
├── server/                # Node.js backend
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── middleware/       # Express middleware
│   └── package.json
├── DEPLOYMENT.md         # Deployment guide
└── README.md
```

## 🔧 Configuration

### Fonts Used
- **Bebas Neue** - Logo branding
- **Sen** - navigation items (secondary)
- **Josefin Sans** - mission text
- **Poppins** - primary font family

### Color Scheme
- **Navy** (#0C2340) - primary background
- **Gold** (#D4A017) - accent color
- **Blue** (#2563A8) - secondary color

## 📧 Contact Form Features

- **Validation**: Name, email, message validation
- **Database Storage**: MongoDB Atlas integration
- **Email Notifications**: Gmail SMTP integration
- **Rate Limiting**: IP-based tracking
- **Responsive Design**: Mobile-friendly layout

## 🔍 Certificate Search

- **Live Search**: Real-time filtering
- **MongoDB Integration**: Stored and queried from Atlas
- **Fallback Data**: Sample data for development
- **Responsive Results**: Mobile-optimized display

## 🎨 Animations

- **GSAP Text Animations**: Hero section word animations
- **Framer Motion**: Page transitions and micro-interactions
- **CSS Transitions**: Smooth hover states
- **Swiper Effects**: Image carousel transitions

## 🛡️ Security Features

- **CORS Protection**: Configured for production domains
- **Input Validation**: Express-validator integration
- **XSS Protection**: Security headers
- **Environment Variables**: Sensitive data protection

## 📊 Performance

- **Vite Build**: Optimized production builds
- **Image Optimization**: Responsive images
- **Code Splitting**: Lazy loading components
- **CDN Ready**: Static asset optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For deployment issues or questions, refer to the [DEPLOYMENT.md](./DEPLOYMENT.md) guide or contact the development team.

---

**QAMS Global** - Your trusted partner for ISO certification excellence.
