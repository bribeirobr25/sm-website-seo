import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  // Non-negotiable agency rule — LEGAL.md §Rules at a glance.
  sendDefaultPii: false,
  tracesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
  release: process.env.VERCEL_GIT_COMMIT_SHA,
  beforeSend(event) {
    if (event.request) {
      event.request.cookies = undefined;
      event.request.headers = undefined;
      if (event.request.data) event.request.data = '[Filtered]';
    }
    return event;
  },
});
