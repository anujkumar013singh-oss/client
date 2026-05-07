# Vercel Deployment - Quick Start Guide

## 5-Minute Setup

### Step 1: Prepare Environment Variables

Copy `.env.example` to `.env` in the server directory:

```bash
cp server/.env.example server/.env
```

Update with your values:
```env
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-db
CLIENT_URL=https://your-frontend-domain.com
```

### Step 2: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 3: Login to Vercel

```bash
vercel login
```

### Step 4: Deploy

```bash
cd server
vercel --prod
```

### Step 5: Add Environment Variables

After deployment, go to Vercel Dashboard:
1. Select your project
2. Go to **Settings** → **Environment Variables**
3. Add:
   - `MONGODB_URI`: Your MongoDB connection string
   - `CLIENT_URL`: Your frontend URL
   - `NODE_ENV`: `production`

4. Redeploy: Click **Deployments** → Select latest → **Redeploy**

---

## Verify Deployment

Test your API:

```bash
# Replace with your Vercel URL
curl https://your-project.vercel.app/api/search?certNumber=QAMS-ISO9001-2024-0001
```

Expected response:
```json
{
  "certNumber": "QAMS-ISO9001-2024-0001",
  "orgName": "Precision Industries Ltd",
  "standard": "ISO 9001:2015",
  ...
}
```

---

## Common Issues & Fixes

### MongoDB Connection Failed
- Check `MONGODB_URI` is correct
- Add Vercel IP to MongoDB Atlas whitelist (or allow all: 0.0.0.0/0)
- Verify database user permissions

### CORS Errors
- Update `CLIENT_URL` environment variable
- Ensure it matches your frontend domain exactly

### Port Already in Use
- Vercel handles ports automatically
- Don't hardcode ports in production

---

## Useful Links

- [Full Documentation](./VERCEL_DEPLOYMENT.md)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## Next Steps

1. ✅ Deploy backend to Vercel
2. Update frontend API URL to Vercel deployment
3. Test all API endpoints
4. Monitor logs in Vercel Dashboard
5. Set up custom domain (optional)

---

**Need Help?** Check [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed troubleshooting.
