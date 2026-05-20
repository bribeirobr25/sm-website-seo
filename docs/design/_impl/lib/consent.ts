/**
 * Cookie consent — LGPD-aligned per LEGAL.md §BR + §Cookie consent banner.
 *
 * Pattern: consent-first script blocking. Scripts tagged with
 * `type="text/plain"` + `data-cookie-category` are upgraded to real
 * scripts only after the matching category is consented to.
 *
 * Storage: localStorage (consent record itself is "strictly necessary",
 * does not require its own consent).
 *
 * Expiry: 180 days. Re-prompt after expiry.
 */

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
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== CONSENT_VERSION) return null; // re-prompt on version bump
    const ageMs = Date.now() - parsed.timestamp;
    const expiryMs = EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    if (ageMs > expiryMs) return null; // expired
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

export function clearConsent(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function hasConsent(category: keyof ConsentCategories): boolean {
  const record = readConsent();
  return record?.categories[category] === true;
}

/**
 * Upgrade type="text/plain" scripts to live scripts when consent is granted.
 * Called on initial page load (if consent already stored) and from the
 * banner's Accept handler.
 */
export function applyConsent(categories: ConsentCategories): void {
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

  // Notify analytics layer
  window.dispatchEvent(new CustomEvent('consent:applied', { detail: categories }));
}

// Augment window for the global event helpers consumed by analytics.ts
declare global {
  interface Window {
    track?: (eventName: string, params?: Record<string, unknown>) => void;
  }
}
