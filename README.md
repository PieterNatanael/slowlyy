# Slowlyy

Slowlyy is a static marketing site for the Slowlyy crypto wallet plus a small supporting Express service for signed date responses.

## Current structure

```text
.
|-- assets/
|   `-- styles/
|       `-- content-pages.css
|-- faq/
|   `-- index.html
|-- privacypolicy/
|   `-- index.html
|-- security-model/
|   `-- index.html
|-- slowlyy-date-api/
|   |-- index.js
|   |-- package.json
|   `-- fly.toml
|-- what-is-slowlyy/
|   `-- index.html
|-- whitepaper/
|   `-- index.html
|-- alumni-chain-lab/
|   `-- index.html
|-- index.html
|-- robots.txt
`-- sitemap.xml
```

## What lives where

- `index.html`: main landing page
- `faq/`, `what-is-slowlyy/`, `security-model/`, `whitepaper/`, `privacypolicy/`, `alumni-chain-lab/`: static content pages
- `assets/styles/content-pages.css`: shared stylesheet for the article-style content pages
- `slowlyy-date-api/`: small Node/Express service used for signed date responses

## Architecture notes

- The website is currently a static HTML site.
- Shared content-page styling is now centralized in `assets/styles/content-pages.css`.
- The backend is intentionally simple and separate from the static site.

## Recommended next stages

1. Move the date API to a small `src/` structure with `routes/` and `lib/`.
2. Centralize repeated page head, nav, and footer markup with a lightweight static site generator such as Astro.
3. Add a simple deploy/build workflow so content changes are easier to maintain.
