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

## Deploy on Vercel (recommended)

1. Push this project to GitHub (`gajulavishnusai/portfolio`).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project** and import your **portfolio** repo.
4. Keep the defaults (Vite is auto-detected):
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

Every `git push` to `main` will redeploy automatically.

### Deploy from terminal (optional)

```bash
npm i -g vercel
cd C:\Users\HP\portfolio
vercel
```

Follow the prompts, then run `vercel --prod` for production.

## Deploy (GitHub Pages)

GitHub Actions deploys to Pages on push to `main`. Enable **Settings → Pages → Source: GitHub Actions**.

Live site: **https://gajulavishnusai.github.io/portfolio/**
