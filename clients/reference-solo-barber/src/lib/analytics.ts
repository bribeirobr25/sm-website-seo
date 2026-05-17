/**
 * Consent-gated event tracking — wraps GA4 + Clarity + (future) PostHog
 * behind a single `track()` helper.
 *
 * Per KPI.md §Event naming convention: canonical event names + required
 * parameters (source_page, source_section, locale). Components import
 * EVENTS constants — never inline string literals.
 *
 * No PII in event parameters. Per LEGAL.md §Rules at a glance.
 */

import { hasConsent } from './consent';

export const EVENTS = {
  PHONE_CLICK: 'phone_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  EMAIL_CLICK: 'email_click',
  MAP_CLICK: 'map_click',
  CTA_CLICK: 'cta_click',
  NAV_LINK_CLICK: 'nav_link_click',
  BOOKING_STARTED: 'booking_started',
  GALLERY_VIEWED: 'gallery_viewed',
  SERVICE_VIEWED: 'service_viewed',
  SHARE_CLICK: 'share_click',
  CONSENT_GIVEN: 'consent_given',
  CONSENT_REJECTED: 'consent_rejected',
} as const;

type EventName = (typeof EVENTS)[keyof typeof EVENTS];

type EventParams = Record<string, string | number | boolean | undefined>;

function getRequiredParams(): EventParams {
  if (typeof window === 'undefined') return {};
  return {
    source_page: window.location.pathname,
    locale: document.documentElement.lang || 'pt-BR',
  };
}

export function track(eventName: EventName, params: EventParams = {}): void {
  if (!hasConsent('analytics')) {
    // Pre-consent: silently drop the event. Consent events themselves
    // are essential-category (no analytics-consent required) — see below.
    return;
  }

  const fullParams = { ...getRequiredParams(), ...params };

  // GA4 via gtag (script-blocked until consent — loads via type="text/plain")
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    gtag('event', eventName, fullParams);
  }

  // Clarity custom events
  const clarity = (window as unknown as { clarity?: (...args: unknown[]) => void }).clarity;
  if (typeof clarity === 'function') {
    clarity('event', eventName);
    for (const [k, v] of Object.entries(fullParams)) {
      if (typeof v === 'string') clarity('set', k, v);
    }
  }
}

/**
 * Essential-category events that fire regardless of analytics consent
 * (consent_given, consent_rejected). They are emitted to Sentry breadcrumbs
 * if Sentry is loaded — never to GA4/Clarity (those require consent).
 */
export function trackEssential(eventName: typeof EVENTS.CONSENT_GIVEN | typeof EVENTS.CONSENT_REJECTED): void {
  if (typeof window === 'undefined') return;
  const sentry = (window as unknown as { Sentry?: { addBreadcrumb?: (b: unknown) => void } }).Sentry;
  if (sentry?.addBreadcrumb) {
    sentry.addBreadcrumb({ category: 'consent', message: eventName, level: 'info' });
  }
}

// Expose globally for inline event handlers in .astro components
if (typeof window !== 'undefined') {
  (window as unknown as Window).track = (name: string, params?: Record<string, unknown>) => {
    track(name as EventName, params as EventParams);
  };
}
