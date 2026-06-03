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

  url: process.env.SITE_URL || "https://m.jfksocial.com",
  baseUrl: process.env.BASE_URL || "/",

  organizationName: "ACT3ai",
  projectName: "jfksocial-marketing",

  onBrokenLinks: "throw",

  staticDirectories: ["site/static"],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500;1,6..72,600&family=Public+Sans:wght@400;500;600;700&display=swap",
  ],

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
    announcementBar: {
      id: "jfk-dateline",
      content:
        '<span class="jfkDateline"><span>Est. 2026</span><span class="jfkDatelineSep">★</span><span>Open-Protocol</span><span class="jfkDatelineSep">★</span><span>Censorship-Resistant</span><span class="jfkDatelineSep">★</span><span>Your Keys · Your Followers · Your Words</span></span>',
      backgroundColor: "#081628",
      textColor: "#A7B3C4",
      isCloseable: false,
    },
    navbar: {
      title: "JFK Social",
      logo: {
        alt: "JFK Social Logo",
        src: "img/jfk-john-80.jpg",
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
          href: "https://jfksocial.com/create-account",
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
