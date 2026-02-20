import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "JFKSocial",
  tagline: "Decentralized social media powered by Nostr",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: process.env.SITE_URL || "https://jfksocial.com",
  baseUrl: process.env.BASE_URL || "/",

  organizationName: "ACT3ai",
  projectName: "jfksocial-marketing",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/ACT3ai/jfksocial-marketing/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/ACT3ai/jfksocial-marketing/tree/main/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/jfksocial-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "JFKSocial",
      logo: {
        alt: "JFKSocial Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Product",
          items: [
            {
              label: "Getting Started",
              to: "/docs/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Nostr",
              href: "https://nostr.com",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "What is Nostr?",
              href: "https://nostr.com",
            },
            {
              label: "NIPs (Nostr Implementation Possibilities)",
              href: "https://github.com/nostr-protocol/nips",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JFKSocial. Built on Nostr.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
