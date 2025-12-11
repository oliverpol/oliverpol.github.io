# Oliver Polushkina - Data Scientist Portfolio

A professional portfolio website showcasing expertise in data science, biostatistics, and biomedical research.

## 🌐 Live Website

**GitHub Pages URL:** https://oliverpol.github.io

## 📁 Repository Structure

```
├── index.html              # Main landing page
├── about.html              # Professional background
├── projects.html           # Project showcase
├── contact.html            # Contact information
├── main.js                 # JavaScript functionality
├── resources/              # Images and assets
│   ├── hero-bg.jpg         # Hero background image
│   ├── profile.jpg         # Professional portrait
│   ├── lab-1.jpg           # Laboratory image
│   ├── code-screen.jpg     # Programming workspace
│   ├── data-viz-1.jpg      # Data visualization
│   └── workspace.jpg       # Abstract background
└── README.md              # This file
```

## 🚀 Quick Start for GitHub Pages

### Option 1: Direct Upload (Recommended for Beginners)

1. **Fork this repository** to your GitHub account
2. **Rename the repository** to `oliverpol.github.io` (replace 'oliverpol' with your GitHub username)
3. **Upload all files** maintaining the folder structure
4. **Wait 5-10 minutes** for GitHub Pages to deploy
5. **Access your website** at `https://[your-username].github.io`

### Option 2: Git Clone Method (For Advanced Users)

```bash
# Clone the repository
git clone https://github.com/[your-username]/[your-repo-name].git

# Navigate to the directory
cd [your-repo-name]

# Create a new branch for GitHub Pages
git checkout -b gh-pages

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio setup"

# Push to GitHub
git push origin gh-pages
```

### Option 3: GitHub Desktop

1. **Download GitHub Desktop** from https://desktop.github.com/
2. **Clone this repository** to your local machine
3. **Create a new repository** on GitHub named `[your-username].github.io`
4. **Upload all files** to the new repository
5. **Enable GitHub Pages** in repository settings

## ⚙️ GitHub Pages Setup

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Select **Deploy from a branch**
5. Choose **main** or **master** branch
6. Click **Save**

### Custom Domain (Optional)

To use a custom domain instead of `[username].github.io`:

1. Add a `CNAME` file to your repository root containing your domain name
2. Configure DNS settings with your domain provider
3. Update the domain in repository settings

## 🛠️ Customization Guide

### Personal Information Updates

**Update these files with your information:**

1. **index.html** - Hero section content, professional summary
2. **about.html** - Detailed background, education, philosophy
3. **projects.html** - Project descriptions and details
4. **contact.html** - Contact information, availability

### Key Sections to Update

#### In `index.html`:
- Professional title and summary
- Skills and expertise areas
- Experience timeline dates
- Contact information

#### In `about.html`:
- Personal background and philosophy
- Education details
- Technical skills proficiency
- Personal interests

#### In `projects.html`:
- Project descriptions and details
- Technical tags and categories
- Project images (replace with your own)
- Modal content for detailed project information

#### In `contact.html`:
- Email address and contact details
- Availability status
- Response time expectations
- FAQ content

### Images Replacement

Replace images in the `resources/` folder:

- `profile.jpg` - Your professional photo
- `hero-bg.jpg` - Custom background for hero section
- Project-specific images for each project card

**Image recommendations:**
- Use high-quality, professional images
- Optimize file sizes for web (under 500KB each)
- Use consistent aspect ratios
- Consider using WebP format for better performance

### Color Scheme Customization

Update CSS variables in each HTML file:

```css
:root {
    --primary: #1a2332;      /* Main color */
    --secondary: #c17b5c;    /* Accent color */
    --tertiary: #8fa68e;     /* Secondary accent */
    --background: #fafafa;   /* Background color */
    --text: #2c3e50;         /* Text color */
}
```

## 📊 Analytics Integration

### Google Analytics

Add your Google Analytics tracking ID to all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console

1. Add your site to Google Search Console
2. Verify ownership using HTML tag
3. Add the verification meta tag to your HTML files

## 🔧 Technical Features

### Interactive Components
- **Skills Radar Chart** - ECharts.js visualization
- **Experience Timeline** - Animated career progression
- **Project Filters** - Dynamic project categorization
- **Contact Form** - Client-side validation
- **Responsive Design** - Mobile-first approach

### Performance Optimizations
- Lazy loading for images
- Minified CSS and JavaScript
- Optimized image formats
- Efficient animations with Anime.js

## 🌟 Advanced Features

### Blog Integration
To add a blog section:

1. Create `blog.html` page
2. Add blog post structure
3. Implement pagination
4. Consider using Jekyll for static blog generation

### Portfolio Gallery
For enhanced project showcase:

1. Add image galleries to project modals
2. Implement lightbox functionality
3. Add video demonstrations
4. Include code snippets with syntax highlighting

### Additional Pages
Consider adding:
- Publications page
- Speaking engagements
- Teaching experience
- Open source contributions

## 🔍 SEO Optimization

### Meta Tags
Ensure all pages have proper meta tags:
- Title tags
- Description tags
- Open Graph tags
- Twitter Card tags

### Structured Data
Add JSON-LD structured data for:
- Person schema
- Professional information
- Contact details
- Social profiles

## 📱 Mobile Optimization

The website is built with mobile-first responsive design:
- Flexible grid layouts
- Touch-friendly interactions
- Optimized font sizes
- Compressed images for mobile

## 🚀 Performance Tips

1. **Optimize Images**: Use tools like TinyPNG or ImageOptim
2. **Minify Code**: Use minified versions of CSS and JavaScript
3. **Enable Compression**: Configure server-side compression
4. **Use CDN**: Consider using a CDN for faster global loading
5. **Lazy Loading**: Implement lazy loading for images and videos

## 🐛 Troubleshooting

### Common Issues

**Website not loading:**
- Check repository name matches `[username].github.io`
- Verify all files are uploaded correctly
- Ensure index.html exists in root directory

**Images not displaying:**
- Check file paths are correct (case-sensitive)
- Verify images are uploaded to resources folder
- Ensure image files are not corrupted

**Styling issues:**
- Check all CSS files are properly linked
- Verify no syntax errors in HTML/CSS
- Ensure all external libraries are loading

### Browser Compatibility

The website is tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Support

For questions or issues:
1. Check this README first
2. Review GitHub Pages documentation
3. Create an issue in this repository
4. Contact support for your specific hosting provider

## 📄 License

This portfolio template is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Heroicons
- Fonts from Google Fonts
- Images from various free stock photo sites

---

**Happy coding!** 🚀