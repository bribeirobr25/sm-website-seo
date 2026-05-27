import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://agency-breno-bar.vercel.app',
  trailingSlash: 'never',
  // Hybrid output — pre-render static pages by default, opt-in SSR for the
  // /api/contact endpoint per FORMS.md §Submission endpoint pattern. Vercel
  // adapter routes the prerender=false pages to Fluid Compute functions.
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
  integrations: [
    sitemap(),
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
