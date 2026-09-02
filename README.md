# my-portfolio

Personal portfolio of **Vo Hoang Anh Quan (K1llV)** — a terminal/CLI-styled site built with **Vite + React**.

🔗 https://quanvo0112.github.io/my-portfolio/

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173/my-portfolio/
```

Build and preview the production bundle:

```bash
npm run build
npm run preview
```

> The dev server serves at `/my-portfolio/` rather than `/` because `base` in `vite.config.js` is set to `/my-portfolio/`.

## Deploy

Push to the `main` branch — GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys automatically.

### ⚠️ One-time manual step

In **repo Settings → Pages → Build and deployment → Source**, choose **"GitHub Actions"**.

If you skip this, the workflow runs but the deploy fails (or Pages keeps serving stale content from the branch).

## Project structure

```
.
├── .github
│   └── workflows
│       └── deploy.yml         GitHub Actions: build + deploy to Pages
├── public
│   ├── assets
│   │   └── report-stock-texture.png
│   ├── fonts
│   │   ├── barlow-condensed-semibold.ttf
│   │   └── barlow-condensed-regular.ttf
│   ├── favicon.ico
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   └── og-image-v2.png
├── src
│   ├── components
│   │   ├── TitleBar.jsx          window chrome bar
│   │   ├── Tabs.jsx              top navigation tabs
│   │   ├── BootSequence.jsx      CLI startup animation
│   │   ├── Hero.jsx              intro + flagship project evidence
│   │   ├── Projects.jsx          project listings
│   │   ├── Ctf.jsx               CTF writeups
│   │   ├── Skills.jsx            skills groups
│   │   ├── Education.jsx         education + languages
│   │   ├── Contact.jsx           contact links
│   │   ├── InteractiveCli.jsx    interactive terminal
│   │   ├── Prompt.jsx            prompt row
│   │   └── Reveal.jsx            scroll-reveal wrapper
│   ├── hooks
│   │   ├── useReveal.js          IntersectionObserver scroll reveals
│   │   ├── useTypewriter.js      typewriter effect
│   │   └── useLiveWriteups.js    remote writeup loading
│   ├── data
│   │   └── content.js            all page content (edit here)
│   ├── styles
│   │   └── index.css             terminal theme + animations
│   ├── App.jsx
│   └── main.jsx
├── index.html                    Open Graph / Twitter Card meta, favicon
└── vite.config.js                base: '/my-portfolio/'
```

## Editing content

All text (bio, projects, skills, CTF writeups, contact) lives in [`src/data/content.js`](src/data/content.js).

## Troubleshooting

| Symptom | Likely cause |
| --- | --- |
| Blank page, console 404 on `.js`/`.css` files | `base` in `vite.config.js` is wrong — must be `'/my-portfolio/'` |
| Actions run green but the site doesn't update | Settings → Pages → Source isn't set to "GitHub Actions" |
| Open Graph image missing when sharing | `og:image` must be an absolute URL like `https://...`, and the scraper needs time to re-cache |