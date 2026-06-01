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
          <p className={styles.heroEyebrow}>JFK Social Influencer Program</p>
          <Heading as="h1" className={styles.heroTitle}>
            Earn 40%.
          </Heading>
          <Heading as="h2" className={styles.heroSubtitle}>
            Of every subscription you bring in.
          </Heading>
          <p className={styles.heroBody}>
            Your audience is the asset. We pay you forty percent of net
            subscription revenue from every paying customer you refer —
            for as long as they stay subscribed. Send them to your
            landing page, get credit when they sign up, and get paid
            every month they pay us.
          </p>
        </div>
        <div className={styles.heroVideo}>
          <div className={styles.videoFrame}>
            <iframe
              src="https://www.youtube.com/embed/-yWQrDJ-9kk"
              title="JFK Social — Influencer Program"
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

function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <Heading as="h2" className={styles.sectionHeadline}>
          How the program works.
        </Heading>
        <p className={styles.sectionLead}>
          A clean, four-step loop. Get a link, send traffic, get
          attributed, get paid. No quarterly thresholds, no clawback
          traps on revenue we already kept.
        </p>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>1. Your branded landing page</h3>
            <p className={styles.cardBody}>
              We issue you a personal Tracking Link and a landing page
              at <code>jfksocial.com/i/[your-slug]</code>. Share it on
              your show, your newsletter, your posts, your bio link —
              anywhere your audience already follows you.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>2. Permanent first-touch credit</h3>
            <p className={styles.cardBody}>
              When someone clicks your link and creates an account
              within a 30-day window, they are attributed to you. That
              attribution holds even if they sign up free first and
              upgrade to paid later — anytime in the six-month
              conversion window.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>3. 40% of net revenue, every month</h3>
            <p className={styles.cardBody}>
              You earn forty percent of net subscription revenue we
              actually collect from your referred users. Premium plans
              are $19.99 and $39.99 per month. You keep earning for as
              long as the user keeps paying.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>4. Monthly payouts in USD</h3>
            <p className={styles.cardBody}>
              We pay out monthly, in arrears, to a U.S. bank account
              via Stripe Connect once you clear the $50 minimum
              threshold. You get a payout statement every cycle. We
              issue a 1099 at year-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PayoutMathSection() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.sectionInner}>
        <Heading as="h2" className={styles.sectionHeadline}>
          What 40% actually looks like.
        </Heading>
        <p className={styles.sectionLead}>
          The math is simple because the rate is flat. No tiers, no
          caps, no "up to" marketing language. If a subscriber pays
          us, you get forty percent of what we keep after refunds and
          processing fees.
        </p>
        <div className={styles.mathBox}>
          <div className={styles.mathTile}>
            <p className={styles.mathFigure}>$8 / mo</p>
            <p className={styles.mathLabel}>per $19.99 subscriber</p>
            <p className={styles.mathSub}>
              Recurring, for as long as they stay subscribed.
            </p>
          </div>
          <div className={styles.mathTile}>
            <p className={styles.mathFigure}>$16 / mo</p>
            <p className={styles.mathLabel}>per $39.99 subscriber</p>
            <p className={styles.mathSub}>
              Recurring, for as long as they stay subscribed.
            </p>
          </div>
          <div className={styles.mathTile}>
            <p className={styles.mathFigure}>100 paid refs</p>
            <p className={styles.mathLabel}>≈ $800 – $1,600 / month</p>
            <p className={styles.mathSub}>
              Annualizes to roughly $9,600 – $19,200 in recurring
              passive income.
            </p>
          </div>
        </div>
        <p className={styles.fineprint}>
          Net subscription revenue is gross subscription revenue minus
          refunds, chargebacks, sales tax, and payment-processor fees.
          The exact definition lives in Section 1.4 of the{" "}
          <a href="/influencers/license">Influencer Rev-Share Agreement</a>.
        </p>
      </div>
    </section>
  );
}

