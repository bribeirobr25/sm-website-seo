/**
 * Consent-gated event tracking — wraps GA4 + Clarity + PostHog behind a
 * single track() helper. Canonical event names per KPI.md §Event naming
 * convention. Required params (source_page, source_section, locale) added
 * automatically.
 */

'use client';

import { hasConsent } from './consent';
import { posthog } from './posthog';

export const EVENTS = {
  PHONE_CLICK: 'phone_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  EMAIL_CLICK: 'email_click',
  MAP_CLICK: 'map_click',
  CTA_CLICK: 'cta_click',
  NAV_LINK_CLICK: 'nav_link_click',
  BOOKING_STARTED: 'booking_started',
  CLASS_VIEWED: 'class_viewed',
  PRICING_VIEWED: 'pricing_viewed',
  INSTRUCTOR_PROFILE_VIEWED: 'instructor_profile_viewed',
  TRIAL_SIGNUP_STARTED: 'trial_signup_started',
  TRIAL_SIGNUP_COMPLETED: 'trial_signup_completed',
  TRIAL_SIGNUP_FAILED: 'trial_signup_failed',
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
    locale: document.documentElement.lang || 'de',
  };
}

export function track(eventName: EventName, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  if (!hasConsent('analytics')) return;

  const fullParams = { ...getRequiredParams(), ...params };

  // PostHog
  posthog.capture(eventName, fullParams);

  // GA4
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    gtag('event', eventName, fullParams);
  }

  // Clarity
  const clarity = (window as unknown as { clarity?: (...args: unknown[]) => void }).clarity;
  if (typeof clarity === 'function') {
    clarity('event', eventName);
  }
}

export function trackEssential(
  eventName: typeof EVENTS.CONSENT_GIVEN | typeof EVENTS.CONSENT_REJECTED,
): void {
  if (typeof window === 'undefined') return;
  const sentry = (window as unknown as { Sentry?: { addBreadcrumb?: (b: unknown) => void } }).Sentry;
  if (sentry?.addBreadcrumb) {
    sentry.addBreadcrumb({ category: 'consent', message: eventName, level: 'info' });
  }
}
