# Portfolio

A personal portfolio site built with **HTML**, **CSS**, **JavaScript**, and **React** (Vite).

## Sections

- Hero — introduction and call-to-action
- About — bio and highlights
- Skills — progress bars for your stack
- Projects — featured work with links
- Contact — form (opens your email client)

## Customize

Edit `src/data/portfolio.js` with your name, email, skills, projects, and social links.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow that deploys on every push to `main`.

1. Create a new repository named **`portfolio`** on GitHub.
2. Enable Pages: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push this project:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/gajulavishnusai/portfolio.git
git push -u origin main
```

Live site: **https://gajulavishnusai.github.io/portfolio/**
