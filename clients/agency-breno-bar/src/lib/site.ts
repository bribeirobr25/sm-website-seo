/**
 * Site-wide constants, breno-bar agency (the agency's own marketing site).
 *
 * Trilingual: EN (root) + DE (/de/) + PT-BR (/pt-br/) per docs/design/I18N.md §17.
 *
 * Demo discipline: noindex until promoted. Per `CLAUDE.md` working principle,  * never flip during portfolio phase.
 */

export type Locale = 'en' | 'de' | 'pt-br';

export const LOCALE_LANG: Record<Locale, string> = {
  en: 'en-US',
  de: 'de-DE',
  'pt-br': 'pt-BR',
};

export const LOCALE_PREFIX: Record<Locale, string> = {
  en: '', // EN is the default at root
  de: '/de',
  'pt-br': '/pt-br',
};

export const LOCALES: Locale[] = ['en', 'de', 'pt-br'];

export const SITE = {
  // Brand
  name: 'breno-bar',
  shortName: 'breno-bar',
  tagline: 'Websites that bring you customers.',
  founder: 'Breno Ribeiro',
  foundedYear: 2026,

  // Domain + URLs, demo subdomain for now; flip canonical when real domain arrives
  url: 'https://agency-breno-bar.vercel.app',
  locale: 'en-US' as const,

  // Contact
  // `email` is the PUBLIC display address, shown on every page + the mailto target.
  // `formNotificationEmail` is the BACKEND inbox that the contact form actually delivers to.
  // For real email-routing on hello@breno-bar.com you'll need a domain MX + forwarding rule
  // or Resend inbound, until then the form endpoint sends notifications directly to the gmail.
  phone: null, // intentionally hidden, phone CTAs not part of agency's contact-form-first stance
  phoneDisplay: null,
  email: 'hello@breno-bar.com', // public display + mailto target
  formNotificationEmail: 'breno.ribeirobr@gmail.com', // backend inbox; Resend NOTIFICATION_EMAIL env-var overrides
  formFromAddress: 'hello@breno-bar.com', // Resend From: header (requires domain verified in Resend before sending)

  // Address, Berlin studio. Left empty until the confirmed Anmeldung address
  // arrives; empty strings keep placeholder text out of the UI, schema, and contract.
  address: {
    street: '',
    neighborhood: '',
    city: 'Berlin',
    state: 'Berlin',
    postalCode: '',
    country: 'DE',
  },

  geo: {
    lat: 52.52,
    lng: 13.405,
  },

  // Hours, by appointment (Apple-style "we'll get back to you")
  hours: {
    appointment: 'By appointment',
  },

  // Legal, DE jurisdiction (Berlin-based Einzelunternehmer)
  legal: {
    legalEntity: 'Breno Ribeiro, Einzelunternehmer',
    legalRepresentatives: 'Breno Ribeiro',
    taxId: '', // empty until the Finanzamt issues the USt-IdNr (a Kleinunternehmer may have none); the imprint VAT line is hidden while empty
    registrationCourt: null, // Einzelunternehmer: not in HRB
    registrationNumber: null,
    dataControllerEmail: 'hello@breno-bar.com',
    dataControllerPhone: null,
    processors: [
      { name: 'Vercel', purpose: 'Hosting + CDN', location: 'EU (Frankfurt) / US (CDN regional)' },
      { name: 'Sentry', purpose: 'Error monitoring (server-side)', location: 'EU (Frankfurt)' },
      {
        name: 'Resend',
        purpose: 'Transactional email (contact-form delivery)',
        location: 'EU (Frankfurt)',
      },
    ],
  },

  // Social, confirmed from user
  social: {
    linkedin: 'https://www.linkedin.com/in/bribeirobr/',
    x: 'https://x.com/bribeiro_br',
    github: null,
  },

  // KPI contract, per KPI.md §KPI contract block, Type 2 defaults
  kpis: [
    {
      name: 'Contact-form submission rate',
      bucket: 'Conversion',
      target: '≥ 2% of unique visitors',
      source: 'GA4: contact_form_submit event',
    },
    {
      name: 'Portfolio→Contact funnel',
      bucket: 'Funnel',
      target: '≥ 8% of portfolio detail viewers click Contact CTA',
      source: 'GA4: page_view → contact_cta_click sequence',
    },
    {
      name: 'Inquiry response time',
      bucket: 'Health',
      target: '< 24h business-day median',
      source: 'Manual log; Resend webhook → spreadsheet (deferred)',
    },
  ],

  // i18n strings, trilingual per docs/design/I18N.md §17
  i18n: {
    en: {
      tagline: 'Websites that bring you customers.',
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        about: 'About',
        contact: 'Contact',
      },
      cta: {
        startProject: 'Start a project',
        viewWork: 'See the work',
        seeAll: 'See all',
        learnMore: 'Learn more',
        contactUs: 'Contact us',
        backToTop: 'Back to top',
      },
      consent: {
        title: 'Cookies, please confirm your preference.',
        bodyBefore:
          'We use essential cookies so the site works. With your consent we also use anonymised analytics so we know which pages get read. More in our ',
        privacyLinkLabel: 'privacy policy',
        privacyLinkHref: '/privacy',
        bodyAfter: '.',
        accept: 'Accept all',
        reject: 'Reject all',
        manage: 'Manage preferences',
      },
      demoBanner: 'PORTFOLIO, agency studio demo. The form is wired; the email is real.',
      chrome: {
        skipToContent: 'Skip to content',
        menuOpen: 'Open menu',
        menuClose: 'Close menu',
        languageLabel: 'Language',
        imprintLabel: 'Imprint',
        privacyLabel: 'Privacy policy',
        navHeading: 'Navigation',
        legalHeading: 'Legal',
        contactHeading: 'Contact',
        followHeading: 'Follow',
        closingNote: 'A small studio in Berlin. Everything your business needs online. No upsell.',
      },
    },
    de: {
      tagline: 'Webseiten, die dir Kund:innen bringen.',
      nav: {
        home: 'Start',
        services: 'Leistungen',
        portfolio: 'Portfolio',
        about: 'Studio',
        contact: 'Kontakt',
      },
      cta: {
        startProject: 'Projekt starten',
        viewWork: 'Arbeiten ansehen',
        seeAll: 'Alle ansehen',
        learnMore: 'Mehr erfahren',
        contactUs: 'Kontakt aufnehmen',
        backToTop: 'Nach oben',
      },
      consent: {
        title: 'Cookies, bitte um deine Zustimmung.',
        bodyBefore:
          'Wir verwenden essentielle Cookies, damit die Seite funktioniert. Mit deiner Zustimmung auch anonymisierte Analyse-Cookies, damit wir wissen, welche Seiten gelesen werden. Mehr in unserer ',
        privacyLinkLabel: 'Datenschutzerklärung',
        privacyLinkHref: '/de/privacy',
        bodyAfter: '.',
        accept: 'Alle akzeptieren',
        reject: 'Alle ablehnen',
        manage: 'Einstellungen verwalten',
      },
      demoBanner:
        'PORTFOLIO, Studio-Demo der Agentur. Das Formular ist verbunden; die E-Mail ist echt.',
      chrome: {
        skipToContent: 'Zum Inhalt springen',
        menuOpen: 'Menü öffnen',
        menuClose: 'Menü schließen',
        languageLabel: 'Sprache',
        imprintLabel: 'Impressum',
        privacyLabel: 'Datenschutzerklärung',
        navHeading: 'Navigation',
        legalHeading: 'Rechtliches',
        contactHeading: 'Kontakt',
        followHeading: 'Folgen',
        closingNote:
          'Ein kleines Studio in Berlin. Alles, was dein Geschäft online braucht. Kein Upsell.',
      },
    },
    'pt-br': {
      tagline: 'Sites que trazem clientes para você.',
      nav: {
        home: 'Início',
        services: 'Serviços',
        portfolio: 'Portfólio',
        about: 'Estúdio',
        contact: 'Contato',
      },
      cta: {
        startProject: 'Começar um projeto',
        viewWork: 'Ver os trabalhos',
        seeAll: 'Ver tudo',
        learnMore: 'Saiba mais',
        contactUs: 'Entrar em contato',
        backToTop: 'Voltar ao topo',
      },
      consent: {
        title: 'Cookies, confirme sua preferência, por favor.',
        bodyBefore:
          'Usamos cookies essenciais para o site funcionar. Com seu consentimento, também usamos cookies analíticos anônimos para saber quais páginas são lidas. Saiba mais em nossa ',
        privacyLinkLabel: 'política de privacidade',
        privacyLinkHref: '/pt-br/privacy',
        bodyAfter: '.',
        accept: 'Aceitar tudo',
        reject: 'Recusar tudo',
        manage: 'Gerenciar preferências',
      },
      demoBanner:
        'PORTFÓLIO, demo do estúdio da agência. O formulário está ligado; o e-mail é real.',
      chrome: {
        skipToContent: 'Pular para o conteúdo',
        menuOpen: 'Abrir menu',
        menuClose: 'Fechar menu',
        languageLabel: 'Idioma',
        imprintLabel: 'Informações legais',
        privacyLabel: 'Política de privacidade',
        navHeading: 'Navegação',
        legalHeading: 'Informações legais',
        contactHeading: 'Contato',
        followHeading: 'Acompanhe',
        closingNote:
          'Um pequeno estúdio em Berlim. Tudo que o seu negócio precisa online. Sem upsell.',
      },
    },
  },
} as const;

export type Site = typeof SITE;
