/**
 * Schema.org JSON-LD generator for Adèle.
 *
 * Per `docs/design/SEO.md` §5 canonical pattern — `@graph` with 3 nodes:
 *  1. Restaurant (with acceptsReservations + servesCuisine)
 *  2. Person (Adèle Voss — chef + operator)
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

  const restaurantHours = SITE.hours.summer.days
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
    }));

  const barHours = SITE.hours.winter.days
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
    }));

  const business: Record<string, unknown> = {
    '@type': 'Restaurant',
    '@id': businessId,
    name: SITE.name,
    description: SITE.i18n.de.tagline,
    url: SITE.url,
    image: `${SITE.url}/img/hero-plated.jpg`,
    telephone: SITE.phone,
    priceRange: '€€€€',
    servesCuisine: ['European', 'Modern European', 'New German'],
    acceptsReservations: true,
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
    openingHoursSpecification: [...restaurantHours, ...barHours],
    sameAs: [SITE.social.instagram].filter(Boolean),
    employee: { '@id': operatorId },
  };

  const operator: Record<string, unknown> = {
    '@type': 'Person',
    '@id': operatorId,
    name: SITE.operatorToday,
    jobTitle: 'Chef de Cuisine · Geschäftsführerin',
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
