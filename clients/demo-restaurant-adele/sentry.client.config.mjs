import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: import.meta.env.PUBLIC_SENTRY_DSN,
  // Non-negotiable agency rule — LEGAL.md §Rules at a glance.
  sendDefaultPii: false,
  tracesSampleRate: 0.1,
  // Session replay disabled by default; opt-in per client.
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,
  environment: import.meta.env.MODE,
  release: import.meta.env.PUBLIC_VERCEL_GIT_COMMIT_SHA,
  beforeSend(event) {
    // Defense-in-depth — scrub request data the SDK may have collected.
    if (event.request) {
      event.request.cookies = undefined;
      event.request.headers = undefined;
      if (event.request.data) event.request.data = '[Filtered]';
    }
    return event;
  },
});
