<div align="center">
  <!-- Example: If you placed your SVG in `public/cyantvremote.svg`, you can embed it like this: -->
  <img src="./public/cyantvremote.svg" alt=" TV Auto Remote" width="150" />

# TV Auto Linktree

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](#license)
[![Astro v5+](https://img.shields.io/badge/astro-v5%2B-orange.svg)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.x-06B6D4.svg)](https://tailwindcss.com)

**A zero-cost, no-database, super-flexible Linktree-style landing page.**

</div>

---

## Why Another Linktree?

### _Are you tired of…_

- **Paying** monthly fees for a third-party Linktree (or link-in-bio) platform?
- **Handing over SEO** to Linktree or other link hosts instead of your own domain?
- **Managing certificates** & complex hosting setups just to run a simple link page?
- **Hunting & pecking** through random template code to find where to update your site name, icons, descriptions, etc.?

**TV Auto Linktree** solves these pain points by offering:

1. **Zero monthly costs**

   - Host on Netlify, Vercel, GitHub Pages, etc. with no server or DB.
   - No cPanel or complicated Docker images for this landing page—**it’s a static site**.

2. **Full control & SEO**

   - Keep all your SEO juice under your own domain.
   - Quickly tweak the design and content; no hidden paywalls.

3. **One-stop config**

   - All site data is controlled via a single [`.env`](#example-env) file and a `site.ts`.
   - No more sifting through 5–10 files to update a single label or link.

4. **Instant SSL & subdomains**

   - Use [**nip.io**](https://nip.io/) for local IP mapping or your own domain with free SSL from Netlify, Cloudflare, etc.
   - No messing with cert renewals or complicated DNS setups.

5. **Astro + Tailwind**
   - Incredibly fast builds, partial hydration, and easy styling with utility classes.

---

## Ideal for TV Automation + More

This template started as a fork of [nevthereal/linktree-template](https://github.com/nevthereal/linktree-template) and evolved to point to your **TV automation stack**—like **Plex**, **Sonarr**, **Radarr**, etc.—which often run on local IPs or Docker hosts.

- Keep your heavy-lifting apps **local** (they need storage, DBs, etc.), but present them **publicly** (or within your network) with a single, easy-to-share page.
- If you prefer a standard link-in-bio? **No problem.** The environment variables & link config are flexible enough for any usage!

---

## Time & Cost Savings (Mini BVA)

> **Assumption:** Dev salary ~$125K/year in the US (roughly $60/hr fully burdened).

- **Typical Dev Time**: 2–3 hours to set up a new link-based landing page with SSL, config, and style from scratch. (~$120–$180 value)
- **TV Auto Linktree**: Setup in under **5 minutes**. ($5 of dev time at most)
- **Monthly Fees**: $0 for hosting on Netlify/GitHub. Traditional “pro” Linktree might run $5–$9/month. Over a year, that’s ~$60–$108 saved.

**Net Result**: You **save ~$175** in dev labor + monthly SaaS fees, and you keep your SEO & branding under your domain.

---

## Key Features & Benefits

- **Single `.env`** for all site text & IP addresses (plus `site.ts` for advanced logic).
- **No database** needed; everything is static.
- **Fully customizable**: want a new link? Just add it to `links.ts` or your `.env`.
- **Font Awesome** icons: [Search here](https://fontawesome.com/search?o=r&m=free) for a matching icon class.
- **Scrolling Fix** included: no clipped content on desktop or mobile.
- **Use nip.io or real domain**:
  - `10.0.0.187` -> `10-0-0-187.nip.io:port`, automatically mapping subdomains to your local IP.
  - Or deploy to `yourdomain.com` with free SSL (e.g., Netlify or Cloudflare).

---

## Quick Start

```bash
# 1. Clone or fork
git clone https://github.com/YourUser/TVAutoLinktree.git
cd TVAutoLinktree

# 2. Install dependencies
npm install

# 3. Create a .env file
cp .env.example .env
# (edit to match your IPs, site name, etc.)

# 4. Run dev
npm run dev
```

Open your browser at the link Astro provides (often `http://localhost:4321`).

---

## Example `.env`

```ini
# .env

# Local IPs for your Docker host or PC
LOCAL_APPS_URL=192.168.1.250
LOCAL_PLAYER_URL=192.168.1.251

# Basic site info
PAGE_TITLE="TV Auto Links"
PAGE_HEADING="TV Auto"
PAGE_DESCRIPTION="A Linktree-style page for TV automation"
PAGE_AUTHOR="Vector Sigma"
PAGE_OGDESCRIPTION="Links to Plex, Sonarr, Radarr, & more!"
PAGE_FOOTER="your-vanity-url-here © 2025."

# One universal favicon or SVG
PAGE_FAVICON="favicon.svg"

# Social handles
X_HANDLE="mytwitter"
BSKY_HANDLE="myhandle.bsky.social"
YOUTUBE_HANDLE="mychannel"
```

> In production hosting (Netlify, Vercel, etc.), set these **as environment variables** in the UI or config file.

---

## Deploying (Zero Cost!)

1. **Netlify**
   - Create a new site, link to your GitHub repo.
   - Set build command to `npm run build`, publish dir = `dist`.
   - Add environment vars in Netlify → “Site Settings” → “Build & Deploy.”
2. **Vercel**
   - Import your repo, pick “Astro” as the framework.
   - Set environment variables.
   - Deploy.
3. **GitHub Pages**
   - `npm run build`, push the `dist/` folder to a `gh-pages` branch.
   - Update repo settings → Pages → pick `gh-pages` branch.
4. **Any static host**: Render `dist/` & serve.

**No monthly fees**. No running server. No database.

---

## Extending & Customizing

1. **Add new links** in `src/data/links.ts`, or define new environment variables for them.
2. **Override icons** via [Font Awesome classes](https://fontawesome.com/search?o=r&m=free).
3. **Update site text** in `src/data/site.ts` or your `.env`. All in **one** place—no more rummaging around the template.
4. Remove or swap out **nip.io** logic in `buildLinks.ts` if you prefer standard IP or domain usage.

---

## License

Licensed under the **Apache 2.0** License. Free to fork, adapt, and share.

---

## Contributing

- **Star this repo** if you find it useful!
- PRs & Issues are welcome—bring your ideas, bug fixes, or new icons.

---

## Final Word

Stop wrestling with expensive, proprietary link pages or messy one-off HTML sites. With **TV Auto Linktree**, you get a **zero-cost**, fully **custom** landing page that’s perfect for both **TV automation** services **and** general link-in-bio usage. **5 minutes** to set up, infinite possibilities.

Try it now and **take control** of your links, IPs, and SEO—**no monthly fees**, no hassle!

Enjoy!
