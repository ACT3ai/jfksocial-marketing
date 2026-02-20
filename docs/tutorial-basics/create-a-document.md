---
sidebar_position: 2
---

# Publishing Notes

Notes are the primary way to share content on JFKSocial.

## Writing a Note

Compose your note in the text area at the top of your feed. Notes can contain:

- Plain text
- Mentions of other users (using their npub)
- Hashtags for topic discovery
- URLs and links

## How Notes Work

When you publish a note:

1. JFKSocial creates a Nostr event (kind 1)
2. The event is signed with your private key
3. The signed event is sent to all your connected relays
4. Other users connected to those relays can see your note

## Replies and Threads

You can reply to any note to create threaded conversations. Replies reference the original note's event ID, creating a linked thread that any Nostr client can follow.
