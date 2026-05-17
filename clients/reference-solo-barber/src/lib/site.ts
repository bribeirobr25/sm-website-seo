/**
 * Site-wide constants — Configuration-as-Code per TECH.md §Configuration-as-Code.
 *
 * All client-specific values live here. Components read from SITE, never
 * hardcode strings or numbers.
 *
 * Items marked DRAFT must be owner-confirmed before production cutover.
 * Reference: docs/clients/reference-solo-barber/BRIEF.md §Open questions.
 */

export const SITE = {
  // Brand
  name: 'Barbearia Tio Edu',
  shortName: 'Tio Edu',
  tagline: 'Barbearia de bairro em Vila Madalena',
  founder: 'Eduardo "Tio Edu" Santos',
  foundedYear: 2018,

  // Domain + URLs
  url: 'https://barbearia-tio-edu.com.br', // DRAFT — owner confirm domain
  locale: 'pt-BR',

  // Contact
  phone: '+5511999999999', // DRAFT — placeholder
  phoneDisplay: '+55 11 99999-9999',
  whatsapp: '5511999999999', // wa.me/<number>
  email: 'contato@barbearia-tio-edu.com.br', // DRAFT — data-controller contact for LGPD

  // Address (São Paulo, Vila Madalena)
  address: {
    street: 'Rua Aspicuelta, 123', // DRAFT
    neighborhood: 'Vila Madalena',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '05433-010', // DRAFT
    country: 'BR',
    landmark: 'próximo à estação Vila Madalena (Linha Amarela)',
  },

  geo: {
    lat: -23.5443, // DRAFT — verify against Google Maps
    lng: -46.6889,
  },

  // Hours — Tue-Sat (closed Sun + Mon)
  // Use 24h format. UI formats per locale.
  hours: [
    { day: 'Sun', open: null, close: null }, // closed
    { day: 'Mon', open: null, close: null }, // closed
    { day: 'Tue', open: '09:00', close: '19:00' },
    { day: 'Wed', open: '09:00', close: '19:00' },
    { day: 'Thu', open: '09:00', close: '19:00' },
    { day: 'Fri', open: '09:00', close: '19:00' },
    { day: 'Sat', open: '09:00', close: '17:00' },
  ],

  // Services — owner-confirmed prices marked confirmed: true; else DRAFT.
  services: [
    {
      slug: 'corte-classico',
      name: 'Corte clássico',
      description:
        'Corte tradicional com tesoura, acabamento na navalha. Inclui lavagem.',
      price: 'R$ 70',
      durationMinutes: 45,
      confirmed: false, // DRAFT
    },
    {
      slug: 'corte-maquina',
      name: 'Corte máquina',
      description:
        'Corte com máquina, ideal para quem prefere o estilo mais curto e prático.',
      price: 'R$ 50',
      durationMinutes: 30,
      confirmed: false, // DRAFT
    },
    {
      slug: 'barba',
      name: 'Barba',
      description:
        'Barba completa com toalha quente, óleo e finalização com bálsamo.',
      price: 'R$ 55',
      durationMinutes: 30,
      confirmed: false, // DRAFT
    },
    {
      slug: 'combo',
      name: 'Combo Corte + Barba',
      description:
        'O ritual completo. Corte, barba, toalha quente, ofuras e cuidados finais.',
      price: 'R$ 110',
      durationMinutes: 75,
      confirmed: false, // DRAFT
    },
  ],

  // Booking platform deep-link (Trinks)
  booking: {
    provider: 'trinks' as const,
    url: 'https://www.trinks.com/barbearia-tio-edu', // DRAFT — owner confirms slug
    label: 'Agendar online',
  },

  // Reviews — pre-approved drafts; gated until owner approval.
  // approvedForDisplay: false → schema.org aggregateRating NOT rendered.
  reviews: {
    aggregateRating: 4.9,
    reviewCount: 87, // DRAFT
    approvedForDisplay: false,
    featured: [
      {
        author: 'Marcelo Oliveira',
        rating: 5,
        date: '2025-11-14',
        text: 'Melhor barbearia que já fui. Tio Edu é figura, atendimento humano e o corte sempre impecável.',
        approved: false, // DRAFT
      },
    ],
  },

  // Brazilian legal — LGPD required disclosure (DRAFT — owner confirms all)
  legal: {
    razaoSocial: 'Eduardo Santos 12345678901', // DRAFT — owner's Razão Social
    cnpjOrMei: 'XX.XXX.XXX/0001-XX', // DRAFT — MEI placeholder
    dataControllerEmail: 'contato@barbearia-tio-edu.com.br', // DRAFT
    dataControllerPhone: '+55 11 99999-9999', // DRAFT
    // Third-party processors active on this site — keep in sync with
    // src/pages/politica-de-privacidade.astro §4 Compartilhamento.
    processors: [
      { name: 'Vercel', purpose: 'Hospedagem do site', location: 'EUA / Brasil (CDN regional)' },
      { name: 'Sentry', purpose: 'Monitoramento de erros (servidor)', location: 'UE' },
      { name: 'Microsoft Clarity', purpose: 'Análise de comportamento (heatmaps)', location: 'EUA' },
      { name: 'Trinks', purpose: 'Plataforma de agendamento (link externo)', location: 'Brasil' },
    ],
  },

  // Social
  social: {
    instagram: 'https://www.instagram.com/barbearia.tio.edu', // DRAFT — handle
    facebook: null, // owner doesn't run FB
  },

  // KPI contract — per KPI.md §KPI contract block
  // Per-vertical defaults from templates/beauty.md §11.1
  kpis: [
    {
      name: 'Trinks booking-platform handoff rate',
      bucket: 'Conversion' as const,
      target: '≥ 8% of mobile sessions',
      source: 'GA4: booking_started event',
    },
    {
      name: 'Combined phone + WhatsApp click rate',
      bucket: 'Conversion' as const,
      target: '≥ 5% of mobile sessions',
      source: 'GA4: phone_click + whatsapp_click',
    },
    {
      name: 'Gallery (real client work) engagement',
      bucket: 'Conversion' as const,
      target: '≥ 40% of sessions view gallery',
      source: 'GA4: gallery_viewed event',
    },
    {
      name: 'GBP profile views + direction requests',
      bucket: 'Acquisition' as const,
      target: 'Growth trend MoM',
      source: 'GBP Insights',
    },
  ],
} as const;

export type Site = typeof SITE;
