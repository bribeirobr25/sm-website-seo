/**
 * Hidden contact-channel config (F8 — icreateyoursite benchmark borrow).
 *
 * WhatsApp + phone are WIRED but NOT rendered. `visible: false` gates ALL UI
 * (see ContactBar.astro, which returns nothing while hidden). When the owner
 * confirms a real number, set `visible: true` + replace the DRAFT numbers and
 * a sitewide WhatsApp/phone CTA surfaces with zero further wiring.
 *
 * Deliberately kept OUT of SITE (src/lib/site.ts) so that:
 *   1. schema.ts keeps emitting NO `telephone` while hidden (SITE.phone stays
 *      null) — guarantees zero public exposure during the hidden phase.
 *   2. flipping the flag here is the single switch, with no schema side effects
 *      until a number is intentionally promoted into SITE.phone too.
 *
 * Numbers below are DRAFT placeholders — replace before flipping `visible`.
 */

import type { Locale } from './site';

export const CONTACT_CHANNELS = {
  /** F8: wired but hidden. Flip to true ONLY once a real number is confirmed. */
  visible: false,
  whatsapp: {
    // DRAFT — real WhatsApp Business number in E.164 *digits only*, no '+'.
    number: '490000000000',
    display: '+49 000 0000000',
  },
  phone: {
    number: '+490000000000', // DRAFT
    display: '+49 000 0000000',
  },
} as const;

const WA_PREFILL: Record<Locale, string> = {
  en: "Hi breno-bar — I'd like to talk about a website.",
  de: 'Hallo breno-bar — ich möchte über eine Website sprechen.',
  'pt-br': 'Olá breno-bar — gostaria de falar sobre um site.',
};

/** wa.me deep link with a locale-appropriate prefilled message. */
export function whatsappHref(locale: Locale = 'en'): string {
  const text = encodeURIComponent(WA_PREFILL[locale] ?? WA_PREFILL.en);
  return `https://wa.me/${CONTACT_CHANNELS.whatsapp.number}?text=${text}`;
}

/** tel: link for the click-to-call CTA. */
export function phoneHref(): string {
  return `tel:${CONTACT_CHANNELS.phone.number}`;
}
