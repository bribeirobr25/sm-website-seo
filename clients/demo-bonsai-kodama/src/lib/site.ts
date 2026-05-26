/**
 * Site-wide constants for Kodama Bonsai.
 *
 * Demo only — fictional Berlin-based educational bonsai service.
 * Per `docs/clients/demo-bonsai-kodama/BRIEF.md` for the brand brief.
 */

export type Locale = 'de' | 'en';

export const SITE = {
  // Brand
  name: 'Kodama Bonsai',
  shortName: 'Kodama',
  tagline: '24 Bäume. Eine Werkstatt. Eine Wissenssammlung.',
  taglineEn: '24 trees. One workshop. One knowledge garden.',
  founder: 'Hannes Wakabayashi',
  foundedYear: 2019,

  // Domain — full slug to avoid the shortened-URL bug from 2026-05-25 audit
  url: 'https://demo-bonsai-kodama.vercel.app',
  locale: 'de-DE' as const,

  // Contact
  phone: '+493090099142',
  phoneDisplay: '+49 30 9009 9142',
  email: 'hallo@kodama-bonsai.de',

  // Address
  address: {
    street: 'Kollwitzstraße 76',
    neighborhood: 'Prenzlauer Berg',
    city: 'Berlin',
    state: 'Berlin',
    postalCode: '10435',
    country: 'DE',
    landmark: 'Kollwitzplatz, 3 Minuten vom U2 Senefelderplatz',
  },

  geo: {
    lat: 52.5378,
    lng: 13.4194,
  },

  hours: {
    workshop: [
      { day: 'Mon', open: null, close: null },
      { day: 'Tue', open: '14:00', close: '19:00' },
      { day: 'Wed', open: '14:00', close: '19:00' },
      { day: 'Thu', open: '14:00', close: '19:00' },
      { day: 'Fri', open: '14:00', close: '19:00' },
      { day: 'Sat', open: '10:00', close: '17:00' },
      { day: 'Sun', open: null, close: null },
    ],
  },

  // Legal — DE jurisdiction
  legal: {
    legalEntity: 'Kodama Bonsai GbR',
    legalRepresentatives: 'Hannes Wakabayashi, Marlene Reuter',
    taxId: 'DE 312 998 442',
    registrationCourt: null,
    registrationNumber: null,
    dataControllerEmail: 'datenschutz@kodama-bonsai.de',
    dataControllerPhone: '+493090099142',
    processors: [
      { name: 'Vercel', purpose: 'Hosting', location: 'EU (Frankfurt)' },
      { name: 'Sentry', purpose: 'Error monitoring (server-side)', location: 'EU (Frankfurt)' },
    ],
  },

  // Social
  social: {
    instagram: 'https://www.instagram.com/kodama.bonsai.berlin',
    facebook: null,
  },

  // Newsletter
  newsletter: {
    name: 'Wakaba — alle 14 Tage',
    nameEn: 'Wakaba — every fortnight',
    description:
      'Saison-Kalender für 24 Bonsai-Arten. Schneiden, Düngen, Umtopfen — wann genau, für welchen Baum. Plus ein Werkstatt-Brief mit Detailfotos.',
    descriptionEn:
      'Seasonal calendar for 24 bonsai species. Pruning, fertilizing, repotting — when exactly, for which tree. Plus a workshop letter with detail photos.',
  },

  // i18n strings
  i18n: {
    de: {
      languageLabel: 'Sprache',
      nav: {
        home: 'Startseite',
        trees: '24 Bäume',
        beginners: 'Für Einsteiger',
        indoor: 'Indoor',
        outdoor: 'Outdoor',
        search: 'Suche',
        about: 'Werkstatt',
      },
      cta: {
        explore: 'Bäume entdecken',
        beginner: 'Einsteiger-Auswahl',
        subscribe: 'Wakaba abonnieren',
        search: 'Baum suchen',
        viewTree: 'Mehr erfahren',
        backToTrees: '← Zurück zur Übersicht',
      },
      sections: {
        care: {
          sun: 'Licht',
          soil: 'Substrat',
          watering: 'Gießen',
          fertilizing: 'Düngen',
          temperature: 'Temperatur',
          pruning: 'Schnitt',
        },
        styles: 'Häufige Stile',
        techniques: 'Wichtige Techniken',
        propagation: 'Vermehrung',
        species: 'Spezies',
        family: 'Familie',
        origin: 'Herkunft',
        category: 'Standort',
        beginner: 'Einsteiger-geeignet',
        period: 'Zeitpunkt',
        minimumAge: 'Mindestalter',
        method: 'Methode',
        postCare: 'Nachpflege',
      },
      labels: {
        indoor: 'Indoor',
        outdoor: 'Outdoor',
        both: 'Indoor + Outdoor',
        yes: 'Ja',
        no: 'Nein',
        beginnerBadge: 'Einsteiger',
        photoCredit: 'Foto',
        license: 'Lizenz',
      },
      tagline: 'Eine Berliner Werkstatt für Bonsai-Wissen.',
      consent: {
        title: 'Cookies — bitte um deine Zustimmung.',
        bodyBefore:
          'Wir verwenden essentielle Cookies, damit die Seite funktioniert. Mit deiner Zustimmung auch anonymisierte Analyse-Cookies, damit wir wissen, welche Bäume gelesen werden. Mehr in unserer ',
        privacyLinkLabel: 'Datenschutzerklärung',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Alle akzeptieren',
        reject: 'Alle ablehnen',
        manage: 'Cookie-Einstellungen verwalten',
      },
      demoBanner: 'BEISPIEL — Portfolio-Demo der Agentur. Kein echter Bonsai-Anbieter.',
    },
    en: {
      languageLabel: 'Language',
      nav: {
        home: 'Home',
        trees: '24 trees',
        beginners: 'For beginners',
        indoor: 'Indoor',
        outdoor: 'Outdoor',
        search: 'Search',
        about: 'Workshop',
      },
      cta: {
        explore: 'Explore trees',
        beginner: 'Beginner selection',
        subscribe: 'Subscribe to Wakaba',
        search: 'Search a tree',
        viewTree: 'Learn more',
        backToTrees: '← Back to overview',
      },
      sections: {
        care: {
          sun: 'Light',
          soil: 'Substrate',
          watering: 'Watering',
          fertilizing: 'Fertilizing',
          temperature: 'Temperature',
          pruning: 'Pruning',
        },
        styles: 'Common styles',
        techniques: 'Key techniques',
        propagation: 'Propagation',
        species: 'Species',
        family: 'Family',
        origin: 'Origin',
        category: 'Placement',
        beginner: 'Beginner-friendly',
        period: 'Period',
        minimumAge: 'Minimum age',
        method: 'Method',
        postCare: 'Post-care',
      },
      labels: {
        indoor: 'Indoor',
        outdoor: 'Outdoor',
        both: 'Indoor + Outdoor',
        yes: 'Yes',
        no: 'No',
        beginnerBadge: 'Beginner',
        photoCredit: 'Photo',
        license: 'License',
      },
      tagline: 'A Berlin workshop for bonsai knowledge.',
      consent: {
        title: 'Cookies — please confirm your preference.',
        bodyBefore:
          'We use essential cookies so the site works. With your consent we also use anonymised analytics so we know which trees get read. More in our ',
        privacyLinkLabel: 'privacy policy (German)',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Accept all',
        reject: 'Reject all',
        manage: 'Manage cookie preferences',
      },
      demoBanner: 'EXAMPLE — agency portfolio demo. Not a real bonsai vendor.',
    },
  },
} as const;

export type Site = typeof SITE;
