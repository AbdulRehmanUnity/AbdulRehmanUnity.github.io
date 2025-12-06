# Abdul Rehman - Professional Portfolio

A modern, responsive portfolio website showcasing game development projects and professional experience. Built with pure JavaScript and a dynamic folder-based project management system.

## 🚀 Features

- **Pure JavaScript** - No framework dependencies, fast loading
- **Dynamic Project System** - Add/remove projects by managing folders
- **Responsive Design** - Built with Bootstrap 5
- **Swipeable Galleries** - Touch-friendly screenshot navigation
- **SEO Friendly** - Proper meta tags and structure
- **Single Page App** - Smooth navigation without page reloads

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Bootstrap 5, Custom CSS  
- **Icons**: Bootstrap Icons, SVG
- **Development**: Node.js (http-server)
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
├── index.html                   # Homepage
├── projects.html               # Projects gallery & details
├── resume.html                 # Resume page
├── js/
│   ├── app.js                 # Main application logic
│   ├── data.js                # Bio and personal data
│   ├── projects-data.js       # Projects database
│   └── gallery.js             # Screenshot gallery component
├── css/
│   └── techfolio-theme/       # Theme stylesheets
├── img/                       # General images
├── projects-data/             # Dynamic project system
│   ├── project-name/
│   │   ├── project.json       # Project metadata
│   │   ├── icon.png          # Project icon
│   │   ├── screenshot-1.png  # Screenshots
│   │   └── screenshot-N.png
│   └── another-project/
└── package.json              # Dependencies & scripts
```

## 🎮 Featured Projects

- **Super Market Simulator (2024)** - Unity business simulation with complex systems
- **Idle Arcade Restaurant Tycoon (2022)** - Restaurant management with AI mechanics  
- **Number Slide Puzzle (2022)** - Classic puzzle with modern design
- **Color Ball Sort 3D (2021)** - 10,000+ level puzzle generation system
- **Color Water Sort 3D (2021)** - Fluid physics and realistic animations

## 🚀 Getting Started

### Quick Start
```bash
# Clone repository
git clone https://github.com/AbdulRehmanUnity/AbdulRehmanUnity.github.io.git
cd AbdulRehmanUnity.github.io

# Install dependencies (optional)
npm install

# Start development server
npm start
# or simply open index.html in browser
```

### Development
```bash
npm run dev     # Development server on port 3000
npm start       # Production server on port 8080
```

## 📝 Adding New Projects

### Method 1: Folder-Based (Recommended)
1. **Create folder**: `projects-data/my-awesome-game/`
2. **Add files**:
   - `project.json` (project metadata)
   - `icon.png` (project logo)
   - `screenshot-1.png`, `screenshot-2.png`, etc.
3. **Project appears automatically!**

### Method 2: Code-Based
Edit `js/projects-data.js` and add project data directly.

### Project JSON Structure
```json
{
    "id": "project-id",
    "title": "Project Title",
    "date": "2024",
    "labels": ["Unity", "C#", "Mobile"],
    "summary": "Short description...",
    "description": {
        "overview": "Detailed overview...",
        "features": ["Feature 1", "Feature 2"],
        "technicalHighlights": ["Achievement 1"],
        "challenges": ["Challenge 1 and solution"]
    },
    "links": {
        "playStore": "https://play.google.com/...",
        "appStore": "https://apps.apple.com/...",
        "github": "https://github.com/...",
        "website": "https://myproject.com"
    }
}
```

## 📱 Gallery Features

### Screenshot Navigation
- **Touch/Swipe** - Mobile-friendly gestures
- **Arrow Buttons** - Desktop navigation
- **Dot Indicators** - Jump to specific images
- **Keyboard Support** - Arrow keys, Escape
- **Double-click Fullscreen** - Immersive viewing

### Auto-Detection
- Icons: `icon.png`, `icon.jpg`, etc.
- Screenshots: `screenshot-1.png`, `screenshot-2.png`, etc.
- Supports PNG, JPG, JPEG, WebP formats

## 🎯 Performance

- **Zero Build Process** - Runs directly in browser
- **Minimal Dependencies** - Bootstrap + custom JavaScript only
- **Optimized Images** - Proper sizing and formats
- **Fast Loading** - Static files with efficient caching
- **Mobile Optimized** - Responsive design principles

## 🔧 Customization

### Personal Information
Edit `js/data.js` to update:
- Bio and contact information
- Work experience and education
- Skills and achievements

### Styling
Customize appearance in:
- `css/techfolio-theme/default.css` - Main theme
- Multiple theme options available

### Project Management
- **Add Project**: Create folder in `projects-data/`
- **Remove Project**: Delete folder
- **Update Project**: Edit `project.json` and assets

## 🌐 Deployment

### GitHub Pages (Automatic)
- Push to `main` branch
- GitHub Actions deploys automatically
- Available at `https://username.github.io`

### Manual Deployment
Works on any static hosting:
- Netlify, Vercel, Surge.sh
- Apache, Nginx
- CDN services

## 📄 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Features**: ES6+, CSS Grid, Flexbox
- **Progressive Enhancement**: Graceful degradation

## 🔍 SEO Features

- **Semantic HTML** - Proper document structure
- **Open Graph** - Social media sharing
- **Meta Tags** - Search engine optimization
- **Clean URLs** - SEO-friendly routing
- **Fast Loading** - Core Web Vitals optimized

## 📄 License

This project is open source and available under the [MIT License](LICENSE.md).

## 👤 Author

**Abdul Rehman**
- Senior Game Developer/Producer
- 7+ years of Unity and C# experience
- Email: abdulrehmanyaseen92@gmail.com
- GitHub: [@AbdulRehmanUnity](https://github.com/AbdulRehmanUnity)
- LinkedIn: [Abdul Rehman](https://www.linkedin.com/in/abdul-rehman-0b81a6126)

## 🌐 Live Demo

Visit: [https://abdulrehmanunity.github.io](https://abdulrehmanunity.github.io)

---

*A modern, dynamic portfolio system built for game developers and creative professionals.*