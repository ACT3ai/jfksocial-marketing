# JFKSocial Marketing Website

Marketing and documentation website for JFKSocial, a decentralized social media platform built on the [Nostr](https://nostr.com) protocol. The public site is branded **WeCitizens Social** and is published at https://m.wecitizens.social.

Built with [Docusaurus 3](https://docusaurus.io/).

Repo: https://github.com/ACT3ai/docu_social_media

## Prerequisites

- Node.js >= 20

## Local Development

```bash
npm install
npm start
```

Starts a local dev server at http://localhost:3000 with hot reload.

## Build

```bash
npm run build
```

Generates static output in `build/`.

## Environment Variables

| Variable   | Description                  | Default                    |
| ---------- | ---------------------------- | -------------------------- |
| `SITE_URL` | Production URL of the site   | `https://m.wecitizens.social` |
| `BASE_URL` | Base path the site is served under | `/`                  |

## Project Structure

```
site/
  docs/         Documentation pages
  blog/         Blog posts
  pages/        Standalone pages (homepage, consumer, influencers, fork, info)
  videos/       Videos section (docs plugin instance)
  static/       Logo, favicon, CNAME, and static assets
internal/
  components/   React components
  css/          Global styles and brand colors
  sidebars.ts   Sidebar config (plus sidebars-videos.ts)
docusaurus.config.ts
jfksocial_company.md  Symlink to the JFKSocial company/product overview doc
```

## Related Source Code

- Backend / Go server — https://github.com/ACT3ai/jfksocial_server
- Frontend / React shell — https://github.com/ACT3ai/jfksocial_frontend
- Devops / deployment — https://github.com/ACT3ai/jfksocial_devops
