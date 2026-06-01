import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import OpenSourceBackbones from "@site/internal/components/OpenSourceBackbones";

import styles from "./index.module.css";

const CORE_VALUES = [
  {
    title: "Free Speech",
    body: (
      <>
        Lawful speech stays up. Every system on JFK Social — moderation,
        ranking, hosting, federation — is designed around the principle
        that you do not get silenced for unpopular views. No
        shadow-banning, demonetization, or de-platforming to keep
        regulators, advertisers, or activist staff happy.
      </>
    ),
  },
  {
    title: "We Grow Your Audience",
    body: (
      <>
        Other platforms throttle your reach. JFK Social is engineered to
        grow audiences that legacy platforms suppress — through ranked
        discovery, cross-network publishing with Post Global,
        trust-based discovery via Follow, and Hero broadcast
        amplification.
      </>
    ),
  },
  {
    title: "Protection From Manufactured Narratives",
    body: (
      <>
        Citizens get a voice protected from coordinated narratives
        pushed by governments, intelligence services, large
        corporations, captured media, and bot farms. Inorganic
        amplification is detected and downweighted. Authentic human
        signal is what wins.
      </>
    ),
  },
  {
    title: "Transparent Ranking Algorithms",
    body: (
      <>
        Every post's ranking is inspectable. Our <code>xalgorithm</code>{" "}
        project publishes the ranking logic openly — signals, weights,
        and reasons a post is amplified, demoted, or filtered. No
        black-box editorial hand on the scale.
      </>
    ),
  },
  {
    title: "Open-Source Code",
    body: (
      <>
        The entire platform is open source. Anyone can audit it, fork
        it, and run their own instance. Trust is earned through
        inspection of the actual code, not asserted through marketing.
      </>
    ),
  },
  {
    title: "Open-Standard Backbones",
    body: (
      <>
        Built on Nostr, ActivityPub, Mastodon, and BlueSky (AT
        Protocol). Your identity, your content, and your social graph
        are not locked to a single vendor. If JFK Social ever fails
        you, your keys, posts, and followers can move to another
        compatible network.
      </>
    ),
  },
  {
    title: "Open Content",
    body: (
      <>
        Content on JFK Social is open to be read, indexed, archived,
        mirrored, cross-posted, and federated. We do not wall content
        off from the broader internet — we make it easier for your
        words to reach the largest possible authentic audience.
      </>
    ),
  },
];

function HeroSection() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            For Consumers
          </Heading>
          <p className={styles.heroBody}>
            JFK Social is the social network for citizens who refuse to
            be silenced. We exist to give a voice back to the people —
            and to defend that voice against the forces that drown out
            organic speech everywhere else.
          </p>
          <div className={styles.heroCtaRow}>
            <a
              href="https://jfksocial.com"
              className={styles.heroCta}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
              <span aria-hidden="true" className={styles.heroCtaArrow}>
                →
              </span>
            </a>
          </div>
        </div>
        <div className={styles.heroVideo}>
          <div className={styles.videoFrame}>
            <iframe
              src="https://www.youtube.com/embed/-yWQrDJ-9kk"
              title="JFK Social — For Consumers"
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

function CoreValuesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <Heading as="h2" className={styles.sectionHeadline}>
          What we promise every customer.
        </Heading>
        <p className={styles.sectionLead}>
          Seven promises, in priority order. Everything else we ship
          supports this list.
        </p>
        <ol className={styles.valueList}>
          {CORE_VALUES.map((value) => (
            <li key={value.title} className={styles.valueItem}>
              <div className={styles.valueBody}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueText}>{value.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className={styles.sectionCtaRow}>
          <a
            href="https://jfksocial.com"
            className={styles.heroCta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
            <span aria-hidden="true" className={styles.heroCtaArrow}>
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ConsumerOverview(): ReactNode {
  return (
    <Layout
      title="For Consumers — JFK Social"
      description="JFK Social is the social network for citizens who refuse to be silenced. Free speech, open algorithms, open code, open standards — seven promises to every customer."
    >
      <HeroSection />
      <main>
        <CoreValuesSection />
        <OpenSourceBackbones variant="alt" />
      </main>
    </Layout>
  );
}
