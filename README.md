# opankcs.com — Personal Portfolio

Personal portfolio for **Muhammad Nauval Fadli**, an Informatics student at Universitas Diponegoro ('24) focused on data science — building and self-hosting real projects.

## Highlights

- Selected work including live, self-hosted apps (REKSA, JARA, KMS Kopi)
- Dark/light theme with flash-free initial paint
- Generated Open Graph / Twitter preview image
- Static single-page site

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS 4
- lucide-react
- Deployed with Docker Compose behind a Cloudflare Tunnel

## Project structure

```
app/           App Router entry, metadata, sitemap, robots, OG/twitter image, icon
components/    Page sections and UI primitives
context/       Theme provider
data/          Projects, skills, and education content
dictionaries/  Site copy
lib/           Shared Open Graph image renderer
public/        Static assets (project screenshots)
```

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run lint
npm run build
npm start
```

## Deployment

The site runs on a self-hosted Docker host. From the server:

```bash
git pull origin dev
docker-compose up -d --build
```
