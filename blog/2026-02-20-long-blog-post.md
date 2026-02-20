---
slug: understanding-nostr-protocol
title: "Understanding the Nostr Protocol: A Technical Overview"
authors: [jfksocial]
tags: [nostr, decentralization]
---

A technical look at how the Nostr protocol works and why it matters for the future of social media.

<!-- truncate -->

## How Nostr Works

At its core, Nostr is surprisingly simple. The protocol defines two components: **clients** (like JFKSocial) and **relays** (servers that store and forward messages).

### Events

Everything in Nostr is an "event" -- a JSON object that contains:

- The event content (your post, profile update, reaction, etc.)
- A public key identifying the author
- A cryptographic signature proving authenticity
- A timestamp and event kind identifier

### Keys

Your identity on Nostr is a pair of cryptographic keys:

- **Public key (npub)** - This is your identity. Share it with anyone.
- **Private key (nsec)** - This proves you are who you claim to be. Never share it.

When you publish a note, you sign it with your private key. Anyone can verify the signature using your public key, ensuring the message actually came from you and hasn't been tampered with.

### Relays

Relays are simple WebSocket servers that accept events from clients and forward them to other clients. Key properties:

- Anyone can run a relay
- Clients can connect to multiple relays simultaneously
- Relays can have their own policies about what they store
- If one relay goes down, your content still exists on others

## NIPs: The Standards

NIPs (Nostr Implementation Possibilities) are the standards that define how different features work. Some key NIPs include:

- **NIP-01** - Basic protocol flow and event structure
- **NIP-02** - Contact list and petname system
- **NIP-04** - Encrypted direct messages
- **NIP-05** - DNS-based identity verification
- **NIP-57** - Zaps (Lightning Network tipping)

## Why This Matters

Nostr's simplicity is its strength. By keeping the protocol minimal and extensible, it allows clients like JFKSocial to innovate on the user experience while maintaining interoperability with the broader ecosystem.

Your JFKSocial profile works on Damus, Amethyst, Primal, and every other Nostr client. Your followers, your posts, your identity -- all portable, all yours.
