# Deployment Guide - QAMS Global UI

This is a frontend-only React application built with Vite. It can be deployed to multiple platforms with zero configuration.

## 📋 Prerequisites

- Node.js 18+ installed
- npm 9+ or yarn installed
- Git installed

## 🚀 Deployment Platforms

### 1. Vercel (Recommended)

**Advantages:**
- Zero-config deployment
- Automatic deployments on push
- Free SSL certificate
- Global CDN
- Serverless functions support

**Steps:**

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Select your GitHub repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**

**Your site will be live at**: `https://your-project.vercel.app`

**Custom Domain:**
1. Go to project settings
2. Click **Domains**
3. Add your custom domain
4. Update DNS records as instructed

---

### 2. Netlify

**Advantages:**
- Easy GitHub integration
- Automatic deployments
- Free SSL certificate
- Form handling
- Analytics

**Steps:**

1. Go to [netlify.com](https://netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Select GitHub and authorize
4. Choose your repository
5. Configure build settings:
   - **Base Directory**: `client`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
6. Click **Deploy site**

**Your site will be live at**: `https://your-site.netlify.app`

**Custom Domain:**
1. Go to site settings
2. Click **Domain management**
3. Add custom domain
4. Update DNS records

---

### 3. GitHub Pages

**Advantages:**
- Free hosting
- Integrated with GitHub
- No external account needed

**Steps:**

1. Update `client/vite.config.js`:
```javascript
export default {
  base: '/repository-name/',
  // ... rest of config
}
```

2. Build the project:
```bash
cd client
npm run build
```

3. Create `gh-pages` branch:
```bash
git checkout --orphan gh-pages
git rm -rf .
git commit --allow-empty -m "Initial commit"
git push origin gh-pages
```

4. Deploy:
```bash
cd client
npm run build
cp -r dist/* ../
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

5. Go to repository settings → Pages
6. Select `gh-pages` branch as source

**Your site will be live at**: `https://username.github.io/repository-name`

---

### 4. AWS Amplify

**Advantages:**
- Scalable hosting
- CI/CD pipeline
- Custom domain support
- Analytics

**Steps:**

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click **Create app** → **Host web app**
3. Select GitHub and authorize
4. Choose repository and branch
5. Configure build settings:
   - **Build command**: `cd client && npm run build`
   - **Base directory**: `client`
6. Click **Save and deploy**

---

### 5. Firebase Hosting

**Advantages:**
- Fast global CDN
- SSL certificate included
- Real-time database support
- Analytics

**Steps:**

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase login
firebase init hosting
```

3. Configure `firebase.json`:
```json
{
  "hosting": {
    "public": "client/dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. Build and deploy:
```bash
cd client
npm run build
cd ..
firebase deploy
```

---

### 6. Cloudflare Pages

**Advantages:**
- Fast global network
- Free SSL
- Automatic deployments
- Analytics

**Steps:**

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Click **Create a project** → **Connect to Git**
3. Select your GitHub repository
4. Configure build settings:
   - **Framework**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `client`
5. Click **Save and deploy**

---

## 🔄 Continuous Deployment

All platforms support automatic deployments on push to main branch.

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: cd client && npm install && npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: client/dist
```

---

## 📊 Performance Optimization

### Build Optimization

```bash
cd client
npm run build
```

This creates an optimized production build with:
- Code minification
- Tree-shaking
- CSS minification
- Image optimization
- Lazy loading

### Lighthouse Scores

Target scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## 🔐 Security

### Environment Variables

No sensitive data needed for frontend-only deployment.

### HTTPS

All platforms provide free SSL certificates.

### Content Security Policy

Add to deployment platform headers:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'
```

---

## 🚨 Troubleshooting

### Build Fails

**Error**: `npm ERR! code ENOENT`

**Solution**:
```bash
cd client
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank Page After Deploy

**Cause**: Incorrect base path

**Solution**: Check `vite.config.js` base path matches deployment URL

### Slow Performance

**Solution**:
1. Enable gzip compression
2. Use CDN
3. Optimize images
4. Enable caching headers

---

## 📈 Monitoring

### Vercel Analytics
- Built-in performance monitoring
- Real User Monitoring (RUM)
- Web Vitals tracking

### Netlify Analytics
- Traffic analytics
- Performance metrics
- Error tracking

### Google Analytics
Add to `client/src/main.jsx`:
```javascript
import ReactGA from 'react-ga4';
ReactGA.initialize('GA_MEASUREMENT_ID');
```

---

## 🔄 Rollback

### Vercel
1. Go to Deployments
2. Select previous deployment
3. Click **Promote to Production**

### Netlify
1. Go to Deploys
2. Select previous deploy
3. Click **Publish deploy**

### GitHub Pages
```bash
git revert <commit-hash>
git push origin main
```

---

## 📝 Environment Setup

### Local Development

```bash
# Install dependencies
cd client
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Production Build

```bash
cd client
npm run build
```

Output: `client/dist/`

---

## 🎯 Best Practices

1. **Always test locally** before deploying
2. **Use version control** for all changes
3. **Monitor performance** after deployment
4. **Set up automatic deployments** for consistency
5. **Use custom domains** for branding
6. **Enable analytics** for insights
7. **Regular backups** of configuration

---

## 📞 Support

For deployment issues:
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [netlify.com/support](https://netlify.com/support)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)
- **AWS Amplify**: [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
- **Firebase**: [firebase.google.com/support](https://firebase.google.com/support)
- **Cloudflare**: [cloudflare.com/support](https://cloudflare.com/support)

---

**Last Updated**: May 8, 2026
**Version**: 1.0.0
