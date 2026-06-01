import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import OpenSourceBackbones from "@site/internal/components/OpenSourceBackbones";

import styles from "./index.module.css";

function HeroSection() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            Your Social Network
          </Heading>
          <Heading as="h2" className={styles.heroSubtitle}>
            Our Open Source Code
          </Heading>
          <p className={styles.heroBody}>
            Run your own social network. Your company can have a social
            network for the whole world to use, like x.com — powered by the
            open source code behind JFK Social.
          </p>
        </div>
        <div className={styles.heroVideo}>
          <div className={styles.videoFrame}>
            <iframe
              src="https://www.youtube.com/embed/-yWQrDJ-9kk"
              title="Your Social Network — Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function WhatsIncludedSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <Heading as="h2" className={styles.sectionHeadline}>
          A complete social network. Not just a starter kit.
        </Heading>
        <p className={styles.sectionLead}>
          When you fork JFK Social you get the entire platform — feed,
          posts, profiles, follows, moderation, admin tools, and a
          production-grade monetization engine. Stand up your own brand,
          your own community, your own economics on day one.
        </p>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Direct subscription model</h3>
            <p className={styles.cardBody}>
              Premium plans, checkout, billing, and wallet ship with the
              code. Your platform earns from subscribers, not advertisers —
              the same economics that let JFK Social pay creators what
              incumbents structurally cannot.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Influencer rev share, built in</h3>
            <p className={styles.cardBody}>
              30% of net subscription revenue in Year 1, 20% in Year 2 and
              beyond. Permanent first-touch attribution, branded creator
              landing pages, custom short URLs, and a dashboard that shows
              every subscriber, every payout, every dispute.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Attribution + payout engine</h3>
            <p className={styles.cardBody}>
              The attribution engine tracks every referral click through to
              paid conversion. Stripe Connect Express handles bank linking,
              W-9 / W-8BEN tax forms, monthly payout batches, retries, and
              1099 filing — without a separate finance team.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Admin + compliance tools</h3>
            <p className={styles.cardBody}>
              Applications queue, two-admin payout approvals, fraud
              alerts, audit trails, deadline forfeiture sweeps, and
              compliance reports. Everything you need to run the program
              safely at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyForkSection() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.sectionInner}>
        <Heading as="h2" className={styles.sectionHeadline}>
          Why fork instead of building from scratch.
        </Heading>
        <ul className={styles.bulletList}>
          <li>
            <strong>A structural moat, not a feature.</strong> The 30% / 20%
            rev share rate is one Twitter, Facebook, Instagram, and YouTube
            cannot match — their ad-funded economics will not allow it.
            You inherit that moat the moment you launch.
          </li>
          <li>
            <strong>Influencers are the network-effect breaker.</strong>
            Trusted creators move audiences. Direct financial alignment
            gives them a reason to actively recruit their followers off
            incumbent platforms and onto yours.
          </li>
          <li>
            <strong>Branded creator landing pages.</strong> Every
            influencer gets <code>yourdomain.com/i/[slug]</code>, a
            customizable two-panel landing page, OG previews, and link
            analytics — without you writing any of it.
          </li>
          <li>
            <strong>Months saved on the unglamorous parts.</strong>
            Attribution edge cases, chargeback clawbacks, 4-month payout
            deadlines, distributed scheduler locking, and fraud
            heuristics are already specified, built, and tested.
          </li>
        </ul>
      </div>
    </section>
  );
}

function LaunchPathSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <Heading as="h2" className={styles.sectionHeadline}>
          A proven path from beta to public launch.
        </Heading>
        <p className={styles.sectionLead}>
          The same phased launch playbook used for JFK Social ships with
          the open source. Fork it, adapt it to your brand, follow the
          script.
        </p>
        <ol className={styles.phaseList}>
          <li>
            <span className={styles.phaseTag}>Phase 0 — Foundation</span>
            Identify your founding class of 20 creators. Variety of
            niches, mix of mid-tier and micro audiences, all authentic
            users of your platform.
          </li>
          <li>
            <span className={styles.phaseTag}>Phase 1 — Closed beta</span>
            Invite the founding 20. Validate attribution end to end. Run
            at least one full payout cycle. Exit when 10+ have a paying
            subscriber and the admin tools have processed a batch.
          </li>
          <li>
            <span className={styles.phaseTag}>Phase 2 — Soft launch</span>
            Open applications. In-platform banners and welcome emails
            recruit your early applicants. Goal: 500 approved influencers
            in 30 days, 2,000 paying subscribers in 60.
          </li>
          <li>
            <span className={styles.phaseTag}>Phase 3 — Public launch</span>
            Earned media, creator-economy newsletters, comparison
            content, real-earnings case studies. The flywheel becomes
            self-funded.
          </li>
        </ol>
      </div>
    </section>
  );
}

export default function ForkOverview(): ReactNode {
  return (
    <Layout
      title="Your Social Network — Our Open Source Code"
      description="Run your own social network on JFK Social's open source code. Premium subscriptions, influencer revenue share, attribution, and payouts all included."
    >
      <HeroSection />
      <main>
        <WhatsIncludedSection />
        <WhyForkSection />
        <OpenSourceBackbones variant="alt" />
        <LaunchPathSection />
      </main>
    </Layout>
  );
}
