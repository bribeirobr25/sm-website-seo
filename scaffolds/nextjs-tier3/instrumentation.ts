/**
 * Next.js instrumentation hook — required by @sentry/nextjs v10+.
 *
 * v10 deprecates auto-loading of `sentry.server.config.ts` / `sentry.edge.config.ts`.
 * Server + edge SDK init now goes through this file. The client SDK is still
 * auto-loaded from `sentry.client.config.ts`.
 *
 * `onRequestError` is the v10 hook for capturing thrown errors in request
 * handlers — pipes them into the existing Sentry transport with
 * `sendDefaultPii: false` enforced in the per-runtime init files.
 */

import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }
  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}

export const onRequestError = Sentry.captureRequestError;
