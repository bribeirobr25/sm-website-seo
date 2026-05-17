'use client';

/**
 * Bootstraps PostHog (opt-out-by-default) on mount and re-applies any
 * persisted consent record from a previous visit.
 *
 * Per LEGAL.md §Cookie consent banner — universal spec: scripts tagged
 * `type="text/plain"` are upgraded on consent grant.
 */

import { useEffect } from 'react';
import { initPostHog, grantPostHogConsent } from '@/lib/posthog';
import { readConsent, applyConsent } from '@/lib/consent';

export function ConsentBootstrap() {
  useEffect(() => {
    initPostHog();
    const stored = readConsent();
    if (stored) {
      applyConsent(stored.categories);
      if (stored.categories.analytics) grantPostHogConsent();
    }
  }, []);

  return null;
}
