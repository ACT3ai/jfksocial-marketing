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
              JFK Social Influencer Program
            </p>
            <h1 className={clsx(styles.display, styles.heroH1, styles.reveal, styles.d1)}>
              Earn <span className={styles.red}>40%.</span>
            </h1>
            <p className={clsx(styles.heroSub, styles.reveal, styles.d1)}>
              Of every subscription you bring in.
            </p>
            <p className={clsx(styles.lead, styles.heroLead, styles.reveal, styles.d2)}>
              Your audience is the asset. We pay you forty percent of net
              subscription revenue from every paying customer you refer —
              for as long as they stay subscribed. Send them to your landing
              page, get credit when they sign up, and get paid every month
              they pay us.
            </p>
            <div className={clsx(styles.heroCta, styles.reveal, styles.d3)}>
              <Link
                className={clsx(styles.btn, styles.btnSolid)}
                href="https://jfksocial.com/create-account"
              >
                Apply to the program <Arrow />
              </Link>
              <Link
                className={clsx(styles.btn, styles.btnOutline)}
                to="/influencers/license"
              >
                Read the agreement
              </Link>
            </div>
          </div>

          <div className={clsx(styles.heroMedia, styles.reveal, styles.d2)}>
            <div className={styles.video}>
              <div className={styles.videoFrame}>
                <iframe
                  src="https://www.youtube.com/embed/-yWQrDJ-9kk"
                  title="JFK Social — Influencer Program"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <p className={styles.videoCap}>Watch: how the influencer program works.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    h: "Your branded landing page.",
    p: (
      <>
        We issue you a personal Tracking Link and a landing page at{" "}
        <code>jfksocial.com/i/[your-slug]</code>. Share it on your show,
        your newsletter, your posts, your bio link — anywhere your audience
        already follows you.
      </>
    ),
  },
  {
    h: "Permanent first-touch credit.",
    p: (
      <>
        When someone clicks your link and creates an account within a
        30-day window, they are attributed to you. That attribution holds
        even if they sign up free first and upgrade to paid later — anytime
        in the six-month conversion window.
      </>
    ),
  },
  {
    h: "40% of net revenue, every month.",
    p: (
      <>
        You earn forty percent of net subscription revenue we actually
        collect from your referred users. Premium plans are $19.99 and
        $39.99 per month. You keep earning for as long as the user keeps
        paying.
      </>
    ),
  },
  {
    h: "Monthly payouts in USD.",
    p: (
      <>
        We pay out monthly, in arrears, to a U.S. bank account via Stripe
        Connect once you clear the $50 minimum threshold. You get a payout
        statement every cycle. We issue a 1099 at year-end.
      </>
    ),
  },
];

