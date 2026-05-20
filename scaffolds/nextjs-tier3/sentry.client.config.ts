import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  // Non-negotiable agency rule — LEGAL.md §Rules at a glance.
  sendDefaultPii: false,
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0, // disable session replay by default
  replaysOnErrorSampleRate: 0,
  environment: process.env.NODE_ENV,
  beforeSend(event) {
    // Defense-in-depth — scrub request data the SDK may have collected
    if (event.request) {
      event.request.cookies = undefined;
      event.request.headers = undefined;
      if (event.request.data) event.request.data = '[Filtered]';
    }
    return event;
  },
});
