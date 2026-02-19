# Korir Derrick Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS.

## Live Features

- Responsive single-page portfolio layout
- Dark/light theme toggle with persisted preference
- Section navigation: Home, About, Experience, Projects, Contact
- Featured deployed client projects:
  - `https://expertcoltd.com/`
  - `https://tpmdigital.africa`
- Social/contact links (GitHub, LinkedIn, email)

## Tech Stack

- React 18
- Vite 4
- Tailwind CSS 3
- Lucide React Icons

## Project Structure

```text
src/
  components/
    About.jsx
    Contact.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    Navigations.jsx
    Projects.jsx
  App.jsx
  index.css
  main.jsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Deployment

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `18+` recommended

For SPA fallback (recommended), create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Contact

- LinkedIn: `https://www.linkedin.com/in/derrick-korir-0aab02280/`
- GitHub: `https://github.com/rickie-blip`
