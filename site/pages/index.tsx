import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/internal/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function VideoIcon() {
  return (
    <svg
      className={styles.videoIcon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3h7A2.5 2.5 0 0 1 16 5.5v1.2l3.55-2.13A1 1 0 0 1 21 5.43v13.14a1 1 0 0 1-1.45.89L16 17.3v1.2A2.5 2.5 0 0 1 13.5 21h-7A2.5 2.5 0 0 1 4 18.5v-13Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PitchSection() {
  return (
    <section className={styles.pitchSection}>
      <div className={styles.pitchGrid}>
        <div className={styles.pitchCopy}>
          <Heading as="h2" className={styles.pitchHeadline}>
            Social network for citizens that want free speech.
          </Heading>
        </div>
        <div className={styles.pitchActions}>
          <div className={styles.videoButtons}>
            <Link to="/consumer" className={styles.videoButton}>
              <VideoIcon />
              <span>For Consumers</span>
            </Link>
            <Link to="/fork" className={styles.videoButton}>
              <VideoIcon />
              <span>For Forks</span>
            </Link>
            <Link to="/influencers" className={styles.videoButton}>
              <VideoIcon />
              <span>For Influencers</span>
            </Link>
          </div>
          <div className={styles.policyButtons}>
            <Link to="/consumer/terms" className={styles.policyButton}>
              Terms of Service
            </Link>
            <Link to="/consumer/privacy" className={styles.policyButton}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            JFK Social
          </Heading>
          <ul className={styles.heroPhrases}>
            <li>free speech.</li>
            <li>open source.</li>
            <li>algorithm scores transparent.</li>
          </ul>
        </div>
        <div className={styles.heroVideo}>
          <div className={styles.videoFrame}>
            <iframe
              src="https://www.youtube.com/embed/jNQXAC9IVRw"
              title="JFK Social"
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

export default function Home(): ReactNode {
  return (
    <Layout
      title="Decentralized Social Media on Nostr"
      description="JFKSocial is a decentralized social media platform built on the Nostr protocol. Own your identity, your data, and your connections."
    >
      <HomepageHeader />
      <main>
        <PitchSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
