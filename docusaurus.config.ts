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

  staticDirectories: ["site/static"],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "videos",
        path: "site/videos",
        routeBasePath: "videos",
        sidebarPath: "./internal/sidebars-videos.ts",
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          path: "site/docs",
          sidebarPath: "./internal/sidebars.ts",
          editUrl: "https://github.com/ACT3ai/jfksocial-marketing/tree/main/",
        },
        blog: {
          path: "site/blog",
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
        pages: {
          path: "site/pages",
        },
        theme: {
          customCss: "./internal/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/jfksocial-social-card.jpg",
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "JFK Social",
      logo: {
        alt: "JFK Social Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/consumer", label: "Users (Citizens)", position: "left" },
        { to: "/influencers", label: "Influencers", position: "left" },
        { to: "/fork", label: "Your Social Network", position: "left" },
        {
          type: "docSidebar",
          docsPluginId: "videos",
          sidebarId: "videosSidebar",
          position: "left",
          label: "Videos",
        },
        {
          href: "https://jfksocial.com/login",
          label: "Log In",
          position: "right",
          className: "navbarLogin",
        },
        {
          href: "https://jfksocial.com/signup",
          label: "Sign Up",
          position: "right",
          className: "navbarSignUp",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Users (Citizens)",
          items: [
            { label: "Terms", to: "/consumer/license" },
            { label: "Privacy", to: "/consumer/privacy" },
          ],
        },
        {
          title: "Influencers",
          items: [
            { label: "Terms", to: "/influencers/license" },
            { label: "Privacy", to: "/influencers/privacy" },
          ],
        },
        {
          title: "Your Social Network",
          items: [
            { label: "Terms", to: "/fork/license" },
            { label: "Privacy", to: "/fork/privacy" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ACT3 AI, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
