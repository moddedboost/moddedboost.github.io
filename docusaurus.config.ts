import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: 'Modded Boost',
  tagline: 'A game mod for Gundam Extreme Vs. Full Boost on RPCS3',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://moddedboost.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'moddedboost', // Usually your GitHub org/user name.
  projectName: 'moddedboost.github.io', // Usually your repo name.
  deploymentBranch: 'deployment',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans', 'ja'],
  },

  plugins: [tailwindPlugin],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'Modded Boost',
      logo: {
        alt: 'Modded Boost Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          position: 'left',
          label: 'Intro',
          to: '/docs/intro',
        },
        {
          position: 'left',
          label: 'Launcher',
          to: '/docs/category/launcher',
        },
        {
          position: 'left',
          label: 'Support',
          to: '/docs/category/support',
        },
        {
          position: 'left',
          label: 'Changelogs',
          to: '/docs/category/changelogs',
        },
        {
          type: 'localeDropdown',
          position: 'right'
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'http://discord.gg/QAUYKmvxRN',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://twitter.com/descatal',
          label: 'Twitter',
          position: 'right',
        },
        {
          href: 'https://github.com/descatal/moddedboost',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: '/docs/intro',
            },
            {
              label: 'Launcher',
              to: '/docs/category/launcher',
            },
            {
              label: 'Support',
              to: '/docs/category/support',
            },
            {
              label: 'Changelogs',
              to: '/docs/category/changelogs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'http://discord.gg/QAUYKmvxRN',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/descatal',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/descatal/moddedboost',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
