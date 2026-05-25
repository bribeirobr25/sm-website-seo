/**
 * Schema.org JSON-LD generator for Sander & Voss Rechtsanwälte.
 *
 * Per `docs/design/SEO.md` §5 + `docs/design/templates/professional-services.md`
 * §11.8 canonical pattern — `@graph` with 4 nodes:
 *  1. LegalService (most-specific Schema.org subtype for a law firm)
 *  2. Attorney (Person — Dr. Katrin Sander, managing partner)
 *  3. WebSite (entity-graph cross-link)
 *  4. (optional) BreadcrumbList added per-page by BaseLayout
 *
 * NO `aggregateRating` per `SEO.md` §5.3 (self-serving rating on own
 * LocalBusiness is policy-banned by Google review-snippet guidelines).
 *
 * `knowsAbout` enumerates practice areas — Google reads this for specialty
 * matching (professional-services.md §11.8). `knowsLanguage` enumerates
 * BCP 47 language codes for multilingual matching.
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

export function legalServiceSchema(): Record<string, unknown> {
  const businessId = `${SITE.url}/#business`;
  const operatorId = `${SITE.url}/#owner`;
  const websiteId = `${SITE.url}/#website`;

  const consultHours = SITE.hours.summer.days
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
    }));

  const business: Record<string, unknown> = {
    '@type': 'LegalService',
    '@id': businessId,
    name: SITE.name,
    description: SITE.i18n.de.tagline,
    url: SITE.url,
    image: `${SITE.url}/img/og-default.png`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '€€€',
    foundingDate: String(SITE.foundedYear),
    founder: { '@type': 'Person', name: SITE.founder },
    knowsAbout: [
      'Gesellschaftsrecht',
      'Steuerrecht',
      'Arbeitsrecht',
      'Datenschutzrecht',
      'DSGVO',
      'M&A',
      'Corporate law',
      'Tax law',
      'Employment law',
      'Data protection law',
    ],
    knowsLanguage: ['de', 'en'],
    areaServed: [
      { '@type': 'City', name: 'Berlin' },
      { '@type': 'Country', name: 'Germany' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    openingHoursSpecification: consultHours,
    sameAs: [SITE.social.linkedin].filter(Boolean),
    employee: { '@id': operatorId },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: SITE.i18n.de.nav.menu,
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: SITE.menu.creme.label.de,
          itemListElement: SITE.menu.creme.items.map((item) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: item.de.name, description: item.de.desc },
          })),
        },
        {
          '@type': 'OfferCatalog',
          name: SITE.menu.sorbetti.label.de,
          itemListElement: SITE.menu.sorbetti.items.map((item) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: item.de.name, description: item.de.desc },
          })),
        },
        {
          '@type': 'OfferCatalog',
          name: SITE.menu.spezialitaeten.label.de,
          itemListElement: SITE.menu.spezialitaeten.items.map((item) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: item.de.name, description: item.de.desc },
          })),
        },
      ],
    },
  };

  const operator: Record<string, unknown> = {
    '@type': 'Attorney',
    '@id': operatorId,
    name: 'Dr. Katrin Sander',
    jobTitle: 'Geschäftsführende Partnerin · Fachanwältin für Steuerrecht',
    knowsAbout: ['Steuerrecht', 'Gesellschaftsrecht'],
    knowsLanguage: ['de', 'en'],
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

// Backward-compatibility export so BaseLayout's `restaurantSchema` import keeps
// resolving without code changes. New code should import legalServiceSchema.
export const restaurantSchema = legalServiceSchema;
