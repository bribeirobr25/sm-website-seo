/**
 * Cookie consent — DSGVO-aligned per LEGAL.md §DE + §Cookie consent banner.
 * Same pattern as solo-barber: localStorage record + applyConsent script upgrade.
 */

'use client';

const STORAGE_KEY = 'consent_v1';
const CONSENT_VERSION = 1;
const EXPIRY_DAYS = 180;

export type ConsentCategories = {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentRecord = {
  version: number;
  timestamp: number;
  categories: ConsentCategories;
};

export const ESSENTIAL_ONLY: ConsentCategories = {
  functional: false,
  analytics: false,
  marketing: false,
};

export const ACCEPT_ALL: ConsentCategories = {
  functional: true,
  analytics: true,
  marketing: true,
};

export function readConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== CONSENT_VERSION) return null;
    const ageMs = Date.now() - parsed.timestamp;
    const expiryMs = EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    if (ageMs > expiryMs) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(categories: ConsentCategories): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    categories,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  return record;
}

export function hasConsent(category: keyof ConsentCategories): boolean {
  const record = readConsent();
  return record?.categories[category] === true;
}

export function applyConsent(categories: ConsentCategories): void {
  if (typeof document === 'undefined') return;
  const scripts = document.querySelectorAll<HTMLScriptElement>(
    'script[type="text/plain"][data-cookie-category]',
  );
  for (const s of Array.from(scripts)) {
    const cat = s.getAttribute('data-cookie-category') as keyof ConsentCategories | null;
    if (!cat || !categories[cat]) continue;
    const fresh = document.createElement('script');
    if (s.async) fresh.async = true;
    const src = s.getAttribute('data-src');
    if (src) fresh.src = src;
    if (s.textContent) fresh.textContent = s.textContent;
    s.parentNode?.replaceChild(fresh, s);
  }
  window.dispatchEvent(new CustomEvent('consent:applied', { detail: categories }));
}
