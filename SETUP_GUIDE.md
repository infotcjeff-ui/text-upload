# Setup Guide - Dark Mode React Website

## 🌐 Accessing Your Live Website on GitHub

Your website is automatically deployed to GitHub Pages! 

### Live Website URL:
**https://infotcjeff-ui.github.io/text-upload/**

The site is automatically updated whenever you push changes to the `main` branch on GitHub. It usually takes 2-3 minutes for changes to appear after pushing.

### How GitHub Pages Works:
1. When you push code to GitHub, GitHub Actions automatically:
   - Installs Node.js dependencies
   - Builds your React app
   - Deploys it to GitHub Pages
2. Your site becomes live at the URL above
3. No manual deployment needed!

---

## 💻 Running the Project Locally

### Prerequisites:
- Node.js 16+ installed (you have it! ✅)
- npm installed (you have it! ✅)

### Step 1: Install Dependencies
```bash
npm install
```
*(Already done! ✅)*

### Step 2: Start Development Server
```bash
npm run dev
```

This will:
- Start the Vite development server
- Usually runs on `http://localhost:5173`
- Automatically opens in your browser (or you can manually open it)

### Step 3: Open in Chrome
The dev server should automatically open in your default browser. If not:
1. Open Chrome
2. Go to: `http://localhost:5173`

### Step 4: Make Changes
- Edit any file in the `src/` folder
- Changes will automatically reload in the browser (Hot Module Replacement)
- No need to refresh manually!

---

## 🛠️ Available Commands

### Development
```bash
npm run dev
```
Starts the development server with hot reload

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally before deploying

---

## 📁 Project Structure

```
├── src/
│   ├── components/        # React components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── hooks/             # Custom React hooks
│   │   └── useTheme.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── styles.css         # All styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## 🚀 Deployment Process

### Automatic Deployment (Current Setup)
1. Make changes to your code
2. Commit changes: `git add .` then `git commit -m "your message"`
3. Push to GitHub: `git push`
4. GitHub Actions automatically builds and deploys
5. Wait 2-3 minutes
6. Visit: https://infotcjeff-ui.github.io/text-upload/

### Manual Deployment (If Needed)
1. Build the project: `npm run build`
2. The `dist/` folder contains the production files
3. You can manually upload these to any hosting service

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use:
- Vite will automatically try the next available port (5174, 5175, etc.)
- Check the terminal output for the actual URL

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear build cache
rm -rf dist node_modules/.vite
npm run build
```

---

## 📝 Notes

- **Development Server**: Runs on `http://localhost:5173` (or next available port)
- **Production URL**: `https://infotcjeff-ui.github.io/text-upload/`
- **Hot Reload**: Enabled by default - changes appear instantly
- **Dark Mode**: Persists in localStorage across sessions

---

## 🎯 Quick Start Checklist

- [x] Node.js installed
- [x] Dependencies installed (`npm install`)
- [ ] Start dev server (`npm run dev`)
- [ ] Open `http://localhost:5173` in Chrome
- [ ] Make changes and see them live!

---

Happy coding! 🎉

