import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const myUrl = 'https://shaziasama.github.io';
const myBaseUrl = '/Physical-AI-Humanoid-Robotics/';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'An Interactive Textbook for Building the Next Generation of intelligent Robots.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: myUrl,
  // Set the /<myBaseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: myBaseUrl,

  // GitHub pages deployment config.
  organizationName: 'Shaziasama', // Usually your GitHub org/user name.
  projectName: 'AI-book-with-rag-chatbot', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  // onBrokenMarkdownLinks: 'warn', // Deprecated

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // editUrl:
            // 'https://github.com/Shaziasama/Physical-AI-Humanoid-Robotics/tree/main/docusaurus-text-book/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/Shaziasama/Physical-AI-Humanoid-Robotics/tree/main/docusaurus-text-book/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      items: [
        {
          to: myBaseUrl,
          label: 'Home',
          position: 'left',
        },
        {
          to: myBaseUrl + 'docs/intro',
          label: 'Modules',
          position: 'left',
        },
        {
          to: myBaseUrl + 'about', // Placeholder for about page
          label: 'About',
          position: 'left',
        },
        {
          href: 'https://github.com/Shaziasama/AI-book-with-rag-chatbot',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [], // We are removing the default footer links
      copyright: `Copyright © ${new Date().getFullYear()} Shazia Zohaib. All rights reserved. <br/> Physical AI & Humanoid Robotics: An Interactive Textbook.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
