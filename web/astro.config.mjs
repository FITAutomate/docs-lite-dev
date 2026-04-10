import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const siteUrl = process.env.SITE_URL ?? 'https://fitautomate.com';
const basePath = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: siteUrl,
  base: basePath,
  integrations: [
    starlight({
      title: 'FIT Docs',
      favicon: '/favicon.ico',
      description: 'FIT Docs Lite starter documentation library built for clear, practical business procedures.',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/FITAutomate' }],
      components: {
        Footer: './src/components/Footer.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/FITAutomate/fit-docs-lite/edit/main/web/',
      },
      sidebar: [
        {
          label: 'FIT Intro',
          autogenerate: { directory: 'fit-intro' },
        },
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Writing',
          autogenerate: { directory: 'writing' },
        },
        {
          label: 'Publishing',
          autogenerate: { directory: 'publishing' },
        },
        {
          label: 'Help',
          autogenerate: { directory: 'help' },
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
