# opankcs.com — Personal Portfolio

Modern personal portfolio for **Muhammad Nauval Fadli**, built with the Next.js App Router and a dark "Systems Console" visual language.

**Live:** [https://opankcs.com](https://opankcs.com)

## Highlights

- **Systems Console design** — graphite + signal amber palette, Space Grotesk display type, monospace metadata, numbered sections.
- **Server status panel** — a compact live-style panel showing the home server node, Docker runtime, Cloudflare Tunnel and the services it hosts.
- **Project showcase** — service-style cards with screenshots for REKSA, JARA, KMS Kopi, and Ka'bah Coin Quest.
- **Download CV** — a public, up-to-date CV PDF.
- **SEO ready** — metadata, canonical URL, sitemap, robots, Open Graph and Twitter images, custom favicon.
- **Fully static** — every route is prerendered for fast, cheap hosting.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Language | TypeScript |
| Fonts | Space Grotesk + Geist Mono |
| Hosting | Docker + Cloudflare Tunnel (self-hosted) |

## Structure

```
app/            routes, metadata, sitemap, robots, OG images
components/     Navbar, Hero, About, Skills, Projects, Education, Contact, Footer
data/           project content
public/         project screenshots and CV
```

## Scripts

```bash
npm install       # install dependencies
npm run dev       # development server on :3000
npm run build     # production build
npm run start     # serve the production build
npm run lint      # ESLint
```

## Deployment

The site runs as a Docker container behind a Cloudflare Tunnel:

- Push to the `dev` branch.
- Pull on the server, then `docker-compose up -d --build`.
- Public traffic is served through `https://opankcs.com` (no public ports exposed).

## License

© Muhammad Nauval Fadli. All rights reserved.
