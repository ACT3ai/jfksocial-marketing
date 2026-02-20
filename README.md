# JFKSocial Marketing Website

Marketing and documentation website for JFKSocial, a decentralized social media platform built on the [Nostr](https://nostr.com) protocol.

Built with [Docusaurus 3](https://docusaurus.io/).

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
| `SITE_URL` | Production URL of the site   | `https://jfksocial.com`    |
| `BASE_URL` | Base path the site is served under | `/`                  |

## Project Structure

```
docs/           Documentation pages (User Guide, Advanced)
blog/           Blog posts
src/
  components/   React components (HomepageFeatures)
  css/          Global styles and brand colors
  pages/        Standalone pages (homepage, about)
static/img/     Logo, favicon, and static assets
```
