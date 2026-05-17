import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';

export default defineConfig({
  site: 'https://barbearia-tio-edu.com.br',
  trailingSlash: 'never',
  integrations: [
    sitemap(),
    // Runtime Sentry.init() lives in sentry.{client,server}.config.mjs at the
    // project root (auto-discovered by @sentry/astro). The integration call
    // here only handles build-time concerns (source-map upload, release tag).
    // send_default_pii: false is enforced in both init files — non-negotiable
    // per LEGAL.md §Rules at a glance.
    sentry({
      sourceMapsUploadOptions: {
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
