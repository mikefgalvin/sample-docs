// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Paraflow Example',
  tagline: 'I say we do this',
  favicon: 'img/favicon.ico',

  url: 'https://sample-docs.vercel.app', // Include protocol
  baseUrl: '/',

  organizationName: 'your-org', // Your GitHub org/user name.
  projectName: 'sample-docs', // Your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          includeCurrentVersion: false,
          lastVersion: '3.0.0',
          versions: {
            '3.0.0': {
              label: '3.0.0',
              path: '3.0.0',
            },
            '2.0.0': {
              label: '2.0.0',
              path: '2.0.0',
            },
            '1.0.0': {
              label: '1.0.0',
              path: '1.0.0',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    navbar: {
      title: 'Paraflow',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/your-org/sample-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  }),
};

export default config;
