/**
 * Schema.org JSON-LD generator — SportsActivityLocation variant per
 * templates/studio.md §11.8.
 *
 * Pattern: `@graph`-rooted block with three nodes per SEO.md §5
 * canonical pattern:
 *  1. SportsActivityLocation (LocalBusiness subtype — the studio entity)
 *  2. Person (the solo instructor — founder + employee)
 *  3. WebSite (entity-graph cross-link to the site itself)
 *
 * Nodes linked via @id. Most-specific @type = SportsActivityLocation —
 * schema.org has no `YogaStudio` type (verified 2026-05-18; the rejected
 * YogaStudio was removed in the 2026-05-18 hotfix). Use
 * SportsActivityLocation + descriptive `keywords` for yoga discipline matching.
 *
 * NO `aggregateRating` on SportsActivityLocation or any LocalBusiness
 * subtype — self-serving rating on own LocalBusiness is policy-banned per
 * Google's review-snippet guidelines (see SEO.md §5.3). SERP stars come
 * from the GBP listing, not from on-site schema.
 */

import { SITE } from '../site';

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

export function sportsActivityLocationSchema(): Record<string, unknown> {
  const businessId = `${SITE.url}/#business`;
  const operatorId = `${SITE.url}/#owner`;
  const websiteId = `${SITE.url}/#website`;

  const openingHours = SITE.hours
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
    }));

  const offerCatalog = {
    '@type': 'OfferCatalog',
    name: 'Mitgliedschaften & Karten',
    itemListElement: SITE.pricing.map((tier) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: tier.name,
        description: tier.description,
      },
      price: tier.price,
      priceCurrency: 'EUR',
    })),
  };

  const business: Record<string, unknown> = {
    '@type': 'SportsActivityLocation',
    '@id': businessId,
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    telephone: SITE.phone,
    priceRange: '€€',
    image: `${SITE.url}/og-default.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: openingHours,
    keywords: SITE.classes?.map((c) => c.name).join(', '),
    potentialAction: {
      '@type': 'ReserveAction',
      target: SITE.booking.url,
    },
    hasOfferCatalog: offerCatalog,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Umkleiden' },
      { '@type': 'LocationFeatureSpecification', name: 'Duschen' },
      { '@type': 'LocationFeatureSpecification', name: 'Matten verfügbar' },
    ],
    sameAs: [SITE.social.instagram].filter(Boolean),
    founder: { '@id': operatorId },
    employee: { '@id': operatorId },
  };

  const operator: Record<string, unknown> = {
    '@type': 'Person',
    '@id': operatorId,
    name: SITE.founder,
    jobTitle: 'Inhaberin · Yoga-Lehrerin',
    worksFor: { '@id': businessId },
    sameAs: [SITE.social.instagram].filter(Boolean),
  };

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': businessId },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [business, operator, website],
  };
}
