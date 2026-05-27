/**
 * Schema.org JSON-LD generator — breno-bar agency.
 *
 * Primary @type: ProfessionalService (most-specific fit per SEO.md §5 — small
 * web agency providing services; ProfessionalService rolls up under
 * LocalBusiness so we get local-pack eligibility for free).
 *
 * Adds a Person node for the founder (Breno Ribeiro) per SEO.md §5
 * "recommended for solo operators" — small studio means founder identity
 * is the brand.
 *
 * NO `aggregateRating` — self-serving rating policy-banned per SEO.md §5.3.
 */

import { LOCALES, LOCALE_LANG, type Locale, SITE } from '../site';

export function businessSchema(): Record<string, unknown> {
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

  // Founder — Person node, links to the business
  const person: Record<string, unknown> = {
    '@type': 'Person',
    '@id': personId,
    name: SITE.founder,
    jobTitle: 'Founder',
    worksFor: { '@id': businessId },
    sameAs,
  };

  // ProfessionalService — primary type
  const business: Record<string, unknown> = {
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: SITE.name,
    description: SITE.tagline,
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
    serviceType: [
      'Website design',
      'Search engine optimization',
      'Google Business Profile',
      'Social media management',
    ],
    knowsAbout: [
      'Web design',
      'Web development',
      'Local SEO',
      'Schema.org markup',
      'Google Search Console',
      'Google Business Profile',
      'Multilingual websites',
      'DSGVO compliance',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website creation',
            description:
              'Multi-page, multilingual marketing website with cookie consent + legal pages, deployed on Vercel.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Search engine optimization',
            description:
              'Local SEO — keyword research, on-page, schema markup, Google Search Console + Bing Webmaster Tools.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Business Profile',
            description:
              'Setup + monthly optimization of the GBP listing — photos, posts, reviews, Q&A, hours, services.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social media management',
            description:
              'Light-touch Instagram + Facebook posting cadence for owner-led businesses with no dedicated marketing staff.',
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
