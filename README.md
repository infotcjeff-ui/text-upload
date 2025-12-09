# Dark Mode Website - React Edition

A modern, responsive website with intelligent dark mode functionality built with React, featuring Home, About, and Contact pages.

## Features

- ⚛️ **React 18** - Built with modern React and hooks
- 🛣️ **React Router** - Client-side routing for seamless navigation
- 🌓 **Automatic Theme Detection** - Detects your operating system preference
- 💾 **Persistent Storage** - Remembers your theme preference across sessions
- 🎨 **CSS Custom Properties** - Smooth theme switching with CSS variables
- ♿ **Accessibility Compliant** - WCAG contrast ratios for optimal readability
- 📱 **Fully Responsive** - Works beautifully on all devices
- 🎯 **Modern UI Design** - Glassmorphism effects with purple/pink gradient theme

## Technology Stack

- **React 18.2.0** - UI library
- **React Router DOM 6.20.0** - Routing
- **Vite 5.0.8** - Build tool and dev server
- **CSS3** - Custom properties and modern styling

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/infotcjeff-ui/text-upload.git
cd text-upload
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Pages

- **Home** (`/`) - Welcome page with feature highlights
- **About** (`/about`) - Information about the website and technology stack
- **Contact** (`/contact`) - Contact form and information

## Live Website

🌐 **Live Site**: [https://infotcjeff-ui.github.io/text-upload/](https://infotcjeff-ui.github.io/text-upload/)

## Development

The project uses Vite for fast development and building. The development server runs on `http://localhost:5173` by default.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

## License

© 2024 Dark Mode Website. All rights reserved.
