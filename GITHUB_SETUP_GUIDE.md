# GitHub Pages Setup Guide for Oliver Polushkina Portfolio

This guide will help you set up your portfolio website on GitHub Pages at https://oliverpol.github.io

## 🎯 Goal
Deploy your professional data science portfolio to GitHub Pages so it's accessible at `https://oliverpol.github.io`

## 📋 Prerequisites
- GitHub account (you already have one)
- Basic understanding of Git and GitHub
- Your portfolio files ready to upload

## 🚀 Step-by-Step Setup

### Method 1: Direct Upload (Easiest - Recommended)

#### Step 1: Create Repository
1. Go to https://github.com
2. Click the **"+"** icon in the top right
3. Select **"New repository"**
4. **Important**: Name your repository exactly `oliverpol.github.io`
5. Make it **Public**
6. Don't initialize with README
7. Click **"Create repository"**

#### Step 2: Upload Files
1. Click **"uploading an existing file"** link on the repository page
2. Drag and drop all files from your portfolio folder
3. **Important**: Maintain the folder structure (especially the `resources/` folder)
4. Add a commit message like "Initial portfolio upload"
5. Click **"Commit changes"**

#### Step 3: Enable GitHub Pages
1. Go to **Settings** tab in your repository
2. Scroll down to **Pages** section in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch
5. Click **Save**
6. Wait 5-10 minutes for deployment

#### Step 4: Access Your Website
Your portfolio will be available at: **https://oliverpol.github.io**

---

### Method 2: Git Command Line (Advanced)

#### Step 1: Initialize Local Repository
```bash
# Navigate to your portfolio folder
cd /path/to/your/portfolio/files

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio setup"
```

#### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Name repository: `oliverpol.github.io`
3. Make it Public
4. Don't initialize with README
5. Click **Create repository**

#### Step 3: Connect and Push
```bash
# Add remote repository
git remote add origin https://github.com/oliverpol/oliverpol.github.io.git

# Push to main branch
git branch -M main
git push -u origin main
```

---

### Method 3: GitHub Desktop (User-Friendly)

#### Step 1: Install GitHub Desktop
1. Download from https://desktop.github.com/
2. Install and sign in with your GitHub account

#### Step 2: Create Repository
1. Click **"Create a New Repository on your hard drive"**
2. Name it `oliverpol.github.io`
3. Choose local path for your files
4. Click **"Create Repository"**

#### Step 3: Add Files and Publish
1. Copy all portfolio files to the repository folder
2. In GitHub Desktop, you'll see all files as changes
3. Add a commit message: "Initial portfolio setup"
4. Click **"Commit to main"**
5. Click **"Publish repository"**
6. Make sure it's public and named `oliverpol.github.io`

---

## 🔧 Configuration Options

### Custom Domain (Optional)
If you want to use a custom domain instead of `oliverpol.github.io`:

1. Create a file named `CNAME` in your repository root
2. Add your domain name (e.g., `oliverpolushkina.com`)
3. Configure DNS settings with your domain provider
4. Update GitHub Pages settings to use the custom domain

### Branch Selection
- **Main/Master branch**: Use for production deployment
- **Gh-pages branch**: Alternative deployment branch
- Both work, but main/master is now the standard

---

## 🎨 Customization After Deployment

### Update Personal Information
1. Edit `index.html` - Update hero section, professional summary
2. Edit `about.html` - Update detailed background, education
3. Edit `projects.html` - Update project descriptions
4. Edit `contact.html` - Update contact information

### Replace Images
1. Replace `resources/profile.jpg` with your professional photo
2. Replace other images in `resources/` folder as needed
3. Keep the same filenames or update references in HTML files

### Modify Colors
Update CSS variables in each HTML file to match your preferred color scheme.

---

## 🐛 Troubleshooting

### Website Not Loading
- **Check repository name**: Must be exactly `oliverpol.github.io`
- **Verify files uploaded**: Ensure index.html is in root directory
- **Wait for deployment**: Can take up to 10 minutes
- **Check GitHub Pages status**: Go to Settings > Pages to see deployment status

### Images Not Displaying
- **Check file paths**: Ensure `resources/` folder exists and contains images
- **Verify filenames**: Case-sensitive, must match HTML references
- **Upload images**: Make sure all images are committed to repository

### Styling Issues
- **Check CSS loading**: Verify all external libraries are accessible
- **Browser cache**: Try hard refresh (Ctrl+F5) or incognito mode
- **File paths**: Ensure all links use correct relative paths

### Navigation Not Working
- **Check page names**: Ensure about.html, projects.html, contact.html exist
- **Verify links**: All internal links should work properly
- **Case sensitivity**: File names are case-sensitive on GitHub Pages

---

## 📊 Monitoring Your Website

### GitHub Insights
- View repository traffic and visitor analytics
- Monitor which files are most accessed
- Track repository stars and forks

### Google Analytics (Optional)
1. Create Google Analytics account
2. Add tracking code to all HTML files
3. Monitor website traffic and user behavior

### Google Search Console
1. Add your website to Google Search Console
2. Verify ownership
3. Monitor search performance and indexing

---

## 🚀 Next Steps After Setup

1. **Test all pages**: Navigate through your entire website
2. **Check mobile responsiveness**: Test on different devices
3. **Update content**: Replace placeholder content with your actual information
4. **Add projects**: Update projects.html with your real projects
5. **Share your portfolio**: Add the link to your LinkedIn, CV, etc.

---

## 📞 Getting Help

If you encounter issues:
1. Check this guide first
2. Review GitHub Pages documentation
3. Search for common GitHub Pages issues
4. Create an issue in your repository if needed

---

## 🎉 Success!

Once your website is live at https://oliverpol.github.io, you have a professional portfolio that showcases your data science expertise to potential collaborators, employers, and clients.

**Your portfolio includes:**
- Professional hero section with animated background
- Interactive skills visualization
- Career timeline
- Project showcase with filtering
- Contact form
- Responsive design for all devices

**Good luck with your data science career!** 🚀