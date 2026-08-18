import { useEffect, type ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import clsx from "clsx";

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
    <section className={styles.hero} id="hero">
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
            <p className={clsx(styles.heroTag, styles.reveal)}>
              The social network for citizens who refuse to be silenced.
            </p>
            <h1 className={clsx(styles.display, styles.heroH1, styles.reveal, styles.d1)}>
              Speak freely.
              <br />
              <span className={styles.red}>Grow your audience.</span>
            </h1>
            <p className={clsx(styles.lead, styles.heroLead, styles.reveal, styles.d2)}>
              WeCitizens Social is a censorship-resistant network built on open
              standards and owned by the people who post on it. Your identity is
              yours. Your followers are yours. Your words are not buried by an
              algorithm you can't see.
            </p>
            <div className={clsx(styles.heroCta, styles.reveal, styles.d3)}>
              <Link
                className={clsx(styles.btn, styles.btnSolid)}
                href="https://wecitizens.social/create-account"
              >
                Create your free account <Arrow />
              </Link>
              <Link
                className={clsx(styles.btn, styles.btnOutline)}
                href="https://wecitizens.social"
              >
                Browse (while logged out)
              </Link>
            </div>
            <div className={clsx(styles.heroChecks, styles.reveal, styles.d4)}>
              <span className={styles.check}>
                <span className={styles.tick}>✓</span> Free to join
              </span>
              <span className={styles.check}>
                <span className={styles.tick}>✓</span> Open-source code
              </span>
              <span className={styles.check}>
                <span className={styles.tick}>✓</span> Take your followers with you
              </span>
            </div>
          </div>

          <div className={clsx(styles.heroMedia, styles.reveal, styles.d2)}>
            <div className={styles.video}>
              <div className={styles.videoFrame}>
                <iframe
                  src="https://www.youtube.com/embed/-yWQrDJ-9kk"
                  title="Why we built WeCitizens Social: free speech on an open network."
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <p className={styles.videoCap}>Watch: why we built WeCitizens Social.</p>
          </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    {
      tag: "Buried",
      text: "Your post is 24 hours old and has 16 views.",
    },
    {
      tag: "Throttled",
      text: "Your reach collapsed overnight — no warning, no reason.",
    },
    {
      tag: "Suspended",
      text: "Your account got suspended and your archive went with it.",
    },
    {
      tag: "Shadow-banned",
      text: "Your followers can't see you in their own feed anymore.",
    },
  ];
  return (
    <section className={clsx(styles.section, styles.dark, styles.problem)}>
      <div className={styles.container}>
        <h2 className={clsx(styles.display, styles.problemH2, styles.reveal)}>
          You already know what's happening to your account.
        </h2>
        <p className={clsx(styles.subNote, styles.reveal, styles.d1)}>
          Four ways legacy platforms quietly take your reach — without telling
          you why.
        </p>
        <div className={styles.notices}>
          {items.map((it, i) => (
            <div
              key={it.tag}
              className={clsx(styles.notice, styles.reveal, styles[`d${i}`])}
            >
              <span className={styles.noticeTag}>{it.tag}</span>
              <span className={styles.noticeText}>{it.text}</span>
            </div>
          ))}
        </div>
        <p className={clsx(styles.problemClose, styles.reveal)}>
          That's why we built <span className={styles.red}>WeCitizens Social.</span>
        </p>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className={clsx(styles.section, styles.quote)}>
      <div className={styles.container}>
        <span className={clsx(styles.mark, styles.reveal)}>“</span>
        <blockquote className={clsx(styles.reveal, styles.d1)}>
          Whenever the people are well-informed,{" "}
          <span className={styles.red}>
            they can be trusted with their own government.
          </span>
        </blockquote>
        <div className={clsx(styles.quoteCite, styles.reveal, styles.d2)}>
          <span className={styles.rule}></span>
          <span className={styles.quoteName}>Thomas Jefferson</span>
          <span className={styles.quoteSrc}>
            Letter to Richard Price · 1789
          </span>
        </div>
      </div>
    </section>
  );
}

