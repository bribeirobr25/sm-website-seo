import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';

export default defineConfig({
  site: 'https://barbearia-tio-edu.com.br',
  trailingSlash: 'never',
  integrations: [
    sitemap(),
    // Sentry instruments every server-side execution surface (Astro middleware,
    // SSR routes, build hooks). send_default_pii: false is non-negotiable.
    sentry({
      dsn: process.env.SENTRY_DSN,
      sendDefaultPii: false,
      tracesSampleRate: 0.1,
      sourceMapsUploadOptions: {
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
      },
      release: process.env.VERCEL_GIT_COMMIT_SHA,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
