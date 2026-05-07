# Vercel Deployment Documentation

## Overview

This document provides comprehensive instructions for deploying the backend server to Vercel. The backend is an Express.js application with MongoDB integration.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Environment Variables](#environment-variables)
4. [Vercel Configuration](#vercel-configuration)
5. [Deployment Steps](#deployment-steps)
6. [API Endpoints](#api-endpoints)
7. [Troubleshooting](#troubleshooting)
8. [Monitoring & Logs](#monitoring--logs)

---

## Prerequisites

Before deploying to Vercel, ensure you have:

- **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
- **GitHub Account**: Repository must be on GitHub
- **Node.js**: v18+ installed locally
- **MongoDB Atlas Account**: For database connection
- **Git**: For version control

### Required Tools

```bash
npm install -g vercel
```

---

## Project Structure

```
server/
├── index.js                 # Main application entry point
├── package.json            # Dependencies and scripts
├── .env                    # Environment variables (local only)
├── .env.example            # Example environment variables
├── middleware/
│   └── errorHandler.js     # Global error handling middleware
├── models/
│   ├── Certificate.js      # Certificate schema
│   └── Contact.js          # Contact form schema
└── routes/
    ├── contact.js          # Contact form routes
    └── search.js           # Certificate search routes
```

---

## Environment Variables

### Required Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Server Configuration
PORT=5055
NODE_ENV=production

# Database
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

# Client URL (for CORS)
CLIENT_URL=https://your-frontend-domain.com

# Optional: Alternative MongoDB URI
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
```

### Setting Environment Variables on Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - `MONGODB_URI`: Your MongoDB connection string
   - `CLIENT_URL`: Your frontend domain
   - `NODE_ENV`: Set to `production`

**Important**: Never commit `.env` files to Git. Use `.env.example` as a template.

---

## Vercel Configuration

### Option 1: Using vercel.json (Recommended)

Create `server/vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### Option 2: Root-Level Configuration

If deploying from root directory, create `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server/index.js"
    }
  ]
}
```

---

## Deployment Steps

### Step 1: Prepare Your Repository

```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### Step 2: Connect to Vercel

#### Option A: Using Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy from server directory
cd server
vercel

# For production deployment
vercel --prod
```

#### Option B: Using Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **Add New** → **Project**
3. Select your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Other
   - **Root Directory**: `server`
   - **Build Command**: Leave empty (no build needed)
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`
   - **Start Command**: `npm start`

### Step 3: Add Environment Variables

In Vercel Dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following:
   - `MONGODB_URI`: Your MongoDB connection string
   - `CLIENT_URL`: Your frontend URL
   - `NODE_ENV`: `production`

### Step 4: Deploy

```bash
# Deploy to staging
vercel

# Deploy to production
vercel --prod
```

---

## API Endpoints

### Base URL

```
https://your-vercel-deployment.vercel.app
```

### Available Routes

#### 1. Contact Form Submission

**POST** `/api/contact`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

Response:
```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

#### 2. Search Certificates

**GET** `/api/search?certNumber=QAMS-ISO9001-2024-0001`

Response:
```json
{
  "certNumber": "QAMS-ISO9001-2024-0001",
  "orgName": "Precision Industries Ltd",
  "standard": "ISO 9001:2015",
  "address": "Noida, Uttar Pradesh",
  "scope": "Manufacturing and supply of precision industrial components.",
  "issuedOn": "2024-02-01",
  "expireOn": "2027-01-31",
  "status": "Active"
}
```

---

## Troubleshooting

### Issue: "Port Already in Use"

**Error**: `Port 5055 is already in use`

**Solution**: 
- Vercel automatically assigns ports
- Remove hardcoded port from production
- Use `process.env.PORT` (already configured)

### Issue: "MongoDB Connection Failed"

**Error**: `MongoDB connection failed: connect ECONNREFUSED`

**Solution**:
1. Verify `MONGODB_URI` is correct
2. Check MongoDB Atlas IP whitelist includes Vercel IPs
3. Ensure database user has correct permissions
4. Test connection string locally

### Issue: "CORS Errors"

**Error**: `Access to XMLHttpRequest blocked by CORS policy`

**Solution**:
1. Update `CLIENT_URL` environment variable
2. Verify frontend domain is correct
3. Check CORS middleware in `index.js`

### Issue: "Module Not Found"

**Error**: `Cannot find module 'express'`

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Commit and push
git add .
git commit -m "Reinstall dependencies"
git push origin main
```

### Issue: "Timeout Errors"

**Error**: `Function execution timeout`

**Solution**:
- Optimize database queries
- Add indexes to MongoDB collections
- Reduce payload sizes
- Check for infinite loops

---

## Monitoring & Logs

### View Deployment Logs

#### Using Vercel CLI

```bash
# View real-time logs
vercel logs

# View logs for specific deployment
vercel logs --follow
```

#### Using Vercel Dashboard

1. Go to your project
2. Click **Deployments**
3. Select a deployment
4. Click **Logs** tab

### Common Log Messages

```
✓ Build completed
✓ Deployment successful
✓ Server running on port 5055
✓ MongoDB Atlas connected
```

### Error Logs

Monitor for:
- `MongoDB connection failed`
- `Port already in use`
- `CORS errors`
- `Unhandled Rejection`
- `Uncaught Exception`

---

## Performance Optimization

### 1. Database Optimization

```javascript
// Add indexes to frequently queried fields
db.certificates.createIndex({ certNumber: 1 })
db.certificates.createIndex({ orgName: 1 })
```

### 2. Caching

```javascript
// Implement response caching
app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=3600');
  next();
});
```

### 3. Compression

```javascript
import compression from 'compression';
app.use(compression());
```

### 4. Rate Limiting

```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use('/api/', limiter);
```

---

## Security Best Practices

### 1. Environment Variables

- Never commit `.env` files
- Use `.env.example` for templates
- Rotate secrets regularly

### 2. CORS Configuration

```javascript
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
```

### 3. Input Validation

```javascript
import { body, validationResult } from 'express-validator';

app.post('/api/contact', [
  body('email').isEmail(),
  body('name').notEmpty(),
  body('message').notEmpty()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Process form
});
```

### 4. Error Handling

- Don't expose sensitive error details
- Log errors securely
- Use generic error messages for clients

---

## Rollback & Redeployment

### Rollback to Previous Deployment

```bash
# List deployments
vercel list

# Rollback to specific deployment
vercel rollback <deployment-url>
```

### Manual Redeployment

```bash
# Force redeploy
vercel --prod --force
```

---

## Useful Commands

```bash
# Login to Vercel
vercel login

# Deploy to staging
vercel

# Deploy to production
vercel --prod

# View project info
vercel project info

# List all deployments
vercel list

# View logs
vercel logs

# Remove project
vercel remove <project-name>

# Set environment variables
vercel env add MONGODB_URI
```

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/)

---

## Support & Contact

For deployment issues:
1. Check Vercel logs
2. Review this documentation
3. Check MongoDB Atlas status
4. Contact Vercel support at [support.vercel.com](https://support.vercel.com)

---

**Last Updated**: May 8, 2026
**Version**: 1.0.0
