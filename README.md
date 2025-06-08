# Not Operations

A responsive business operations consulting website built with React and Vite.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Carakalokique/notoperations.git
cd notoperations
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Building for Production

To create a production build:
```bash
npm run build
```

This will generate optimized files in the `dist` directory.

## 📦 Deployment to GitHub Pages

### Automatic Deployment (if gh-pages package is working)
```bash
npm run deploy
```

### Manual Deployment (Recommended)

Since the `gh-pages` package may have issues, use this manual deployment method:

1. **Build the project:**
```bash
npm run build
```

2. **Copy CNAME file to dist (if you have a custom domain):**
```bash
cp CNAME dist/
```

3. **Deploy to GitHub Pages:**
```bash
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push origin `git subtree split --prefix dist main`:gh-pages --force
```

### First-time Setup

If you haven't set up GitHub Pages yet:
1. Go to your repository on GitHub
2. Navigate to Settings → Pages
3. Under "Source", select "Deploy from a branch"
4. Choose `gh-pages` branch and `/ (root)` folder
5. Click Save

Your site will be available at: `https://[your-username].github.io/[repository-name]/`

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** SCSS
- **Deployment:** GitHub Pages

## 📱 Features

- Fully responsive design
- Mobile-first approach
- Animated review carousel
- Smooth scrolling sections
- Optimized images and fonts

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
