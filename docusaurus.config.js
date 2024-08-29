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
      src: "https://www.googletagmanager.com/gtm.js?id=GTM-K25D9CQ2",
      async: true,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: 'ІПСА, інститут прикладного системного аналізу, КПІ, \
                                      київський політехнічний інститут, університет, інститут, факультет, \
                                      iasa, kpi, катедра, факультет, система, системний аналіз, технічний університет, \
                                      студентська рада, вступна кампанія, студентське життя, абітурієнт, інтерв\'ю, \
                                      студрада КПІ, освітня програма, викладачі КПІ, освіта в Україні, студент КПІ, університетські новини, ІПСА КПІ, \
                                      інженерія, технології, програмування, наука, вступ 2024, технологічна освіта' },
        { name: 'description', content: 'IASA Student Council - Офіційний сайт Студради Інституту прикладного системного аналізу КПІ ім. І. Сікорського. \
                                          Дізнайтеся про останні події, новини, вступну кампанію та студентське життя в ІПСА. \
                                          Слідкуй за нами, аби не пропустити найцікавіше зі студентського життя ІПСА!' },
        { name: 'author', content: 'IASA Student Council' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'google-site-verification', content: '4d4y76j3hfs3.gv-edyxxdsb6p6w6o.dv.googlehosted.com' },

        { name: 'og:title', content: 'IASA Student Council - Студентська рада ІПСА' },
        { name: 'og:description', content: 'Слідкуй за нами, аби не пропустити найцікавіше зі студентського життя ІПСА! Дізнайтеся про останні події, новини, вступну кампанію та студентське життя в ІПСА КПІ.' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/' },
        { name: 'og:image', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/img/IASA-social.jpg' },
        { name: 'og:site_name', content: 'IASA Student Council' },
        { name: 'og:locale', content: 'uk_UA' },
        
        { name: 'icon', content: 'https://IASAStudentCouncil.github.io/iasa-sc-blog/img/favicon1.ico' },
        { name: 'language', content: 'uk' },
        { name: 'geo.region', content: 'UA-30' },
        { name: 'geo.placename', content: 'Київ' },
        { name: 'geo.position', content: '50.4501;30.5234' },
        { name: 'ICBM', content: '50.4501, 30.5234' },
        { name: 'copyright', content: `Copyright © ${new Date().getFullYear()} IASA Student Council` },
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
              { label: 'Cтудрада Навиворіт', to: '/blog/sc_working' },
              { label: '122 Штучний Інтелект', to: '/blog/AI' },
              { label: '122 Системне Проєктування', to: '/blog/122СП/' },
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
              { label: 'Instagram', href: 'https://www.instagram.com/studrada_iasa/' },
              { label: 'Facebook', href: 'https://www.facebook.com/studrada.iasa' },
              { label: 'Linkedin', href: 'https://www.linkedin.com/company/iasa-sc' },
              { label: 'Youtube', href: 'https://www.youtube.com/@IASAChannel' },
              { label: 'GitHub', href: 'https://github.com/IASAStudentCouncil' },
              { label: 'Analyst.shop', href: 'https://www.instagram.com/analyst.shop/' },
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
      head: [
        {
          tagName: 'script',
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K25D9CQ2');
          `,
        },
        {
          tagName: 'noscript',
          innerHTML: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K25D9CQ2"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        },
      ],
    }),
};

module.exports = config;