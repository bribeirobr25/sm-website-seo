/**
 * Schema.org JSON-LD generator — Kodama Bonsai.
 *
 * Primary @type: EducationalOrganization (most-specific fit per SEO.md §5 — Kodama is a
 * knowledge/workshop service, not a retailer).
 * Plus LocalBusiness in @graph for local-pack eligibility (address + hours + geo).
 *
 * Per-tree pages add a Course-like Article + BreadcrumbList — see articleSchema().
 *
 * NO `aggregateRating` on either type — self-serving rating on own LocalBusiness is
 * policy-banned per Google's review-snippet guidelines (SEO.md §5.3).
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

  // EducationalOrganization — primary type for Kodama
  const education: Record<string, unknown> = {
    '@type': 'EducationalOrganization',
    '@id': educationId,
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    image: `${SITE.url}/img/og-default.png`,
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
  };

  // LocalBusiness — keep for local-pack
  const business: Record<string, unknown> = {
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    image: `${SITE.url}/img/og-default.png`,
    telephone: SITE.phone,
    email: SITE.email,
    address,
    geo,
    openingHoursSpecification: openingHours,
    sameAs,
  };

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': educationId },
    inLanguage: ['de-DE', 'en-US'],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [education, business, website],
  };
}

/** Per-tree Article schema — for the /trees/[slug] dynamic pages */
export function treeArticleSchema(input: {
  popularName: string;
  scientificName: string;
  description: string;
  url: string;
  imageUrl: string;
  category: 'indoor' | 'outdoor' | 'both';
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
    inLanguage: 'de-DE',
    isPartOf: { '@id': `${SITE.url}/#education` },
    publisher: { '@id': `${SITE.url}/#education` },
    about: 'Bonsai',
    articleSection: input.category === 'indoor' ? 'Indoor bonsai' : input.category === 'outdoor' ? 'Outdoor bonsai' : 'Bonsai',
  };
}
