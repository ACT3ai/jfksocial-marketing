import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <div className={styles.nostrBadge}>Built on Nostr Protocol</div>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            A decentralized social platform where you own your identity, your
            data, and your connections. No algorithms. No censorship. Just real
            social networking.
          </p>
        </div>
        <div className={styles.heroForm}>
          <iframe
            width="100%"
            height="490"
            src="https://53c7127c.sibforms.com/serve/MUIFAOl-rQaVwjkhjPqpj5h40fGstEmRaVtcRxB2P5piUO8KmTmH4D2SAFhmN3ZHMeIOs1LtwPkhEaAqh_w577WoP4LZp0IttSG-AedcV2we_gHyxQGWFZROgO3eXM9wCHhpilTrAVMfufVVHWewagr9SHBt9_oXHovngkv24D_DEjDwF1VKt0DcrZ0qcWYA7ObxtoMFi3ucA_1jEQ=="
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            style={{ display: "block", maxWidth: "100%" }}
            title="Newsletter Signup"
          />
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
