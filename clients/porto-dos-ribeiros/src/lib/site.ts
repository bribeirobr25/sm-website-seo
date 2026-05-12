import enCommon from '../i18n/locales/en/common.json';
import enPages from '../i18n/locales/en/pages.json';
import ptCommon from '../i18n/locales/pt/common.json';
import ptPages from '../i18n/locales/pt/pages.json';

export type Locale = 'pt' | 'en';
export const LOCALES: readonly Locale[] = ['pt', 'en'] as const;
export const DEFAULT_LOCALE: Locale = 'pt';

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  pt: 'pt',
  en: 'en',
};

export const LOCALE_OG: Record<Locale, string> = {
  pt: 'pt_BR',
  en: 'en_US',
};

export const LOCALE_LABEL: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
};

const translations = {
  pt: { ...ptCommon, ...ptPages },
  en: { ...enCommon, ...enPages },
} as const;

type AnyObject = Record<string, unknown>;

function lookup(source: AnyObject, key: string): string | undefined {
  const parts = key.split('.');
  let value: unknown = source;
  for (const part of parts) {
    if (value && typeof value === 'object' && part in (value as AnyObject)) {
      value = (value as AnyObject)[part];
    } else {
      return undefined;
    }
  }
  return typeof value === 'string' ? value : undefined;
}

export function useTranslations(locale: Locale): (key: string) => string {
  return (key) =>
    lookup(translations[locale] as AnyObject, key) ??
    lookup(translations[DEFAULT_LOCALE] as AnyObject, key) ??
    key;
}

export function getLocaleFromUrl(url: URL): Locale {
  return url.pathname.startsWith('/en') ? 'en' : 'pt';
}

export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean === '/' ? '/' : clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

export const SITE = {
  name: 'Porto dos Ribeiros',
  legalName: 'Porto dos Ribeiros — Comida Brasileira',
  url: 'https://porto-dos-ribeiros.vercel.app',
  phone: '+351963349411',
  phoneDisplay: '+351 963 349 411',
  whatsappUrl: 'https://wa.me/351963349411',
  email: '',
  address: {
    street: 'R. da Constituição 982',
    postal: '4200-196',
    city: 'Porto',
    country: 'PT',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Porto+dos+Ribeiros%2C+R.+da+Constituição+982%2C+4200-196+Porto',
  // Verified 2026-05-13 against OSM Nominatim (street + postal-code triangulation,
  // 4200-196 Porto, R. da Constituição). Previous guess 41.166/-8.628 was ~1.5 km west.
  // For house-number-exact precision, re-verify with Google Maps API once we have the key.
  geo: { lat: 41.1626, lng: -8.6107 },
  rating: { value: 4.7, count: 287 },
  hours: [
    {
      key: 'sun_thu',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'] as const,
      open: '07:00',
      close: '22:00',
    },
    {
      key: 'fri_sat',
      days: ['Friday', 'Saturday'] as const,
      open: '07:00',
      close: '24:00',
    },
  ],
  socials: {
    instagram: 'https://www.instagram.com/portodosribeiros/',
    facebook: 'https://www.facebook.com/people/Porto-dos-Ribeiros/100063638537229/',
  },
  complaintsUrl: 'https://www.livroreclamacoes.pt/inicio',
} as const;
