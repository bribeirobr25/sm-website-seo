/**
 * Schema.org JSON-LD generator — Kodama Bonsai.
 *
 * Primary @type: EducationalOrganization (most-specific fit per SEO.md §5 — Kodama is a
 * knowledge/workshop service, not a retailer).
 * Plus LocalBusiness in @graph for local-pack eligibility (address + hours + geo).
 *
 * Per-tree pages add a Course-like Article + BreadcrumbList — see treeArticleSchema().
 *
 * NO `aggregateRating` on either type — self-serving rating on own LocalBusiness is
 * policy-banned per Google's review-snippet guidelines (SEO.md §5.3).
 */

import { LOCALES, LOCALE_LANG, type Locale, SITE } from '../site';

function dayMap(day: string): string {
  return (
    {
      Sun: 'Sunday',
      Mon: 'Monday',
      Tue: 'Tuesday',
      Wed: 'Wednesday',
      Thu: 'Thursday',
      Fri: 'Friday',
      Sat: 'Saturday',
    }[day] ?? day
  );
}

export function businessSchema(): Record<string, unknown> {
  const businessId = `${SITE.url}/#business`;
  const websiteId = `${SITE.url}/#website`;
  const educationId = `${SITE.url}/#education`;

  const openingHours = SITE.hours.workshop
    .filter((h) => h.open !== null && h.close !== null)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open as string,
      closes: h.close as string,
    }));

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

  const sameAs = [SITE.social.instagram].filter(Boolean);

  // Per SEO.md §5: 3 aspect ratios (16:9 + 4:3 + 1:1) for LocalBusiness `image`.
  // Demo phase ships CC0 stock at three crops; production cutover swaps for real workshop photography.
  const images = [
    `${SITE.url}/img/og-default.png`, // 1200×630 (16:9)
    `${SITE.url}/img/og-default.png`, // TODO production: 1200×900 (4:3) workshop photo
    `${SITE.url}/img/og-default.png`, // TODO production: 1200×1200 (1:1) workshop photo
  ];

  // EducationalOrganization — primary type for Kodama
  const education: Record<string, unknown> = {
    '@type': 'EducationalOrganization',
    '@id': educationId,
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    image: images,
    email: SITE.email,
    telephone: SITE.phone,
    address,
    geo,
    sameAs,
    foundingDate: '2019',
    foundingLocation: { '@type': 'Place', name: 'Berlin' },
    knowsAbout: [
      'Bonsai',
      'Bonsai care',
      'Bonsai propagation',
      'Bonsai pruning',
      'Akadama substrate',
      'Yamadori collection',
      'Japanese horticulture',
    ],
    // Per SEO.md §5 W4 — services as schema:Offer entries so the knowledge panel can surface them.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Workshops + Werkstatt-Stunden',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Anfänger-Workshop',
            description: 'Einführung in die Bonsai-Pflege — jeden zweiten Samstag.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Individuelle Werkstatt-Stunde',
            description: 'Persönliche Beratung für Fortgeschrittene — nach Vereinbarung.',
          },
        },
        {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          itemOffered: {
            '@type': 'Service',
            name: 'Wakaba — Saison-Brief',
            description: 'Saison-Kalender + Detail-Fotos alle 14 Tage. Kostenlos.',
          },
        },
      ],
    },
  };

  // LocalBusiness — keep for local-pack
  const business: Record<string, unknown> = {
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    image: images,
    telephone: SITE.phone,
    email: SITE.email,
    address,
    geo,
    openingHoursSpecification: openingHours,
    priceRange: '€',
    sameAs,
  };

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': educationId },
    inLanguage: LOCALES.map((l) => LOCALE_LANG[l]),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [education, business, website],
  };
}

/** Per-tree Article schema — for the /trees/[slug] dynamic pages. Locale-aware. */
export function treeArticleSchema(input: {
  popularName: string;
  scientificName: string;
  description: string;
  url: string;
  imageUrl: string;
  category: 'indoor' | 'outdoor' | 'both';
  locale: Locale;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${input.popularName} (${input.scientificName})`,
    name: input.popularName,
    alternateName: input.scientificName,
    description: input.description,
    url: input.url,
    image: input.imageUrl,
    inLanguage: LOCALE_LANG[input.locale],
    isPartOf: { '@id': `${SITE.url}/#education` },
    publisher: { '@id': `${SITE.url}/#education` },
    about: 'Bonsai',
    articleSection:
      input.category === 'indoor'
        ? 'Indoor bonsai'
        : input.category === 'outdoor'
          ? 'Outdoor bonsai'
          : 'Bonsai',
  };
}
