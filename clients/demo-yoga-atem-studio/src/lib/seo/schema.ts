/**
 * Schema.org JSON-LD generator for Atem Studio.
 *
 * Per `docs/design/SEO.md` §5 + `docs/design/templates/studio.md` §11.8 —
 * @graph with 3 nodes:
 *  1. SportsActivityLocation (yoga has NO YogaStudio schema type — verified
 *     2026-05-18 hotfix; use SportsActivityLocation with keywords)
 *  2. Person (Lara Brückner — founder + lead teacher)
 *  3. WebSite
 *
 * NO `aggregateRating` per `SEO.md` §5.3.
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

export function studioSchema(): Record<string, unknown> {
  const businessId = `${SITE.url}/#business`;
  const operatorId = `${SITE.url}/#owner`;
  const websiteId = `${SITE.url}/#website`;

  const weekdayHours = SITE.hours.summer.days
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
    }));

  const weekendHours = SITE.hours.winter.days
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
    }));

  const business: Record<string, unknown> = {
    '@type': 'SportsActivityLocation',
    '@id': businessId,
    name: SITE.name,
    description: SITE.i18n.de.tagline,
    url: SITE.url,
    image: `${SITE.url}/img/og-default.png`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '€€',
    foundingDate: String(SITE.foundedYear),
    founder: { '@type': 'Person', name: SITE.founder },
    keywords: ['Yoga', 'Hatha', 'Vinyasa', 'Yin', 'Prenatal', 'Meditation', 'Berlin Kreuzberg'],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Yogamatten verfügbar', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Umkleiden + Dusche', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Tee-Eck', value: true },
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
    openingHoursSpecification: [...weekdayHours, ...weekendHours],
    sameAs: [SITE.social.instagram].filter(Boolean),
    employee: { '@id': operatorId },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mitgliedschaften + Klassen',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Probestunde' },
          price: '0',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Drop-in' },
          price: '20',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: '10er Karte' },
          price: '180',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Monatskarte unbegrenzt' },
          price: '95',
          priceCurrency: 'EUR',
        },
      ],
    },
  };

  const operator: Record<string, unknown> = {
    '@type': 'Person',
    '@id': operatorId,
    name: 'Lara Brückner',
    jobTitle: 'Gründerin · Yoga-Lehrerin (E-RYT 500)',
    knowsAbout: ['Vinyasa', 'Yin', 'Prenatal', 'Meditation'],
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

export const restaurantSchema = studioSchema;
