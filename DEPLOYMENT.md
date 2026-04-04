# Deployment Guide - Defence Technology Expo 2026

## 🚀 Quick Deployment Steps

### Step 1: Push to GitHub

1. Create a new repository on GitHub: https://github.com/new
   - Repository name: `defence-expo-2026` (or any name you prefer)
   - Make it Public or Private
   - Don't initialize with README (we already have one)

2. Push your code:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

---

## 🌐 Hosting Options

### Option 1: Vercel (Recommended - FREE & Easy)

#### Frontend Deployment:
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Create React App
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`
6. Click "Deploy"

Your frontend will be live at: `https://your-project.vercel.app`

#### Backend Deployment:
1. Create another Vercel project for backend
2. Configure:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Output Directory: `.`
3. Add Environment Variables in Vercel:
   - `MONGODB_URI`: Your MongoDB connection string
   - `NODE_ENV`: production
4. Deploy

---

### Option 2: Netlify (Frontend) + Render (Backend)

#### Frontend on Netlify:
1. Go to https://netlify.com
2. Sign up and click "Add new site"
3. Import from GitHub
4. Configure:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/build`
5. Deploy

#### Backend on Render:
1. Go to https://render.com
2. Sign up and click "New +"
3. Select "Web Service"
4. Connect your GitHub repository
5. Configure:
   - Name: defence-expo-backend
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: 5000
7. Deploy

---

### Option 3: Railway (Full Stack - FREE Tier)

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository

#### Deploy Backend:
- Service Name: backend
- Root Directory: `/backend`
- Start Command: `npm start`
- Add Environment Variables:
  - `MONGODB_URI`
  - `PORT`: 5000

#### Deploy Frontend:
- Service Name: frontend
- Root Directory: `/frontend`
- Build Command: `npm run build`
- Start Command: `npx serve -s build`

---

## 🗄️ Database Setup (MongoDB)

### Option 1: MongoDB Atlas (FREE - Recommended)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free
3. Create a new cluster (FREE tier available)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Add this to your environment variables as `MONGODB_URI`

Example:
```
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/defence-expo?retryWrites=true&w=majority
```

---

## 🔧 Environment Variables

### Frontend (.env in frontend folder):
```
REACT_APP_API_URL=https://your-backend-url.com
```

### Backend (.env in backend folder):
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=production
```

---

## 📝 Post-Deployment Steps

1. Update frontend API URL:
   - In `frontend/src/pages/Registration.js`
   - Change `http://localhost:5000` to your deployed backend URL

2. Enable CORS for your frontend domain in backend

3. Test all features:
   - Navigation
   - Registration form
   - File uploads

---

## 🎯 Recommended Stack for This Project

**Best Free Option:**
- Frontend: Vercel
- Backend: Railway or Render
- Database: MongoDB Atlas

**Why?**
- ✅ Free tier available
- ✅ Easy deployment
- ✅ Automatic HTTPS
- ✅ Good performance
- ✅ Easy to scale

---

## 🔗 Update API Endpoint

After deploying backend, update this file:

**frontend/src/pages/Registration.js** (Line 48):
```javascript
// Change from:
await axios.post('http://localhost:5000/api/registrations', submitData, {

// To:
await axios.post('https://your-backend-url.com/api/registrations', submitData, {
```

---

## 📱 Custom Domain (Optional)

Both Vercel and Netlify allow free custom domains:
1. Buy a domain (Namecheap, GoDaddy, etc.)
2. Add domain in hosting platform settings
3. Update DNS records as instructed

---

## 🆘 Troubleshooting

### Build Fails:
- Check Node.js version (use v16 or v18)
- Ensure all dependencies are in package.json
- Check build logs for specific errors

### CORS Errors:
- Add your frontend URL to backend CORS configuration
- In `backend/server.js`, update CORS settings

### Database Connection Issues:
- Verify MongoDB URI is correct
- Check IP whitelist in MongoDB Atlas (allow all: 0.0.0.0/0)
- Ensure environment variables are set correctly

---

## 📊 Monitoring

- Vercel/Netlify provide analytics
- Use MongoDB Atlas monitoring for database
- Set up error tracking (optional): Sentry

---

Need help? Check the hosting platform documentation or reach out to support!
