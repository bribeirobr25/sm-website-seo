/**
 * Site-wide constants — Configuration-as-Code per TECH.md §Configuration-as-Code.
 *
 * DRAFT items require owner confirmation before production cutover.
 * Reference: docs/clients/reference-studio-booking/BRIEF.md §Open questions.
 */

export const SITE = {
  // Brand
  name: 'Studio Sereno Yoga',
  shortName: 'Sereno',
  tagline: 'Yoga in Berlin Mitte — Hatha, Vinyasa, Yin, Pranayama',
  founder: 'Anna Hartmann',
  foundedYear: 2017,

  // Domain + URLs
  url: 'https://studio-sereno-yoga.de', // DRAFT — owner confirm domain
  locale: 'de',

  // Contact
  phone: '+493012345678', // DRAFT — placeholder
  phoneDisplay: '+49 30 1234 5678',
  whatsapp: '493012345678',
  email: 'hallo@studio-sereno-yoga.de', // DRAFT

  // Address (Berlin Mitte)
  address: {
    street: 'Auguststraße 42', // DRAFT
    neighborhood: 'Mitte',
    city: 'Berlin',
    postalCode: '10117', // DRAFT
    country: 'DE',
  },

  geo: {
    lat: 52.5266, // DRAFT — verify against Google Maps
    lng: 13.3962,
  },

  // Hours
  hours: [
    { day: 'Mon', open: '07:00', close: '21:00' },
    { day: 'Tue', open: '07:00', close: '21:00' },
    { day: 'Wed', open: '07:00', close: '21:00' },
    { day: 'Thu', open: '07:00', close: '21:00' },
    { day: 'Fri', open: '07:00', close: '20:00' },
    { day: 'Sat', open: '09:00', close: '17:00' },
    { day: 'Sun', open: '09:00', close: '14:00' },
  ],

  // Class catalog
  classes: [
    {
      slug: 'hatha',
      name: 'Hatha',
      description:
        'Slow-paced, alignment-focused. Ideal for beginners and anyone returning to practice after a break.',
      duration: 75,
      level: 'Beginner – All levels',
    },
    {
      slug: 'vinyasa',
      name: 'Vinyasa Flow',
      description:
        'Breath-synchronized flow. Builds heat, strength, and a meditative quality across 60 minutes.',
      duration: 60,
      level: 'All levels – Intermediate',
    },
    {
      slug: 'yin',
      name: 'Yin Yoga',
      description:
        'Long holds in supported postures. The slow medicine. Calming for the nervous system.',
      duration: 75,
      level: 'All levels',
    },
    {
      slug: 'pranayama',
      name: 'Pranayama & Meditation',
      description:
        'Breath practice + seated meditation. Smaller groups, deeper work. Weekly evening session.',
      duration: 45,
      level: 'All levels',
    },
  ],

  // Pricing (drop-in / 10-class card / monthly membership)
  pricing: [
    {
      name: 'Drop-in',
      price: '22 €',
      description: 'Eine einzelne Klasse · keine Bindung',
      featured: false,
    },
    {
      name: '10er Karte',
      price: '180 €',
      description: '10 Klassen · 6 Monate gültig',
      featured: true,
    },
    {
      name: 'Monatsmitgliedschaft',
      price: '120 € / Monat',
      description: 'Unbegrenzte Klassen · monatlich kündbar',
      featured: false,
    },
  ],

  // Instructors (DRAFT)
  instructors: [
    {
      slug: 'anna',
      name: 'Anna Hartmann',
      role: 'Gründerin · Hatha · Yin',
      bio: '500h-zertifiziert · seit 2014 unterrichtend · spezialisiert auf alignment-led Praxis.',
    },
    {
      slug: 'jonas',
      name: 'Jonas Becker',
      role: 'Vinyasa · Pranayama',
      bio: '300h-zertifiziert · ehemaliger Physiotherapeut · Schwerpunkt funktionelle Anatomie.',
    },
  ],

  // Booking platform deep-link for paid classes (Mindbody)
  booking: {
    provider: 'mindbody' as const,
    url: 'https://clients.mindbodyonline.com/classic/ws?studioid=999999', // DRAFT
    label: 'Klasse buchen',
  },

  // Trial-class signup — own booking flow (Tier 3 / Type 3 demonstration)
  trial: {
    label: 'Probestunde sichern',
    cooloff: 'Nach Buchung schicken wir eine Bestätigung mit Termindetails und Studio-Adresse.',
  },

  // Social
  social: {
    instagram: 'https://www.instagram.com/studio.sereno.yoga', // DRAFT
    facebook: null,
  },

  // DSGVO — Impressum (TMG §5 + MStV §18)
  // DRAFT placeholder values — owner must provide before production
  legal: {
    legalName: 'Anna Hartmann', // DRAFT (sole proprietor) — Inhaberin
    hrb: null as string | null, // not required for sole proprietor
    ustIdNr: 'DE123456789', // DRAFT — placeholder USt-IdNr
    contentResponsiblePerson: 'Anna Hartmann',
    contentResponsibleAddress: 'Auguststraße 42, 10117 Berlin',
    // Third-party processors active on this site — keep in sync with
    // /datenschutz §5 Eingebundene Drittdienste.
    processors: [
      { name: 'Vercel', purpose: 'Hosting', location: 'USA / EU CDN' },
      { name: 'Sentry', purpose: 'Fehlerverfolgung (server-side, EU-Region)', location: 'EU' },
      { name: 'Microsoft Clarity', purpose: 'Verhaltensanalyse (Heatmaps)', location: 'USA' },
      { name: 'Google Analytics 4', purpose: 'Sitzungs- und Konversionsanalyse', location: 'USA (SCC)' },
      { name: 'PostHog', purpose: 'Produktanalyse (EU-Instanz)', location: 'EU' },
      { name: 'Resend', purpose: 'Transaktions-E-Mail (Probestunde-Bestätigungen)', location: 'USA (SCC)' },
      { name: 'Neon', purpose: 'Datenbank (Buchungsdaten, EU-Region)', location: 'EU' },
      { name: 'Upstash', purpose: 'Rate Limiting (EU-West)', location: 'EU' },
      { name: 'Mindbody', purpose: 'Buchungsplattform (externer Link)', location: 'USA (SCC)' },
    ],
  },

  // KPI contract — per KPI.md §KPI contract block
  // Per-vertical defaults from templates/studio.md §11.1
  kpis: [
    {
      name: 'Trial → paid conversion',
      bucket: 'Conversion' as const,
      target: '≥ 40% trial-to-paid',
      source: 'PostHog funnel (trial_signup_completed → first_paid_booking) + Mindbody data',
    },
    {
      name: 'Class-fill rate (booked spots ÷ available spots)',
      bucket: 'Conversion' as const,
      target: '≥ 75% prime time · ≥ 50% off-peak',
      source: 'Mindbody / Glofox',
    },
    {
      name: 'Member retention (active MoM)',
      bucket: 'Retention' as const,
      target: '≥ 85% for established cohorts',
      source: 'PostHog cohort + Mindbody',
    },
    {
      name: 'Mindbody handoff rate (booking platform click rate)',
      bucket: 'Conversion' as const,
      target: '≥ 6% of sessions',
      source: 'GA4: booking_started event',
    },
  ],
} as const;

export type Site = typeof SITE;
