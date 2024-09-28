const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title: 'Быстрый старт Java Script',
  tagline: 'Освой JavaScript с нуля — быстро, просто, эффективно.',
  favicon: 'img/corgisaurus.jfif',
  url: 'https://nishka322.github.io',
  baseUrl: '/fast_start_JS/',
  organizationName: 'nishka322',
  projectName: 'fast_start_JS',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: '/img/java_logo_card.jfif',
    navbar: {
      title: 'Быстрый старт Java',
      logo: {
        src: '/img/js_shield.jpg',
        alt: 'Быстрый старт Java',
        srcDark: '/img/js_shield.jpg',
      },
      items: [
        // Используем тип html для изображения в навбаре
        {
          type: 'html',
          position: 'left',
          value: '<img src="/corgisaurus/img/navbar_logo_instr.jpg" alt="Инструкции" style="height: 80px; width: auto; margin-right: 5px;" />',
        },
        {
          to: '/corgisaurus/docs/instruction/intro',
          position: 'left',
          label: 'Инструкции',
        },
        // Используем тип html для изображения в навбаре
        // {
        //   type: 'html',
        //   position: 'left',
        //   value: '<img src="/corgisaurus/img/orion.PNG" alt="Управление" style="height: 20px; margin-right: 5px;" />',
        // },
        {
          href: 'https://github.com/nishka322',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'JS',
          items: [
            { label: 'Официальный сайт', href: 'https://js.org/' },
            { label: 'Twitter', href: 'https://x.com/JavaScript' },
            //{ label: 'Контакты', href: 'https://bolid.ru/about/contacts/' },
          ],
        },
        {
          title: 'Связь с разработчиком',
          items: [
            { label: 'Habr', href: 'https://career.habr.com/n1shi' },
            { label: 'GitHub', href: 'https://github.com/nishka322' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Липунов Максим Анатольевич. Права не защищены. Сайт создан как тестовый проект для команды 1С:Предприятие.Элемент.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;
