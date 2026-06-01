import type { ReactNode } from "react";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

type Backbone = {
  title: string;
  tag: string;
  body: ReactNode;
};

const BACKBONES: Backbone[] = [
  {
    title: "Nostr",
    tag: "Primary backbone",
    body: (
      <>
        The open protocol JFK Social runs on. Your identity is a
        cryptographic key pair you own — not a username we can revoke.
        Posts relay through a distributed network of relays, so no
        single company can silence the network. If JFK Social ever
        fails you, your keys, posts, and followers move to any other
        Nostr client unchanged.
      </>
    ),
  },
  {
    title: "BlueSky (AT Protocol)",
    tag: "Federated",
    body: (
      <>
        The protocol behind BlueSky, designed for portable accounts
        and pluggable algorithms. JFK Social interoperates with AT
        Protocol so audiences and content can flow between networks
        without lock-in. Algorithms are user-selectable rather than
        editorially imposed.
      </>
    ),
  },
  {
    title: "ActivityPub (Threads)",
    tag: "W3C standard",
    body: (
      <>
        The open W3C standard that Meta's Threads adopted for
        federation, alongside hundreds of independent servers. JFK
        Social speaks ActivityPub so your posts can reach Threads
        users and the wider fediverse — without giving Meta control
        of your identity, audience, or reach.
      </>
    ),
  },
  {
    title: "Mastodon",
    tag: "Fediverse",
    body: (
      <>
        The largest established federated network on the open
        internet, also built on ActivityPub. Mastodon proved that a
        non-corporate social network can scale to millions of active
        users. JFK Social plugs into that same federation, so your
        audience is not trapped on one company's servers.
      </>
    ),
  },
];

type Props = {
  variant?: "default" | "alt";
  headline?: string;
  lead?: ReactNode;
};

export default function OpenSourceBackbones({
  variant = "default",
  headline = "Open Source Social Media Backbones.",
  lead = (
    <>
      Four open protocols and networks anchor everything we build.
      Your identity, your content, and your audience are not locked
      to a single company — and they never will be. If we ever fail
      you, you can leave with everything that matters.
    </>
  ),
}: Props): ReactNode {
  return (
    <section
      className={variant === "alt" ? styles.sectionAlt : styles.section}
    >
      <div className={styles.inner}>
        <Heading as="h2" className={styles.headline}>
          {headline}
        </Heading>
        <p className={styles.lead}>{lead}</p>
        <div className={styles.grid}>
          {BACKBONES.map((b) => (
            <div key={b.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <span className={styles.cardTag}>{b.tag}</span>
              </div>
              <p className={styles.cardBody}>{b.body}</p>
            </div>
          ))}
        </div>
        <p className={styles.footnote}>
          <strong>Why this matters:</strong> walled-garden networks
          can silence you by deleting your account. Open-protocol
          networks cannot. Your keys, your followers, your content
          are portable by design.
        </p>
      </div>
    </section>
  );
}
