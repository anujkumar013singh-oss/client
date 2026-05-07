# QAMS Global Website - Netlify Deployment Guide

## Overview
The QAMS Global website is deployed using Netlify with serverless functions for API endpoints. This architecture provides:
- Single platform deployment (no separate backend server)
- Automatic scaling
- Zero configuration for API routes
- Built-in CDN and edge caching
- No backend server management

## Architecture
- **Frontend:** React + Vite + TailwindCSS
- **API:** Netlify Serverless Functions (Node.js)
- **Database:** Optional (currently using in-memory data)
- **Deployment:** Netlify (single platform)

## Deployment Steps

### 1. Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in/up
2. Click "Add new site" → "Import an existing project"
3. Select GitHub and authorize
4. Choose your repository: `https://github.com/anujkumar013singh-oss/client.git`

### 2. Configure Project
- **Build Command:** `cd client && npm run build`
- **Publish Directory:** `client/dist`
- **Node Version:** 18

### 3. Environment Variables
No environment variables required for basic deployment.

Optional variables (if adding database):
- `DATABASE_URL` - For database connection
- `API_KEY` - For external API integrations

### 4. Deploy
Click "Deploy site" and wait for the build to complete.

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
3. Add connection string to Netlify environment variables:
   ```
   DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/database
   ```
4. Update `api/contact.js` to save submissions to MongoDB

### Netlify Postgres Integration
1. Enable Postgres in Netlify project settings
2. Use the connection string provided
3. Update serverless functions to connect to Postgres

## Monitoring and Analytics

- **Netlify Dashboard:** View deployment logs, errors, and performance
- **Analytics:** Built-in analytics for page views and API calls
- **Logs:** Serverless function logs available in Netlify dashboard

## Troubleshooting

### Serverless Functions Not Working
- Ensure functions are in `api/` directory
- Check file names match endpoint paths (e.g., `contact.js` → `/api/contact`)
- Verify Netlify configuration in `netlify.toml`

### Build Errors
- Check Node.js version compatibility
- Ensure all dependencies are in `package.json`
- Review build logs in Netlify dashboard

### API Timeout
- Serverless functions have a 10-second timeout limit
- Optimize database queries
- Consider using Netlify Edge Functions for faster responses

## Security Considerations

- All API routes are serverless (no direct server access)
- Netlify handles HTTPS automatically
- Rate limiting available through Netlify
- Add authentication to API endpoints as needed

## Performance Optimization

- Netlify automatically caches static assets
- Serverless functions scale automatically
- Consider edge functions for global performance
- Use Netlify Image Optimization for images

## Cost

- **Netlify Free Tier:** 
  - 100GB bandwidth per month
  - Unlimited deployments
  - Serverless functions included
- **Pro Tier:** More bandwidth and advanced features

## Support

- **Netlify Documentation:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Issues:** Report issues in the repository
- **Netlify Support:** Available for paid plans
