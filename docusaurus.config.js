// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BearProfessor',
  tagline: '学中玩，玩中学',
  favicon: 'img/银河护卫队-浣熊火箭.svg',

  // Set the production url of your site here
  url: 'https://bearprofessor.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Dr.bear', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
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
          //editUrl:
           //'https://github.com/bear-doctor?tab=repositories',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/bear-doctor?tab=repositories',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/weini.svg',

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },

      navbar: {
        title: 'BearProfessor',
        logo: {
          alt: 'Bear',
          src: 'img/weini.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            sidebarId: 'knowledge',
            position: 'left',
            label: '知识大门',
          },
          {
            type: 'doc',
            docId: 'algorithm/intro',
            sidebarId: 'algorithm',
            position: 'left',
            label: '算法',
          },
          {to: '/blog', label: '随笔', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '内容',
            items: [
              {
                label: '知识大门',
                to: '/docs/intro',
              },
              {
                label: '算法',
                to: '/docs/algorithm/intro'
              },
              {
                label: '随笔',
                to: '/blog'
              }
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Github',
                href: 'https://github.com/bear-doctor?tab=repositories',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        additionalLanguages: ['powershell','cpp','git','python'],
      },
    }),
};

module.exports = config;
