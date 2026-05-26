/**
 * Site-wide constants for Kodama Bonsai.
 *
 * Demo only — fictional Berlin-based educational bonsai service.
 * Per `docs/clients/demo-bonsai-kodama/BRIEF.md` for the brand brief.
 */

export type Locale = 'de' | 'en' | 'es' | 'pt-br';

// BCP-47 language tags per locale — used for html lang, og:locale, hreflang.
export const LOCALE_LANG: Record<Locale, string> = {
  de: 'de-DE',
  en: 'en-US',
  es: 'es-ES',
  'pt-br': 'pt-BR',
};

// URL prefix per locale. DE is root (no prefix); others get a path segment.
export const LOCALE_PREFIX: Record<Locale, string> = {
  de: '',
  en: '/en',
  es: '/es',
  'pt-br': '/pt-br',
};

export const LOCALES: Locale[] = ['de', 'en', 'es', 'pt-br'];

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
        privacyLinkHref: '/privacy',
        bodyAfter: '.',
        accept: 'Alle akzeptieren',
        reject: 'Alle ablehnen',
        manage: 'Cookie-Einstellungen verwalten',
      },
      demoBanner: 'BEISPIEL — Portfolio-Demo der Agentur. Kein echter Bonsai-Anbieter.',
      chrome: {
        skipToContent: 'Zum Inhalt springen',
        menuOpen: 'Menü öffnen',
        menuClose: 'Menü schließen',
        indoorBonsai: 'Indoor-Bonsai',
        outdoorBonsai: 'Outdoor-Bonsai',
        imprintLabel: 'Impressum',
        privacyLabel: 'Datenschutzerklärung',
        navHeading: 'Navigation',
        legalHeading: 'Rechtliches',
        photoNote:
          'Stockfotografie aus dem Unsplash-Pool — arten-spezifische Fotos folgen mit echtem Material.',
        closingNote: 'Eine Werkstatt mit 24 Bäumen.',
      },
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
        privacyLinkLabel: 'privacy policy',
        privacyLinkHref: '/en/privacy',
        bodyAfter: '.',
        accept: 'Accept all',
        reject: 'Reject all',
        manage: 'Manage cookie preferences',
      },
      demoBanner: 'EXAMPLE — agency portfolio demo. Not a real bonsai vendor.',
      chrome: {
        skipToContent: 'Skip to content',
        menuOpen: 'Open menu',
        menuClose: 'Close menu',
        indoorBonsai: 'Indoor bonsai',
        outdoorBonsai: 'Outdoor bonsai',
        imprintLabel: 'Imprint',
        privacyLabel: 'Privacy policy',
        navHeading: 'Navigation',
        legalHeading: 'Legal',
        photoNote:
          'Stock photography from the Unsplash pool — species-specific photos to follow with real material.',
        closingNote: 'A workshop with 24 trees.',
      },
    },
    es: {
      languageLabel: 'Idioma',
      nav: {
        home: 'Inicio',
        trees: '24 árboles',
        beginners: 'Para principiantes',
        indoor: 'Interior',
        outdoor: 'Exterior',
        search: 'Buscar',
        about: 'Taller',
      },
      cta: {
        explore: 'Descubrir árboles',
        beginner: 'Selección para principiantes',
        subscribe: 'Suscribirse a Wakaba',
        search: 'Buscar un árbol',
        viewTree: 'Saber más',
        backToTrees: '← Volver al índice',
      },
      sections: {
        care: {
          sun: 'Luz',
          soil: 'Sustrato',
          watering: 'Riego',
          fertilizing: 'Abonado',
          temperature: 'Temperatura',
          pruning: 'Poda',
        },
        styles: 'Estilos habituales',
        techniques: 'Técnicas clave',
        propagation: 'Propagación',
        species: 'Especie',
        family: 'Familia',
        origin: 'Origen',
        category: 'Ubicación',
        beginner: 'Apto para principiantes',
        period: 'Época',
        minimumAge: 'Edad mínima',
        method: 'Método',
        postCare: 'Cuidados posteriores',
      },
      labels: {
        indoor: 'Interior',
        outdoor: 'Exterior',
        both: 'Interior + Exterior',
        yes: 'Sí',
        no: 'No',
        beginnerBadge: 'Principiante',
        photoCredit: 'Foto',
        license: 'Licencia',
      },
      tagline: 'Un taller berlinés para el saber del bonsái.',
      consent: {
        title: 'Cookies: por favor, confirma tu preferencia.',
        bodyBefore:
          'Usamos cookies esenciales para que el sitio funcione. Con tu consentimiento, también cookies analíticas anónimas para saber qué árboles se leen. Más información en nuestra ',
        privacyLinkLabel: 'política de privacidad',
        privacyLinkHref: '/es/privacy',
        bodyAfter: '.',
        accept: 'Aceptar todas',
        reject: 'Rechazar todas',
        manage: 'Gestionar preferencias',
      },
      demoBanner: 'EJEMPLO — demo de portafolio de la agencia. No es un proveedor real de bonsáis.',
      chrome: {
        skipToContent: 'Saltar al contenido',
        menuOpen: 'Abrir menú',
        menuClose: 'Cerrar menú',
        indoorBonsai: 'Bonsái de interior',
        outdoorBonsai: 'Bonsái de exterior',
        imprintLabel: 'Aviso legal',
        privacyLabel: 'Política de privacidad',
        navHeading: 'Navegación',
        legalHeading: 'Información legal',
        photoNote:
          'Fotografía de stock del banco Unsplash — las fotos específicas por especie llegarán con material real.',
        closingNote: 'Un taller con 24 árboles.',
      },
    },
    'pt-br': {
      languageLabel: 'Idioma',
      nav: {
        home: 'Início',
        trees: '24 árvores',
        beginners: 'Para iniciantes',
        indoor: 'Interno',
        outdoor: 'Externo',
        search: 'Buscar',
        about: 'Ateliê',
      },
      cta: {
        explore: 'Conhecer as árvores',
        beginner: 'Seleção para iniciantes',
        subscribe: 'Assinar a Wakaba',
        search: 'Buscar uma árvore',
        viewTree: 'Saiba mais',
        backToTrees: '← Voltar à lista',
      },
      sections: {
        care: {
          sun: 'Luz',
          soil: 'Substrato',
          watering: 'Rega',
          fertilizing: 'Adubação',
          temperature: 'Temperatura',
          pruning: 'Poda',
        },
        styles: 'Estilos comuns',
        techniques: 'Técnicas principais',
        propagation: 'Propagação',
        species: 'Espécie',
        family: 'Família',
        origin: 'Origem',
        category: 'Localização',
        beginner: 'Indicado para iniciantes',
        period: 'Época',
        minimumAge: 'Idade mínima',
        method: 'Método',
        postCare: 'Pós-cuidado',
      },
      labels: {
        indoor: 'Interno',
        outdoor: 'Externo',
        both: 'Interno + Externo',
        yes: 'Sim',
        no: 'Não',
        beginnerBadge: 'Iniciante',
        photoCredit: 'Foto',
        license: 'Licença',
      },
      tagline: 'Um ateliê berlinense dedicado ao saber do bonsai.',
      consent: {
        title: 'Cookies — confirme sua preferência, por favor.',
        bodyBefore:
          'Usamos cookies essenciais para o site funcionar. Com seu consentimento, também usamos cookies analíticos anônimos para saber quais árvores são lidas. Saiba mais em nossa ',
        privacyLinkLabel: 'política de privacidade',
        privacyLinkHref: '/pt-br/privacy',
        bodyAfter: '.',
        accept: 'Aceitar tudo',
        reject: 'Recusar tudo',
        manage: 'Gerenciar preferências',
      },
      demoBanner: 'EXEMPLO — demo de portfólio da agência. Não é um fornecedor real de bonsai.',
      chrome: {
        skipToContent: 'Pular para o conteúdo',
        menuOpen: 'Abrir menu',
        menuClose: 'Fechar menu',
        indoorBonsai: 'Bonsai de interior',
        outdoorBonsai: 'Bonsai de exterior',
        imprintLabel: 'Informações legais',
        privacyLabel: 'Política de privacidade',
        navHeading: 'Navegação',
        legalHeading: 'Informações legais',
        photoNote:
          'Fotos do banco Unsplash — imagens específicas por espécie virão com material real.',
        closingNote: 'Um ateliê com 24 árvores.',
      },
    },
  },
} as const;

export type Site = typeof SITE;
