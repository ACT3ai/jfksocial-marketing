# JFK Social — Company, Product, and Customer Value

JFK Social is the social network for citizens who refuse to be silenced. We exist to give a voice back to the people — and to defend that voice against governments, intelligence services, big-money interests, narrative-pushing media, and the bot farms that drown out organic speech on every other major platform.

This document explains who we are, what we do, how we make money, and — most importantly — the value we provide to our customers.

---

## Our Core Values to Customers

These are the promises we make to every customer, in priority order. Everything else in this document supports this list.

1. **Free Speech** — Our most fundamental value. Our customers are routinely censored, shadow-banned, demonetized, or de-platformed elsewhere. On JFK Social, they can speak. We design every system — moderation, ranking, hosting, federation — around the principle that lawful speech stays up. We do not silence customers because their views are unpopular with regulators, advertisers, or activist staff at incumbent platforms.

2. **We Grow Their Audience** — Our customers cannot grow elsewhere. Their reach is throttled, their posts buried, their followers hidden from their own feeds. JFK Social is engineered to grow audiences that other platforms suppress. Our feed ranking, cross-network publishing (Post Global), trust-based discovery (Follow), and Hero broadcast amplification are all built to move suppressed voices in front of real human audiences.

3. **Citizens Having a Voice — Protected From Manufactured Narratives** — JFK Social exists to protect ordinary citizens from coordinated narratives pushed by governments, intelligence services, large corporations, big money, captured media, and bot farms. We detect inorganic amplification, expose coordinated suppression, and weight authentic human signal over manufactured consensus. This is not a slogan — it is wired into the ranking algorithm, the trust graph, and the moderation stack.

4. **Transparency of the Ranking Algorithms** — Every customer can see why a post ranks where it ranks. Our `xalgorithm` subproject publishes the ranking logic openly. Customers (and outside researchers) can inspect the signals, the weights, and the reasons a post is amplified, demoted, or filtered. No black-box editorial hand on the scale.

5. **Open-Source Code** — The platform's code is open source. Anyone can audit it, fork it, run their own instance, and verify that what we say we do is what we actually do. Our open-source repos live at `github.com/ACT3ai/jfksocial_server`, `jfksocial_frontend`, and `jfksocial_devops`. Trust is earned through inspection, not asserted through marketing.

6. **Open-Source, Open-Standard Social Media Backbones** — JFK Social is built on open standards: **Nostr**, **ActivityPub**, **Mastodon**, and **BlueSky (AT Protocol)**. Customer identity, customer content, and the customer's social graph are not locked into a single vendor. If JFK Social ever fails the customer, the customer's keys, posts, and followers can move to another compatible network — because the network *is* the standard, not our company.

7. **Openness of Content** — Content on JFK Social is open: open to be read, indexed, archived, mirrored, cross-posted, and federated to other networks. We do not wall content off from the broader internet. We make it easier — not harder — for a citizen's words to reach the largest possible authentic audience across every compatible network.

---

## What JFK Social Is

JFK Social is a federated, open-protocol social network built for citizens who are being silenced on legacy platforms. It is simultaneously:

- A **consumer social product** (`jfksocial.com`) where users post, follow, message, and consume a ranked feed.
- A **publishing backbone** that pushes a single post out to Nostr relays, ActivityPub (Mastodon, the fediverse), BlueSky (AT Protocol), Threads, and X.
- An **audience-growth engine** for creators, journalists, defenders, and ordinary citizens whose reach has been throttled elsewhere.
- A **defense-grade platform** with on-prem deployment options for organizations that need sovereign hosting.
- An **open developer ecosystem** — the protocols are open, the algorithms are open, the code is open.

---

## What JFK Social Does For Its Customers (At a Glance)

- **Posts that other platforms hide are visible here.** Ranked transparently, not by an opaque editorial hand.
- **Followers belong to the customer**, not the platform — portable across networks via open standards.
- **A single post reaches many networks** through Post Global cross-publishing.
- **Backed-up history** — Twitter/X archives are preserved via the Backup subsystem so customers do not lose their work if they are banned elsewhere.
- **Defended voices are amplified** through the Hero / Defend Heroes program.
- **Trust-based discovery** — Friendship Global / Follow surfaces real humans the customer trusts, not algorithmic strangers.
- **Open ranking** — `xalgorithm` lets anyone inspect why content ranks the way it does.
- **AI-rated transparency** instead of hidden moderation — community-curated, see `ai_ratings`.
- **Law-enforcement-grade evidence preservation** for serious content violations (CSAM, etc.), routed through proper legal channels — not vigilante deletion.

---

## Business Model

JFK Social earns revenue from premium subscriptions, on-prem deployments, ad inventory (when scale justifies it), and platform services. We deliberately do not depend on advertiser politics — so we cannot be coerced into silencing customers to keep an advertiser happy.

### Revenue Streams (Current and Planned)

- **Premium subscriptions** — $19/month premium accounts (see `monetization/`). Unlocks higher rate limits, larger media, advanced features, and supports the platform's independence from advertiser pressure.
- **On-prem AI and on-prem hosting** — for organizations, governments-in-exile, and enterprises that need sovereign control of identity, data, and moderation policy. See `onprem_ai/`.
- **Ad network (paused, planned)** — an open ad network that will launch when scale justifies it. Built so advertisers cannot dictate editorial policy. See `webapp/ads/`.
- **Federation services** — running infrastructure for the open protocols (relays, indexers, media servers) as paid services for other operators in the open ecosystem.
- **Enterprise and law-enforcement portal** — paid access for vetted entities to lawful evidence-preservation and reporting tools (see `legal/`).

### Pricing Philosophy

We price so that the customer — not an advertiser, not a government, not a large platform — is the one we answer to. A $19/month subscription is small enough to be broadly accessible and large enough to fund a platform that does not need to censor its users to survive.

---

## Product Surface (How Customers Experience the Value)

JFK Social ships as a family of integrated apps. Each one delivers a specific slice of the core value list.

- **Main UI** (`webapp/` Main UI subproject) — the primary social feed, profile, posting, and messaging experience at `jfksocial.com`.
- **Defender** (`webapp/defender/`) — Free Speech Defender onboarding wizard for people who need help defending their speech.
- **Backup** (`webapp/backup/`) — backs up Twitter/X posts so customers never lose their archive to a ban.
- **Post Global** (`webapp/postglobal/`) — one post, every network: Nostr, ActivityPub/Mastodon, BlueSky, Threads, X.
- **Heros / Defend Heroes** (`webapp/heros/`) — amplifies censored voices the community marks as "heroes."
- **Follow / Friendship Global** (`webapp/follow/`) — trust-based follow graph and community building.
- **FreeTok** (`webapp/freetok/`) — short-form video, transparent algorithm, no shadow-bans.
- **xalgorithm** (`webapp/xalgorithm/`) — open-source, transparent ranking algorithm.
- **AI Ratings** (`webapp/ai_ratings/`) — transparent AI-assisted content rating; community-curated like Community Notes.
- **Censorship Measurement** (`webapp/censorship/`) — measures and exposes censorship across the open internet.
- **Admin** (`admin/`) — platform operations, moderation oversight, network diagnostics, feature flags.
- **Legal / Law Enforcement Portal** (`legal/`, `content_moderation/`) — lawful evidence preservation and proper legal routing for serious violations.
- **Chrome Extension** (`browser_ext/`, `chrome_extensions/`) — captures pages, posts, and feeds as the customer browses, so the customer's history is theirs forever.
- **Server Node** (`server_node/`) — a user-runnable node that participates in the decentralized network from the customer's own PC.

---

## Why Customers Choose JFK Social

Customers come to JFK Social because they have already been pushed off, hidden on, or silenced by the dominant platforms. They stay because:

- Their posts are not hidden.
- Their audience actually grows.
- They can see why the algorithm did what it did.
- They keep their identity and followers even if they leave us.
- They can publish to every open network with one click.
- They are protected from coordinated narrative attacks, bot swarms, and intelligence-service-style operations.
- They know the code is open, the protocols are open, and the moderation policies are public.

---

## Founding Thesis & Specification Scope

JFK Social was founded on a single observation, recorded in `conversation.md` at the moment the team was formed: *"Censorship on X is going to become a true blocker. For that reason, I must have a dev team moving forward on this."* The trigger was concrete — a 24-hour-old post from a high-following account that had drawn only 16 views and 2 reposts. That post is the founding artifact of the company. It is evidence that even platforms branded as "free speech" are now throttling organic speech below the threshold where citizens can be heard. JFK Social exists to make that throttling impossible.

The mission, as stated in the root `README.md`, is to build a **censorship-resistant social network to compete with centralized platforms like X (Twitter)** — one where users maintain true ownership of their identity and data, free from arbitrary censorship, while still handling illegal content responsibly. This is not a niche product. It is positioned as a direct competitor to X, and the `SPEC.md` confirms it: *"This project serves an internal team building a social network to compete with X, with censorship resistance as the primary differentiator."* The CTO/CPO framing in `SPEC.md` is explicit — the spec author is written in the voice of a 20-year CTO/CPO of Facebook and Twitter, signaling that the ambition is platform-scale, not movement-scale.

