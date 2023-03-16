// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IASA Student Council',
  tagline: 'Студентська рада Навчально-наукового інституту прикладного системного аналізу НТУУ "КПІ" ім. І. Сікорського',
  favicon: '/img/favicon.ico',

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
          blogTitle: 'Статті СР ІПСА',
          blogDescription: 'Різноманітні статті про життя в і поза ІПСА',
          postsPerPage: 10,
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
      image: 'img/IASA-social.jpg',
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
            title: 'Вибрані статті',
            items: [
              {
                label: 'Вибіркові 3 курс ММСА',
                to: '/blog/elected-mmsa-3-2023'
              },
              {
                label: 'Вибіркові 4 курс ММСА',
                to: '/blog/elected-mmsa-4-2023'
              },
              {
                label: 'Вибіркові 3 курс ШІ',
                to: '/blog/elected-ai-3-2023'
              },
              {
                label: 'Вибіркові 4 курс ШІ',
                to: '/blog/elected-ai-4-2023'
              },
              {
                label: 'Вітальний пост',
                to: '/blog/welcome'
              },
              {
                label: 'Hashtap — наші попередні статті',
                href: 'https://www.hashtap.com/@studsovet.ipsa',
              },
              {
                label: 'Medium — статті до Hashtap',
                href: 'https://medium.com/@iasa',
              },
            ],
          },
          {
            title: 'Telegram',
            items: [
              {
                label: 'IASA Student Council',
                href: 'https://t.me/IASA_Student_Council',
              },
              {
                label: 'IASAedu',
                href: 'https://t.me/iasa_edu',
              },
              {
                label: 'IASAevent',
                href: 'https://t.me/iasa_event',
              },
              {
                label: 'Analyst Shop',
                href: 'https://t.me/analyst_shop',
              },
              {
                label: 'IASA Analytics',
                href: 'https://t.me/iasa_analytics',
              },
            ],
          },
          {
            title: 'Інші ресурси',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/studrada_iasa/',
              },
              {
                label: 'Instagram Analyst.shop',
                href: 'https://www.instagram.com/analyst.shop/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@IASAChannel',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/studrada.iasa',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/IASAStudentCouncil',
              },
            ],
          },
          {
            title: 'Зв\'язатись з нами',
            items: [
              {
                label: 'Для питань та пропозицій',
                href: 'https://t.me/IASAsuggestionBot',
              },
              {
                label: 'З приводу якості освіти',
                href: 'https://t.me/iasa_stud_support_bot',
              },
            ],
          },
        ],
        logo: {
          alt: 'IASA Student Council',
          src: 'img/yellow_logo.png',
          width: 50,
          height: 50,
        },
        copyright: `Copyright © ${new Date().getFullYear()} IASA Student Council. Built with Docusaurus.`,
      },
      // prism: {
      //   theme: darkCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