function Charter() {
  const articles = [
    {
      h: "Lawful speech stays up.",
      p: "No shadow-bans. No quiet demotions. No advertiser-driven takedowns. If it's legal, it stays — and you can read the policy that says so.",
    },
    {
      h: "We grow your audience.",
      p: "Ranked discovery, cross-network publishing, trust-based follow graphs, and Hero amplification — built to put suppressed voices in front of real humans.",
    },
    {
      h: "Protected from bot farms and narrative ops.",
      p: "Coordinated suppression is detected, exposed, and downweighted. A 10,000-account farm can't drown out one real person here.",
    },
    {
      h: "You can see why the algorithm did what it did.",
      p: 'Every post shows the factor breakdown — Performance, Trust, Hop distance, Freshness. No black box. No "the algorithm decided."',
    },
    {
      h: "Your identity is yours, mathematically.",
      p: "Your account is a Nostr keypair you control. We can't delete it. We can't take your followers. You can leave with everything.",
    },
    {
      h: "One post, every open network.",
      p: "Publish once and reach Nostr, Mastodon, Bluesky, Threads, and X — through Post Global, with per-network publish receipts.",
    },
    {
      h: "Open source. Open algorithm. Open content.",
      p: "Audit the code on GitHub. Inspect the ranking weights. Mirror your own data. We earn trust by being verifiable, not by asking for it.",
    },
  ];
  return (
    <section
      className={clsx(styles.section, styles.charterSection)}
      id="citizens"
    >
      <div className={styles.container}>
        <div className={clsx(styles.secHead, styles.center)}>
          <span className={clsx(styles.eyebrow, styles.center, styles.reveal)}>
            The Charter
          </span>
          <h2 className={clsx(styles.display, styles.reveal, styles.d1)}>
            Seven promises to every citizen.
          </h2>
          <p className={clsx(styles.lead, styles.reveal, styles.d2)}>
            In priority order. Everything we ship supports this list — and you
            can verify each one by reading the open-source code.
          </p>
        </div>
        <div className={styles.charter}>
          {articles.map((a, i) => (
            <div key={a.h} className={clsx(styles.article, styles.reveal)}>
              <div className={styles.articleNum}>
                <small>Article</small>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3>{a.h}</h3>
                <p>{a.p}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={clsx(styles.charterFoot, styles.reveal)}>
          <Link className={clsx(styles.tlink, styles.tlinkRed)} to="/consumer">
            Read each promise in detail <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const stats = [
    {
      v: "Built on Nostr",
      p: "Cryptographic identity. No central authority to subpoena, fine, or seize.",
    },
    {
      v: "4 open networks",
      p: "Nostr, ActivityPub/Mastodon, Bluesky, Threads — one post, federated reach.",
    },
    {
      v: (
        <>
          Trust <span className={styles.red}>−100 / +100</span>
        </>
      ),
      p: "EigenTrust-based defense against bot swarms and coordinated takedown campaigns.",
    },
    {
      v: (
        <>
          $19
          <span className={styles.statUnit}>/mo</span>
        </>
      ),
      p: "Subscriber-funded. No ads, no pressure. You pay us, so we work for you — not advertisers.",
    },
  ];
  return (
    <section className={clsx(styles.section, styles.dark)}>
      <div className={styles.container}>
        <div className={clsx(styles.secHead, styles.center)}>
          <span
            className={clsx(
              styles.eyebrow,
              styles.center,
              styles.onNavy,
              styles.reveal,
            )}
          >
            Architecture, not advertising
          </span>
          <h2 className={clsx(styles.display, styles.reveal, styles.d1)}>
            Built so we cannot be pressured into censoring you.
          </h2>
          <p className={clsx(styles.lead, styles.leadOnNavy, styles.reveal, styles.d2)}>
            The reasons our promises hold up under real pressure are wired into
            the stack.
          </p>
        </div>
        <div className={styles.stats}>
          {stats.map((s, i) => (
            <div
              key={i}
              className={clsx(styles.stat, styles.reveal, styles[`d${i}`])}
            >
              <div className={styles.statVal}>{s.v}</div>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Backbones() {
  const cards = [
    {
      name: "Nostr",
      chip: "Primary Backbone",
      chipRed: true,
      body: "The open protocol WeCitizens Social runs on. Your identity is a cryptographic key pair you own — not a username we can revoke. Posts relay through a distributed network of relays, so no single company can silence the network. If WeCitizens Social ever fails you, your keys, posts, and followers move to any other Nostr client unchanged.",
    },
    {
      name: "BlueSky (AT Protocol)",
      chip: "Federated",
      body: "The protocol behind BlueSky, designed for portable accounts and pluggable algorithms. WeCitizens Social interoperates with AT Protocol so audiences and content can flow between networks without lock-in. Algorithms are user-selectable rather than editorially imposed.",
    },
    {
      name: "ActivityPub (Threads)",
      chip: "W3C Standard",
      body: "The open W3C standard that Meta's Threads adopted for federation, alongside hundreds of independent servers. WeCitizens Social speaks ActivityPub so your posts can reach Threads users and the wider fediverse — without giving Meta control of your identity, audience, or reach.",
    },
    {
      name: "Mastodon",
      chip: "Fediverse",
      body: "The largest established federated network on the open internet, also built on ActivityPub. Mastodon proved that a non-corporate social network can scale to millions of active users. WeCitizens Social plugs into that same federation, so your audience is not trapped on one company's servers.",
    },
  ];
  return (
    <section className={styles.section} id="backbones">
      <div className={styles.container}>
        <div className={styles.secHead}>
          <span className={clsx(styles.eyebrow, styles.reveal)}>
            Open by design
          </span>
          <h2 className={clsx(styles.display, styles.reveal, styles.d1)}>
            Open-source social media backbones.
          </h2>
          <p className={clsx(styles.lead, styles.reveal, styles.d2)}>
            Four open protocols and networks anchor everything we build. Your
            identity, your content, and your audience are not locked to a single
            company — and they never will be. If we ever fail you, you can leave
            with everything that matters.
          </p>
        </div>
        <div className={styles.backbones}>
          {cards.map((c, i) => (
            <div
              key={c.name}
              className={clsx(
                styles.bbCard,
                styles.reveal,
                i % 2 === 1 ? styles.d1 : undefined,
              )}
            >
              <div className={styles.bbHead}>
                <span className={styles.bbName}>{c.name}</span>
                <span
                  className={clsx(styles.tagchip, c.chipRed && styles.tagchipRed)}
                >
                  {c.chip}
                </span>
              </div>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
        <p className={clsx(styles.why, styles.reveal)}>
          <strong>Why this matters:</strong> walled-garden networks can silence
          you by deleting your account. Open-protocol networks cannot. Your
          keys, your followers, your content are portable by design.
        </p>
      </div>
    </section>
  );
}

function Audiences() {
  const cards = [
    {
      pill: "For Citizens",
      h: "Get your voice — and your reach — back.",
      p: "Free to join. Anonymous browsing. Bring your X archive and your follow list with you. Post once, reach every open network.",
      link: "Learn what we promise you",
      to: "/consumer",
    },
    {
      pill: "For Influencers",
      h: "Stop being throttled. Start being amplified.",
      p: "Transparent ranking, audience analytics, Hero broadcast amplification, and a creator rev-share. Your audience grows because the algorithm shows your work.",
      link: "See the influencer program",
      to: "/influencers",
    },
    {
      pill: "For Operators",
      h: "Run your own social network.",
      p: "Fork the code, host on your own hardware, set your own policy. Open-source Go backend, React frontend, AWS or self-hosted install playbooks.",
      link: "Fork the platform",
      to: "/fork",
    },
  ];
  return (
    <section
      className={clsx(styles.section, styles.audiencesSection)}
      id="audiences"
    >
      <div className={styles.container}>
        <div className={clsx(styles.secHead, styles.center)}>
          <span className={clsx(styles.eyebrow, styles.center, styles.reveal)}>
            Who it's for
          </span>
          <h2 className={clsx(styles.display, styles.reveal, styles.d1)}>
            Built for the people legacy platforms have already pushed out.
          </h2>
        </div>
        <div className={styles.audGrid}>
          {cards.map((c, i) => (
            <div
              key={c.pill}
              className={clsx(styles.audCard, styles.reveal, styles[`d${i}`])}
            >
              <span className={styles.audPill}>{c.pill}</span>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <Link to={c.to} className={styles.tlink}>
                {c.link} <Arrow />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={clsx(styles.section, styles.cta)} id="join">
      <div className={styles.container}>
        <div className={clsx(styles.starDivider, styles.reveal)}>★ ★ ★</div>
        <h2 className={clsx(styles.reveal, styles.d1)}>
          Join a feed that won't hide you.
        </h2>
        <p className={clsx(styles.lead, styles.reveal, styles.d2)}>
          Two minutes to sign up. Your identity is a cryptographic key only you
          control. If we ever fail you, you take everything with you.
        </p>
        <div className={clsx(styles.ctaActions, styles.reveal, styles.d3)}>
          <Link
            className={clsx(styles.btn, styles.btnSolid, styles.onNavy)}
            href="https://wecitizens.social/create-account"
          >
            Create your free account <Arrow />
          </Link>
          <Link
            className={clsx(styles.btn, styles.btnOutline, styles.onNavy)}
            href="https://wecitizens.social"
          >
            ▶&nbsp; See the network live
          </Link>
        </div>
        <p className={clsx(styles.lead, styles.reveal, styles.d3)}>
          WeCitizens Social is the town square of{" "}
          <a
            href="https://wethecitizens.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            We The Citizens
          </a>
          {" "}— where citizens do the work of fixing what's broken. One
          movement: speak here, build there.
        </p>
        <div className={clsx(styles.ctaLinks, styles.reveal, styles.d3)}>
          <Link to="/consumer/license">License</Link>
          <span className={styles.ctaSep}>·</span>
          <Link to="/consumer/privacy">Privacy</Link>
          <span className={styles.ctaSep}>·</span>
          <Link to="/fork">Source code</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  useScrollReveal();

  return (
    <Layout
      title="Speak freely. Grow your audience."
      description="WeCitizens Social is a censorship-resistant social network built on open standards. Your identity is yours. Your followers are yours."
    >
      <main id="top">
        <Hero />
        <Problem />
        <Quote />
        <Charter />
        <Architecture />
        <Backbones />
        <Audiences />
        <CTA />
      </main>
    </Layout>
  );
}
