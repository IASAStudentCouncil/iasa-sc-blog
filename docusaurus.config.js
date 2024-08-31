// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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

  i18n: {
    defaultLocale: 'uk',
    locales: ['uk'],
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
          blogDescription: 'Дізнайтеся про останні події, новини, вступну кампанію та студентське життя в ІПСА.',
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
  
  scripts: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-9CFDMS82J9",
      async: true,
    },
    {
      src: "/js/gtag.js",
      async: true,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: `ІПСА, IASA, Articles, Статті ІПСА, КПІ, KPI, 
                                      Інститут прикладного системного аналізу,
                                      Київський політехнічний інститут, ІТ освіта, 
                                      Штучний інтелект, Системний аналіз, Системне проєктування, 
                                      Технічна освіта, Комп\'ютерні науки, Програмування, 
                                      Студрада ІПСА, Студентське життя, Вступна кампанія, 
                                      Абітурієнт, Інтерв\'ю, Івенти КПІ, 
                                      Викладачі КПІ, Освіта в Україні, Математика, 
                                      Математичний аналіз, Лінійна алгебра, Дискретна математика, 
                                      Алгоритми та структури даних, Бази даних, Мережі, 
                                      Операційні системи, Архітектура комп\'ютерів, 
                                      Штучний інтелект КПІ, ММСА, ШІ, СП, 
                                      Робота в ІТ, Стажування, Кар\'єра в ІТ, 
                                      Стартапи, Технологічна освіта, Проєкти КПІ, 
                                      Навчання в КПІ, ІТ курси, ІТ конференції, 
                                      Наукова робота, Дослідження в ІТ, \
                                      Освітні програми КПІ, Студентські ініціативи, 
                                      Студентські проєкти, Співпраця з бізнесом, 
                                      Інновації в освіті, Розвиток технологій, 
                                      Лідерство, Креативність, Саморозвиток` },
        { name: 'description', content: 'Дізнайтеся про останні події, новини, вступну кампанію та студентське життя в ІПСА. Слідкуй за нами, аби не пропустити найцікавіше зі студентського життя ІПСА!' },
        { name: 'robots', content: 'index, follow, all, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'google-site-verification', content: 'EKoTRWvgkVlUjCTsTxqmsiExFKX7KYEotmBHnfc12R0' },
        { name: 'canonical', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/blog' },
        { name: 'author', content: 'IASA Student Council' },
        { name: 'distribution', content: 'global' },
        { name: 'publisher', content: 'IASA Student Council' }, 
        { name: 'coverage', content: 'Worldwide' }, 
        { name: 'rating', content: 'General' },
        { name: 'subject', content: 'Education, Technology' },
        { name: 'classification', content: 'Education/Technology' },
        { name: 'rights', content: 'All rights reserved' },
        { name: 'copyright', content: `Copyright © ${new Date().getFullYear()} IASA Student Council` },

        { httpEquiv: 'Content-Type', content: 'text/html; charset=UTF-8' },
        { charset: 'utf-8' },

        { name: 'og:title', content: 'IASA Articles - Статті Студради ІПСА' },
        { name: 'og:description', content: 'Дізнайтеся про останні події, новини, вступну кампанію та студентське життя в ІПСА. Слідкуй за нами, аби не пропустити найцікавіше зі студентського життя ІПСА!' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/blog' },
        { name: 'og:image', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/img/IASA-social.jpg' },
        { name: 'og:image:alt', content: 'IASA Articles' },
        { name: 'og:site_name', content: 'IASA Articles' },
        { name: 'og:locale', content: 'uk_UA' },
        { name: 'og:determiner', content: 'the' },
        { name: 'og:section', content: 'Education' },
        { name: 'og:tag', content: 'Education, Technology, Student Life' },

        { name: 'image', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/img/IASA-social.jpg' },
        { name: 'image:alt', content: 'IASA Articles' },
        { name: 'image:type', content: 'image/jpeg' },
        { name: 'icon', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/img/favicon1.ico' },

        { name: 'geo.country', content: 'UA' },
        { name: 'geo.city', content: 'Kyiv' },
        { name: 'geo.region', content: 'UA-30' },
        { name: 'geo.placename', content: 'Київ' },
        { name: 'geo.position', content: '50.4495;30.4647' },
        { name: 'ICBM', content: '50.4495, 30.4647' },
        { name: 'geo.latitude', content: '50.4495' },
        { name: 'geo.longitude', content: '30.4647' },
        { name: 'geo.place_id', content: 'ChIJnwpfGoPO1EARWDLGgxP1OCY' },
        { name: 'geo.continent', content: 'Europe' },

        { name: 'first', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/blog' },
        { name: 'start', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/blog' },
        { name: 'next', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/blog/page/2' },
        { name: 'prev', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/blog' },
        { name: 'last', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/page/4' },
        { name: 'pagename', content: 'IASA Articles' },
        { name: 'page_type', content: 'blog' },
        { name: 'index', content: 'yes' },
        { name: 'follow', content: 'yes' },
        { name: 'distribution', content: 'web' },

        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'theme-color', content: '#FFD700' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'IASA SC' },
        { name: 'application-name', content: 'IASA SC' },
        { name: 'msapplication-TileColor', content: '#FFD700' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'referrer', content: 'no-referrer-when-downgrade' },
        { name: 'color-scheme', content: 'dark light' },
        { name: 'x-ua-compatible', content: 'IE=edge' }, 
        { name: 'generator', content: 'Docusaurus' }
      ],
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
          { to: '/blog', label: 'Статті', position: 'left' },
        ],
      },
      footer: {
        links: [
          {
            title: 'Обране',
            items: [
              { label: 'Q&A', to: '/blog/FAQ' },
              { label: 'IASA Events', to: '/blog/Event' },
              { label: 'Гайд першокурсника', to: '/blog/freshman_guide' },
              { label: 'Cтудрада Навиворіт', to: '/blog/iasa-sc-working-2' },
              { label: '122 Штучний Інтелект', to: '/blog/AI' },
              { label: '122 Системне Проєктування', to: '/blog/122СП' },
              { label: '124 Системний Аналіз', to: '/blog/124' },
              { label: 'Стереотипи ІПСА', to: '/blog/Stereotypes' },
            ],
          },
          {
            title: 'Ми в Telegram',
            items: [
              { label: 'IASA Student Council', href: 'https://t.me/IASA_Student_Council' },
              { label: 'IASAevent', href: 'https://t.me/iasa_event' },
              { label: 'IASAedu', href: 'https://t.me/iasa_edu' },
              { label: 'IASA Analytics', href: 'https://t.me/iasa_analytics' },
              { label: 'Analyst Shop', href: 'https://t.me/analyst_shop' },
            ],
          },
          {
            title: 'Інші ресурси',
            items: [
              { label: 'Instagram', href: 'https://www.instagram.com/studrada_iasa' },
              { label: 'Facebook', href: 'https://www.facebook.com/studrada.iasa' },
              { label: 'Linkedin', href: 'https://www.linkedin.com/company/iasa-sc' },
              { label: 'Youtube', href: 'https://www.youtube.com/@IASAChannel/videos' },
              { label: 'GitHub', href: 'https://github.com/IASAStudentCouncil' },
              { label: 'Analyst.shop', href: 'https://www.instagram.com/analyst.shop' },
              { label: 'Більше посилань', href: 'https://linktr.ee/iasa_sc' },
            ],
          },
          {
            title: 'Зворотній зв\'язок',
            items: [
              { label: 'Запитання та пропозиції', href: 'https://t.me/IASAsuggestionBot' },
              { label: 'Допомога студентам', href: 'https://t.me/iasa_stud_support_bot' },
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
    }),
};

module.exports = config;