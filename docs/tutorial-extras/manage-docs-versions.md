---
sidebar_position: 1
---

# NIP-05 Verification

NIP-05 lets you link a human-readable identifier (like an email address) to your Nostr public key.

## What is NIP-05?

NIP-05 verification maps an internet identifier (e.g., `alice@example.com`) to a Nostr public key. This makes it easier for people to find you and adds a layer of trust to your identity.

## How It Works

1. You add a NIP-05 identifier to your JFKSocial profile (e.g., `you@yourdomain.com`)
2. Your domain serves a `.well-known/nostr.json` file that maps the name to your public key
3. Other clients verify this by fetching the JSON file from your domain

## Setting Up NIP-05

To set up NIP-05 on your own domain, create a file at `https://yourdomain.com/.well-known/nostr.json`:

```json
{
  "names": {
    "you": "your-hex-public-key-here"
  }
}
```

Make sure the file is served with the `Access-Control-Allow-Origin: *` header so clients can fetch it.

## Using a NIP-05 Service

If you don't have your own domain, several services provide NIP-05 identifiers for free or for a small fee.