The founding work is grounded in a comprehensive evaluation of **13 open-source distributed social network platforms** scored against **12 evaluation criteria**. The top 8 ranked candidates — Nostr (8.5), Bluesky/AT Protocol (8.2), Mastodon (7.8), Farcaster (7.5), Minds (7.2), Diaspora (6.8), Pleroma (6.5), Misskey (6.3) — drove the architectural decision. **Nostr was selected as the primary implementation target, with Bluesky/AT Protocol as backup.** The selection rationale is rooted in values 1, 3, 4, 5, 6, and 7: cryptographic keys give users mathematically guaranteed ownership that cannot be revoked by any authority; distributed relays mean there is no company to pressure and no central server to seize; the open protocol means any developer can build clients and relays; and Lightning integration provides native micropayments outside the financial chokepoints used to deplatform people elsewhere.

The competitive landscape is sized concretely in the root docs. Bluesky is recorded as a **40-million-user network** with strong account portability. Mastodon spans **6,000+ instances** and 9 years of operational maturity. Farcaster demonstrates **9–10K TPS** throughput on blockchain-secured identity. These numbers frame the bar JFK Social must clear: not a hobbyist relay, but a platform-scale system with multi-region deployment, CDN strategy, DDoS protection at nation-state threat level, and disaster recovery with defined RTO/RPO targets.

The specification scope is unusually broad for a single product. `SPEC.md` enumerates a **family of integrated web applications** running on the unified **JFKSocial.com** domain with shared JWT authentication: Free Speech Defender, Backup Posts, Post Global, Defend Heroes, Friendship Global, Web Social Network (Main UI), X Algorithm Clone (xalgorithm), Ad Network (paused), AI Rating Posts, FreeTok (TikTok clone), Server Node, Chrome Extension, and the WebApp server infrastructure itself. Beyond the consumer apps sit core SubProjects: monetization (premium $19/month), Admin, Legal/Law-Enforcement Portal, On-Prem AI (DeepSeek adapter, install, run), four content-moderation adapters (Thorn, PhotoDNA, DetectNudity, NCMEC), feed ranking, trust scoring (EigenTrust), muted-content detection and classifier training, four net adapters (Nostr, Bluesky, Mastodon, Threads), and a federated relay-monitoring layer. The breadth is the strategy: a single censored citizen needs onboarding (Defender), archive rescue (Backup), cross-network reach (Post Global), amplified defense (Heros), trust-based discovery (Follow), transparent ranking (xalgorithm), and transparent moderation (ai_ratings) — and JFK Social ships all of them.

The Specification Scope also defines what JFK Social explicitly is **not**: it is not single-vendor, not closed-source, not opaque in its ranking, and not dependent on advertiser politics. The `README.md` records the founding commitment to value 5 and value 6 with three live open-source repos (`jfksocial_server`, `jfksocial_frontend`, `jfksocial_devops`) and a Go + React technology stack (Go 1.25 + Gin backend, React 19 + Vite + Zustand + TailwindCSS frontend, PostgreSQL via GORM, JWT auth) chosen so any operator can stand up their own instance. The spec's `Mix and Match` principle — that mobile apps, web frontends, and backends are evaluated and combined independently — encodes value 6 at the architectural level: the customer's identity, social graph, and content are not locked to any single vendor, including us. If JFK Social ever fails its customers, the open standards (Nostr, AT Protocol, ActivityPub) guarantee the customer can leave with everything intact. That guarantee is the entire founding thesis, made enforceable in code.

---

## Strategic Position — Why Nostr-Centric, Why Multi-Protocol, Why Now

JFK Social's strategic posture is the output of a deliberate, multi-month evaluation captured across `research/`, `_Product/decisions.yaml`, `Product_Management/`, and `knowledge/`. The conclusion was not "build another Twitter clone" — it was: pick the protocol that structurally cannot be censored, then layer competitive product surface area (1) and original IP (2, 3, 4) on top of it. The research, the page registry, and the priority CSV all converge on the same answer.

**The comparative platform study ranked 8 incumbents and chose Nostr.** `_Product/decisions.yaml` scores eight open-source distributed networks against twelve weighted criteria — with censorship resistance carrying the heaviest 15-point bonus because it is the founding mission. Nostr won at 8.5, Bluesky/AT Protocol came in second at 8.2, Mastodon third at 7.8, then Farcaster (7.5), Minds (7.2), Diaspora (6.8), Pleroma (6.5), Misskey (6.3). The decision rationale is unambiguous: Nostr's cryptographic-key identity plus relay-based architecture means **no central authority exists to subpoena, no company exists for the EU DSA to fine, no PDS exists for an intelligence service to seize**. That property — explicitly validated in `Compare_Intelligence_Service_Blocking.md`, `Compare_EU_DSA_Censorship.md`, and `Compare_Relay_Resilience.md` deep-dives referenced from `research/overview.md` — is the moat. Bluesky was named the explicit **secondary** target if mainstream UX adoption ever outranks maximum censorship resistance, and Mastodon/ActivityPub was retained as the third federation surface for fediverse reach. Hence the platform's federation model is not Nostr-only; it is **Nostr primary, Bluesky/AT secondary, ActivityPub tertiary**, with adapters for Threads, Farcaster, and Minds documented as known weaknesses we mitigate rather than depend on.

**Pages_List.csv is the empirical evidence of product breadth.** The master registry at `Product_Management/Pages_List.csv` enumerates ~1,000 page rows mapping the ~252 UI screens (5) across 18+ subprojects (6), with cross-references to source code paths, UX design directories, documentation paths, and the top three relevant use cases per page. The page-count distribution reveals where the product invests: admin (~128 pages), ai_ratings (~49), content_moderation (~45), follow (~41), freetok (~40), monetization (~38), admin_law_enforcement (~37), postglobal (~34), server_node (~32), heros (~32), main_ui (~31), censorship (~29), ads (~26). Read in priority order, this distribution **tells a VP of Product exactly what kind of company JFK Social is**: it is not a thin Twitter alternative. It is an admin-heavy, moderation-heavy, multi-network, trust-graph-driven platform whose largest single surface is operator tooling — because running an uncensorable network at scale demands transparent operations, legal compliance, and CSAM defense (3) at a depth the incumbents either hide or have failed at.

**The product-management decisioning is engineered, not improvised.** `Product_Management/SubProjects_Priorirites.csv` assigns numeric priority and a named owner (Rafin, Suman, Dipesh, Chewang, Binayak, Erin, Bikash) to every one of the 38 subprojects enumerated in `SubProjects_List.md`. `HUMAN_Approved.md` then walks each subproject through Big Features with month-resolution ship targets — Admin CSAM scanning in Feb, Feed_Ranking MVP in March, transparency reports in April, FreeTok pushed to v0.75. The discipline is: comparative research selects the protocol → SubProjects_List enumerates what gets built → Priorities CSV sequences who builds what → HUMAN_Approved.md is the human-in-the-loop signoff that converts feature lists into calendar dates. This is the chain that prevents the "free-speech network" category's typical failure mode — a manifesto with no shipping cadence.

