# QAMS Global Deployment Guide

## Overview
This guide covers deploying the QAMS Global website with frontend on Vercel and backend on Render/Railway.

## Prerequisites
- MongoDB Atlas cluster
- Gmail account (for email notifications)
- Vercel account
- Render or Railway account

## Frontend Deployment (Vercel)

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Deploy Frontend
```bash
cd client
vercel --prod
```

### 3. Environment Variables in Vercel
Set these in your Vercel dashboard:
- `VITE_API_URL`: Your backend URL (e.g., `https://qams-global-api.onrender.com`)

## Backend Deployment (Render/Railway)

### Option 1: Render
1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Use the `render.yaml` configuration file
4. Set environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `CLIENT_URL`: Your Vercel app URL
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app password
   - `EMAIL_SERVICE`: gmail
   - `NODE_ENV`: production
   - `PORT`: 10000

### Option 2: Railway
1. Install Railway CLI: `npm i -g @railway/cli`
2. Login: `railway login`
3. Deploy: `cd server && railway deploy`
4. Set environment variables in Railway dashboard

## Post-Deployment Steps

### 1. Update Frontend API URL
After backend deployment, update the frontend:
1. Go to Vercel dashboard
2. Update `VITE_API_URL` environment variable
3. Redeploy frontend

### 2. Test Contact Form
- Fill out the contact form on your deployed site
- Check MongoDB Atlas for new submissions
- Verify email notifications work

### 3. Domain Configuration (Optional)
- Add custom domain in Vercel
- Update `CLIENT_URL` in backend if needed

## Environment Variables Summary

### Frontend (.env.production)
```
VITE_API_URL=https://your-backend-url.com
```

### Backend
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
CLIENT_URL=https://your-frontend-domain.vercel.app
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_SERVICE=gmail
NODE_ENV=production
PORT=10000
```

## Troubleshooting

### Common Issues
1. **CORS Errors**: Ensure `CLIENT_URL` matches your Vercel domain
2. **MongoDB Connection**: Verify IP whitelist in MongoDB Atlas
3. **Email Issues**: Use Gmail App Password, not regular password
4. **Build Failures**: Check all dependencies are installed

### Monitoring
- Render: Built-in metrics and logs
- Railway: Logs in dashboard
- Vercel: Function logs and analytics
- MongoDB Atlas: Performance metrics

## Security Considerations
- Use environment variables for all sensitive data
- Enable MongoDB Atlas IP whitelisting
- Use Gmail App Passwords, not main passwords
- Regularly update dependencies
- Monitor for unusual activity
