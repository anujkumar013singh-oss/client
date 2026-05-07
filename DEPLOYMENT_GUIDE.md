# Deployment Guide - Vercel & Netlify

This application is configured to deploy on both **Vercel** and **Netlify**.

## Project Structure

```
├── client/                 # React frontend (Vite)
├── server/                 # Express backend
│   ├── index.js           # Standalone server
│   ├── api/
│   │   ├── index.js       # Express app (shared)
│   │   └── handler.js     # Vercel handler
│   └── netlify/
│       └── functions/
│           └── api.js     # Netlify function
├── vercel.json            # Vercel configuration
├── netlify.toml           # Netlify configuration
└── package.json           # Root package.json
```

---

## Deployment on Vercel

### Step 1: Connect Repository

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **Add New** → **Project**
3. Select your GitHub repository
4. Click **Import**

### Step 2: Configure Project

In the **Configure Project** screen:

- **Framework Preset**: Other
- **Root Directory**: Leave empty (default)
- **Build Command**: `npm run build`
- **Output Directory**: `client/dist`
- **Install Command**: `npm install`

### Step 3: Add Environment Variables

Click **Environment Variables** and add:

```
CLIENT_URL=https://your-frontend-domain.com
NODE_ENV=production
```

### Step 4: Deploy

Click **Deploy** and wait for completion.

### Vercel API Routes

Your API will be available at:
- `https://your-project.vercel.app/api/search`
- `https://your-project.vercel.app/api/contact`
- `https://your-project.vercel.app/api/certificates`

---

## Deployment on Netlify

### Step 1: Connect Repository

1. Go to [netlify.com](https://netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Select GitHub and choose your repository
4. Click **Connect**

### Step 2: Configure Build Settings

Netlify should auto-detect settings from `netlify.toml`:

- **Build command**: `npm install`
- **Publish directory**: `client/dist`
- **Functions directory**: `server/netlify/functions`

If not auto-detected, set them manually.

### Step 3: Add Environment Variables

In **Site settings** → **Build & deploy** → **Environment**:

```
CLIENT_URL=https://your-frontend-domain.com
NODE_ENV=production
```

### Step 4: Deploy

Click **Deploy site** and wait for completion.

### Netlify API Routes

Your API will be available at:
- `https://your-site.netlify.app/api/search`
- `https://your-site.netlify.app/api/contact`
- `https://your-site.netlify.app/api/certificates`

---

## API Endpoints

### Health Check

```bash
GET /
GET /health
```

Response:
```json
{
  "status": "ok",
  "message": "Server is healthy"
}
```

### Search Certificate

```bash
GET /api/search?certNumber=QAMS-ISO9001-2024-0001
```

Response:
```json
{
  "found": true,
  "certificate": {
    "certNumber": "QAMS-ISO9001-2024-0001",
    "orgName": "Precision Industries Ltd",
    "standard": "ISO 9001:2015",
    ...
  }
}
```

### Submit Contact Form

```bash
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "service": "Audit",
  "message": "I would like to inquire about your services..."
}
```

Response:
```json
{
  "success": true,
  "message": "Thank you. We will be in touch within 24 hours.",
  "contactId": 1234567890
}
```

### Get All Certificates (Admin)

```bash
GET /api/certificates
```

### Get All Contacts (Admin)

```bash
GET /api/contacts
```

---

## Environment Variables

### Required

- `CLIENT_URL`: Your frontend domain (for CORS)
- `NODE_ENV`: Set to `production`

### Optional

- `PORT`: Server port (default: 5055, ignored on serverless)

---

## Local Development

### Install Dependencies

```bash
npm run install-all
```

### Run Development Server

```bash
npm run dev
```

This starts:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5055`

### Build for Production

```bash
npm run build
```

---

## Troubleshooting

### CORS Errors

**Error**: `Access to XMLHttpRequest blocked by CORS policy`

**Solution**:
1. Update `CLIENT_URL` environment variable
2. Ensure it matches your frontend domain exactly
3. Redeploy

### 404 Errors

**Error**: `404: NOT_FOUND`

**Solution**:
1. Check API endpoint URL is correct
2. Verify environment variables are set
3. Check deployment logs

### Contact Form Not Working

**Error**: `Message must be at least 20 characters`

**Solution**:
- Ensure message is at least 20 characters long
- Check all required fields are provided

---

## Switching Between Deployments

### From Vercel to Netlify

1. Update frontend API URL to Netlify domain
2. Redeploy frontend
3. Test API endpoints

### From Netlify to Vercel

1. Update frontend API URL to Vercel domain
2. Redeploy frontend
3. Test API endpoints

---

## Performance Tips

1. **Minimize API calls** - Cache responses when possible
2. **Optimize images** - Use WebP format
3. **Enable compression** - Already configured
4. **Use CDN** - Both Vercel and Netlify provide CDN

---

## Security Best Practices

1. **Never commit `.env` files** - Use environment variables
2. **Validate all inputs** - Already implemented
3. **Use HTTPS** - Both platforms provide SSL
4. **Set proper CORS** - Configured in code

---

## Support

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [netlify.com/support](https://netlify.com/support)

---

**Last Updated**: May 8, 2026
**Version**: 1.0.0
