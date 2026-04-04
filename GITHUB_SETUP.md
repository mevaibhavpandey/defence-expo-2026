# 📦 Push to GitHub - Step by Step

## Step 1: Create Repository on GitHub

1. Go to: https://github.com/new
2. Fill in:
   - Repository name: `defence-expo-2026` (or your preferred name)
   - Description: "Defence Technology Expo 2026 - ASTRA BMSIT Website"
   - Choose Public or Private
   - **DO NOT** check "Initialize with README"
3. Click "Create repository"

## Step 2: Push Your Code

Open your terminal in the project directory and run:

```bash
# If you haven't already initialized git:
git init
git add .
git commit -m "Initial commit: Defence Technology Expo 2026 website"

# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub details
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Example:
If your GitHub username is `mevaibhavpandey` and repo name is `defence-expo-2026`:
```bash
git remote add origin https://github.com/mevaibhavpandey/defence-expo-2026.git
git branch -M main
git push -u origin main
```

## Step 3: Verify

Go to your GitHub repository URL and verify all files are uploaded.

---

## 🚀 Quick Deploy After Push

### Vercel (Easiest - 5 minutes):

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Select your repository
5. Configure:
   - **For Frontend:**
     - Framework: Create React App
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Output Directory: `build`
   - Click "Deploy"

6. **For Backend (separate project):**
   - Create another project
     - Root Directory: `backend`
     - Build Command: `npm install`
   - Add Environment Variable:
     - `MONGODB_URI`: (Get from MongoDB Atlas)
   - Click "Deploy"

7. Update frontend environment variable:
   - In Vercel frontend project settings
   - Add: `REACT_APP_API_URL` = your backend URL

---

## 📱 Your Website Will Be Live!

Frontend: `https://your-project.vercel.app`
Backend: `https://your-backend.vercel.app`

Share the frontend URL with anyone to access your website! 🎉
