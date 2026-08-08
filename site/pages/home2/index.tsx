import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import OpenSourceBackbones from "@site/internal/components/OpenSourceBackbones";

import styles from "./index.module.css";

function ArrowIcon() {
  return (
    <span aria-hidden="true" className={styles.ctaArrow}>
      →
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      className={styles.checkIcon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      className={styles.playIcon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
    </svg>
  );
}

const PAIN_POINTS = [
  "Your post is 24 hours old and has 16 views.",
  "Your reach collapsed overnight — no warning, no reason.",
  "Your account got suspended and your archive went with it.",
  "Your followers can't see you in their own feed anymore.",
];

const PROMISES = [
  {
    title: "Lawful speech stays up.",
    body: "No shadow-bans. No quiet demotions. No advertiser-driven takedowns. If it's legal, it stays — and you can read the policy that says so.",
  },
  {
    title: "We grow your audience.",
    body: "Ranked discovery, cross-network publishing, trust-based follow graphs, and Hero amplification — built to put suppressed voices in front of real humans.",
  },
  {
    title: "Protected from bot farms and narrative ops.",
    body: "Coordinated suppression is detected, exposed, and downweighted. A 10,000-account farm can't drown out one real person here.",
  },
  {
    title: "You can see why the algorithm did what it did.",
    body: "Every post shows the factor breakdown — Performance, Trust, Hop distance, Freshness. No black box. No 'the algorithm decided.'",
  },
  {
    title: "Your identity is yours, mathematically.",
    body: "Your account is a Nostr keypair you control. We can't delete it. We can't take your followers. You can leave with everything.",
  },
  {
    title: "One post, every open network.",
    body: "Publish once and reach Nostr, Mastodon, Bluesky, Threads, and X — through Post Global, with per-network publish receipts.",
  },
  {
    title: "Open source. Open algorithm. Open content.",
    body: "Audit the code on GitHub. Inspect the ranking weights. Mirror your own data. We earn trust by being verifiable, not by asking for it.",
  },
];

const PROOF_STATS = [
  {
    headline: "Built on Nostr",
    sub: "Cryptographic identity. No central authority to subpoena, fine, or seize.",
  },
  {
    headline: "4 open networks",
    sub: "Nostr, ActivityPub/Mastodon, Bluesky, Threads — one post, federated reach.",
  },
  {
    headline: "Trust scored -100 to +100",
    sub: "EigenTrust-based defense against bot swarms and coordinated takedown campaigns.",
  },
  {
    headline: "$19/mo. No ads, no pressure.",
    sub: "Subscriber-funded. You pay us, so we work for you — not for advertisers.",
  },
];

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            Speak freely.
            <br />
            <span className={styles.heroTitleAccent}>
              Grow your audience.
            </span>
          </Heading>
          <p className={styles.heroLede}>
            WeCitizens Social is a censorship-resistant network built on open
            standards and owned by the people who post on it. Your identity is yours. Your followers are yours. Your
            words are not buried by an algorithm you can't see.
          </p>
          <div className={styles.heroCtaRow}>
            <a
              href="https://wecitizens.social/create-account"
              className={styles.heroCta}
              target="_blank"
              rel="noopener noreferrer"
            >
              Create your free account
              <ArrowIcon />
            </a>
            <a
              href="https://wecitizens.social"
              className={styles.heroCtaSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse (while logged out)
            </a>
          </div>
          <ul className={styles.heroChecks}>
            <li>
              <CheckIcon /> Free to join
            </li>
            <li>
              <CheckIcon /> Open-source code
            </li>
            <li>
              <CheckIcon /> Take your followers with you
            </li>
          </ul>
        </div>
        <div className={styles.heroVideo}>
          <p className={styles.heroEyebrow}>
            The social network for citizens who refuse to be silenced
          </p>
          <div className={styles.videoFrame}>
            <iframe
              src="https://www.youtube.com/embed/-yWQrDJ-9kk"
              title="WeCitizens Social — Free Speech, Open Source"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className={styles.videoCaption}>
            Watch: why we built WeCitizens Social.
          </p>
        </div>
      </div>
    </header>
  );
}

function PainSection() {
  return (
    <section className={styles.painSection}>
      <div className={styles.painInner}>
        <Heading as="h2" className={styles.painHeadline}>
          You already know what's happening to your account.
        </Heading>
        <ul className={styles.painList}>
          {PAIN_POINTS.map((line) => (
            <li key={line} className={styles.painItem}>
              {line}
            </li>
          ))}
        </ul>
        <p className={styles.painPivot}>
          That's why we built WeCitizens Social.
        </p>
      </div>
    </section>
  );
}

function PromisesSection() {
  return (
    <section className={styles.promisesSection}>
      <div className={styles.promisesInner}>
        <Heading as="h2" className={styles.sectionHeadline}>
          Seven promises to every citizen.
        </Heading>
        <p className={styles.sectionLead}>
          In priority order. Everything we ship supports this list — and you
          can verify each one by reading the open-source code.
        </p>
        <ol className={styles.promiseGrid}>
          {PROMISES.map((promise, index) => (
            <li key={promise.title} className={styles.promiseCard}>
              <span className={styles.promiseNum}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.promiseTitle}>{promise.title}</h3>
              <p className={styles.promiseBody}>{promise.body}</p>
            </li>
          ))}
        </ol>
        <div className={styles.sectionCtaRow}>
          <Link to="/consumer" className={styles.promiseLink}>
            Read each promise in detail <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className={styles.proofSection}>
      <div className={styles.proofInner}>
        <Heading as="h2" className={styles.sectionHeadline}>
          Built so we cannot be pressured into censoring you.
        </Heading>
        <p className={styles.sectionLead}>
          Architecture, not advertising. The reasons our promises hold up
          under real pressure are wired into the stack.
        </p>
        <div className={styles.proofGrid}>
          {PROOF_STATS.map((stat) => (
            <div key={stat.headline} className={styles.proofCard}>
              <div className={styles.proofHeadline}>{stat.headline}</div>
              <p className={styles.proofSub}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className={styles.audienceSection}>
      <div className={styles.audienceInner}>
        <Heading as="h2" className={styles.sectionHeadline}>
          Built for the people legacy platforms have already pushed out.
        </Heading>
        <div className={styles.audienceGrid}>
          <Link to="/consumer" className={styles.audienceCard}>
            <div className={styles.audienceTag}>For Citizens</div>
            <h3 className={styles.audienceTitle}>
              Get your voice — and your reach — back.
            </h3>
            <p className={styles.audienceBody}>
              Free to join. Anonymous browsing. Bring your X archive and your
              follow list with you. Post once, reach every open network.
            </p>
            <span className={styles.audienceLink}>
              Learn what we promise you <ArrowIcon />
            </span>
          </Link>
          <Link to="/influencers" className={styles.audienceCard}>
            <div className={styles.audienceTag}>For Influencers</div>
            <h3 className={styles.audienceTitle}>
              Stop being throttled. Start being amplified.
            </h3>
            <p className={styles.audienceBody}>
              Transparent ranking, audience analytics, Hero broadcast
              amplification, and a creator rev-share. Your audience grows
              because the algorithm shows your work.
            </p>
            <span className={styles.audienceLink}>
              See the influencer program <ArrowIcon />
            </span>
          </Link>
          <Link to="/fork" className={styles.audienceCard}>
            <div className={styles.audienceTag}>For Operators</div>
            <h3 className={styles.audienceTitle}>
              Run your own social network.
            </h3>
            <p className={styles.audienceBody}>
              Fork the code, host on your own hardware, set your own policy.
              Open-source Go backend, React frontend, AWS or self-hosted
              install playbooks.
            </p>
            <span className={styles.audienceLink}>
              Fork the platform <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className={styles.finalCtaSection}>
      <div className={styles.finalCtaInner}>
        <Heading as="h2" className={styles.finalCtaTitle}>
          Join a feed that won't hide you.
        </Heading>
        <p className={styles.finalCtaBody}>
          Two minutes to sign up. Your identity is a cryptographic key only
          you control. If we ever fail you, you take everything with you.
        </p>
        <p className={styles.finalCtaBody}>
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
        <div className={styles.finalCtaRow}>
          <a
            href="https://wecitizens.social/create-account"
            className={styles.heroCta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Create your free account
            <ArrowIcon />
          </a>
          <a
            href="https://wecitizens.social"
            className={styles.finalCtaSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlayIcon />
            See the network live
          </a>
        </div>
        <div className={styles.finalCtaPolicies}>
          <Link to="/consumer/license" className={styles.policyLink}>
            License
          </Link>
          <span aria-hidden="true" className={styles.policyDot}>
            •
          </span>
          <Link to="/consumer/privacy" className={styles.policyLink}>
            Privacy
          </Link>
          <span aria-hidden="true" className={styles.policyDot}>
            •
          </span>
          <a
            href="https://github.com/ACT3ai"
            className={styles.policyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home2(): ReactNode {
  return (
    <Layout
      title="Speak Freely. Grow Your Audience."
      description="WeCitizens Social is a censorship-resistant social network built on Nostr. Free speech, transparent ranking, open code, open standards — seven promises to every citizen."
    >
      <HomepageHeader />
      <main>
        <PainSection />
        <PromisesSection />
        <ProofSection />
        <OpenSourceBackbones variant="alt" />
        <AudienceSection />
        <FinalCtaSection />
      </main>
    </Layout>
  );
}
