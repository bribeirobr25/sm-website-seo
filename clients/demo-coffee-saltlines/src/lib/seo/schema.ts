/**
 * Schema.org JSON-LD generator for Saltlines.
 *
 * Per `docs/design/SEO.md` §5 canonical pattern — `@graph` with 3 nodes:
 *  1. CafeOrCoffeeShop (most-specific Schema.org subtype)
 *  2. Person (Mia Halvorsen — operator)
 *  3. WebSite (entity-graph cross-link)
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

export function restaurantSchema(): Record<string, unknown> {
  const businessId = `${SITE.url}/#business`;
  const operatorId = `${SITE.url}/#owner`;
  const websiteId = `${SITE.url}/#website`;

  const summerHours = SITE.hours.summer.days
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
      validFrom: '2026-05-01',
      validThrough: '2026-09-30',
    }));

  const winterHours = SITE.hours.winter.days
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
      validFrom: '2026-10-01',
      validThrough: '2027-04-30',
    }));

  const business: Record<string, unknown> = {
    '@type': 'CafeOrCoffeeShop',
    '@id': businessId,
    name: SITE.name,
    description: SITE.i18n.de.tagline,
    url: SITE.url,
    image: `${SITE.url}/img/hero-ocean.jpg`,
    telephone: SITE.phone,
    priceRange: '€€',
    servesCuisine: ['Coffee', 'Specialty Beverages'],
    foundingDate: String(SITE.foundedYear),
    founder: { '@type': 'Person', name: SITE.founder },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    openingHoursSpecification: [...summerHours, ...winterHours],
    sameAs: [SITE.social.instagram].filter(Boolean),
    employee: { '@id': operatorId },
  };

  const operator: Record<string, unknown> = {
    '@type': 'Person',
    '@id': operatorId,
    name: SITE.operatorToday,
    jobTitle: 'Geschäftsführerin · Baristin',
    worksFor: { '@id': businessId },
  };

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE.url,
    name: SITE.name,
    inLanguage: ['de-DE', 'en-US'],
    publisher: { '@id': businessId },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [business, operator, website],
  };
}