function HowItWorks() {
  return (
    <section className={clsx(styles.section, styles.charterSection)}>
      <div className={styles.container}>
        <div className={clsx(styles.secHead, styles.center)}>
          <span className={clsx(styles.eyebrow, styles.center, styles.reveal)}>
            How the program works
          </span>
          <h2 className={clsx(styles.display, styles.reveal, styles.d1)}>
            A clean, four-step loop.
          </h2>
          <p className={clsx(styles.lead, styles.reveal, styles.d2)}>
            Get a link, send traffic, get attributed, get paid. No quarterly
            thresholds, no clawback traps on revenue we already kept.
          </p>
        </div>
        <div className={styles.charter}>
          {STEPS.map((a, i) => (
            <div key={a.h} className={clsx(styles.article, styles.reveal)}>
              <div className={styles.articleNum}>
                <small>Step</small>
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

function PayoutMath() {
  const stats = [
    {
      v: (
        <>
          $8<span className={styles.statUnit}>/mo</span>
        </>
      ),
      label: "Per $19.99 subscriber",
      p: "Recurring, for as long as they stay subscribed.",
    },
    {
      v: (
        <>
          $16<span className={styles.statUnit}>/mo</span>
        </>
      ),
      label: "Per $39.99 subscriber",
      p: "Recurring, for as long as they stay subscribed.",
    },
    {
      v: (
        <>
          <span className={styles.red}>$800 – $1,600</span>
          <span className={styles.statUnit}>/mo</span>
        </>
      ),
      label: "Per 100 paid referrals",
      p: "Annualizes to roughly $9,600 – $19,200 in recurring passive income.",
    },
  ];
  return (
    <section className={clsx(styles.section, styles.dark)}>
      <div className={styles.container}>
        <div className={clsx(styles.secHead, styles.center)}>
          <span className={clsx(styles.eyebrow, styles.center, styles.onNavy, styles.reveal)}>
            What 40% actually looks like
          </span>
          <h2 className={clsx(styles.display, styles.reveal, styles.d1)}>
            Flat rate. No tiers, no caps, no &ldquo;up to.&rdquo;
          </h2>
          <p className={clsx(styles.lead, styles.leadOnNavy, styles.reveal, styles.d2)}>
            If a subscriber pays us, you get forty percent of what we keep
            after refunds and processing fees.
          </p>
        </div>
        <div className={styles.stats}>
          {stats.map((s, i) => (
            <div key={i} className={clsx(styles.stat, styles.reveal, i === 1 ? styles.d1 : i === 2 ? styles.d2 : undefined)}>
              <div className={styles.statVal}>{s.v}</div>
              <div className={styles.statLabel}>{s.label}</div>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
        <p className={clsx(styles.fineprint, styles.reveal)}>
          Net subscription revenue is gross subscription revenue minus
          refunds, chargebacks, sales tax, and payment-processor fees. The
          exact definition lives in Section 1.4 of the{" "}
          <Link to="/influencers/license">Influencer Rev-Share Agreement</Link>.
        </p>
      </div>
    </section>
  );
}

const REASONS = [
  {
    title: "Subscriptions, not ads.",
    body: "JFK Social makes money when users pay us directly. There is no ad sales team to feed, no advertiser veto over creator speech, and no incentive to suppress audiences advertisers dislike.",
  },
  {
    title: "The structural rate the incumbents can't match.",
    body: "Twitter, Facebook, Instagram, and YouTube depend on ad revenue per user. They cannot give you forty percent of something they have to spend on infrastructure, sales, and moderation — their economics will not allow it. Ours will.",
  },
  {
    title: "Permanent attribution, not a sixty-day cookie.",
    body: 'Once a user is credited to you, they stay credited to you. No "last-touch" steal where another network reroutes the conversion at the finish line.',
  },
  {
    title: "Free-to-paid is included.",
    body: "You don't have to drive paid signups directly. Refer someone to a free account — if they upgrade any time in the six-month conversion window, you get paid on that subscription too.",
  },
  {
    title: "You keep earning while they stay subscribed.",
    body: "This is recurring revenue, not a one-time bounty. A referred user who stays on JFK Social for three years pays you for three years.",
  },
];

function WhyWeCanPay() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.secHead}>
          <span className={clsx(styles.eyebrow, styles.reveal)}>
            Architecture, not advertising
          </span>
          <h2 className={clsx(styles.display, styles.reveal, styles.d1)}>
            Why we can pay 40% — and the other guys can&rsquo;t.
          </h2>
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
    tag: "Step 1 — Apply",
    title: "Tell us who you are.",
    body: (
      <>
        Where your audience lives, and what you plan to post. We approve
        influencers individually — no agencies, networks, or syndicates by
        default.
      </>
    ),
  },
  {
    tag: "Step 2 — Get your link",
    title: "Receive your Tracking Link.",
    body: (
      <>
        On acceptance you get a Tracking Link, a landing page slug, and
        access to your influencer dashboard. The dashboard shows every
        click, signup, subscriber, and pending payout.
      </>
    ),
  },
  {
    tag: "Step 3 — Promote",
    title: "Drive traffic to your landing page.",
    body: (
      <>
        Follow FTC disclosure rules — clearly mark paid promotion with{" "}
        <code>#ad</code> or equivalent. We provide the policy and templates
        so this is not guesswork.
      </>
    ),
  },
  {
    tag: "Step 4 — Get paid",
    title: "Complete payout onboarding.",
    body: (
      <>
        W-9 and Stripe Connect within four months of your first earned
        rev-share. Payouts go out monthly once you clear the $50 threshold.
      </>
    ),
  },
];

function GettingStarted() {
  return (
    <section className={clsx(styles.section, styles.phaseSection)}>
      <div className={styles.container}>
        <div className={clsx(styles.secHead, styles.center)}>
          <span className={clsx(styles.eyebrow, styles.center, styles.reveal)}>
            From application to first payout
          </span>
          <h2 className={clsx(styles.display, styles.reveal, styles.d1)}>
            Four phases. Sixty days, give or take.
          </h2>
          <p className={clsx(styles.lead, styles.reveal, styles.d2)}>
            Most accepted influencers go from application to first payout
            in under sixty days, gated mostly by how fast your audience
            converts.
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
        <p className={clsx(styles.phaseFoot, styles.reveal)}>
          The program is currently open to U.S. citizens and U.S. residents
          only. Full terms — including attribution rules, self-referral
          prohibitions, payout onboarding, and FTC disclosure obligations —
          are in the{" "}
          <Link to="/influencers/license">Influencer Rev-Share Agreement</Link>{" "}
          and the companion{" "}
          <Link to="/influencers/privacy">Privacy Policy</Link>.
        </p>
      </div>
    </section>
  );
}

export default function InfluencersOverview(): ReactNode {
  useScrollReveal();
  return (
    <Layout
      title="JFK Social Influencer Program — Earn 40% of Subscription Revenue"
      description="Refer paying subscribers to JFK Social and earn 40% of net subscription revenue for as long as they stay subscribed. Permanent first-touch attribution, branded landing pages, monthly payouts."
    >
      <main>
        <Hero />
        <HowItWorks />
        <PayoutMath />
        <WhyWeCanPay />
        <OpenSourceBackbones variant="alt" />
        <GettingStarted />
      </main>
    </Layout>
  );
}
