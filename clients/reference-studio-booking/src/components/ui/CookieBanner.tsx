'use client';

/**
 * DSGVO-aligned consent banner — per LEGAL.md §Cookie consent banner.
 * "Reject all" parity, ≤6mo expiry, manage-preferences re-open in footer.
 */

import { useEffect, useState } from 'react';
import {
  readConsent,
  writeConsent,
  applyConsent,
  ACCEPT_ALL,
  ESSENTIAL_ONLY,
  type ConsentCategories,
} from '@/lib/consent';
import { grantPostHogConsent, revokePostHogConsent } from '@/lib/posthog';
import { trackEssential, EVENTS } from '@/lib/analytics';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!readConsent()) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener('consent:reopen', reopen);
    return () => window.removeEventListener('consent:reopen', reopen);
  }, []);

  function decide(categories: ConsentCategories, accepted: boolean) {
    writeConsent(categories);
    applyConsent(categories);
    if (categories.analytics) grantPostHogConsent();
    else revokePostHogConsent();
    setVisible(false);
    trackEssential(accepted ? EVENTS.CONSENT_GIVEN : EVENTS.CONSENT_REJECTED);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-40 bg-surface border-t border-border shadow-elev"
    >
      <div className="container-page py-5 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex-1 min-w-0">
            <h2 id="cookie-banner-title" className="font-display text-lg text-text">
              Deine Privatsphäre
            </h2>
            <p className="text-sm text-text-muted mt-1 leading-relaxed">
              Wir verwenden Cookies, um zu verstehen, wie die Seite genutzt wird, und um deine
              Erfahrung zu verbessern. Essenzielle Cookies funktionieren ohne Zustimmung; Analyse-
              und Marketing-Cookies nur nach deiner Einwilligung. Mehr in unserer{' '}
              <a
                href="/datenschutz"
                className="underline hover:text-accent transition-colors"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <button
              type="button"
              onClick={() => decide(ESSENTIAL_ONLY, false)}
              className="inline-flex items-center justify-center px-5 py-3 min-h-[44px] text-sm font-medium rounded-md bg-surface-elev text-text border border-border hover:bg-bg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Alle ablehnen
            </button>
            <button
              type="button"
              onClick={() => decide(ACCEPT_ALL, true)}
              className="inline-flex items-center justify-center px-5 py-3 min-h-[44px] text-sm font-medium rounded-md bg-accent text-bg hover:bg-accent-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