**The original IP is what differentiates us from every other Nostr client.** Anyone can fork Damus or Amethyst. JFK Social's defensible product surface is the work captured in the `algorithms/` subtree and four flagship WebApps: trust-graph scoring (`algorithms/trust_score/` plus the Follow app at `WebApp/follow/`, leveraging EigenTrust-class math), transparent multi-factor feed ranking (`algorithms/FEED/Feed_Ranking/` with 60/40 familiar-discovery split, follower normalization, multi-hop graph weighting, and explainable signals — the deliberate antithesis of X's opaque ranking), the Defender wizard onboarding (`WebApp/defender/` — FreeSpeechDefender.ai's 3-page signup pipeline that converts a censored-on-X user into a JFK Social account in minutes), and Hero amplification (`WebApp/heros/` — DefendHeroes.com, which rebroadcasts deplatformed voices with consent-based permission management). Layered with AI-driven content rating using DeepSeek (`WebApp/ai_ratings/`), the CSAM adapter engine (`Content_Moderation/Adapters/`), the law-enforcement portal (`Content_Moderation/law_enforcement_portal/` with GPG-encrypted evidence preservation), and the Chrome extension censorship telemetry (`browser_ext/chrome_extensions/` plus `WebApp/censorship/`), these features compose a product moat that no Nostr-only client and no Bluesky-only client can replicate.

**Why now.** Three external forces line up: Jack Dorsey's $10M Nostr donation in 2025 validates the protocol bet; Bluesky crossed 40M users in October 2025 proving decentralized UX can scale; the EU DSA and intelligence-service blocking pressures are pushing creators and audiences toward jurisdiction-immune networks. The `research/` directory documents all three. JFK Social is the only platform combining **Nostr's structural censorship-immunity, Bluesky/ActivityPub federation reach, and a 38-subproject original-IP product layer** under one shipping plan with named owners and monthly milestones (7).

---

## Web Apps — The Customer-Facing Product Surface

The `WebApp/` tree is the customer-visible surface area of JFK Social. Everything ships on a single domain (JFKSocial.com), behind one Go/Gin backend on `:3081` and one React 19 + Vite + Zustand thin client. Stateless JWT (HS256, 15-min access + 30-day refresh) is the only auth path; account, billing, and password flows live exclusively in `main_ui` and every other subproject reuses that user context. This architectural discipline is what makes the surface feel like one product rather than 14 microsites, and it directly underpins value #5 — the same open-source codebase delivers every feature.

* **`main_ui` (Web App #6 — WebSocialNetwork.com).** The hub. Pure web, no app store dependency (the deplatforming attack surface for value #1 is eliminated). View-first design with anonymous browsing via a synthetic user identity, Nostr-native login (paste npub/nsec) *or* site account, plus a unified adapter layer that aggregates Nostr, Gab, Mastodon, and Bluesky into one feed with merged engagement metrics (#6, #7). It also owns the only Create Account / Login / Forgot Password / Settings / Payments pages for the entire ecosystem.

* **`defender` (Web App #1 — FreeSpeechDefender.ai).** The acquisition funnel. A 3-page wizard that captures name, email, platform, handle, then progressively opts users into Heroes and Backup. Targets >40% homepage→signup, >70% wizard completion, >50% activation into a second subproject within 30 days. The handle it collects pre-populates Backup, Censorship, Follow, and Heroes, so its data quality directly drives every other subproject's TAM.

* **`backup` (Web App #2 — Feedbackup.com).** Data liberation. Three ingestion paths (Chrome extension scraping, official APIs where available, manual archive import) feed posts, followers, and following into portable YAML. When an account is banned on X, the user retains the history *and* the social graph for migration to Nostr/Bluesky/Mastodon (#6).

* **`postglobal` (Web App #3).** Compose once, fan out to X, Nostr, Mastodon, Gab, Truth Social, Rumble, Telegram, YouTube, Bluesky. Worker-based adapter architecture absorbs per-platform OAuth, character limits, media transcoding, and rate limits. Censorship of any single platform becomes a routing problem rather than a silence event — the operational expression of value #1.

* **`heros` (Web App #4 — DefendHeros.com).** The offensive censorship play. Fans opt in as broadcasters; when a tagged Hero publishes, content auto-propagates through their network to multiple platforms with attribution preserved. By the time a takedown lands, dozens of mirrored copies already exist across jurisdictions. Hero status is triggered by Censorship's deboost scores (#3).

* **`follow` (Web App #5 — MyFeedBuddy.net).** Multi-list follow management (Close / Recommended / Imported / Custom) plus a community-scoped +10/-10 trust graph. Trust is local-to-community rather than global, deliberately avoiding the echo-chamber failure mode. Outputs feed directly into `xalgorithm` for ranking and `main_ui` for display, and consumes Backup's imported social graphs so new users do not face an empty feed.

* **`xalgorithm` (Web App #7).** Open-source clone of X's three-stage pipeline (candidate generation → ranking → heuristics) with `visibilitylib`, safety labels, toxicity downranking, Blue Verified pay-to-boost, reply deboosting, and mass-block penalties surgically removed. Replaces them with AI Ratings quality scores, Follow's trust graph, and user-tunable parameters with a "Why am I seeing this?" explanation on every post. This is value #4 in literal source code form.

* **`ai_ratings` (Web App #9).** Content quality / harm-detection layer using DeepSeek (chosen specifically to avoid documented political bias in Western LLMs). Architecture is 3-layer: rating pipeline, 5–20 user-curated communities with version-controlled rulesets, and a poster reputation engine. Hard rule: political opinions, government criticism, controversial science/medicine, satire, conspiracy theories are *never* flagged; only violence, doxxing, CSAM, spam, and pornography are. Every rating exposes the rule triggered, the AI confidence, and the prompt — Community-Notes-style accountability (#3, #4).

* **`freetok` (Web App #10).** Short-form vertical video. Same anti-censorship algorithm philosophy as `xalgorithm` applied to TikTok mechanics: every video gets a ~100-view seed, escalates through 1K→10K→100K→1M tiers purely on watch-time/replay/share signals, with no topic-based suppression. Algorithm is isolated, unit-tested, and A/B tunable — value #4 extended to video.

* **`censorship` (Web App #15).** Dual-mission. Primary: prove JFK Social itself is uncensored via a transparency dashboard (Nostr Censorship Resistance Score, relay availability, EigenTrust-derived AuthScore/MeritScore/CredScore/SybilScore). Secondary: scan X/YouTube for external suppression evidence usable in EU DSA Article 17 complaints and lawsuits. This is the only subproject with a stated direct monetization model: Premium at **$39/month**, with a guest free scan, ~30 "Pay to Enable" pills gating the free tier, and a public-share viral loop.

* **`ads` (Web App #8 — PAUSED).** Future ad network, gated on >500K MAU. Designed as a 70/30 creator/platform split, second-price auction, CPM $3–10, with Nostr-signed impression events for fraud-resistant proof of delivery, advertiser categories that political/firearms/dissident advertisers can actually buy (the value-#1 angle), and user-controlled ad density + opt-outs. Revenue projection at 500K DAU: $4.5M/yr gross, $1.35M platform.

* **`audience`.** Lightweight (spec only, no code yet). Creator-facing analytics: audience growth over time, week-over-week deltas, sentiment composition, engagement ratio benchmarks (last-2-weeks vs lifetime), and a one-click drill into Censorship. Direct support for value #2.

* **`settings`.** Recently consolidated. Pulls settings previously scattered across Main_UI, Follow, Backup, PostGlobal, ai_ratings, Admin, chrome_extensions, and server_node into one `/settings` route with sidebar nav. Critical trust feature: `DELETE /api/settings/nostr-keys/private` — users can wipe their private key from our servers (this is non-negotiable for credibility on values #1 and #3).

* **`security`.** No user UI. Owns the master security use-case CSV, automated tests against the live Go API, and the vulnerability ledger (currently 6 Critical open: hardcoded secrets, unprotected `/metrics`, no TLS, DB SSL disabled, exposed Docker ports, default credentials). Well-secured today: 131 RBAC-gated admin endpoints, super_admin gating, 3-layer law-enforcement portal auth, Redis-backed per-user publish rate limiting, 24h replay-prevention deduplication, constant-time NSFW callback secret comparison, production-gated Swagger.

---

## Users, Posts, and Media — The Core Fabric

The user-and-content fabric is where JFK Social's promises stop being marketing copy and become enforceable mechanics. Six subprojects — `USERS/user`, `algo_understand_user`, `users_automated`, `Post/post`, `Post_AI_Assess`, `Post/report_post`, plus the `Media/media_server` — own the lifecycle of every identity, every published event, and every byte of attached media. Everything else (feed, follow, trust, monetization, admin) reads from this fabric. Nothing else writes to it. That separation is what makes value 1 (free speech), value 2 (audience growth), value 3 (narrative protection), and value 7 (open content) deliverable as code rather than as a slogan.

**The user record.** `USERS/user` owns account creation, RBAC roles (`super_admin`, `moderator`, `user`, `law_enforcement`), session management, NIP-05 verification, NIP-07 extension login, key import/export, Nostr archive import, and follow-list management. Two design choices encode value 1 directly. First, the identity is a Nostr keypair the user controls — we can suspend the account on our infrastructure, but we cannot revoke the speaker's ability to keep posting from the same identity on any other relay. Second, anonymous browsing is a first-class spec (`Anonymous_Browse_No_Login`): readers do not have to register to consume content, which prevents the audience-side chilling effect that login walls create. The 39+ user specs include `User_Browses_As_Guest`, `User_Imports_Nostr_Key`, `User_Imports_X_Archive`, `User_Manages_Relay_Settings`, and `Minor_Account_Restrictions` — together they make the platform additive to a user's existing speech footprint instead of a captive replacement for it.

**The post lifecycle.** `Post/post` is the sole authority on composing, Schnorr-signing, and publishing kind 1 text, kind 6 reposts, kind 7 reactions, and kind 30023 long-form events. It owns the canonical `Post.yaml` schema that every other subproject reads but never writes. Five behaviors directly serve the numbered values:

* **Optimistic, offline-first composition** with IndexedDB queuing, exponential-backoff retry, and parallel publication to all configured relays. A post is never lost to a single relay's refusal — that is value 3 enforced at the network layer.
* **Per-relay accept/reject tracking** with detection of coordinated simultaneous blocks, silent omission, and shadow-ban patterns. Users see when their speech is being suppressed and by whom (value 3).
* **Signature and event-ID verification on every inbound event** before render, so forged or tampered content never reaches the feed — protecting the integrity of value 7 (open content remains trustworthy content).
* **NIP-10 threading, NIP-51 drafts/bookmarks, NIP-94/96/Blossom media tags** — meaning every post we publish is readable by any Nostr client, not just ours. This is the open-content guarantee of value 7.
* **Cross-platform distribution** to X, Gab, Bluesky, Mastodon, Truth Social via the `net/*` adapters. One compose action, many networks, per-network publish receipts — this is the audience-growth engine of value 2.

**AI assessment without censorship.** `Post_AI_Assess` scores every post for quality (0–10) and bad-zone risk (0–10) via DeepSeek through the `ai_ratings` service. Its goals file is explicit: it never flags political opinions, criticism of governments, satire, or controversial medical/scientific views. Political content is categorized descriptively (topic + stance) so users apply their own filters — the platform itself never penalizes a viewpoint. Prompt templates are version-controlled, admin-approved, and publicly viewable; monthly transparency reports publish scoring distributions and admin override counts. That is value 1 made auditable — the scoring system cannot be quietly weaponized.

**Reporting that cannot be weaponized.** `Report_Post` runs the full report lifecycle: 3-step reporter intake with SMS phone verification, fal.com QUIN AI advisory analysis, mandatory two-sided input (the reported poster gets a structured response slot before any decision), human-admin-only enforcement, 14-day appeal window routed to a different admin, immutable audit log, and active detection of coordinated reporting attacks (e.g., 20+ reports in 10 minutes triggers suppression of the attackers, not the target). The AI never auto-enforces. This is the operational answer to mass-flagging brigades — value 1 and value 3 simultaneously.

**Understanding users, generating signal.** `algo_understand_user` builds multi-dimensional, adapter-based reputation (trust, quality, engagement, bad-zone risk, spam risk, community standing) using on-prem ML — never a black box. Every score ships with reasoning, an audit trail, and an appeal path. High-quality, consistent posters earn organic reach (value 2) without us hand-picking winners. `users_automated` runs canary accounts across the political spectrum to detect our own shadow-bans and ranking drift before users do — a self-policing mechanism for value 3.

**Media as a portable asset.** `Media/media_server` implements the Blossom protocol for content-addressed storage, runs CSAM/illegal-content scanning at upload time (the only category that can hard-block), tiers storage between free and paid users, and — critically — lets users point at any third-party Blossom server they prefer. Posts carry NIP-94/96 metadata pointing at content hashes, not at us. If a user leaves, their media remains addressable. Value 7, encoded in the storage layer itself.

Together, this fabric is the company's defensible position: identity the user owns, posts that survive any single relay, scoring that cannot be hidden, reports that cannot be brigaded, and media that travels with the user.

---

## Open Algorithms — Why Ranking Is a Customer Promise

On a normal social network the ranking algorithm is a corporate secret. On JFK Social it is a published specification. Every weight, threshold, and decay constant that decides which post a user sees is documented, version-controlled, and open to inspection. This is not a nice-to-have. It is how we operationalize values #4 (transparent ranking) and #5 (open-source code), and it is the mechanism by which we deliver on value #3 (protect citizens from manufactured narratives). A customer who cannot inspect the algorithm cannot tell the difference between a feed and a propaganda channel.

### What the feed actually is

The feed pipeline ingests roughly 1,200 candidate posts per request and reduces them to 200, classified into three transparent buckets: Followers (50% — people you chose), Proven Diverse (35% — high-quality content from outside your graph), and New Posts (15% — small/new creators who would otherwise never surface). Each post is scored on nine factors — Performance, Freshness, Trust, Hop distance, Paid boost, Internal boost, Media type, Poster historical average, and Mute Penalty — combined under segment-specific weights, with freshness applied as a multiplier so old viral content does not crowd out new voices. Target end-to-end latency is under 200ms.

The product point is not the math. It is that the user can see the factor breakdown for any post. Why did this appear? Six numbers and a formula. No "the algorithm decided." No black box. Creators get the same view, which means a creator can diagnose underperformance instead of guessing whether they have been shadow-throttled. This is value #4 made concrete: the algorithm is a contract, not a rumor.

### Trust scoring as defense against bot farms and intel operations (value #3)

The Trust Score is a 4-pass EigenTrust computation that produces a per-author reputation on a -100 to +100 scale. It is the single most important defense the platform has against inorganic narratives. Pass 1 seeds trust from a small curated set of human admins. Pass 2 propagates one hop. Pass 3 runs iterative EigenTrust across the follow graph with a 0.45 weight on paid accounts (because payment is a costly anti-sybil signal) and 0.55 on organic. Pass 4 rewards merit — measurable engagement quality and the trust of who is engaging. A post-pass mute penalty reduces scores for accounts the community has rejected, but only when the muters themselves carry comparable trust — a critical safeguard against coordinated mute brigades being weaponized against legitimate dissidents.

The business consequence: a freshly-stood-up bot farm of 10,000 accounts with no history, no paid status, no trusted followers, and no engagement track record cannot move the feed. Their trust scores cluster near the floor of 20. Their posts lose to a real human's post in the Performance × Trust × Hop calculation every time. An intelligence operation cannot buy reach the way they buy reach on closed platforms, because reach is computed from a graph the operation does not control and from signals (paid status, account age, follower trust quality) that cost real money or real time to fake at scale.

A "blockade rescue" detector watches for 50+ mutes inside 10 minutes coming predominantly (70%+) from external non-paid accounts and zeroes the mute penalty when it fires. That is value #3 written in code: a coordinated takedown campaign against a controversial voice does not work here.

### Muted-content detection as a public-interest exposé

The `Muted_Existing/crawl_to_collect` and `Muted_Existing/train_to_identify` subprojects do something no incumbent platform will ever do: they crawl X, Meta, YouTube and adjacent platforms, measure engagement velocity against per-account baselines, and label posts that were demonstrably throttled or shadowbanned. That labeled corpus then trains classifiers that separate two very different things — genuinely harmful "bad zone" content (threats, CSAM, illegal activity) from "political suppression" (legal speech buried for ideological reasons).

For customers this becomes a public proof artifact. JFK Social can publish, with data, which topics other platforms are suppressing this week. That is marketing and it is journalism, and it is only credible because the training pipeline, labels, and models are open (values #5 and #7). Internally the same classifiers let us guarantee we are not accidentally re-importing someone else's censorship — when we ingest from Nostr, Bluesky, Mastodon and Threads, we know the difference between "this was removed for being illegal" and "this was removed for being inconvenient."

### Stress verification — keeping the promise under load

A transparent algorithm that breaks at 10,000 concurrent users is not a transparent algorithm; it is a marketing claim. The `stress_verify` subproject runs nightly regression suites, scalability tier testing, error-rate breakpoint detection, memory-leak detection, network-partition simulation, and SLA-breach alerting against the same ranking and trust code that serves production. Every ranking config change is regression-tested before it ships. This is how value #4 stays true after the company scales: the published algorithm is the algorithm that actually runs.

### Why openness is itself the product

Mainstream platforms ask users to trust that the algorithm is fair. We let users verify. The ranking config is hot-reloadable JSON. The trust math is documented. The censorship-detection training data is collected from the open web. The whole pipeline is auditable code (value #5) running against open protocols (value #6) on open content (value #7). For a CEO/CTO buyer evaluating where to put their audience (value #2), the differentiator is not "we promise we won't censor you" — every platform says that. The differentiator is: here is the source, here is the score, here is the proof, run it yourself.

---

## Open-Standard Network Backbone — Portable Identity, Portable Audience

JFK Social is not an island. We are a free-speech client and aggregator that speaks the open protocols other networks already speak, so a customer's identity, posts, follows, and audience can live on infrastructure we do not control. This is the practical expression of value #6 (open standards) and value #7 (open content): if we ever turn evil, get bought, get sued out of existence, or simply stop shipping, the customer keeps everything that matters. They do not have to migrate. They were never locked in.

The backbone is **Nostr** (Notes and Other Stuff Transmitted by Relays). Every JFK Social account is, at its root, a Nostr keypair: an `npub` (public) and `nsec` (private). Posts are signed `kind 1` events; likes are `kind 7`; reposts are `kind 6`; follow lists are `kind 3`; mute lists are NIP-51 `kind 10000`. None of these live in our database as the source of truth — they live on relays, and any Nostr client (Damus, Amethyst, Iris, Snort, our own UI) can read and write them with the same keys. We support browser signing via NIP-07 and remote signing via NIP-46 so users never have to paste a private key into our web app to prove this portability. Account recovery from us is unnecessary because there is nothing to recover — the keys are the account.

The `net/nostr/` subsystem has four moving parts. **`relays/`** maintains the curated relay list, NIP-11 capability detection, health monitoring, and selection strategy — users connect to many relays at once so no single operator can silently drop their content. **`our_test_relay/`** is an internal relay we run for controlled testing and as a known-good publish target. **`test_static_content/`** seeds reproducible event sets for integration tests. And **`police_others_relays/`** is the relay police force: it continuously pings 100+ external relays every 15–30 minutes, measures latency and uptime, queries `kind 11` NIP-11 info documents, and detects NIP-13 proof-of-work shakedowns. More importantly, it runs automated test users with varied political personas from different home relays, then watches whether each monitored relay actually propagates those posts. The four detected failure modes — **shadow ban**, **explicit block**, **selective relay**, and **delayed relay** — are scored, timestamped, and exposed in a relay profile page so customers can pick relays based on transparent censorship data rather than marketing claims.

The companion subsystem is **`muted_people/`**, our NIP-51 mute-list aggregator. It crawls `kind 10000` events across the relay network, counts distinct muters per pubkey, classifies *why* an account is muted (spam, bots, harassment, political), and explicitly distinguishes **quality-motivated mutes** from **censorship-motivated mutes**. A coordinated-muting detector watches for spikes — many new mutes of one account in a short window from low-activity coordinated accounts — and flags suspected weaponized mute campaigns for admin review rather than auto-acting on them. Targets of such campaigns can file a defense report. Aggregation is privacy-preserving: public APIs return counts and categories, never the identities of the muters. This converts a hostile community feature (mass-muting as a censorship tool) into a transparency feature.

Beyond Nostr, JFK Social ships net adapters for the three other open or semi-open networks customers care about, all documented in `net/docs/adapter_comparison.md`. **`net/bluesky/`** speaks the AT Protocol — DIDs, PDS instances, the Jetstream firehose, OAuth+PKCE — and treats a Bluesky handle as a first-class connected identity that publishes and reads `app.bsky.feed.post` records. **`net/mastodon/`** speaks ActivityPub and the Mastodon REST API, with per-instance OAuth client registration so users can bring two Mastodon accounts on different instances if they want. **`net/threads/`** speaks Meta's Threads Graph API plus ActivityPub federation; we publish out to Threads with the two-step container/publish flow and read public profiles inbound, while being honest about Threads' lack of API support for likes, follows, blocks, and DMs. The **Connected Adapters** settings model treats every external account as a discriminated-union record in an ordered list — Nostr keypair, Bluesky DID+OAuth token, Mastodon per-instance client+token, Threads long-lived token — so users add networks in any order, at any time, in any quantity, with per-adapter inbound and outbound toggles.

The compound effect: a JFK Social customer can publish one post and have it land on Nostr, Bluesky, Mastodon, and Threads simultaneously, with the adapter respecting each network's character, image, and video limits. Their identity is their Nostr keypair, persisted across clients. Their audience is the union of every network they connect, none of which we own. If JFK Social vanishes, their Nostr followers remain reachable via any other Nostr client, their Bluesky DID still resolves, their Mastodon instance still hosts their toots, and their Threads account still belongs to Meta — exactly the same as before they joined us.

To make this guarantee credible we publish the platform itself as open source at **github.com/ACT3ai**: **`jfksocial_server`** (the Go/Gin backend), **`jfksocial_frontend`** (the React shell), and **`jfksocial_devops`** (AWS and self-hosting install instructions). The `open_source/` subproject runs a monthly one-way sync from our internal repos to the public ones, gated by credential, security, and absolute-path scanners. Anyone can fork the stack and stand up a competing instance — including a "JFK fork" operator paying revenue share under our license. Portability of identity, portability of audience, and portability of the platform itself: that is what values #6 and #7 mean in code.

---

## Browser Extensions — Customers Keep Their Own History

A social-media account is a hostage. The platform owns the timeline, the follower list, the engagement counts, and the delete button. When a user is suspended, shadow-banned, or quietly suppressed, years of writing and the audience built around it can disappear in a single moment with no notice and no export. JFK Social's browser extensions exist so that never happens to our customers. They put a copy of the user's posting history — and the public web they read — on the user's own hard drive, where no platform moderator and no future court order against a third party can reach it.

The product is a pair of Chrome Manifest V3 extensions. The first, **Posts Download**, reaches inside X/Twitter (and over time YouTube, Instagram, TikTok) and pulls out the user's own posts, replies, follower list, and following list. It scrolls the user's profile timeline using human-paced delays (two to five seconds between scrolls) and extracts every visible post directly from the rendered DOM, so it captures what the user actually sees — including dynamically loaded content that a normal HTTP scrape would miss. Backups run on a schedule the user chooses (6h, 12h, 24h, or manual) and use smart date-overlap detection: on a second run the extension only scrolls back two months past the last captured date, verifies the overlap, then stops. That keeps backups stealthy enough to avoid anti-scraping trip-wires while still guaranteeing nothing falls through the gap. The result lands as a human-readable YAML file in the user's Downloads folder, named `x_backup_{handle}_{date}.yaml`, merged chronologically with any prior backup and de-duplicated by post ID. The user can open it in any text editor, grep it, diff it, or hand it to a lawyer. It is their record of what they said.

The second, **Download Pages**, is the general-purpose archival counterpart. As the user browses, it captures the complete rendered HTML of each page — including content loaded by infinite scroll, lazy-loaded images, and async fetches — and writes it to `~/.config/Chrome_EXT_web_download/sites/{domain}/{url_path}.html`, organized by domain so anything captured from x.com is together, anything from a Substack is together, anything from a news outlet is together. Capture is scroll-driven, not button-triggered: on an infinite-scroll feed the extension automatically scrolls until no new content appears (or the configured max depth is hit), then snapshots the stabilized DOM. A metadata comment is injected into the HTML head with the original URL and capture timestamp, and an optional `.meta.json` sidecar records file size and element counts for downstream tooling.

Both extensions are governed by a single local YAML config (`config.yaml`) with two modes: `allow` (capture everything except sites in the `block_list`) or `block` (capture only sites in the `allow_list`). The default on install is `block` with empty lists — nothing happens until the user opts in. URL patterns support bare domains, full URLs, and wildcards like `github.com/ACT3ai/*`. Sensitive sites (banking, healthcare, internal company tools) stay off the capture path because the user, not us, decides what gets saved. There is no server round-trip in the capture pipeline; the YAML config lives on the user's machine, the captured files live on the user's machine, and the extension talks to the JFKSocial backend only for optional identity and for surfacing aggregate censorship metrics in the popup dashboard.

The downstream payoff is Marketing AI (`~/BGit/act3/marketing_soc_media_ai/`), a separate web app that reads the same Downloads tree the extensions write. Because every captured file is dated, domain-scoped, and DOM-complete, Marketing AI can replay the user's reading history, find which posts performed, surface the heroes whose content keeps getting throttled, and feed material into the Heros and Censorship subprojects without any platform's permission. Pair that with the extension's monitored hero accounts and you get an automated rebroadcast path: a censored voice is captured at the source, copied to local disk, and amplified through JFK Social before the original is taken down.

This is value #1 made concrete — a user banned tomorrow on X still has every post, every follower handle, and every page they cared about, sitting in their own Downloads folder ready to republish to Nostr, Bluesky, or Mastodon through our network adapters. It is value #7 made enforceable — content the user has touched belongs to the user in an open, inspectable format (YAML and raw HTML), not locked behind another company's API.

---

## Admin & Content Moderation — Operating the Platform Responsibly

JFK Social is free-speech-first (value 1), but free speech is not lawlessness. The Admin panel and Content Moderation stack are built around one principle: **preserve lawful speech; route only genuinely illegal material (CSAM, NCII, court-ordered disclosures) through proper legal channels**. The stack is open-source (value 5) and instrumented for transparency and operator accountability (value 4).

### Admin Panel — Platform Operations

The Admin panel (`/admin/`, Go + Gin, React 19 + Vite + Zustand + DaisyUI shell, JWT HS256) is the operator's console.

- **RBAC roles**: `super_admin`, `legal_counsel`, `csam_reviewer`, `le_coordinator`, `compliance_officer`, `moderator`, `user`, `law_enforcement`. Sensitive surfaces (NSL/FISA Tracker, evidence access, emergency switches) are hidden from roles that lack need.
- **User management**: ban/unban with reason tracking, temporary-ban expiration, search by username/email/pubkey. A ban only stops new posts on JFK Social — it never reaches into third-party Nostr/ActivityPub/Bluesky relays (value 6).
- **Emergency Off Switches (super_admin only)**: five independent kill switches — site offline, block logins, image viewing, video viewing, media uploads — each with confirmation, required reason, sub-millisecond Redis enforcement, immutable audit. A CEO-level circuit breaker.
- Feature flags, rate limits, maintenance mode, NCMEC/EU DSA compliance reports, per-adapter cost analytics, relay health.
- **User-facing transparency (value 4)**: V9 ships a user view of their ban status, flagged-content count, and the *reason* any post was removed. No shadow bans.

### CSAM Adapter Engine — Pluggable, Parallel, Failover-Tolerant

Moderation is an **adapter engine** so vendors can be swapped and run in parallel. Three adapters under `content_moderation/adapters/`:

- **PhotoDNA** — Microsoft hash-matching against NCMEC, IWF, Thorn Project Protect databases. Known CSAM, near-zero false positives.
- **Thorn** — Thorn Safer AI for novel CSAM and grooming. Thorn Safer Predict flags AI-generated synthetic CSAM, treated as legally equivalent to real CSAM under the ENFORCE Act, always with human confirmation before NCMEC submission.
- **DetectNudity** — Scores nudity in images/video frames for content-warning gating (not legal reporting).

Every upload runs through enabled adapters **before content is publicly served** (quarantined). Adapters run in parallel; a timeout triggers automatic failover. Credentials are AES-256-GCM encrypted at rest.

### Severity Tiers — The Moderation Decision Tree

Every detection is classified into four tiers:

- **Tier 1 (Confirmed CSAM)** — hash match or human confirmation. Fully automated atomic transaction: preserve evidence to immutable S3 (SHA-256 + chain-of-custody) → file NCMEC CyberTipline report → remove content → terminate account. **User is never notified** (18 U.S.C. § 2258A).
- **Tier 2 (high-confidence grooming/exploitation)** — restrict, human review queue, 2-hour SLA.
- **Tier 3 (borderline)** — human review queue, 24-hour SLA, content warning.
- **Tier 4 (low-signal)** — pattern monitoring, no enforcement.

This is where the free-speech discipline lives: **only Tier 1 auto-removes**. Tier 2/3 require trained `csam_reviewer` humans who can downgrade, clear, or escalate. Lawful but unpopular speech never enters this pipeline.

### Law Enforcement Portal — Legal Channel, Not Backchannel

`https://le.jfksocial.com` is a standalone secured app — separate from the public network — implementing the **three-tier disclosure model** of 18 U.S.C. § 2703:

- **Tier 1 Subpoena** → subscriber info only (display name, email, signup date, login IPs)
- **Tier 2 Court Order § 2703(d)** → IP logs, session metadata, posting history
- **Tier 3 Search Warrant** → stored posts, media, DM metadata. Encrypted DM bodies (NIP-04/NIP-44) cannot be produced — the platform holds no decryption keys.

Tier boundaries are enforced: no instrument unlocks data above its level. Six request types: Subpoena, Court Order, Search Warrant, Preservation Hold (§ 2703(f), 90+90 days), Emergency Disclosure (§ 2702(b)(8), 1-hour SLA with callback to a *verified* government number — never the one on the request), and CSAM/NCMEC follow-up. A five-tier officer trust model and ORI-verified agency registration gate access; civil litigants register separately with mandatory 7-day user notification before any data is produced.

### Evidence Preservation, Audit, and Dual-Custody

- **Evidence first, enforcement second** — content is preserved to immutable S3 with SHA-256 hash *before* any removal (REPORT Act 2024, 1-year minimum retention).
- **GPG-encrypted evidence packages** in a structured directory (account / posts / media / metadata / social graph / engagement / chain-of-custody) with a records-custodian affidavit self-authenticating under FRE 902. CSAM packages use **triple-layer encryption** (two GPG layers + AWS KMS) with **dual-custody** — neither key holder decrypts alone.
- **Immutable audit log** (`le_audit_logs`) — append-only, no UPDATE/DELETE. Every CSAM evidence access requires two separate admin accounts (dual-auth).
- **Gag orders (§ 2705(b))** tracked per-request; user notification suppressed until expiration then auto-fires. Default *without* a gag order is user notification — aligned with values 1 and 4.

### Transparency and Wellbeing

Biannual reports at `/transparency` and quarterly at `/legal/transparency` publish aggregate stats only (Meta/X/TikTok/Bluesky format). California AB 1394 biannual independent CSAM-detection audits are publicly disclosed. CSAM reviewers rotate off after exposure limits and have mandatory EAP support.

### Consistency With Our Values

The architecture narrows what can be removed and who can remove it. Only NCMEC-mandated CSAM auto-removes; everything else routes to human review or court-validated process. Bans are local — never reaching into open Nostr/ActivityPub/Bluesky relays (value 6). The adapter engine is open-source (value 5) and instrumented so the public can audit *how* moderation decisions are made (value 4). JFK Social's hybrid Nostr-plus-PostgreSQL design is the only place pubkeys link to real identities, and the LE Portal is the *only* disclosure channel — under judicial process, with cryptographic custody. Maximum protection for lawful speech (values 1, 3, 7), minimum surface for unlawful conduct, zero tolerance for shadow censorship.

---

## Business Model, Pricing, and Legal Posture

JFK Social is a subscriber-funded company, not an advertiser-funded one. The pricing philosophy follows directly from value 1 (free speech): the entity that pays us is the entity we answer to, and if that entity is an advertiser then advertiser preferences will eventually overwrite user speech preferences. We refuse that trade. The customer pays, the customer is served, the customer's lawful speech is protected.

### Revenue streams (today and on the roadmap)

1. **Premium subscription — the primary revenue line.** Two tiers, both billed via Stripe with recurring monthly billing, webhook-driven activation, and graceful end-of-period cancellation. Standard Premium is $19.99 (often described internally as "$19/mo"). Pro Premium is $39.99. The natural conversion trigger is the media storage cap: free accounts get 10 MB, Standard Premium gets 1 GB, Pro Premium gets 10 GB+. Hitting the cap during posting opens the upsell flow — a transparent, behavior-driven gate rather than a paywall on speech itself. Premium benefits also include higher-priority AI categorization queue, a censorship-visibility dashboard (which posts saw reach collapse, which relays dropped the post, expected vs. actual reach), and a 1.5x feed-ranking boost from xalgorithm. The boost is a quality signal — paying users are presumptively serious, not bots — and is disclosed in the transparent ranking docs (value 4).

2. **Influencer rev-share.** Influencers route signups through a referral portal and earn ~30–40% of the SaaS fee on referred premium accounts (exact curve, cap, and decline ladder are open policy items in `legal/license_influencers/needs.mdx`). Default v1 is U.S.-only, first-touch attribution, 30-day window, $50 minimum payout, KYC delegated to the payout processor (Stripe Connect / Tipalti). The legal team has already enumerated the OFAC/BIS/EU sanctions screening cadence, fraud clawback, household-collusion definitions, and PEP handling.

3. **Lightning zaps (NIP-57).** Users tip each other directly via the Lightning Network. JFK Social operates the Lightning-address infrastructure (LNURL signing keys, reserved-handle list, abuse queues) and may take a thin operational margin, but zaps are creator-to-creator value transfer first and a revenue line a distant second. The zaps SPECs cover 300+ admin/abuse use cases (forged receipts, wallet impersonation domains, malicious relay delisting, refund of disputed zaps) — the infrastructure is real, not aspirational.

4. **JK4 fork licensing.** Operators who run our open-source stack ("JK4 customers") owe no rev-share below $500K in social-network-attributable revenue. Above that threshold they share back. They must follow local law, run a defensible CSAM filter, and honor "reach symmetry" — they cannot give JFK Social users (or JFKSocial.com paying users) worse reach than they give their own users at the same tier. This protects our customers when our code runs elsewhere and reinforces value 5 (open source) without surrendering the user.

5. **Ad network — paused.** Web App #8 (`WebApp/ads/`) is specified but explicitly paused. We will not build an ad network until scale justifies it AND we can prove the ad model does not compromise values 1, 3, and 4. The default revenue answer is subscriptions; ads remain a possible future supplement, never the master.

### Legal posture: free-speech-first AND lawful

JFK Social runs three distinct license documents — `license_consumer`, `license_influencers`, `jfkfork_license` — plus a single privacy policy derived from the X/Twitter baseline with Nostr deltas (`legal/privacy/decisions.md`, `legal/privacy/NOSTR_needs.md`). Legal entity is ACT 3 AI, Inc., Bastrop, TX. The consumer license explicitly reserves the right to treat narrative-control campaigns by governments, intelligence services, and well-funded political operations as inauthentic activity — that defense is contractual, modeled on X's enforceable ToS pattern, and serves value 3 (protect users from narrative control).

The compatibility argument is straightforward: free speech is lawful speech. Genuinely illegal content — CSAM, credible threats, court-ordered takedowns — is not speech we protect, and routing it through proper channels prevents it from being used as a pretext to silence anything else. Concretely:

* **CSAM REPORT Act (18 USC 2258A).** Layered scanning adapters (PhotoDNA, Thorn, AI nudity detection) flag at upload time on the media server. Detection auto-files a CyberTipline report to NCMEC. Evidence is preserved with dual encryption — a PGP envelope plus S3 SSE-KMS — into a dedicated restricted bucket with a 1-year lifecycle floor and no early-delete. If S3 is down, evidence writes to a local PGP+AES-256 encrypted fallback partition; content stays blocked either way. The whole chain is logged into a tamper-evident hash-chained audit ledger.

* **Law-enforcement portal.** A dedicated Go portal under `Internal/Legal/portal/` accepts legal process and enforces a strict tiered disclosure model: Tier 1 (subpoena → subscriber info only), Tier 2 (2703(d) court order → +session and relay metadata), Tier 3 (warrant → +stored content). The system prevents over-disclosure at the data layer. Encrypted DM content (NIP-04/NIP-44) is non-producible and the platform says so in a cover letter — that is an architectural guarantee, not a policy choice. NIP-46 remote-signer users' private keys never touch our servers. By default the user is notified; gag orders suppress notification per their terms.

* **EU DSA.** Article 17 suspension notices, Article 21 out-of-court appeal routing, Article 22 trusted-flagger handling, systemic-risk assessment and mitigation, and an appointed EU legal representative are all enumerated in `legal/Product_Management/specs/`. DSA compliance does not require us to suppress lawful speech — it requires us to be transparent about what we do and to give EU users a documented appeal path. Both reinforce value 4.

### How the marketing positioning falls out

Marketing (`marketing/plan_a/`, `marketing/needs/`) is still being drafted, but the positioning writes itself from the model above: we are paid by you, so we work for you; we follow the law because lawful evidence handling is what lets us refuse the censorship pretext; our ranking is transparent and our protocol is open (values 4, 5, 6, 7) so you can verify both claims. Competitors like Primal (Toronto; Nostr + Lightning; Ten31/Hivemind seed) validate the Nostr+zaps thesis; our differentiation is the premium tier funding a real legal, moderation, and audit stack rather than relying on ad revenue or grant funding.

---

## Sovereign Deployment — On-Prem AI, User-Run Server Nodes, Self-Hostable Clients

JFK Social is not a single website running on a single company's servers. It is a stack that customers can take home, install on their own hardware, and run independently. This is a deliberate engineering posture, and it is the structural reason the platform cannot be silenced the way legacy social networks can. It also underwrites our customer-value promises 1, 3, 5, 6, and 7 — free speech, protection from manufactured narratives, open-source code, open-standard backbones, and open content — and it is a real revenue stream and a strategic moat against competitors who only know how to ship a centralized SaaS product.

### On-Prem AI — Customer-Controlled Inference, Censorship-Resistant by Construction

The `onprem_ai` subproject ships JFK Social's AI moderation and post-rating stack as software a customer organization can install on hardware it owns. It is composed of three pieces: `Install_OnPrem` (a guided installer that profiles hardware and downloads quantized model weights), `Run_OnPrem` (a desktop Server Node Admin UI distributed from `jfksocial.com/server-node` as Windows `.exe`, macOS `.dmg`, and Linux `.AppImage`), and an `Adapters` layer (DeepSeek, Qwen, Llama, plus more) selected by task type through a uniform interface and hot-reloaded from YAML.

The customer value is concrete:

- **AI sovereignty.** All inference for `ai_ratings` and content moderation runs on ACT3ai- or customer-controlled hardware. There is zero dependence on OpenAI, Anthropic, or Google APIs — which means no third-party vendor can throttle, deplatform, or politically tune the moderation that decides what stays up on the network. This is the infrastructure-layer expression of value 3 (protection from manufactured narratives) and value 1 (free speech).
- **Politically neutral models by choice.** The default catalog (`models_list.csv`) is curated to Chinese open-source LLMs — DeepSeek R1, Qwen3, Llama variants — specifically because they do not carry the Western political training biases baked into the major US frontier models. Prompt templates are bundled in-repo and are designed to protect satire, political criticism, and dissent while flagging only genuine bad-zone content (CSAM, doxxing, incitement, spam).
- **Hardware autodetection.** The installer profiles CPU, GPU, RAM, VRAM, and thermal capacity, then auto-selects model size, quantization (4-bit / 8-bit), and parallelization. Two reference platforms are first-class: Mac Studio M3 Ultra (512 GB unified memory, Apple MLX + Metal, capable of 480B-parameter models at 4-bit) and NVIDIA RTX 5090 (32 GB GDDR7, CUDA / Blackwell Tensor Cores). Non-technical operators are never asked to hand-tune inference settings.
- **Cost economics that legacy AI moderation cannot match.** Cloud API moderation at platform scale runs $0.01–$0.10 per request. On-prem inference is effectively zero marginal cost after hardware, which is what makes free-speech-grade moderation of millions of posts per day economically viable in the first place. It also caps customer risk: a customer's moderation cost cannot be weaponized by an upstream price hike.
- **Distributed compute network.** Each Server Node authenticates to a MASTER orchestrator at `wss://master.jfksocial.com` via 256-bit machine-generated API keys, registers its hardware profile and active model, receives batched rating jobs, processes them locally through llama.cpp, and returns structured YAML. Volunteer hardware therefore becomes JFK Social's moderation backbone — a model no centralized competitor can copy without rebuilding its trust structure from scratch.
- **Operational hardening.** Adapters enforce circuit-breaker patterns on repeated failures, sanitize inputs against prompt-injection, queue burst traffic instead of dropping it, separate cold-start from steady-state SLA, and fall back through a configurable priority chain. Benchmarks (prompts/minute, p95 latency, tokens/sec, VRAM utilization, cost/M-tokens) gate registration with the MASTER server.

### Server Node — A Social Network That Runs on the Customer's PC

The `server_node` subproject (Web App #11) is the user-installable backend for the entire social network. It is the bridge between decentralized protocols (Nostr primary, plus Mastodon, Bluesky, Gab, RSS adapters) and the user-facing frontend. It pulls posts, caches them locally in SQLite/PostgreSQL with a 7-tier priority-eviction system, serves combined feeds via REST API (<50 ms cached, <200 ms computed), and — at the operator's option — runs Nostr relays and a public-facing frontend.

This is what decentralization actually looks like as a shipped product:

- **Three operating modes the Power User chooses.** Private (localhost or LAN — personal use, family/friends served from `192.168.x.x`), Public Relay (`wss://relay.example.com` with configurable PoW, rate limits, and acceptance policies), and Public FrontEnd_JS (the operator hosts `https://social.example.com` with Let's Encrypt auto-cert, serving the whole web UI to strangers).
- **No single point of failure.** Every Public FrontEnd_JS instance is another door into the network. If one hosting provider, registrar, or jurisdiction takes a site down, the others remain. This is value 6 (open-standard backbones) and value 7 (openness of content) made operational at the infrastructure layer.
- **Consumer-hardware budget.** Target: <512 MB RAM, <25% CPU on a normal desktop, 1000 req/s on cached feeds, 99%+ uptime as a background service via launchd / systemd / Windows Service. Cross-platform from day one.
- **Multi-user from one node.** Default 10 users per node, so a Power User can serve personalized feeds to a household, an extended family, or a small community. This converts one technically capable person into an access point for many non-technical citizens — a massive lever for value 2 (audience growth).
- **Family Network Admin and Public Relay Operator personas.** Documented use cases cover adding users, importing per-user follow lists, switching from private to public relay, configuring acceptance policies, monitoring bandwidth, and exporting node statistics.

### Front-End — Static, Portable, Mirrorable, Uncensorable by Distribution

`frontend_js` (Web App #14) is intentionally a static, lightweight TypeScript SPA — target <2 MB initial bundle — delivered as versioned static files (`/frontend/v1.2.3/`) deployable to S3, any CDN, any Server Node's static file server, or any third party that wants to mirror it. There is no build step a customer needs in order to host the consumer UI; just serve the directory. It speaks REST to whichever backend the operator points it at (cloud, on-prem, or a Server Node), opens a `/ws` WebSocket for real-time invalidation, and supports a "synthetic user" mode so a first-time visitor can browse content without authenticating — friction-free onboarding without surrendering the privacy posture. PWA / offline-first behavior means a network outage or a jurisdictional block does not destroy the customer's session. Because it is static and link-shareable, app-store gatekeepers cannot remove it from circulation.

### Testing Posture — Real Browsers, Real Flows

The `testing` subproject is JFK Social's automated browser test surface (Playwright). The current assessment flags concrete gaps — placeholder tests, wrong baseURL, duplicate Playwright infrastructure between AI_Coding and PlayWright_JFK, missing CI, missing accessibility tests — and the corrective direction is unambiguous: all tests target the real platform ports (8000 consumer, 8001 admin, 8002 legal), use stored credentials from `.env`, exercise actual JFKSocial pages, and gate releases through GitHub Actions. A free-speech platform cannot afford regressions in the moderation, ranking, or auth surfaces it ships, so investing in real E2E coverage is investing directly in customer trust.

### Why This Is Also a Business Moat

On-prem and self-hosting are not just a values play — they are a revenue stream and a competitive moat. Defense-grade and law-enforcement-grade customers, sovereign-jurisdiction operators, regulated industries (EU DSA, GDPR data-residency), and large communities with their own compute will pay for a sovereign deployment that no incumbent social network sells at all. We can sell the same source code as a hosted SaaS, a turnkey desktop Server Node, and a fully sovereign on-prem stack — three price points off one codebase. Competitors who only ship a centralized SaaS cannot follow without rebuilding their entire trust, moderation, and AI pipeline from scratch.

---

## Engineering & Infrastructure — Built So We Cannot Be Pressured Into Censorship

Most platforms that promise free speech (value 1) collapse the moment a government, payment processor, or hosting provider applies pressure. The reason is structural: their architecture has a single throat to choke. JFK Social's engineering choices are designed so there is no single throat — every layer of the stack assumes adversaries will try to take us down, and we keep operating anyway. That same architecture is what lets us grow audience globally (value 2), resist hostile narratives (value 3), and prove our ranking is honest (value 4).

**Multi-region relay clusters — censorship-resistant by topology.**
We run on Nostr, where messages are signed by the user's key and replicated across independent WebSocket relays. We operate a primary relay and a backup relay in a different region, and we participate in the broader public relay mesh. If our primary is seized, blocked at DNS, or hit with a court order in one jurisdiction, the post still exists on relays in other jurisdictions and on the customer's own published-to list. There is no "JFKSocial Inc." database to subpoena. That is what censorship-resistance actually looks like in code — and it is the only credible way to deliver value 1 at scale. It also means a customer's audience (value 2) is not hostage to any single piece of infrastructure we own.

**PostgreSQL 13 with PostGIS — boring, durable, queryable.**
For our own application state (accounts, sessions, settings, trust graph, ranking signals) we use PostgreSQL 13 with PostGIS via GORM, with a 300-connection pool and JSONB for flexible schemas. We picked it because it is the most battle-tested OLTP database on Earth, has full ACID guarantees, and has a 25-year track record of not losing data. For a platform promising customers we will keep their content (value 7) and never quietly disappear them, "boring and correct" beats "novel and fast." PostgreSQL also gives us the JSONB and GIN indexing needed to store Nostr-shaped event data with the queryability our ranking algorithms (value 4) require.

**Backup strategy — point-in-time recovery, cross-region, encrypted.**
Daily full pg_dump backups, continuous WAL archiving to S3, and cross-region replication of the media bucket. This produces point-in-time recovery to any second in the retention window. The customer-facing promise is simple: if a data center burns down, if a disk array corrupts, or if a bad migration ships, the customer's posts, follows, and identity survive. A free-speech platform that loses customer content is no better than one that censors it; backup discipline is what makes value 7 (open content stays with the customer) credible.

**CDN strategy — AWS CloudFront with 400+ edge PoPs.**
CloudFront fronts all media with 1-year TTL on immutable assets, HTTPS-only, and free S3-to-CloudFront transfer. Practical effect for the customer: a creator in Brazil uploads a video; a viewer in Indonesia gets it from a nearby edge in under 100ms. This is what "grow your audience globally" (value 2) actually requires. Without a real CDN, a censored creator who lands on our platform sees their reach collapse because their content is slow everywhere. With CloudFront, they get the same delivery quality as X or YouTube — without the censorship.

**DDoS protection — defense-in-depth because DDoS is censorship.**
We treat DDoS as a censorship tool, not just a reliability problem. State actors and hostile coordinated groups use volumetric attacks to silence platforms they cannot legally shut down. Our defense is layered: AWS Shield Standard plus CloudFront anycast at the edge absorbs volumetric floods; Nginx and application-layer rate limits cap per-IP and per-key abuse; WebSocket connections enforce max-connections-per-IP, max-subscriptions, and filter-complexity limits; and during attack conditions we can require Nostr proof-of-work (NIP-13) at the relay so cheap event-flooding becomes computationally expensive. Plus the geographic distribution of relays itself is a DDoS defense — knock one region off, the others keep serving. This is the infrastructure behind value 3: hostile narratives cannot drown us off the network.

**Key management — the customer owns the identity, period.**
Nostr identity is a secp256k1 keypair. The customer holds nsec; we never need it. We support NIP-07 browser extensions (Alby, nos2x) and NIP-46 remote signing for users who want their keys never to touch the client. We can ban a user from our specific relay, but we cannot delete their identity, take away their followers, or stop them from posting elsewhere — because their identity is math, not a row in our database. This is the cryptographic spine of value 1 and the reason competitors built on usernames-and-passwords can never offer the same guarantee.

**Media storage — S3 with content-addressed keys.**
AWS S3 with 11-nines durability, integrated with CloudFront via Origin Access Identity. Media keys are hash-based, so files are immutable and cache-friendly. Lifecycle policies push cold content to cheaper tiers. The future migration to Blossom (Nostr-native content-addressed media) means a customer's media will be retrievable from any compatible host — another anti-lock-in protection that backs value 6 (open standards) and value 7.

**Monitoring — Prometheus + Grafana + Loki, transparent metrics.**
We instrument the full stack: HTTP rate and error rate, p50/p95/p99 latency, PostgreSQL connection pool depth, Redis ops, Temporal queue depth, container resource usage. Alerts fire on error-rate spikes, latency regressions, and connection-pool exhaustion before customers feel them. Beyond reliability, our open-source posture (value 5) means these metrics — and the ranking signals they capture — can be opened up so customers and researchers can verify the platform is behaving the way we say it is. Transparent infrastructure is the prerequisite for transparent ranking (value 4).

**WebSocket API — open Nostr protocol, no proprietary lock-in.**
All real-time communication uses Nostr's published WebSocket message format (EVENT, REQ, EOSE, CLOSE, OK, NOTICE) per NIP-01. Any compliant client — Damus, Amethyst, Iris, Coracle, Snort, Gossip, or a client we have never heard of — can read and post a customer's content. If JFK Social as a company ever degrades, the customer's audience and content are reachable from dozens of other clients on the same protocol. That is value 6 (open standards) operationalized: we earn the customer's trust every day by being replaceable, not by locking them in.

Taken together: the multi-region relays make us takedown-resistant, the database and backup choices make us durable, the CDN makes us globally fast, the DDoS layers make us hard to silence, the key management makes the customer's identity portable, and the open WebSocket protocol makes the platform itself replaceable. None of those are technology bragging points — they are the engineering preconditions for keeping the seven customer-value promises under sustained adversarial pressure.

---

## How JFK Social Ships Faster — The AI-Driven Engineering Operating System

JFK Social is not just a product; it is a product factory. The reason a small team can credibly ship an 18-subproject, 252-page social network — covering feed ranking, trust scoring, CSAM moderation, four federation adapters, premium monetization, an admin console, a law enforcement portal, and a browser extension — is that the company runs on an AI-driven prompt-engineering operating system. This system is itself a structural competitive advantage and is the engine that delivers on value #5 (open-source code) at a velocity legacy social networks cannot match.

**The Six-Layer Pyramid and AI Pipes.** Every subproject is structured as a six-layer pyramid: (1) docs at the top describe what personas need, (2) Use_Cases.csv enumerates scenarios, (3) a per-subproject master SPEC bridges product management into engineering, (4) code is written into the Go backend (AI_Coding) and React shell (Front_AI_Coding), (5) Playwright end-to-end tests exercise the running product, and (6) unit tests pin down individual functions. Work moves down the pyramid through AI Pipes — skills with a defined READ end and WRITE end (e.g. pipe_docs_2_use_cases, pipe_use_cases_2_code, pipe_docs_2_code, all stored in skill_storage/). Each pipe knows two things: how to absorb its input layer and how to produce depth at its output layer. This means abstract product intent flows mechanically into shipped code and tests, with no single AI run forced to absorb the entire product at once. The pyramid plus pipes is how 252 pages stay coherent across subprojects without a 200-engineer org.

**The Prompt-Driven Development Convention.** Every recurring engineering or product-management task is captured as a versioned prompt file under prompts/ — over 40 active prompts plus an archive of 30+ historical grow_n.txt and p_*.txt files documenting how the product evolved. Prompts follow a strict convention: plain text, no markdown headers, ROOT_DIR variable at the top with every path expressed as {ROOT_DIR}/relative/path so any teammate can run the same prompt on their machine by changing one line. The pattern p_{Topic}.txt is for repeatable tasks; grow_{n}.txt files document evolutionary steps. Prompts like p_Code_AI_Code.md, p_Rewrite_SubProject.md, p_convert_to_Go.md, p_Use_Case_SPEC_Write.md, and p_Pages_List_Update.md let a single operator trigger work that would otherwise require weeks of coordinated engineering. Many prompts are progress-status-file aware and parallel-safe — multiple terminals can run the same prompt against different subprojects simultaneously without conflicts. The prompt library is itself the institutional memory; new hires (human or AI) become productive by reading the prompt that matches their task rather than by training.

**The Uber Boss Orchestration Layer.** The uber_boss/ directory is where the CEO works directly with an AI partner that holds the whole product in its head. It runs in independent tracks (1_track/, 2_track/, …) so multiple problem-sets can be in flight without colliding. Each track has a problems.md (CEO-owned, read-only to the AI) and a recommendations.md (AI-written, prioritized, executable). The uber_boss thinks like a Facebook VP of Engineering / ex-Twitter: it spots cross-cutting issues no single subproject owner would catch — an OpenAPI codegen change that breaks the React client, a UX page in Pages_List.csv with no code yet, a use case with no Playwright coverage. Crucially, the uber_boss's primary output is often "run prompt P in directory D" — it routes the right tool to the right work. A shared learnings.md grows every run, so the system gets smarter with each session.

**The Clean Backend/Frontend Split.** AI-generated code targets only two trees: AI_Coding/ for the Go + Gin backend and Front_AI_Coding/ for the React 19 + Vite + Zustand thin shell. The frontend has zero business logic — it calls the Go backend through an OpenAPI-codegen-generated TypeScript client. Legacy TypeScript repos (jfksocial-api, jfksocial-admin, jfksocial-blossom, jfksocial-relay, JFKSocial) are read-only style references. This separation lets AI agents specialize: a backend agent never has to reason about React state; a frontend agent never has to reason about GORM. The split also means the OpenAPI contract is the single integration point, which is dramatically easier for AI to keep correct than a hand-wired full-stack codebase.

**The Founder's Playbook.** The Bryan/ directory holds the CEO's directives that override all other context — short, sharp notes like "never sync bad posts from one relay out to other relays" that propagate through every AI run on the project.

**Why This Is a Moat.** Incumbents at Twitter/X, Meta, and Bluesky are constrained by headcount, legacy code, and review processes that predate the LLM era. JFK Social's prompt library, pyramid-and-pipes architecture, uber_boss orchestration, and clean backend/frontend split mean the team can ship features and entire subprojects at a velocity that compounds with every prompt added to the library. Combined with value #5 (open-source code), this operating system is publishable and forkable — but the institutional knowledge encoded in the prompts, skills, and pyramid conventions is the real durable advantage. We do not just outbuild incumbents; we outbuild them with a method designed for the AI era.
