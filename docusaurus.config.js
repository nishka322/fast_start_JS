// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Быстрый старт Java Script',
  tagline: 'Освой JavaScript с нуля — быстро, просто, эффективно.',
  favicon: 'img/1c_ico.ico',
  url: 'https://nishka322.github.io',
  baseUrl: '/',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
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
        {
          type: 'html',
          position: 'left',
          value: '<img src="/img/navbar_logo_instr.jpg" alt="Инструкции" style="height: 80px; width: auto; margin-right: 5px;" />',
        },
        {
          to: 'docs/instruction/intro',
          position: 'left',
          label: 'Инструкции',
        },
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

export default config;
