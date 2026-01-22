# Graffiti Network Portfolio

A modern, beautiful portfolio website to showcase software development projects. Built with Next.js, TypeScript, and Tailwind CSS, featuring a glassmorphism design aesthetic.

🌐 **Live Site**: [graffiti-network.com](https://graffiti-network.com)

## 🚀 Features

- **Modern UI**: State-of-the-art glassmorphism design with smooth animations
- **Easy Project Management**: Simple JSON file to add/edit projects
- **Responsive Design**: Works perfectly on all devices
- **Fast Performance**: Built with Next.js 14+ for optimal performance
- **Cloud Ready**: Pre-configured for Google Cloud Run deployment

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── data/
│   └── projects.json      # Project data (edit this to add projects)
├── public/                # Static files
│   └── googlee38dff50cae24e0e.html  # Domain verification file
├── Dockerfile             # Docker configuration for Cloud Run
└── package.json           # Dependencies
```

## ✏️ Adding Projects

To add a new project, simply edit `data/projects.json`:

```json
{
  "projects": [
    {
      "id": "unique-project-id",
      "title": "Project Title",
      "description": "Project description here...",
      "liveUrl": "https://your-live-url.com",
      "githubUrl": "https://github.com/yourusername/repo",
      "blogPost": "https://your-blog-post-url.com",
      "tags": ["Next.js", "TypeScript", "React"],
      "featured": true
    }
  ]
}
```

**Fields:**
- `id`: Unique identifier for the project
- `title`: Project name
- `description`: Brief description
- `liveUrl`: Live demo URL (optional, leave empty string if none)
- `githubUrl`: GitHub repository URL (optional, leave empty string if none)
- `blogPost`: Blog post URL (optional, leave empty string if none)
- `tags`: Array of technology tags
- `featured`: `true` to show in featured section, `false` otherwise

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## ☁️ Deployment to Google Cloud Run

This project is configured for **Continuous Deployment** from GitHub to Google Cloud Run.

### Option 1: Continuous Deployment (Recommended)

1. Push this code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Axelfernandes/graffiti-network.com.git
   git push -u origin main
   ```

2. Go to [Google Cloud Console](https://console.cloud.google.com/)
3. Navigate to **Cloud Run**
4. Click **Create Service**
5. Select **Continuously deploy from a repository**
6. Connect your GitHub repository
7. Select the repository: `Axelfernandes/graffiti-network.com`
8. Configure:
   - **Service name**: `graffiti-network-portfolio`
   - **Region**: Choose your preferred region
   - **Authentication**: Allow unauthenticated invocations (for public access)
9. Cloud Run will automatically build and deploy using the included `Dockerfile`

### Option 2: Manual Deployment

```bash
# Build the Docker image
docker build -t gcr.io/YOUR_PROJECT_ID/graffiti-network-portfolio .

# Push to Google Container Registry
docker push gcr.io/YOUR_PROJECT_ID/graffiti-network-portfolio

# Deploy to Cloud Run
gcloud run deploy graffiti-network-portfolio \
  --image gcr.io/YOUR_PROJECT_ID/graffiti-network-portfolio \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Custom Domain Setup

1. In Cloud Run, go to your service
2. Click **Manage Custom Domains**
3. Add `graffiti-network.com`
4. Follow the verification steps (the HTML file is already in the `public` folder)

## 🎨 Customization

### Colors & Styling

Edit `app/globals.css` to customize colors, gradients, and glassmorphism effects.

### Layout

Modify `app/page.tsx` to change the layout structure and component arrangement.

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues, please open an issue on GitHub.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
