/**
 * Services taxonomy — 4 canonical agency offerings.
 *
 * Service prose (name, body, bullets) lives in PAGE_STRINGS[locale].services
 * for i18n parity. This module just declares slugs + portfolio relationships.
 */

import { PORTFOLIO } from './portfolio';

export type ServiceSlug = 'website' | 'seo' | 'google-business' | 'social-media';

export const SERVICE_SLUGS: ServiceSlug[] = ['website', 'seo', 'google-business', 'social-media'];

// PortfolioEntry.services uses 'gbp' + 'social'; map to URL slugs here.
function entryHasService(entry: (typeof PORTFOLIO)[number], slug: ServiceSlug): boolean {
  const tag = slug === 'google-business' ? 'gbp' : slug === 'social-media' ? 'social' : slug;
  return entry.services.includes(tag);
}

export function getRelatedPortfolio(
  slug: ServiceSlug,
  limit = 3,
): readonly (typeof PORTFOLIO)[number][] {
  return PORTFOLIO.filter((p) => entryHasService(p, slug)).slice(0, limit);
}
