import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// Single source of truth for the Level 2 areas and everything built from them.
// The navbar and footer defined below are rendered by @theme/Layout, which wraps
// every docs page, every blog post and every hand-written React page under
// site/pages/, so editing internal/nav.ts changes the top bar and the footer on
// every page of the site at once.
import {
  clientNavData,
  footerColumns,
  moreNavbarItem,
  partyNavbarItems,
} from "./internal/nav";

const config: Config = {
  title: "WeCitizens Social",
  tagline: "The social network citizens own",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: process.env.SITE_URL || "https://m.wecitizens.social",
  baseUrl: process.env.BASE_URL || "/",

  organizationName: "ACT3ai",
  projectName: "jfksocial-marketing",

  onBrokenLinks: "throw",

  staticDirectories: ["site/static"],

  // Node-side nav data the browser needs (the footer's clickable column titles).
  // Read with useDocusaurusContext().siteConfig.customFields.
  customFields: {
    ...clientNavData(),
  },

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
      id: "wc-dateline",
      content:
        '<span class="wcDateline"><span>Est. 2026</span><span class="wcDatelineSep">★</span><span>Open-Protocol</span><span class="wcDatelineSep">★</span><span>Censorship-Resistant</span><span class="wcDatelineSep">★</span><span>Your Keys · Your Followers · Your Words</span></span>',
      backgroundColor: "#081628",
      textColor: "#A7B3C4",
      isCloseable: false,
    },
    navbar: {
      title: "WeCitizens Social",
      logo: {
        alt: "WeCitizens Social Logo",
        src: "img/jfk-john-80.jpg",
      },
      items: [
        // The four site links. `wcNavFoldable` lets CSS fold them into the
        // "More" menu below 1380px, where the whole row no longer fits — the
        // matching `wcMoreFolded` duplicates live in internal/nav.ts.
        {
          to: "/consumer",
          label: "Users (Citizens)",
          position: "left",
          className: "wcNavFoldable",
        },
        {
          to: "/influencers",
          label: "Influencers",
          position: "left",
          className: "wcNavFoldable",
        },
        {
          to: "/fork",
          label: "Your Social Network",
          position: "left",
          className: "wcNavFoldable",
        },
        {
          type: "docSidebar",
          docsPluginId: "videos",
          sidebarId: "videosSidebar",
          position: "left",
          label: "Videos",
          className: "wcNavFoldable",
        },
        // The two partisan front doors — "We The Citizens R" over "Republicans",
        // "We The Citizens D" over "Democrats". Each is a dropdown whose own
        // label links to that area's overview.mdx.
        ...partyNavbarItems(),
        // "More ⌄" — every Level 2 area, each going to its overview.mdx.
        moreNavbarItem(),
        {
          href: "https://wecitizens.social/login",
          label: "Log In",
          position: "right",
          className: "navbarLogin",
        },
        {
          href: "https://wecitizens.social/create-account",
          label: "Sign Up",
          position: "right",
          className: "navbarSignUp",
        },
      ],
    },
    footer: {
      style: "dark",
      // Built from internal/nav.ts, the same data the navbar uses, so the two
      // can never drift. Rendered by @theme/Layout on every page of the site.
      links: footerColumns(),
      copyright: `Copyright © ${new Date().getFullYear()} ACT3 AI, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
