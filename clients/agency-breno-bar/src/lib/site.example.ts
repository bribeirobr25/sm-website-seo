/**
 * Site-wide constants, Configuration-as-Code per TECH.md §Configuration-as-Code.
 *
 * **Setup steps for new client:**
 * 1. Rename this file to `site.ts`.
 * 2. Replace every `TODO` and `DRAFT` field with owner-confirmed data.
 * 3. Mark each field `confirmed: true` only AFTER owner confirmation.
 * 4. Cross-reference unresolved DRAFT items in `docs/clients/[slug]/BRIEF.md`
 *    §Open questions so the agency-level PENDING.md aggregator can track them.
 *
 * Reference shapes, see `docs/clients/archived/reference-solo-barber/`
 * (Tier 2 BR-LGPD example) and `docs/clients/archived/reference-studio-booking/`
 * (Tier 3 DE-DSGVO example) for full populated worked examples.
 */

export const SITE = {
  // Brand
  name: 'TODO: Business name', // DRAFT
  shortName: 'TODO',
  tagline: 'TODO: one-line value prop', // DRAFT
  founder: 'TODO: Owner full name',
  foundedYear: 2024, // TODO

  // Domain + URLs
  url: 'https://example.com', // DRAFT, owner confirm domain before production
  locale: 'en-US', // TODO: 'pt-BR' | 'de-DE' | 'pt-PT' | 'en-US' per `docs/design/I18N.md`

  // Contact
  phone: '+10000000000', // DRAFT
  phoneDisplay: '+1 000 000 0000',
  whatsapp: '10000000000', // wa.me/<number>
  email: 'TODO@example.com', // DRAFT, data-controller contact for legal compliance

  // Address, adapt per client jurisdiction (DE / BR / PT / US)
  address: {
    street: 'TODO street', // DRAFT
    neighborhood: 'TODO neighborhood',
    city: 'TODO city',
    state: 'TODO state',
    postalCode: 'TODO postal code', // DRAFT
    country: 'XX', // ISO 3166-1 alpha-2
    landmark: 'TODO nearby landmark for directions',
  },

  geo: {
    lat: 0.0, // DRAFT, verify against Google Maps
    lng: 0.0,
  },

  // Hours, use 24h format. UI formats per locale.
  hours: [
    { day: 'Sun', open: null, close: null },
    { day: 'Mon', open: '09:00', close: '18:00' },
    { day: 'Tue', open: '09:00', close: '18:00' },
    { day: 'Wed', open: '09:00', close: '18:00' },
    { day: 'Thu', open: '09:00', close: '18:00' },
    { day: 'Fri', open: '09:00', close: '18:00' },
    { day: 'Sat', open: null, close: null },
  ],

  // Services, owner-confirmed prices marked confirmed: true; else DRAFT.
  services: [
    {
      slug: 'todo-service-1',
      name: 'TODO: Service 1',
      description: 'TODO: short description',
      price: 'TODO: price',
      durationMinutes: 30,
      confirmed: false, // DRAFT
    },
  ],

  // Booking platform deep-link (if applicable, Trinks / Treatwell / Booksy / Doctolib / Mindbody / OpenTable)
  booking: {
    provider: 'todo' as const,
    url: 'TODO: deep-link URL',
    label: 'TODO: button label',
  },

  // Reviews, pre-approved drafts; gated until owner approval.
  reviews: {
    aggregateRating: 0.0,
    reviewCount: 0,
    approvedForDisplay: false,
    featured: [],
  },

  // Legal, populate per client jurisdiction via `docs/design/LEGAL.md` mapping
  // DE: Impressum (TMG §5) + Datenschutzerklärung (DSGVO)
  // BR: Política de Privacidade (LGPD) + Razão Social / CNPJ / MEI
  // PT: NIF + CAE + Livro de Reclamações link (RGPD)
  // US: Privacy choices + GPC (CCPA/CPRA)
  legal: {
    // Example DE fields, adapt for the actual jurisdiction:
    // legalEntity: 'TODO: full legal entity name',
    // taxId: 'TODO: USt-IdNr / CNPJ / MEI / NIF',
    dataControllerEmail: 'TODO@example.com',
    dataControllerPhone: '+10000000000',
    processors: [
      // Keep in sync with the politica-de-privacidade / datenschutz / privacy-policy page §Sharing.
      { name: 'Vercel', purpose: 'Hosting', location: 'US / EU (CDN regional)' },
      { name: 'Sentry', purpose: 'Error monitoring (server)', location: 'EU' },
    ],
  },

  // Social
  social: {
    instagram: null, // TODO: 'https://www.instagram.com/...'
    facebook: null,
  },

  // KPI contract, per `docs/design/KPI.md` §KPI contract block
  // Per-vertical defaults from `docs/design/templates/[vertical].md` §11.1
  kpis: [
    // {
    //   name: 'Phone + WhatsApp click rate',
    //   bucket: 'Conversion' as const,
    //   target: '≥ 5% of mobile sessions',
    //   source: 'GA4: phone_click + whatsapp_click events',
    // },
  ],

  // i18n, REQUIRED by BaseLayout + CookieBanner + DemoBanner.
  // The `consent` block is locale-driven per LEGAL.md §Cookie consent banner spec
  // (DSGVO/LGPD/RGPD parity). The `tagline` becomes the default page description
  // + OG description when not overridden by a page-level prop.
  // Customize per client + per jurisdiction. Add more keys (nav, cta, sections)
  // as needed, `Header.astro` / `Footer.astro` / page components pull from here.
  i18n: {
    de: {
      tagline: 'TODO: einzeiliges Wertversprechen auf Deutsch.',
      consent: {
        title: 'Cookies, bitte um deine Zustimmung.',
        bodyBefore:
          'Wir verwenden essentielle Cookies, damit die Seite funktioniert. Mit deiner Zustimmung auch anonymisierte Analyse-Cookies. Mehr in unserer ',
        privacyLinkLabel: 'Datenschutzerklärung',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Alle akzeptieren',
        reject: 'Alle ablehnen',
        manage: 'Cookie-Einstellungen verwalten',
      },
      demoBanner: 'BEISPIEL, Demo-Phase. Echte Inhalte folgen mit echtem Material.',
    },
    en: {
      tagline: 'TODO: one-line value prop in English.',
      consent: {
        title: 'Cookies, please confirm your preference.',
        bodyBefore:
          'We use essential cookies so the site works. With your consent we also use anonymised analytics. More in our ',
        privacyLinkLabel: 'privacy policy',
        privacyLinkHref: '/privacy',
        bodyAfter: '.',
        accept: 'Accept all',
        reject: 'Reject all',
        manage: 'Manage cookie preferences',
      },
      demoBanner: 'EXAMPLE, demo phase. Real content to follow with real material.',
    },
  },
} as const;

