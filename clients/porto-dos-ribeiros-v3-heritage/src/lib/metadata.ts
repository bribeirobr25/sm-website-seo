import { LOCALE_OG, LOCALES, type Locale, localizePath, SITE } from './site';

export type PageMetadata = {
  title: string;
  description: string;
  locale: Locale;
  path: string;
};

export type ResolvedMetadata = PageMetadata & {
  canonical: string;
  ogLocale: string;
  alternates: { hreflang: string; href: string }[];
};

export function resolveMetadata(input: PageMetadata): ResolvedMetadata {
  const canonical = `${SITE.url}${localizePath(input.path, input.locale)}`;
  const alternates = LOCALES.map((locale) => ({
    hreflang: locale === 'pt' ? 'pt' : 'en',
    href: `${SITE.url}${localizePath(input.path, locale)}`,
  }));
  alternates.push({ hreflang: 'x-default', href: `${SITE.url}${localizePath(input.path, 'pt')}` });
  return {
    ...input,
    canonical,
    ogLocale: LOCALE_OG[input.locale],
    alternates,
  };
}
