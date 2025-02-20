
# Not Operations

A minimalist website that helps users understand logical operations through interactive visualizations. This project demonstrates boolean logic gates (NOT, AND, OR, etc.) in an intuitive and visual way, making it easier for students and developers to grasp these fundamental computing concepts.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/carakalokique/notoperations.git
cd notoperations
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Deployment

This project is configured to deploy to GitHub Pages.

### First-time deployment setup:

1. Install gh-pages package if not already installed:
```bash
npm install gh-pages --save-dev
```

2. Make sure your `vite.config.js` has the correct base URL:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/'
})
```

3. Ensure you have a CNAME file in the `public` directory containing:
```plaintext
notoperations.com
```

### Deploying updates:

1. Commit your changes:
```bash
git add .
git commit -m "Your commit message"
git push
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be deployed to `https://notoperations.com`

## Built With
- React
- Vite
- GitHub Pages

## Template Information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## License
This project is licensed under the MIT License - see the LICENSE file for details.
```
