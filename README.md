# WeCitizens Social — Marketing Website

Marketing and documentation website for **WeCitizens Social**, the social network citizens own — a
censorship-resistant, decentralized network built on the open [Nostr](https://nostr.com) protocol.

- **The network:** https://wecitizens.social
- **This site (marketing + docs):** https://m.wecitizens.social
- **The movement:** https://wethecitizens.io

Built with [Docusaurus 3](https://docusaurus.io/).

Repo: https://github.com/ACT3ai/docu_social_media

## What we stand for

WeCitizens Social is built on open standards and owned by the people who post on it. Your identity is
yours. Your followers are yours. Your words are not buried by an algorithm you can't see.

- **Your keys, your followers, your words** — a cryptographic key pair, not an account a company can
  revoke. Take your profile and your audience to any Nostr client.
- **Censorship-resistant** — no central authority can silence you, and no relay operator owns the
  network.
- **No algorithmic burial** — chronological posts from the people you actually follow.
- **No data harvesting** — your data stays under your control.
- **Open source** — fork it, audit it, or run your own network on it.

It is the social layer of the **We The Citizens** movement, which speaks to Republicans, Democrats,
Libertarians, and Democratic Socialists through their own front doors at
[wethecitizens.io](https://wethecitizens.io). Same goal across all four: a meritocracy-based way for
citizens to organize, find political challengers who aren't controlled by entrenched interests, and
build their own package for an ethical economy — instead of narrative control deciding who gets
heard.

## Audiences this site addresses

| Section | Path | Who it's for |
| --- | --- | --- |
| Users (Citizens) | `/consumer` | People joining the network to speak and be heard |
| Influencers | `/influencers` | Creators bringing an audience they want to keep owning |
| Your Social Network | `/fork` | Anyone forking or self-hosting their own network on our stack |
| Videos | `/videos` | Video walkthroughs and explainers |
| Docs | `/docs` | Nostr concepts, keys, relays, getting started |

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

Generates static output in `build/`. Deployment runs from `.github/workflows/pages.yml` on every push
to `main`; `site/static/CNAME` pins the published host to `m.wecitizens.social`.

## Environment Variables

| Variable   | Description                        | Default                       |
| ---------- | ---------------------------------- | ----------------------------- |
| `SITE_URL` | Production URL of the site         | `https://m.wecitizens.social` |
| `BASE_URL` | Base path the site is served under | `/`                           |

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
src/theme/      Swizzled Docusaurus theme overrides (navbar logo, footer links)
docusaurus.config.ts
wecitizens_company.md  Symlink to the company/product overview doc
```

## Related Source Code

The network itself — Go backend, React frontend, and deployment tooling — is published separately.
The current source repositories and fork instructions are listed on the
[Your Social Network](https://m.wecitizens.social/fork) page, alongside the license and privacy terms
that apply to running your own instance.
