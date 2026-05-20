/**
 * Schema.org JSON-LD generator — per templates/beauty.md §11.8.
 *
 * Pattern: `@graph`-rooted block with three nodes per SEO.md §5
 * canonical pattern:
 *  1. BarberShop (LocalBusiness subtype — the business entity)
 *  2. Person (the solo operator — founder + employee)
 *  3. WebSite (entity-graph cross-link to the site itself)
 *
 * Nodes linked via @id. Most-specific @type = BarberShop (more specific
 * than HairSalon for a single-operator barbershop).
 *
 * NO `aggregateRating` on BarberShop or any LocalBusiness subtype —
 * self-serving rating on own LocalBusiness is policy-banned per Google's
 * review-snippet guidelines (see SEO.md §5.3). SERP stars come from the
 * GBP listing, not from on-site schema.
 *
 * The visible on-page rating in Reviews.astro is a separate concern,
 * gated by SITE.reviews.approvedForDisplay (UI-only).
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

export function barberShopSchema(): Record<string, unknown> {
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
    name: 'Serviços',
    itemListElement: SITE.services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
      },
      price: service.price,
      priceCurrency: 'BRL',
    })),
  };

  const business: Record<string, unknown> = {
    '@type': 'BarberShop',
    '@id': businessId,
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    image: `${SITE.url}/og-default.jpg`,
    telephone: SITE.phone,
    priceRange: 'R$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: openingHours,
    potentialAction: {
      '@type': 'ReserveAction',
      target: SITE.booking.url,
    },
    hasOfferCatalog: offerCatalog,
    sameAs: [SITE.social.instagram].filter(Boolean),
    founder: { '@id': operatorId },
    employee: { '@id': operatorId },
  };

  const operator: Record<string, unknown> = {
    '@type': 'Person',
    '@id': operatorId,
    name: SITE.founder,
    jobTitle: 'Proprietário · Barbeiro',
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
