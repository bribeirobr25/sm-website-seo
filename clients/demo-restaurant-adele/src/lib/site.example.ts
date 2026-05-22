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
 * Reference shapes — see `docs/clients/archived/reference-solo-barber/`
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
  url: 'https://example.com', // DRAFT — owner confirm domain before production
  locale: 'en-US', // TODO: 'pt-BR' | 'de-DE' | 'pt-PT' | 'en-US' per `docs/design/I18N.md`

  // Contact
  phone: '+10000000000', // DRAFT
  phoneDisplay: '+1 000 000 0000',
  whatsapp: '10000000000', // wa.me/<number>
  email: 'TODO@example.com', // DRAFT — data-controller contact for legal compliance

  // Address — adapt per client jurisdiction (DE / BR / PT / US)
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
    lat: 0.0, // DRAFT — verify against Google Maps
    lng: 0.0,
  },

  // Hours — use 24h format. UI formats per locale.
  hours: [
    { day: 'Sun', open: null, close: null },
    { day: 'Mon', open: '09:00', close: '18:00' },
    { day: 'Tue', open: '09:00', close: '18:00' },
    { day: 'Wed', open: '09:00', close: '18:00' },
    { day: 'Thu', open: '09:00', close: '18:00' },
    { day: 'Fri', open: '09:00', close: '18:00' },
    { day: 'Sat', open: null, close: null },
  ],

  // Services — owner-confirmed prices marked confirmed: true; else DRAFT.
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

  // Booking platform deep-link (if applicable — Trinks / Treatwell / Booksy / Doctolib / Mindbody / OpenTable)
  booking: {
    provider: 'todo' as const,
    url: 'TODO: deep-link URL',
    label: 'TODO: button label',
  },

  // Reviews — pre-approved drafts; gated until owner approval.
  reviews: {
    aggregateRating: 0.0,
    reviewCount: 0,
    approvedForDisplay: false,
    featured: [],
  },

  // Legal — populate per client jurisdiction via `docs/design/LEGAL.md` mapping
  // DE: Impressum (TMG §5) + Datenschutzerklärung (DSGVO)
  // BR: Política de Privacidade (LGPD) + Razão Social / CNPJ / MEI
  // PT: NIF + CAE + Livro de Reclamações link (RGPD)
  // US: Privacy choices + GPC (CCPA/CPRA)
  legal: {
    // Example DE fields — adapt for the actual jurisdiction:
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

  // KPI contract — per `docs/design/KPI.md` §KPI contract block
  // Per-vertical defaults from `docs/design/templates/[vertical].md` §11.1
  kpis: [
    // {
    //   name: 'Phone + WhatsApp click rate',
    //   bucket: 'Conversion' as const,
    //   target: '≥ 5% of mobile sessions',
    //   source: 'GA4: phone_click + whatsapp_click events',
    // },
  ],
} as const;

export type Site = typeof SITE;
