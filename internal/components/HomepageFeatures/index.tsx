import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Own Your Identity',
    icon: '\uD83D\uDD11',
    description: (
      <>
        Your identity is a cryptographic key pair that you control. No company
        can ban you, shadow you, or delete your account. Take your identity
        and followers with you anywhere on the Nostr network.
      </>
    ),
  },
  {
    title: 'Censorship Resistant',
    icon: '\uD83D\uDEE1\uFE0F',
    description: (
      <>
        Messages are relayed through a distributed network of relays. No single
        point of failure, no central authority deciding what you can or cannot
        say. Your voice, your rules.
      </>
    ),
  },
  {
    title: 'Interoperable',
    icon: '\uD83D\uDD17',
    description: (
      <>
        Built on the open Nostr protocol (NIPs). Your profile, posts, and
        connections work across any Nostr client. Switch apps without losing
        anything.
      </>
    ),
  },
  {
    title: 'Real-Time Feeds',
    icon: '\u26A1',
    description: (
      <>
        See posts as they happen with WebSocket-powered real-time feeds.
        Follow people, topics, and hashtags with instant updates. No
        algorithmic manipulation.
      </>
    ),
  },
  {
    title: 'Encrypted Messaging',
    icon: '\uD83D\uDD12',
    description: (
      <>
        Send private, end-to-end encrypted direct messages using NIP-04.
        Your conversations stay between you and the recipient. No data mining,
        no ad targeting.
      </>
    ),
  },
  {
    title: 'Built on Nostr',
    icon: '\uD83C\uDF10',
    description: (
      <>
        Powered by the Nostr protocol, an open standard for decentralized
        communication. Built for longevity, resilience, and true user
        sovereignty from the ground up.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{marginBottom: '1.5rem'}}>
      <div className={styles.featureCard}>
        <span className={styles.featureIcon}>{icon}</span>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
