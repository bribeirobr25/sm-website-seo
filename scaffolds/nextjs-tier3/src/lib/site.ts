/**
 * Site-wide constants — Configuration-as-Code per TECH.md §Configuration-as-Code.
 *
 * **Setup steps for new client:**
 * 1. Rename this file to `site.ts`.
 * 2. Replace every `TODO` and `DRAFT` field with owner-confirmed data.
 * 3. Mark each field `confirmed: true` only AFTER owner confirmation.
 * 4. Cross-reference unresolved DRAFT items in `docs/clients/[slug]/BRIEF.md`
 *    §Open questions so the agency-level PENDING.md aggregator can track them.
 *
 * Reference shape: see `docs/clients/archived/reference-studio-booking/`
 * for a full populated Tier-3 DE-DSGVO example.
 */

export const SITE = {
  // Brand
  name: 'TODO: Business name',
  shortName: 'TODO',
  tagline: 'TODO: one-line value prop',
  founder: 'TODO: Owner full name',
  foundedYear: 2024,

  // Domain + URLs
  url: 'https://example.com', // DRAFT
  locale: 'en-US', // TODO: 'de-DE' | 'pt-BR' | 'pt-PT' | 'en-US'

  // Contact
  phone: '+10000000000',
  phoneDisplay: '+1 000 000 0000',
  whatsapp: '10000000000',
  email: 'TODO@example.com',

  address: {
    street: 'TODO street',
    neighborhood: 'TODO neighborhood',
    city: 'TODO city',
    state: 'TODO state',
    postalCode: 'TODO postal',
    country: 'XX',
    landmark: 'TODO',
  },

  geo: {
    lat: 0.0,
    lng: 0.0,
  },

  hours: [
    { day: 'Sun', open: null, close: null },
    { day: 'Mon', open: '09:00', close: '18:00' },
    { day: 'Tue', open: '09:00', close: '18:00' },
    { day: 'Wed', open: '09:00', close: '18:00' },
    { day: 'Thu', open: '09:00', close: '18:00' },
    { day: 'Fri', open: '09:00', close: '18:00' },
    { day: 'Sat', open: null, close: null },
  ],

  services: [],

  booking: {
    provider: 'todo' as const,
    url: 'TODO',
    label: 'TODO',
  },

  // Legal — populate per jurisdiction via docs/design/LEGAL.md mapping
  legal: {
    dataControllerEmail: 'TODO@example.com',
    dataControllerPhone: '+10000000000',
    processors: [
      { name: 'Vercel', purpose: 'Hosting', location: 'US / EU' },
      { name: 'Neon', purpose: 'Database', location: 'EU' },
      { name: 'Upstash', purpose: 'Rate limiting', location: 'EU' },
      { name: 'Resend', purpose: 'Transactional email', location: 'EU' },
      { name: 'Sentry', purpose: 'Error monitoring', location: 'EU' },
      { name: 'PostHog', purpose: 'Product analytics', location: 'EU' },
    ],
  },

  social: {
    instagram: null,
    facebook: null,
  },

  // KPI contract — per docs/design/KPI.md §KPI contract block
  kpis: [],
} as const;

export type Site = typeof SITE;
