// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IASA Articles',
  tagline: 'Студентська рада Навчально-наукового інституту прикладного системного аналізу НТУУ "КПІ" ім. І. Сікорського',
  favicon: '/img/favicon1.ico',

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
          blogSidebarTitle: 'Усі статті',
          blogSidebarCount: 'ALL',
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
      metadata: [{name: 'keywords', content: 'блог, ІПСА, СтудРада, КПІ, Сікорський, IASA, Institute, Applied, System, Analysis, інститут,\
              прикладний, системний, аналіз, Student, Council, університет, Київ, Політех, інститут, Igor Sikorsky'},
            {name: 'google-site-verification', content: 'wmgySCohMr7naPEz7Dl-ttjGW3_Nh2qY0Z84oxRenn0'}],
      image: 'img/IASA-social.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'IASA Articles',
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
            title: 'Ми в Telegram',
            items: [
              {
                label: 'IASA Student Council',
                href: 'https://t.me/IASA_Student_Council',
              },
              {
                label: 'IASAevent',
                href: 'https://t.me/iasa_event',
              },
              {
                label: 'IASAedu',
                href: 'https://t.me/iasa_edu',
              },
              {
                label: 'IASA Analytics',
                href: 'https://t.me/iasa_analytics',
              },
              {
                label: 'Analyst Shop',
                href: 'https://t.me/analyst_shop',
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
                label: 'Facebook',
                href: 'https://www.facebook.com/studrada.iasa',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/iasa-sc',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@IASAChannel',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/IASAStudentCouncil',
              },
              {
                label: 'Analyst.shop',
                href: 'https://www.instagram.com/analyst.shop/',
              },
            ],
          },
          {
            title: 'Зворотній зв\'язок',
            items: [
              {
                label: 'Запитання та пропозиції',
                href: 'https://t.me/IASAsuggestionBot',
              },
              {
                label: 'Допомога студентам',
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
        copyright: `Copyright © ${new Date().getFullYear()} IASA Student Council`,
      },
      // prism: {
      //   theme: darkCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
