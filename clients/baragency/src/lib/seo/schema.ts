/**
 * Schema.org JSON-LD generator, BAR Agency agency.
 *
 * Primary @type: ProfessionalService (most-specific fit per SEO.md §5, small
 * web agency providing services; ProfessionalService rolls up under
 * LocalBusiness so we get local-pack eligibility for free).
 *
 * Adds a Person node for the founder (Breno Ribeiro) per SEO.md §5
 * "recommended for solo operators", small studio means founder identity
 * is the brand.
 *
 * NO `aggregateRating`, self-serving rating policy-banned per SEO.md §5.3.
 */

import { LOCALES, LOCALE_LANG, type Locale, SITE } from '../site';

/**
 * Build the agency JSON-LD @graph.
 * `locale` controls only the human-language `description` on the ProfessionalService
 * node; everything else is locale-agnostic, and `knowsAbout` / `serviceType`
 * surface trilingual terms simultaneously so Google's entity-extraction picks up
 * signal for EN + DE + PT-BR queries regardless of the rendered page locale.
 */
export function businessSchema(locale: Locale = 'en'): Record<string, unknown> {
  const businessId = `${SITE.url}/#business`;
  const websiteId = `${SITE.url}/#website`;
  const personId = `${SITE.url}/#founder`;

  const address = {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  };

  const geo = {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  };

  const sameAs = [SITE.social.linkedin, SITE.social.x].filter(Boolean);

  // 3-aspect image array per SEO.md §5. Demo phase ships placeholders; production
  // swaps for real studio photography (1200×630 + 1200×900 + 1200×1200).
  const images = [
    `${SITE.url}/img/og-default.png`,
    `${SITE.url}/img/og-default.png`,
    `${SITE.url}/img/og-default.png`,
  ];

  // Founder, Person node, links to the business
  const person: Record<string, unknown> = {
    '@type': 'Person',
    '@id': personId,
    name: SITE.founder,
    jobTitle: 'Founder',
    worksFor: { '@id': businessId },
    sameAs,
  };

  // ProfessionalService, primary type
  const business: Record<string, unknown> = {
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: SITE.name,
    description: SITE.i18n[locale].tagline,
    url: SITE.url,
    image: images,
    email: SITE.email,
    ...(SITE.phone ? { telephone: SITE.phone } : {}),
    address,
    geo,
    sameAs,
    founder: { '@id': personId },
    foundingDate: `${SITE.foundedYear}`,
    foundingLocation: { '@type': 'Place', name: 'Berlin' },
    priceRange: '€€',
    areaServed: [
      { '@type': 'City', name: 'Berlin' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Portugal' },
      { '@type': 'Country', name: 'Brazil' },
    ],
    // Trilingual serviceType + knowsAbout: Google's entity extraction picks up
    // EN + DE + PT-BR variants simultaneously per the agency's 3-market strategy
    // (Berlin DE clients · Berlin EN-speaking expats · Brazilian-community niche).
    serviceType: [
      // English
      'Website design',
      'Search engine optimization',
      'Google Business Profile',
      'Social media management',
      // German
      'Webdesign',
      'Suchmaschinenoptimierung',
      'Google Unternehmensprofil',
      'Social-Media-Betreuung',
      // Portuguese-BR
      'Design de sites',
      'SEO local',
      'Perfil da Empresa no Google',
      'Gestão de redes sociais',
    ],
    knowsAbout: [
      // English
      'Web design',
      'Web development',
      'Local SEO',
      'Schema.org markup',
      'Google Search Console',
      'Google Business Profile',
      'Multilingual websites',
      'GDPR compliance',
      // German
      'Webdesign',
      'Webentwicklung',
      'Lokales SEO',
      'Suchmaschinenoptimierung',
      'Google Unternehmensprofil',
      'Mehrsprachige Webseiten',
      'DSGVO-Konformität',
      'Datenschutzkonformität',
      // Portuguese-BR
      'Design de sites',
      'Desenvolvimento web',
      'SEO local',
      'Perfil da Empresa no Google',
      'Sites multilíngues',
      'Conformidade com LGPD',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Design',
            description:
              'Custom, mobile-friendly, multilingual marketing website that turns visitors into new clients. Cookie consent + legal pages, deployed on Vercel.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO and Local Listing',
            description:
              'Local SEO plus listings on Google, Google Maps, Apple Maps and more, so clients find you first. Keyword research, on-page, schema markup, Google Search Console.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-Commerce and Business Email',
            description:
              'An online store selling your products or services 24/7 with secure checkout, plus professional email on your own domain that builds trust.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Solutions and Booking System',
            description:
              'Chatbots, automation, a booking system and AI tools that save owner-led businesses time and capture more inquiries.',
          },
        },
      ],
    },
  };

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': businessId },
    inLanguage: LOCALES.map((l) => LOCALE_LANG[l]),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [business, person, website],
  };
}

/**
 * FAQPage JSON-LD (F6). Pass plain-text Q&A pairs; emitted via BaseLayout
 * `extraSchema`. Per SEO.md §schema, only mark up FAQs actually visible on the
 * page. Keep ≤ ~8 entries to avoid spammy-markup signals.
 */
export function faqPageSchema(
  items: ReadonlyArray<{ q: string; a: string }>,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

/**
 * Local landing-page Service schema (F1). A `Service` provided by the agency,
 * scoped to a Berlin Bezirk (`areaServed`). `provider` references the existing
 * ProfessionalService @id so the graph stays connected. Combine with
 * `faqPageSchema` on the page (pass an array to extraSchema → emit both).
 */
export function localServiceSchema(input: {
  serviceName: string;
  serviceType: string;
  description: string;
  areaName: string;
  url: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.serviceName,
    serviceType: input.serviceType,
    description: input.description,
    url: input.url,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: { '@type': 'City', name: input.areaName },
    inLanguage: 'de-DE',
  };
}

/** Per-portfolio-detail CreativeWork schema. Locale-aware. */
export function portfolioCaseSchema(input: {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  liveSiteUrl: string;
  locale: Locale;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: input.title,
    description: input.description,
    url: input.url,
    image: input.imageUrl,
    inLanguage: LOCALE_LANG[input.locale],
    creator: { '@id': `${SITE.url}/#business` },
    workExample: { '@type': 'WebSite', url: input.liveSiteUrl },
  };
}