// -----------------------------------------------------------------------------
// Locale helpers, agency-baseline.
//
// The scaffold ships with 2 locales (DE + EN). Clients can EXTEND to ES /
// PT-BR / further locales by:
//   1. Widening `Locale` (e.g. `'de' | 'en' | 'es' | 'pt-br'`)
//   2. Adding the BCP-47 tag to `LOCALE_LANG`
//   3. Adding the URL prefix to `LOCALE_PREFIX`
//   4. Appending the code to `LOCALES`
//   5. Adding the matching `i18n[locale]` block above with `tagline` + `consent` + `demoBanner`
//
// See `docs/design/I18N.md` §17 "Extending beyond 2 locales" for the worked
// recipe + the bonsai demo (`clients/demo-bonsai-kodama`) for a 4-locale
// reference (DE primary · EN · ES · pt-BR).
//
// Why these helpers matter even at 2 locales: they let `BaseLayout.astro`
// emit hreflang + x-default by iterating `LOCALES` instead of branching on
// `locale === 'de' ? ... : ...`, so widening to 3+ locales never requires
// touching the layout.
// -----------------------------------------------------------------------------

export type Locale = 'de' | 'en';

/** BCP-47 language tag per locale, used for `<html lang>`, `og:locale`, hreflang. */
export const LOCALE_LANG: Record<Locale, string> = {
  de: 'de-DE',
  en: 'en-US',
};

/** URL prefix per locale. Primary locale is root (no prefix); secondaries get a path segment. */
export const LOCALE_PREFIX: Record<Locale, string> = {
  de: '',
  en: '/en',
};

/** Ordered list of locales. The first entry is the x-default target. */
export const LOCALES: Locale[] = ['de', 'en'];

export type Site = typeof SITE;