function WhyWeCanPaySection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <Heading as="h2" className={styles.sectionHeadline}>
          Why we can pay 40% — and the other guys can't.
        </Heading>
        <ul className={styles.bulletList}>
          <li>
            <strong>Subscriptions, not ads.</strong> JFK Social makes
            money when users pay us directly. There is no ad sales
            team to feed, no advertiser veto over creator speech, and
            no incentive to suppress audiences advertisers dislike.
          </li>
          <li>
            <strong>The structural rate the incumbents can't match.</strong>
            Twitter, Facebook, Instagram, and YouTube depend on ad
            revenue per user. They cannot give you forty percent of
            something they have to spend on infrastructure, sales,
            and moderation — their economics will not allow it. Ours
            will.
          </li>
          <li>
            <strong>Permanent attribution, not a sixty-day cookie.</strong>
            Once a user is credited to you, they stay credited to
            you. No "last-touch" steal where another network reroutes
            the conversion at the finish line.
          </li>
          <li>
            <strong>Free-to-paid is included.</strong> You don't have
            to drive paid signups directly. Refer someone to a free
            account — if they upgrade any time in the six-month
            conversion window, you get paid on that subscription
            too.
          </li>
          <li>
            <strong>You keep earning while they stay subscribed.</strong>
            This is recurring revenue, not a one-time bounty. A
            referred user who stays on JFK Social for three years pays
            you for three years.
          </li>
        </ul>
      </div>
    </section>
  );
}

function GettingStartedSection() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.sectionInner}>
        <Heading as="h2" className={styles.sectionHeadline}>
          From application to first payout.
        </Heading>
        <p className={styles.sectionLead}>
          Four phases. Most accepted influencers go from application to
          first payout in under sixty days, gated mostly by how fast
          your audience converts.
        </p>
        <ol className={styles.phaseList}>
          <li>
            <span className={styles.phaseTag}>Step 1 — Apply</span>
            Tell us who you are, where your audience lives, and what
            you plan to post. We approve influencers individually — no
            agencies, networks, or syndicates by default.
          </li>
          <li>
            <span className={styles.phaseTag}>Step 2 — Get your link</span>
            On acceptance, you get a Tracking Link, a landing page
            slug, and access to your influencer dashboard. The
            dashboard shows every click, signup, subscriber, and
            pending payout.
          </li>
          <li>
            <span className={styles.phaseTag}>Step 3 — Promote</span>
            Drive traffic to your landing page. Follow FTC disclosure
            rules — clearly mark paid promotion with{" "}
            <code>#ad</code> or equivalent. We provide the policy and
            templates so this is not guesswork.
          </li>
          <li>
            <span className={styles.phaseTag}>Step 4 — Get paid</span>
            Complete payout onboarding (W-9 and Stripe Connect)
            within four months of your first earned rev-share.
            Payouts go out monthly once you clear the $50 threshold.
          </li>
        </ol>
        <p className={styles.fineprint}>
          The program is currently open to U.S. citizens and U.S.
          residents only. Full terms — including attribution rules,
          self-referral prohibitions, payout onboarding, and FTC
          disclosure obligations — are in the{" "}
          <a href="/influencers/license">Influencer Rev-Share Agreement</a>{" "}
          and the companion{" "}
          <a href="/influencers/privacy">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}

export default function InfluencersOverview(): ReactNode {
  return (
    <Layout
      title="JFK Social Influencer Program — Earn 40% of Subscription Revenue"
      description="Refer paying subscribers to JFK Social and earn 40% of net subscription revenue for as long as they stay subscribed. Permanent first-touch attribution, branded landing pages, monthly payouts."
    >
      <HeroSection />
      <main>
        <HowItWorksSection />
        <PayoutMathSection />
        <WhyWeCanPaySection />
        <OpenSourceBackbones />
        <GettingStartedSection />
      </main>
    </Layout>
  );
}
