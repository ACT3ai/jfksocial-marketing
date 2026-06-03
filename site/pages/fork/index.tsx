import { useEffect, type ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import clsx from "clsx";
import OpenSourceBackbones from "@site/internal/components/OpenSourceBackbones";

import styles from "./index.module.css";

function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(`.${styles.reveal}`),
    );
    if (items.length === 0) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const show = (el: HTMLElement) => el.classList.add(styles.isVisible);
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(show);
      return;
    }
    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return r.top < vh * 0.92 && r.bottom > 0;
    };
    items.forEach((el) => {
      if (inView(el)) show(el);
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    items.forEach((el) => {
      if (!el.classList.contains(styles.isVisible)) io.observe(el);
    });
    const failsafe = window.setTimeout(() => items.forEach(show), 1600);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);
}

function Arrow() {
  return (
    <span className={styles.arrow} aria-hidden="true">
      →
    </span>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div>
            <p className={clsx(styles.heroTag, styles.reveal)}>
              For operators, founders, and platform builders.
            </p>
            <h1 className={clsx(styles.display, styles.heroH1, styles.reveal, styles.d1)}>
              Run your own
              <br />
              <span className={styles.red}>social network.</span>
            </h1>
            <p className={clsx(styles.heroSub, styles.reveal, styles.d1)}>
              Powered by our open-source code.
            </p>
            <p className={clsx(styles.lead, styles.heroLead, styles.reveal, styles.d2)}>
              Your company can have a social network for the whole world to
              use, like x.com — built on the open-source code behind JFK
              Social. Fork it, brand it, host it. The economics, the
              creator program, the moderation stack — all of it ships in
              the box.
            </p>
            <div className={clsx(styles.heroCta, styles.reveal, styles.d3)}>
              <Link
                className={clsx(styles.btn, styles.btnSolid)}
                href="https://github.com/ACT3ai/jfksocial_server"
              >
                Fork the code <Arrow />
              </Link>
              <Link
                className={clsx(styles.btn, styles.btnOutline)}
                to="/fork/license"
              >
                Read the license
              </Link>
            </div>
          </div>

          <div className={clsx(styles.heroMedia, styles.reveal, styles.d2)}>
            <div className={styles.video}>
              <div className={styles.videoFrame}>
                <iframe
                  src="https://www.youtube.com/embed/-yWQrDJ-9kk"
                  title="Your Social Network — Overview"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <p className={styles.videoCap}>Watch: what ships in the fork.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const CARDS = [
  {
    title: "Direct subscription model",
    tag: "Revenue",
    primary: true,
    body: "Premium plans, checkout, billing, and wallet ship with the code. Your platform earns from subscribers, not advertisers — the same economics that let JFK Social pay creators what incumbents structurally cannot.",
  },
  {
    title: "Influencer rev share, built in",
    tag: "Growth",
    body: "30% of net subscription revenue in Year 1, 20% in Year 2 and beyond. Permanent first-touch attribution, branded creator landing pages, custom short URLs, and a dashboard that shows every subscriber, every payout, every dispute.",
  },
  {
    title: "Attribution + payout engine",
    tag: "Operations",
    body: "Tracks every referral click through to paid conversion. Stripe Connect Express handles bank linking, W-9 / W-8BEN tax forms, monthly payout batches, retries, and 1099 filing — without a separate finance team.",
  },
  {
    title: "Admin + compliance tools",
    tag: "Safety",
    body: "Applications queue, two-admin payout approvals, fraud alerts, audit trails, deadline forfeiture sweeps, and compliance reports. Everything you need to run the program safely at scale.",
  },
];

function WhatsIncluded() {
  return (
    <section className={clsx(styles.section, styles.cardSection)}>
      <div className={styles.container}>
        <div className={styles.secHead}>
          <span className={clsx(styles.eyebrow, styles.reveal)}>What ships in the box</span>
          <h2 className={clsx(styles.display, styles.reveal, styles.d1)}>
            A complete social network. Not just a starter kit.
          </h2>
          <p className={clsx(styles.lead, styles.reveal, styles.d2)}>
            When you fork JFK Social you get the entire platform — feed,
            posts, profiles, follows, moderation, admin tools, and a
            production-grade monetization engine. Stand up your own brand,
            your own community, your own economics on day one.
          </p>
        </div>
        <div className={styles.cardGrid}>
          {CARDS.map((c) => (
            <div key={c.title} className={clsx(styles.card, styles.reveal)}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <span className={clsx(styles.tagchip, c.primary && styles.tagchipRed)}>
                  {c.tag}
                </span>
              </div>
              <p className={styles.cardBody}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  {
    title: "A structural moat, not a feature.",
    body: (
      <>
        The 30% / 20% rev share rate is one Twitter, Facebook, Instagram,
        and YouTube cannot match — their ad-funded economics will not allow
        it. You inherit that moat the moment you launch.
      </>
    ),
  },
  {
    title: "Influencers are the network-effect breaker.",
    body: (
      <>
        Trusted creators move audiences. Direct financial alignment gives
        them a reason to actively recruit their followers off incumbent
        platforms and onto yours.
      </>
    ),
  },
  {
    title: "Branded creator landing pages.",
    body: (
      <>
        Every influencer gets <code>yourdomain.com/i/[slug]</code>, a
        customizable two-panel landing page, OG previews, and link
        analytics — without you writing any of it.
      </>
    ),
  },
  {
    title: "Months saved on the unglamorous parts.",
    body: (
      <>
        Attribution edge cases, chargeback clawbacks, 4-month payout
        deadlines, distributed scheduler locking, and fraud heuristics are
        already specified, built, and tested.
      </>
    ),
  },
];

function WhyFork() {
  return (
    <section className={clsx(styles.section, styles.dark)}>
      <div className={styles.container}>
        <div className={styles.secHead}>
          <span className={clsx(styles.eyebrow, styles.onNavy, styles.reveal)}>
            Architecture, not advertising
          </span>
          <h2 className={clsx(styles.display, styles.reveal, styles.d1)}>
            Why fork instead of building from scratch.
          </h2>
          <p className={clsx(styles.lead, styles.leadOnNavy, styles.reveal, styles.d2)}>
            The hard parts are already wired up — and the structural
            advantages are inherited the moment you deploy.
          </p>
        </div>
        <ul className={styles.bullets}>
          {REASONS.map((r) => (
            <li key={r.title} className={clsx(styles.bullet, styles.reveal)}>
              <div>
                <strong>{r.title}</strong>
                <p>{r.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const PHASES = [
  {
    tag: "Phase 0 — Foundation",
    title: "Identify your founding 20 creators.",
    body: "Variety of niches, mix of mid-tier and micro audiences, all authentic users of your platform.",
  },
  {
    tag: "Phase 1 — Closed beta",
    title: "Invite the founding class.",
    body: "Validate attribution end to end. Run at least one full payout cycle. Exit when 10+ have a paying subscriber and the admin tools have processed a batch.",
  },
  {
    tag: "Phase 2 — Soft launch",
    title: "Open applications.",
    body: "In-platform banners and welcome emails recruit your early applicants. Goal: 500 approved influencers in 30 days, 2,000 paying subscribers in 60.",
  },
  {
    tag: "Phase 3 — Public launch",
    title: "Earned media + flywheel.",
    body: "Creator-economy newsletters, comparison content, real-earnings case studies. The flywheel becomes self-funded.",
  },
];

function LaunchPath() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={clsx(styles.secHead, styles.center)}>
          <span className={clsx(styles.eyebrow, styles.center, styles.reveal)}>
            The launch playbook
          </span>
          <h2 className={clsx(styles.display, styles.reveal, styles.d1)}>
            A proven path from beta to public launch.
          </h2>
          <p className={clsx(styles.lead, styles.reveal, styles.d2)}>
            The same phased launch playbook used for JFK Social ships with
            the open source. Fork it, adapt it to your brand, follow the
            script.
          </p>
        </div>
        <div className={styles.phases}>
          {PHASES.map((p) => (
            <div key={p.tag} className={clsx(styles.phase, styles.reveal)}>
              <span className={styles.phaseTag}>{p.tag}</span>
              <h3 className={styles.phaseTitle}>{p.title}</h3>
              <p className={styles.phaseBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={clsx(styles.section, styles.cta)}>
      <div className={styles.container}>
        <div className={clsx(styles.starDivider, styles.reveal)}>★ ★ ★</div>
        <h2 className={clsx(styles.reveal, styles.d1)}>
          Stand up your own social network.
        </h2>
        <p className={clsx(styles.lead, styles.reveal, styles.d2)}>
          The code is open. The economics are built in. The playbook ships
          with it. Fork the repo and deploy on AWS or your own hardware.
        </p>
        <div className={clsx(styles.ctaActions, styles.reveal, styles.d3)}>
          <Link
            className={clsx(styles.btn, styles.btnSolid, styles.onNavy)}
            href="https://github.com/ACT3ai/jfksocial_server"
          >
            Fork on GitHub <Arrow />
          </Link>
          <Link
            className={clsx(styles.btn, styles.btnOutline, styles.onNavy)}
            href="https://github.com/ACT3ai/jfksocial_devops"
          >
            ▶&nbsp; Deploy playbook
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ForkOverview(): ReactNode {
  useScrollReveal();
  return (
    <Layout
      title="Your Social Network — Our Open Source Code"
      description="Run your own social network on JFK Social's open source code. Premium subscriptions, influencer revenue share, attribution, and payouts all included."
    >
      <main>
        <Hero />
        <WhatsIncluded />
        <WhyFork />
        <OpenSourceBackbones variant="alt" />
        <LaunchPath />
        <CTA />
      </main>
    </Layout>
  );
}
