# Quick Start Guide

## 🚀 Getting Started Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Adding a New Project

Simply edit `data/projects.json` and add a new project object:

```json
{
  "id": "my-new-project",
  "title": "My New Project",
  "description": "A brief description of what this project does...",
  "liveUrl": "https://myproject.com",
  "githubUrl": "https://github.com/username/repo",
  "blogPost": "https://myblog.com/post",
  "tags": ["React", "TypeScript", "Next.js"],
  "featured": false
}
```

Save the file and refresh your browser - the new project will appear automatically!

## ☁️ Deploying to Google Cloud Run

### First Time Setup

1. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Axelfernandes/graffiti-network.com.git
   git push -u origin main
   ```

2. **In Google Cloud Console:**
   - Go to [Cloud Run](https://console.cloud.google.com/run)
   - Click "Create Service"
   - Select "Continuously deploy from a repository"
   - Connect your GitHub account
   - Select repository: `Axelfernandes/graffiti-network.com`
   - Service name: `graffiti-network-portfolio`
   - Region: Choose your preferred region
   - Authentication: Allow unauthenticated invocations
   - Click "Create"

3. **Set up custom domain:**
   - In Cloud Run service, click "Manage Custom Domains"
   - Add `graffiti-network.com`
   - Follow verification steps (HTML file is already in `public/` folder)

### Updating Projects

After editing `data/projects.json`:
1. Commit and push to GitHub
2. Cloud Run will automatically rebuild and deploy
3. Your changes will be live in a few minutes!

## 📝 Project Data Structure

Each project in `data/projects.json` has these fields:

- **id** (required): Unique identifier
- **title** (required): Project name
- **description** (required): Brief description
- **liveUrl** (optional): Live demo URL (empty string if none)
- **githubUrl** (optional): GitHub repo URL (empty string if none)
- **blogPost** (optional): Blog post URL (empty string if none)
- **tags** (required): Array of technology tags
- **featured** (required): `true` for featured section, `false` otherwise

## 🎨 Customization

- **Colors & Styles**: Edit `app/globals.css`
- **Layout**: Edit `app/components/PortfolioClient.tsx`
- **Metadata**: Edit `app/layout.tsx`
