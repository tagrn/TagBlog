// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tag's Blog",
  tagline: 'Tag',
  url: 'https://blog.taewan.link',
  baseUrl: '/',
  projectName: 'tag-blog',
  organizationName: 'tagrn',
  deploymentBranch: 'deploy',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 5,
          blogSidebarCount: 10,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-H5SCJ1SBYG',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Engineer Tag',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Learn',
          },
          { to: '/blog', label: 'Post', position: 'left' },
          {
            type: 'html',
            position: 'right',
            className: 'version',
            value: `<div style="font:times">Updated at ${new Date()
              .toISOString()
              .slice(0, 10)}</div>`,
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        copyright: 'Mady by Engineer Tag',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
