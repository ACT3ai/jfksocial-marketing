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

function InfluencersSection() {
  return (
    <section className={styles.influencersSection}>
      <div className={styles.splitGrid}>
        <div className={styles.splitVideo}>
          <div className={styles.videoFrame}>
            <iframe
              src="https://www.youtube.com/embed/jNQXAC9IVRw"
              title="JFK Social — For Influencers"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className={styles.splitCopy}>
          <Heading as="h2" className={styles.sectionHeadline}>
            Social network for influencers.
          </Heading>
        </div>
      </div>
    </section>
  );
}

function ForkSection() {
  return (
    <section className={styles.forkSection}>
      <div className={styles.splitGrid}>
        <div className={styles.splitCopy}>
          <Heading as="h2" className={styles.sectionHeadline}>
            Our Open Source.
          </Heading>
          <p className={styles.sectionSubtext}>
            Run your own social network.
          </p>
        </div>
        <div className={styles.splitVideo}>
          <div className={styles.videoFrame}>
            <iframe
              src="https://www.youtube.com/embed/aqz-KE-bpKQ"
              title="JFK Social — Your Social Network"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PitchSection() {
  return (
    <section className={styles.pitchSection}>
      <div className={styles.pitchGrid}>
        <div className={styles.pitchCopy}>
          <Heading as="h2" className={styles.pitchHeadline}>
            Social network for citizens
            <br />
            that want free speech
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
            <Link to="/consumer/license" className={styles.policyButton}>
              License
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
        <InfluencersSection />
        <ForkSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
