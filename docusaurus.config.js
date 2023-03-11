// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://IASAStudentCouncil.github.io',
  baseUrl: '/iasa-sc-blog',

  organizationName: 'IASAStudentCouncil', 
  projectName: 'iasa-sc-blog', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ua',
    locales: ['ua'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
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
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'IASA Student Council',
        logo: {
          alt: 'IASA SC',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Статті', position: 'left'},
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'Blog',
            items: [
              {
                label: 'Welcome',
                to: '/blog/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/IASA_Student_Council',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/studrada_iasa/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@IASAChannel',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/IASAStudentCouncil',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IASA Student Council. Built with Docusaurus.`,
      },
      // prism: {
      //   theme: darkCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
