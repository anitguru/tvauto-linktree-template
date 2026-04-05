<div align="center">
  <img src="./public/cyantvremote.svg" alt="TV Auto Remote" width="150" />

# TV Auto Linktree

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](#license)
[![Astro v5+](https://img.shields.io/badge/astro-v5%2B-orange.svg)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.x-06B6D4.svg)](https://tailwindcss.com)

**A zero-cost, no-database, super-flexible “Linktree-style” page for TV automation— or any link-in-bio use case.**

</div>

---

## Deploy to Your Platform 🚀

Want to deploy your own version of TV Auto Linktree? Use the tools below to get started in minutes:

[![Netlify Status](https://api.netlify.com/api/v1/badges/a5f290cc-bc5f-48f1-b2d5-bb71b7a91aa3/deploy-status)](https://app.netlify.com/sites/tvautoio/deploys)

Click below to deploy to Netlify instantly:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/anitguru/tvauto-linktree-template)

---

## Why Another Linktree?

### Tired of…

- **Paying** monthly fees to third-party link hosts?
- **Handing over SEO** to them instead of building your domain’s credibility?
- **Managing certs** & complicated servers just for a simple link page?
- **Sifting** through random template code to change your name or links?

**TV Auto Linktree** addresses these pains. It’s fully open-source, easy to configure in **one place** using a **`.env`** file, and deployable **at zero cost** on platforms like **Netlify**, **Vercel**, or **GitHub Pages**.

---

## Ideal for TV Automation & More

- **Local apps** (Plex, Sonarr, Radarr, Transmission, etc.) typically can’t run on a free static host because they need databases/storage. But you can point a **static** front-end to your local IPs—**no monthly cost** for the link page itself.
- Also great as a **general link-in-bio** site for social media.
- **nip.io** wildcard DNS support for local IPs (e.g., `10.0.0.187` → `10-0-0-187.nip.io`).
- Simplifies setup by **eliminating the need for a load balancer**—no manual port specification required for each app.

**Live Demo**: [tvauto.io](https://tvauto.io)  
_(Note: The links won’t work unless your LAN IPs match. This is just a sample for layout/style.)_

---

## Quick Start

```bash
# 1. Clone or fork
git clone https://github.com/anitguru/tvauto-linktree-template
cd tvauto-linktree-template

# 2. Install dependencies
npm install

# 3. Create/edit .env
cp .env.example .env
# (Add your IPs, site title, social handles, etc.)

# 4. Run dev server
npm run dev
```

Then open Astro’s local server link (often `http://localhost:4321`).

---

## Example `.env`

```bash
# .env

# IPs for your local Docker host / LAN
LOCAL_APPS_URL=10.0.0.187
LOCAL_PLAYER_URL=10.0.0.10

# Basic site info
PAGE_TITLE="TV Auto Links"
PAGE_HEADING="TV Auto Links"
PAGE_DESCRIPTION="A Linktree-style page for TV automation"
PAGE_AUTHOR="Vector Sigma"
PAGE_OGDESCRIPTION="Links to Plex, Sonarr, Radarr, etc."
PAGE_FOOTER="tvauto.io © 2025."

# Universal SVG logo / favicon
PAGE_FAVICON="favicon.svg"

# Social handles
X_HANDLE="mytwitter"
BSKY_HANDLE=""
YOUTUBE_HANDLE=""
```

_(For Netlify/Vercel/GitHub Pages, set these environment variables in their respective dashboards.)_

---

## What’s Different from the Original?

Forked from [nevthereal/linktree-template](https://github.com/nevthereal/linktree-template), we **added**:

- **Scrolling fix** for desktop (no more clipped content).
- **Modular config** (`site.ts`, `links.ts`, `.env`) so you only edit one place for site data.
- **Environment variables** for IP addresses, metadata, and social handles—**no** hunting in code.
- **nip.io** logic in `buildLinks.ts` for local IP → domain mapping.
- **TV automation** examples: Plex, Sonarr, Transmission, etc. with default ports.
- **Tailwind** remains for easy styling, but you can also override or remove it if you like.

---

## Tree Structure

```bash
.
├── .env                  # Your environment variables
├── astro.config.mjs      # Astro config with Tailwind integration
├── netlify.toml          # Netlify deploy config (optional)
├── package.json
├── public
│   ├── Geist.ttf
│   ├── favicon.svg
│   └── robots.txt
├── src
│   ├── components
│   │   ├── Card.astro
│   │   ├── Chip.astro
│   │   ├── FaIcon.astro
│   │   └── LinksList.astro
│   ├── data
│   │   ├── links.ts       # Port-based link definitions (Sonarr, Radarr, etc.)
│   │   └── site.ts        # Site-wide metadata & social links (reads from .env)
│   ├── lib
│   │   ├── buildLinks.ts  # Creates final IP/port links, uses nip.io if desired
│   │   └── utils.ts       # e.g., ipToDash() for 10.0.0.187 -> 10-0-0-187
│   └── pages
│       └── index.astro
├── tailwind.config.mjs
└── tsconfig.json
```

---

## Deploying (No Monthlies!)

- **Netlify**
  - Create new site → link GitHub repo → set build command to `npm run build`, publish dir = `dist`.
  - Add your `.env` vars in site settings.
- **Vercel**
  - “Import Project” → select Astro → add environment vars → deploy.
- **GitHub Pages**
  - Build locally, push `dist/` to `gh-pages` branch → enable Pages in repo settings.
- Anywhere that serves static files: **No servers or DB required.**

---

## Features & Benefits Recap

- **Instant SSL** (if you use Netlify or Vercel).
- **Use IP-based or domain-based hosting** with no extra cost.
- **No database**—just a few `.ts` files and a `.env`.
- **Font Awesome** icons: pick any free icon from [fontawesome.com](https://fontawesome.com/search?o=r&m=free).
- **One config** approach: `.env` + `site.ts` for all your site data, so no guesswork.

**Pain -> Solution**: Ever wanted a fast, flexible “linktree” that **you** control and can host for free? Tada!  
And for your local apps that **do** require a DB or big storage, you simply link to them behind the scenes—**best of both worlds**.

---

## Cost & Time Savings

- **Zero** monthly hosting fees.
- **No** domain needed (you can use nip.io or a free .github.io domain).
- Dev labor **5 minutes** vs. building a link page from scratch or paying for premium Linktree.
- Keep your **SEO** on your domain vs. Linktree’s domain.

---

## Contributing

- **Star this repo** if it saves you time or money!
- PRs and issues welcome—share your suggestions or improvements.

---

## License

Licensed under [**Apache License 2.0**](LICENSE). Copy, modify, and share freely.

---

## Final Note

Stop fussing with expensive or limited link-in-bio services. Embrace **TV Auto Linktree** for a **no-hassle**, **5-minute** setup that leaves your local media apps right where they belong—on your own LAN—while you enjoy a fast, **free** static front-end.

**Try it now** and keep your SEO & brand in your own hands!


