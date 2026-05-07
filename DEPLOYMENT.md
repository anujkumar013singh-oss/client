# QAMS Global Website - Vercel Serverless Deployment Guide

## Overview
The QAMS Global website is now deployed using Vercel with serverless functions for API endpoints. This architecture provides:
- Single platform deployment (no separate backend server)
- Automatic scaling
- Zero configuration for API routes
- Built-in CDN and edge caching
- No backend server management

## Architecture
- **Frontend:** React + Vite + TailwindCSS
- **API:** Vercel Serverless Functions (Node.js)
- **Database:** Optional (currently using in-memory data)
- **Deployment:** Vercel (single platform)

## Deployment Steps

### 1. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in/up
2. Click "Add New Project"
3. Import from GitHub: `https://github.com/anujkumar013singh-oss/client.git`

### 2. Configure Project
- **Framework Preset:** Vite
- **Root Directory:** `./client`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 3. Environment Variables
No environment variables required for basic deployment.

Optional variables (if adding database):
- `DATABASE_URL` - For database connection
- `API_KEY` - For external API integrations

### 4. Deploy
Click "Deploy" and wait for the build to complete.

## Serverless Functions

### Contact Form API
**Endpoint:** `/api/contact`
**Method:** POST
**Purpose:** Handle contact form submissions

### Certificate Search API
**Endpoint:** `/api/search`
**Method:** GET
**Purpose:** Search for certificate numbers

## Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup
```bash
cd client
npm install
npm run dev
```

The serverless functions work automatically in development mode at:
- Frontend: `http://localhost:5173`
- API: `http://localhost:5173/api/contact` and `http://localhost:5173/api/search`

## Database Integration (Optional)

To add a database for storing contact submissions:

### MongoDB Atlas Integration
1. Create a MongoDB Atlas account
2. Create a cluster and database
3. Add connection string to Vercel environment variables:
   ```
   DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/database
   ```
4. Update `api/contact.js` to save submissions to MongoDB

### Vercel Postgres Integration
1. Enable Postgres in Vercel project settings
2. Use the connection string provided
3. Update serverless functions to connect to Postgres

## Monitoring and Analytics

- **Vercel Dashboard:** View deployment logs, errors, and performance
- **Analytics:** Built-in analytics for page views and API calls
- **Logs:** Serverless function logs available in Vercel dashboard

## Troubleshooting

### Serverless Functions Not Working
- Ensure functions are in `client/api/` directory
- Check file names match endpoint paths (e.g., `contact.js` → `/api/contact`)
- Verify Vercel configuration in `vercel.json`

### Build Errors
- Check Node.js version compatibility
- Ensure all dependencies are in `package.json`
- Review build logs in Vercel dashboard

### API Timeout
- Serverless functions have a 10-second timeout limit
- Optimize database queries
- Consider using Vercel Edge Functions for faster responses

## Security Considerations

- All API routes are serverless (no direct server access)
- Vercel handles HTTPS automatically
- Rate limiting available through Vercel
- Add authentication to API endpoints as needed

## Performance Optimization

- Vercel automatically caches static assets
- Serverless functions scale automatically
- Consider edge functions for global performance
- Use Vercel Image Optimization for images

## Cost

- **Vercel Free Tier:** 
  - 100GB bandwidth per month
  - Unlimited deployments
  - Serverless functions included
- **Pro Tier:** More bandwidth and advanced features

## Support

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **GitHub Issues:** Report issues in the repository
- **Vercel Support:** Available for paid plans
