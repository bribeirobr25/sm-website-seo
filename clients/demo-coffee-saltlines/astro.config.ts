import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';

export default defineConfig({
  site: 'https://demo-saltlines.vercel.app',
  trailingSlash: 'never',
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: 'de',
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-DE', en: 'en-US' },
      },
    }),
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
    server: {
      // Allow Docker-MCP Playwright (which reaches the host via host.docker.internal)
      // to load the dev server during local visual review.
      allowedHosts: ['host.docker.internal', 'localhost'],
    },
  },
});
