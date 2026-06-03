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

const CHARTER = [
  {
    h: "Free speech.",
    p: (
      <>
        Lawful speech stays up. Every system on JFK Social — moderation,
        ranking, hosting, federation — is designed around the principle
        that you do not get silenced for unpopular views. No shadow-banning,
        demonetization, or de-platforming to keep regulators, advertisers,
        or activist staff happy.
      </>
    ),
  },
  {
    h: "We grow your audience.",
    p: (
      <>
        Other platforms throttle your reach. JFK Social is engineered to
        grow audiences that legacy platforms suppress — through ranked
        discovery, cross-network publishing with Post Global, trust-based
        discovery via Follow, and Hero broadcast amplification.
      </>
    ),
  },
  {
    h: "Protection from manufactured narratives.",
    p: (
      <>
        Citizens get a voice protected from coordinated narratives pushed
        by governments, intelligence services, large corporations, captured
        media, and bot farms. Inorganic amplification is detected and
        downweighted. Authentic human signal is what wins.
      </>
    ),
  },
  {
    h: "Transparent ranking algorithms.",
    p: (
      <>
        Every post's ranking is inspectable. Our <code>xalgorithm</code>{" "}
        project publishes the ranking logic openly — signals, weights, and
        reasons a post is amplified, demoted, or filtered. No black-box
        editorial hand on the scale.
      </>
    ),
  },
  {
    h: "Open-source code.",
    p: (
      <>
        The entire platform is open source. Anyone can audit it, fork it,
        and run their own instance. Trust is earned through inspection of
        the actual code, not asserted through marketing.
      </>
    ),
  },
  {
    h: "Open-standard backbones.",
    p: (
      <>
        Built on Nostr, ActivityPub, Mastodon, and BlueSky (AT Protocol).
        Your identity, your content, and your social graph are not locked
        to a single vendor. If JFK Social ever fails you, your keys, posts,
        and followers can move to another compatible network.
      </>
    ),
  },
  {
    h: "Open content.",
    p: (
      <>
        Content on JFK Social is open to be read, indexed, archived,
        mirrored, cross-posted, and federated. We do not wall content off
        from the broader internet — we make it easier for your words to
        reach the largest possible authentic audience.
      </>
    ),
  },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div>
            <p className={clsx(styles.heroTag, styles.reveal)}>
              For citizens who refuse to be silenced.
            </p>
            <h1 className={clsx(styles.display, styles.heroH1, styles.reveal, styles.d1)}>
              Your voice.
              <br />
              <span className={styles.red}>Heard again.</span>
            </h1>
            <p className={clsx(styles.lead, styles.heroLead, styles.reveal, styles.d2)}>
              JFK Social exists to give a voice back to the people — and to
              defend that voice against the forces that drown out organic
              speech everywhere else. Free speech, open algorithms, open
              code, open standards.
            </p>
            <div className={clsx(styles.heroCta, styles.reveal, styles.d3)}>
              <Link
                className={clsx(styles.btn, styles.btnSolid)}
                href="https://jfksocial.com/create-account"
              >
                Create your free account <Arrow />
              </Link>
              <Link
                className={clsx(styles.btn, styles.btnOutline)}
                href="https://jfksocial.com"
              >
                Browse (while logged out)
              </Link>
            </div>
          </div>

          <div className={clsx(styles.heroMedia, styles.reveal, styles.d2)}>
            <div className={styles.video}>
              <div className={styles.videoFrame}>
                <iframe
                  src="https://www.youtube.com/embed/-yWQrDJ-9kk"
                  title="JFK Social — For Citizens"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <p className={styles.videoCap}>Watch: what we promise every citizen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Charter() {
  return (
    <section className={clsx(styles.section, styles.charterSection)}>
      <div className={styles.container}>
        <div className={clsx(styles.secHead, styles.center)}>
          <span className={clsx(styles.eyebrow, styles.center, styles.reveal)}>
            The Charter
          </span>
          <h2 className={clsx(styles.display, styles.reveal, styles.d1)}>
            What we promise every citizen.
          </h2>
          <p className={clsx(styles.lead, styles.reveal, styles.d2)}>
            Seven promises, in priority order. Everything else we ship
            supports this list — and you can verify each one by reading
            the open-source code.
          </p>
        </div>
        <div className={styles.charter}>
          {CHARTER.map((a, i) => (
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
          Get your voice — and your reach — back.
        </h2>
        <p className={clsx(styles.lead, styles.reveal, styles.d2)}>
          Two minutes to sign up. Your identity is a cryptographic key only
          you control. If we ever fail you, you take everything with you.
        </p>
        <div className={clsx(styles.ctaActions, styles.reveal, styles.d3)}>
          <Link
            className={clsx(styles.btn, styles.btnSolid, styles.onNavy)}
            href="https://jfksocial.com/create-account"
          >
            Create your free account <Arrow />
          </Link>
          <Link
            className={clsx(styles.btn, styles.btnOutline, styles.onNavy)}
            href="https://jfksocial.com"
          >
            ▶&nbsp; See it live at jfksocial.com
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ConsumerOverview(): ReactNode {
  useScrollReveal();
  return (
    <Layout
      title="For Citizens — JFK Social"
      description="JFK Social is the social network for citizens who refuse to be silenced. Free speech, open algorithms, open code, open standards — seven promises to every citizen."
    >
      <main>
        <Hero />
        <Charter />
        <OpenSourceBackbones variant="alt" />
        <CTA />
      </main>
    </Layout>
  );
}
