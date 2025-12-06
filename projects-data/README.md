# Projects Data Structure

This folder contains all project data in a standardized format. Each project has its own folder with specific file naming conventions.

## 📁 Folder Structure

```
projects-data/
├── project-name/
│   ├── project.json          # Project information and metadata
│   ├── icon.png             # Project icon/logo (required)
│   ├── screenshot-1.png     # First screenshot
│   ├── screenshot-2.png     # Second screenshot
│   ├── screenshot-N.png     # Additional screenshots
│   └── ...
└── another-project/
    ├── project.json
    ├── icon.png
    └── screenshot-1.png
```

## 🔧 How to Add a New Project

1. **Create a new folder** with your project name (use kebab-case):
   ```
   projects-data/my-awesome-game/
   ```

2. **Add required files:**
   - `project.json` - Project metadata and information
   - `icon.png` - Project icon/logo

3. **Add screenshots** (optional but recommended):
   - `screenshot-1.png`
   - `screenshot-2.png` 
   - `screenshot-3.png`
   - etc.

4. **The project will automatically appear** on the website!

## 📄 project.json Structure

```json
{
    "id": "project-name",
    "title": "My Awesome Game",
    "date": "2024",
    "labels": ["Unity", "C#", "Mobile"],
    "summary": "Short description of the project...",
    "description": {
        "overview": "Detailed overview...",
        "features": [
            "Feature 1",
            "Feature 2"
        ],
        "technicalHighlights": [
            "Technical achievement 1",
            "Technical achievement 2"
        ],
        "challenges": [
            "Challenge 1 and how it was solved",
            "Challenge 2 and how it was solved"
        ]
    },
    "links": {
        "playStore": "https://play.google.com/store/apps/details?id=...",
        "appStore": "https://apps.apple.com/app/...",
        "github": "https://github.com/username/repo",
        "website": "https://myproject.com"
    }
}
```

## 📷 Image Requirements

### Icon (Required)
- **Filename**: `icon.png` (or .jpg, .jpeg, .webp)
- **Size**: 512x512px recommended
- **Format**: PNG preferred for transparency

### Screenshots (Optional)
- **Filename**: `screenshot-1.png`, `screenshot-2.png`, etc.
- **Numbering**: Start from 1, sequential
- **Size**: Any size, will be automatically resized
- **Format**: PNG, JPG, JPEG, or WebP

## 🚀 Features

### Automatic Detection
- Projects are automatically detected based on folder structure
- No need to manually update any configuration files
- Icons and screenshots are auto-discovered

### Dynamic Loading
- Projects load dynamically from the file system
- Add/remove folders to show/hide projects
- Real-time updates without code changes

### Consistent Gallery
- All projects automatically get the swipeable screenshot gallery
- Consistent styling and behavior across all projects
- Mobile-friendly with touch support

## 🔄 To Remove a Project

Simply delete the project folder from `projects-data/` and it will no longer appear on the website.

## ✅ File Validation

The system checks for:
- Valid `project.json` file
- At least one `icon.*` file
- Screenshots are optional but enhance the presentation

## 🎯 Best Practices

1. **Use descriptive folder names** (kebab-case)
2. **Provide high-quality icons** (512x512px)
3. **Include multiple screenshots** to showcase features
4. **Write detailed descriptions** for better presentation
5. **Keep file sizes reasonable** for fast loading

## 🔍 Troubleshooting

If a project doesn't appear:
1. Check that the folder exists in `projects-data/`
2. Verify `project.json` is valid JSON
3. Ensure `icon.png` exists
4. Check browser console for errors

---

This structure makes it easy to manage projects without touching code - just add/remove folders!