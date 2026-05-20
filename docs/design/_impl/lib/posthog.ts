/**
 * PostHog client init — EU region, opt-out-by-default per LEGAL.md +
 * INTEGRATIONS.md §PostHog. Consent-gated via consent:applied event.
 */

'use client';

import posthog from 'posthog-js';
import type { PostHog } from 'posthog-js';

let initialized = false;

export function initPostHog(): PostHog | null {
  if (typeof window === 'undefined') return null;
  if (initialized) return posthog;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com';
  if (!key) return null;

  posthog.init(key, {
    api_host: host,
    opt_out_capturing_by_default: true, // non-negotiable — inert until consent
    capture_pageview: false,
    disable_session_recording: true,
    persistence: 'memory',
    property_blacklist: ['$ip', '$initial_referrer', '$referrer'],
    sanitize_properties: (props) => {
      const sanitized = { ...props };
      for (const k of ['email', 'phone', 'name', 'address', 'firstName', 'lastName']) {
        delete sanitized[k];
      }
      return sanitized;
    },
  });
  initialized = true;
  return posthog;
}

export function grantPostHogConsent(): void {
  posthog.opt_in_capturing();
  posthog.set_config({ persistence: 'localStorage+cookie' });
}

export function revokePostHogConsent(): void {
  posthog.opt_out_capturing();
  posthog.reset();
}

export { posthog };
