---
sidebar_position: 5
---

# Relay Configuration

Relays are the backbone of the Nostr network. Configure them to optimize your experience.

## What Are Relays?

Relays are servers that store and forward Nostr events. When you publish a note, it's sent to your connected relays. When you read your feed, events are fetched from those same relays.

## Default Relays

JFKSocial comes with a set of well-known public relays pre-configured. These provide good coverage for most users.

## Adding Relays

You can add any relay by entering its WebSocket URL (e.g., `wss://relay.example.com`) in the relay settings.

Consider adding relays that are:

- Geographically close to you for lower latency
- Operated by people or communities you trust
- Specialized for specific types of content

## Running Your Own Relay

For maximum sovereignty, you can run your own relay. Popular relay implementations include:

- **strfry** - High-performance C++ relay
- **nostr-rs-relay** - Rust-based relay
- **nostream** - TypeScript relay with PostgreSQL
