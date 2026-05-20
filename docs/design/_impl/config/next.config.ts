import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  typedRoutes: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: '/monitoring',
  // v10 replaces `hideSourceMaps: true` with sourcemaps.deleteSourcemapsAfterUpload —
  // same intent: maps reach Sentry but are not served on the web.
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
  // `disableLogger` was removed in v10 (webpack tree-shake only; not supported by
  // Turbopack, which is the default builder in Next 16). Console debug noise from
  // the Sentry SDK is minimal in production; live without it.
});
