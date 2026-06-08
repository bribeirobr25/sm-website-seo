/**
 * Funnel content, inbound-funnel sprint (icreateyoursite benchmark borrow).
 *
 * Houses the trilingual copy for the borrowed conversion patterns:
 *   F5 promises · F6 home FAQ · F7 reviews + trust badges · F2 pricing · F4 website-check.
 *
 * Lives OUTSIDE page-strings.ts on purpose: this is bulk per-feature content, so
 * (like portfolio.ts / services.ts) parity is enforced by the `Record<Locale, …>`
 * TYPE at compile time, not the runtime validate:translations script. Keeps the
 * 1.2k-line page-strings.ts and the i18n parity validator untouched.
 *
 * DRAFT markers: promise numbers (F5) + the example reviews (F7) are still
 * owner-pending, search "DRAFT". Pricing (F2) is OWNER-CONFIRMED: a pure-monthly
 * "Website-Abo" (€219 / €390 / €570, NO setup fee). The website is a MANAGED
 * SUBSCRIPTION, not a one-time handover, the client owns their domain, content,
 * and data; the build/design/code is licensed while subscribed, with an optional
 * one-time buy-out. All ownership copy states this honestly (no iCreate-style
 * "you own everything" ambiguity, that's UWG/§305c risk in DE). The real AGB +
 * Datenschutz + buy-out contract still need a German lawyer before launch.
 */

import type { Locale } from './site';

export interface PromiseStat {
  stat: string;
  label: string;
}
export interface Review {
  quote: string;
  author: string;
  role: string;
}
export interface Faq {
  q: string;
  a: string;
}
export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  /** Pure-monthly subscription ("Website-Abo"), NO setup fee. Owner-confirmed prices. */
  price: string; // e.g. '€219'
  priceSuffix: string; // e.g. '/mo'
  priceNote: string; // e.g. 'No setup fee · cancel anytime'
  popular: boolean;
  features: string[];
  cta: string;
}

interface PricingContent {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  draftNote: string;
  tiers: PackageTier[];
  outroNote: string;
  customHeading: string;
  customBody: string;
  includesEyebrow: string;
  includesHeading: string;
  includesBody: string;
  includes: { title: string; body: string }[];
  termsEyebrow: string;
  termsHeading: string;
  terms: string[];
  faqHeading: string;
  faq: Faq[];
  ctaHeading: string;
  ctaBody: string;
  ctaButton: string;
}

interface WebsiteCheckContent {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  priceLine: string;
  priceSub: string;
  coverEyebrow: string;
  coverHeading: string;
  coverBody: string;
  covers: { title: string; body: string }[];
  stepsEyebrow: string;
  stepsHeading: string;
  steps: { title: string; body: string }[];
  getEyebrow: string;
  getHeading: string;
  gets: string[];
  forHeading: string;
  forItems: string[];
  ctaHeading: string;
  ctaBody: string;
  ctaButton: string;
}

interface FunnelContent {
  promises: { eyebrow: string; title: string; note: string; items: PromiseStat[] };
  reviews: { eyebrow: string; title: string; body: string; draftNote: string; items: Review[] };
  trustBadges: { eyebrow: string; items: string[] };
  homeFaq: { eyebrow: string; title: string; items: Faq[] };
  pricing: PricingContent;
  websiteCheck: WebsiteCheckContent;
  /** Shared labels reused by funnel components. */
  ui: {
    popular: string;
    pricingNav: string;
  };
}

export const FUNNEL: Record<Locale, FunnelContent> = {
  en: {
    promises: {
      eyebrow: 'What you can count on',
      title: 'Clear commitments, not vague promises.',
      note: '',
      items: [
        { stat: '5 days', label: 'to your first preview' },
        { stat: '< 24h', label: 'reply on business days' },
        { stat: '20+', label: 'local listings: Google Maps, Apple Maps and more' },
      ],
    },
    reviews: {
      eyebrow: 'In their words',
      title: 'Owners, not agencies.',
      body: 'What it’s like to work with us, a Berlin studio that’s always there when you need us.',
      draftNote: '',
      items: [
        {
          quote:
            'They built exactly what we needed and explained every step in plain language. No jargon, no upsell.',
          author: 'Adele Restaurant',
          role: 'Restaurant owner · Berlin',
        },
        {
          quote:
            'Fast, honest, and the site actually brings in bookings. We should have done it a year ago.',
          author: 'ATEM Studio',
          role: 'Yoga studio owner · Berlin',
        },
        {
          quote:
            'Trilingual from day one, and our Google listing finally looks the part. Worth every euro.',
          author: 'diBoaS',
          role: 'diBoaS Finance owner · Berlin',
        },
      ],
    },
    trustBadges: {
      eyebrow: 'Built right',
      items: [
        'GDPR-compliant by default',
        'Made in Berlin',
        'WCAG 2.2 AA accessible',
        'Domain & content stay yours',
      ],
    },
    homeFaq: {
      eyebrow: 'Good to know',
      title: 'Questions we hear a lot.',
      items: [
        {
          q: 'How much does a website cost?',
          a: 'We keep it simple: one flat monthly fee covering design, hosting, updates, and support, no setup cost. Plans start at €219/mo. Prefer to own the site outright instead of subscribing? We quote one-time builds too. See the pricing page.',
        },
        {
          q: 'How long does it take?',
          a: 'Most small-business sites go live within two to three weeks once we have your content. You see a working preview within the first week and we refine it together from there.',
        },
        {
          q: 'Do you build in German, English, and Portuguese?',
          a: 'Yes. We’re a trilingual studio. Most Berlin clients launch in German and English; Brazilian-community businesses add Portuguese. Translations are written by us, not run through a machine.',
        },
        {
          q: 'Do I own my website?',
          a: 'You own your domain, your content, and your data, always, with a full export anytime. The site itself (design, code, hosting) is part of the monthly subscription: yours to use while subscribed, kept secure and up to date by us. Want to own it outright? We offer a one-time buy-out. We spell this out plainly, no fine-print surprises.',
        },
        {
          q: 'What about ongoing maintenance?',
          a: 'Included. Updates, backups, security, and small content changes are part of your monthly plan, nothing extra to think about, no surprise invoices. (If you buy the site outright instead of subscribing, we offer maintenance as a separate option.)',
        },
        {
          q: 'What makes you different from a big agency?',
          a: 'You talk to the person who builds your site, not a sales rep. Fewer clients, more attention, and engineering standards, fast, accessible, GDPR-clean, that most template shops skip.',
        },
      ],
    },
    pricing: {
      metaTitle: 'Pricing, a simple monthly website subscription',
      metaDescription:
        'Transparent monthly website pricing for Berlin small businesses. One flat monthly fee, design, hosting, updates, and support. No setup cost, cancel anytime; your domain and content always stay yours.',
      heroEyebrow: 'Website subscription',
      heroTitle: 'One monthly price. Your whole web presence, handled.',
      heroSubtitle:
        'Design, build, hosting, updates, and support for one flat monthly fee, no setup cost. Cancel anytime; your domain and content always stay yours, and you can buy the site outright whenever you like.',
      draftNote:
        'Per month, net (plus VAT where applicable). Includes hosting, updates, and support, no setup fee.',
      tiers: [
        {
          id: 'start',
          name: 'Start',
          tagline: 'Get online properly.',
          price: '€219',
          priceSuffix: '/mo',
          priceNote: 'No setup fee · cancel monthly',
          popular: false,
          cta: 'Start here',
          features: [
            'One-page custom site',
            'Mobile-first, fast, accessible',
            'Contact form to your inbox',
            'Domain, SSL & EU hosting included',
            'Basic on-page SEO',
            'GDPR cookie banner + legal pages',
            'Updates, backups & support included',
          ],
        },
        {
          id: 'growth',
          name: 'Growth',
          tagline: 'The one most businesses need.',
          price: '€390',
          priceSuffix: '/mo',
          priceNote: 'No setup fee · cancel monthly',
          popular: true,
          cta: 'Choose Growth',
          features: [
            'Up to 5 custom pages',
            'Bilingual (DE + EN)',
            'Local SEO + schema markup',
            'Google Business Profile setup',
            'Contact form + spam protection',
            'Monthly updates & backups',
            'Analytics + Search Console',
          ],
        },
        {
          id: 'complete',
          name: 'Complete',
          tagline: 'Your digital presence, handled.',
          price: '€570',
          priceSuffix: '/mo',
          priceNote: 'No setup fee · cancel monthly',
          popular: false,
          cta: 'Go Complete',
          features: [
            'Everything in Growth',
            'Trilingual (DE + EN + PT-BR)',
            'Booking or simple e-commerce',
            'Ongoing SEO + content help',
            'Google Business management',
            'Priority support',
            'Quarterly performance review',
          ],
        },
      ],
      outroNote:
        'No setup fee, no long contracts, cancel any month. Your domain and content always stay yours; if you cancel, the managed site goes offline, but a one-time buy-out lets you take the site itself and run it on your own.',
      customHeading: 'Prefer to own it outright?',
      customBody:
        'We also build one-time, buy-it-outright sites (you own the code and host it yourself), do SEO-only work, or bigger applications. Tell us what you need and we’ll shape a plan around it.',
      includesEyebrow: 'Every plan includes',
      includesHeading: 'The things that should never be extras.',
      includesBody:
        'Other shops charge separately for hosting, SSL, and updates. We don’t. The basics are always in.',
      includes: [
        {
          title: 'Custom design',
          body: 'No templates. Built around your brand and your customers from a blank page.',
        },
        {
          title: 'Domain, hosting & security',
          body: 'Your own domain, fast EU hosting, SSL, and proactive monitoring, all set up for you.',
        },
        {
          title: 'Mobile-first & accessible',
          body: 'Flawless on phones, WCAG 2.2 AA accessible, and tuned for Core Web Vitals.',
        },
        {
          title: 'Direct support',
          body: 'You reach the person who built your site. Updates handled fast, in plain language.',
        },
      ],
      termsEyebrow: 'The fine print, in plain words',
      termsHeading: 'Fair terms, the German way.',
      terms: [
        'Your domain is registered in your name, and your content and data always belong to you, including a full export on request.',
        'The website itself (design, code, hosting) is part of the subscription: you have a licence to use it while subscribed, and we keep it running, secure, and up to date.',
        'Month-to-month, cancel any time with no fee. If you cancel, the managed site goes offline, you keep your domain, content, and data; an optional one-time buy-out lets you take the site itself.',
        'Your statutory right of withdrawal (Widerrufsrecht) applies to consumer contracts. Full terms (AGB) and the privacy policy are provided before you sign.',
      ],
      faqHeading: 'Pricing questions',
      faq: [
        {
          q: 'Is there really no setup fee?',
          a: 'Correct, you pay one flat monthly fee, nothing upfront. It covers design, build, hosting, updates, and support. That only adds up because the website is a managed subscription rather than a one-time handover, see "Do I own my website?" below.',
        },
        {
          q: 'Do I own my website?',
          a: 'You own your domain (registered in your name), all of your content, and your data, and you can export everything anytime. The website itself, the design, the code, the hosting, is part of the subscription: you have a full licence to use it while you’re subscribed, and we keep it fast, secure, and updated. We’re upfront about this because a flat monthly fee with no setup cost only works if the site is something we host and maintain, not a one-time handover. If you’d rather own the site outright, we offer a one-time buy-out, just ask.',
        },
        {
          q: 'What happens if I cancel?',
          a: 'Cancel any month, no fee. Your domain stays yours and points wherever you like, and we hand over a full export of your content and data. The managed site goes offline unless you take the one-time buy-out to keep it running on your own hosting. No hostage-taking, and no giving the built site away for free either. We say exactly what you keep, in writing.',
        },
        {
          q: 'Can I buy the site outright instead?',
          a: 'Yes. If you’d rather own the code and design and host it yourself, we’ll quote a one-time build, or a buy-out of your current subscription site. Tell us which you prefer.',
        },
        {
          q: 'Can I switch plans later?',
          a: 'Yes, up or down, anytime. We add or adjust features on your existing site, no rebuild, no downtime.',
        },
      ],
      ctaHeading: 'Tell us about your business.',
      ctaBody: 'We’ll recommend the right plan, honestly, even if it’s the smallest one.',
      ctaButton: 'Get a quote',
    },
    websiteCheck: {
      metaTitle: 'Website & Google check, a focused 1:1 session',
      metaDescription:
        'Book a focused 1:1 session: we review your website and Google Business Profile live and hand you a prioritized action list. Flat fee, no subscription.',
      heroEyebrow: 'Website & Google check',
      heroTitle: 'A clear-eyed look at your site, in one hour.',
      heroSubtitle:
        'A focused 1:1 video session. We go through your website and your Google listing live, then you walk away with a short, prioritized list of what to fix first.',
      priceLine: '',
      priceSub: 'One hour + a written action list. No subscription, no upsell.',
      coverEyebrow: 'What we look at',
      coverHeading: 'The things that actually move the needle.',
      coverBody:
        'Every business is different, so the session follows what matters most for yours. Common ground:',
      covers: [
        {
          title: 'First impressions & conversion',
          body: 'Does the site earn trust in five seconds? Are the calls-to-action obvious? Where do visitors drop off?',
        },
        {
          title: 'Google Business Profile',
          body: 'Categories, photos, hours, reviews, and the gaps keeping you out of the local map pack.',
        },
        {
          title: 'Local SEO basics',
          body: 'Titles, headings, schema, and the searches you should rank for but don’t yet.',
        },
        {
          title: 'Speed & mobile',
          body: 'Load time, mobile layout, and the quick wins that lift both rankings and conversions.',
        },
      ],
      stepsEyebrow: 'How it works',
      stepsHeading: 'Simple, and over in a week.',
      steps: [
        {
          title: '1. Book a slot',
          body: 'Tell us your website and Google listing. We send a calendar link and a short prep note.',
        },
        {
          title: '2. Meet live for an hour',
          body: 'Screen-shared, hands-on. We review together and answer every question you’ve got.',
        },
        {
          title: '3. Get your action list',
          body: 'Within 48 hours you receive a written, prioritized list, fix-it-yourself or hand it to us.',
        },
      ],
      getEyebrow: 'What you leave with',
      getHeading: 'Clarity you can act on.',
      gets: [
        'A prioritized written action list',
        'Quick wins you can do this week',
        'An honest read on what’s worth investing in',
        'No obligation to hire us for anything more',
      ],
      forHeading: 'A good fit if…',
      forItems: [
        'You have a site but it isn’t bringing in customers',
        'Your Google listing feels half-finished',
        'You’re about to spend money and want a second opinion first',
        'You’d rather understand the problem than be sold a package',
      ],
      ctaHeading: 'Book your website & Google check.',
      ctaBody: 'Tell us your website and we’ll send a slot within 24 hours.',
      ctaButton: 'Request a session',
    },
    ui: {
      popular: 'Most chosen',
      pricingNav: 'Pricing',
    },
  },

  de: {
    promises: {
      eyebrow: 'Worauf du dich verlassen kannst',
      title: 'Klare Zusagen statt vager Versprechen.',
      note: '',
      items: [
        { stat: '5 Tage', label: 'bis zur ersten Vorschau' },
        { stat: '< 24 h', label: 'Antwort an Werktagen' },
        { stat: '20+', label: 'lokale Einträge: Google Maps, Apple Maps und mehr' },
      ],
    },
    reviews: {
      eyebrow: 'In ihren Worten',
      title: 'Inhaber:innen, keine Agentur.',
      body: 'Wie es ist, mit uns zu arbeiten, einem Berliner Studio, das immer da ist, wenn du es brauchst.',
      draftNote: '',
      items: [
        {
          quote:
            'Sie haben genau das gebaut, was wir brauchten, und jeden Schritt verständlich erklärt. Kein Fachchinesisch, kein Upselling.',
          author: 'Adele Restaurant',
          role: 'Restaurant-Inhaberin · Berlin',
        },
        {
          quote:
            'Schnell, ehrlich, und die Seite bringt tatsächlich Buchungen. Wir hätten das schon vor einem Jahr machen sollen.',
          author: 'ATEM Studio',
          role: 'Yoga-Studio-Inhaber · Berlin',
        },
        {
          quote:
            'Von Anfang an dreisprachig, und unser Google-Eintrag sieht endlich gut aus. Jeden Euro wert.',
          author: 'diBoaS',
          role: 'diBoaS-Finance-Inhaber · Berlin',
        },
      ],
    },
    trustBadges: {
      eyebrow: 'Richtig gemacht',
      items: [
        'DSGVO-konform von Haus aus',
        'Made in Berlin',
        'Barrierefrei nach WCAG 2.2 AA',
        'Domain & Inhalte bleiben deins',
      ],
    },
    homeFaq: {
      eyebrow: 'Gut zu wissen',
      title: 'Häufige Fragen.',
      items: [
        {
          q: 'Was kostet eine Website?',
          a: 'Ganz einfach: eine feste monatliche Gebühr für Design, Hosting, Updates und Support, ohne Einrichtungskosten. Pläne ab 219 €/Monat. Lieber die Seite ganz besitzen statt abonnieren? Wir bieten auch einmalige Builds an. Details auf der Preisseite.',
        },
        {
          q: 'Wie lange dauert es?',
          a: 'Die meisten Seiten für kleine Unternehmen gehen innerhalb von zwei bis drei Wochen live, sobald wir deine Inhalte haben. In der ersten Woche siehst du eine funktionierende Vorschau, die wir gemeinsam verfeinern.',
        },
        {
          q: 'Baut ihr auf Deutsch, Englisch und Portugiesisch?',
          a: 'Ja. Wir sind ein dreisprachiges Studio. Die meisten Berliner Kund:innen starten auf Deutsch und Englisch; Unternehmen der brasilianischen Community ergänzen Portugiesisch. Übersetzungen schreiben wir selbst, nicht maschinell.',
        },
        {
          q: 'Gehört mir meine Website?',
          a: 'Deine Domain, deine Inhalte und deine Daten gehören dir, immer, mit Export jederzeit. Die Website selbst (Design, Code, Hosting) ist Teil des Monats-Abos: deins zur Nutzung, solange du abonniert bist, von uns sicher und aktuell gehalten. Lieber ganz besitzen? Dann gibt es eine einmalige Ablöse (Buy-out). Wir sagen das offen, kein Kleingedrucktes.',
        },
        {
          q: 'Wie ist das mit der laufenden Pflege?',
          a: 'Inklusive. Updates, Backups, Sicherheit und kleine Inhaltsänderungen sind Teil deines Monatsplans, nichts extra, keine Überraschungsrechnungen. (Wenn du die Seite stattdessen einmalig kaufst, bieten wir Pflege separat an.)',
        },
        {
          q: 'Was unterscheidet euch von einer großen Agentur?',
          a: 'Du sprichst mit der Person, die deine Seite baut, nicht mit dem Vertrieb. Weniger Kund:innen, mehr Aufmerksamkeit, und technische Standards, schnell, barrierefrei, DSGVO-sauber, die viele Template-Anbieter überspringen.',
        },
      ],
    },
    pricing: {
      metaTitle: 'Preise, Website-Abo für inhabergeführte Unternehmen',
      metaDescription:
        'Transparente monatliche Website-Preise für Berliner Kleinunternehmen. Eine feste Monatsgebühr, Design, Hosting, Updates und Support. Keine Einrichtungskosten, jederzeit kündbar; Domain und Inhalte bleiben deins.',
      heroEyebrow: 'Website-Abo',
      heroTitle: 'Ein Monatspreis. Deine ganze Web-Präsenz, erledigt.',
      heroSubtitle:
        'Design, Aufbau, Hosting, Updates und Support für eine feste Monatsgebühr, ohne Einrichtungskosten. Jederzeit kündbar; Domain und Inhalte bleiben immer deins, und die Seite kannst du jederzeit ganz übernehmen.',
      draftNote:
        'Pro Monat, netto (zzgl. USt., falls anwendbar). Inkl. Hosting, Updates und Support, keine Einrichtungsgebühr.',
      tiers: [
        {
          id: 'start',
          name: 'Start',
          tagline: 'Schnell und richtig online.',
          price: '219 €',
          priceSuffix: '/Mon.',
          priceNote: 'Keine Einrichtung · monatlich kündbar',
          popular: false,
          cta: 'Hier starten',
          features: [
            'One-Page-Seite, individuell',
            'Mobile-first, schnell, barrierefrei',
            'Kontaktformular ins Postfach',
            'Domain, SSL & EU-Hosting inklusive',
            'Basis-On-Page-SEO',
            'DSGVO-Cookie-Banner + Rechtstexte',
            'Updates, Backups & Support inklusive',
          ],
        },
        {
          id: 'growth',
          name: 'Wachstum',
          tagline: 'Das, was die meisten brauchen.',
          price: '390 €',
          priceSuffix: '/Mon.',
          priceNote: 'Keine Einrichtung · monatlich kündbar',
          popular: true,
          cta: 'Wachstum wählen',
          features: [
            'Bis zu 5 individuelle Seiten',
            'Zweisprachig (DE + EN)',
            'Lokales SEO + Schema-Markup',
            'Google-Unternehmensprofil einrichten',
            'Kontaktformular + Spam-Schutz',
            'Monatliche Updates & Backups',
            'Analytics + Search Console',
          ],
        },
        {
          id: 'complete',
          name: 'Komplett',
          tagline: 'Deine Online-Präsenz, erledigt.',
          price: '570 €',
          priceSuffix: '/Mon.',
          priceNote: 'Keine Einrichtung · monatlich kündbar',
          popular: false,
          cta: 'Komplett nehmen',
          features: [
            'Alles aus Wachstum',
            'Dreisprachig (DE + EN + PT-BR)',
            'Buchung oder einfacher Shop',
            'Laufendes SEO + Content-Hilfe',
            'Google-Unternehmensprofil-Pflege',
            'Priorisierter Support',
            'Quartals-Performance-Review',
          ],
        },
      ],
      outroNote:
        'Keine Einrichtungsgebühr, keine langen Verträge, monatlich kündbar. Domain und Inhalte bleiben immer deins; bei Kündigung geht die betreute Seite offline, aber mit einer einmaligen Ablöse übernimmst du die Seite selbst und betreibst sie eigenständig weiter.',
      customHeading: 'Lieber ganz besitzen?',
      customBody:
        'Wir bauen auch einmalige Seiten zum Kauf (du besitzt den Code und hostest selbst), machen reines SEO oder größere Anwendungen. Sag uns, was du brauchst, und wir formen einen Plan darum.',
      includesEyebrow: 'In jedem Plan enthalten',
      includesHeading: 'Dinge, die nie Extras sein sollten.',
      includesBody:
        'Andere berechnen Hosting, SSL und Updates extra. Wir nicht. Die Basics sind immer dabei.',
      includes: [
        {
          title: 'Individuelles Design',
          body: 'Keine Templates. Vom leeren Blatt um deine Marke und deine Kund:innen herum gebaut.',
        },
        {
          title: 'Domain, Hosting & Sicherheit',
          body: 'Eigene Domain, schnelles EU-Hosting, SSL und proaktives Monitoring, für dich eingerichtet.',
        },
        {
          title: 'Mobile-first & barrierefrei',
          body: 'Tadellos auf dem Handy, WCAG 2.2 AA barrierefrei und auf Core Web Vitals getrimmt.',
        },
        {
          title: 'Direkter Support',
          body: 'Du erreichst die Person, die deine Seite gebaut hat. Updates schnell, verständlich erledigt.',
        },
      ],
      termsEyebrow: 'Das Kleingedruckte, klar gesagt',
      termsHeading: 'Faire Bedingungen, auf die deutsche Art.',
      terms: [
        'Deine Domain läuft auf deinen Namen, und Inhalte und Daten gehören immer dir, inklusive vollständigem Export auf Wunsch.',
        'Die Website selbst (Design, Code, Hosting) ist Teil des Abos: du hast ein Nutzungsrecht, solange du abonniert bist, und wir halten sie sicher und aktuell.',
        'Monatlich, jederzeit ohne Gebühr kündbar. Bei Kündigung geht die betreute Seite offline, Domain, Inhalte und Daten behältst du; mit einer einmaligen Ablöse übernimmst du die Seite selbst.',
        'Dein gesetzliches Widerrufsrecht gilt bei Verbraucherverträgen. Vollständige AGB und Datenschutzerklärung erhältst du vor Vertragsschluss.',
      ],
      faqHeading: 'Fragen zu den Preisen',
      faq: [
        {
          q: 'Wirklich keine Einrichtungsgebühr?',
          a: 'Richtig, du zahlst eine feste Monatsgebühr, nichts vorab. Sie deckt Design, Aufbau, Hosting, Updates und Support. Das geht nur auf, weil die Website ein betreutes Abo ist und keine einmalige Übergabe, siehe "Gehört mir meine Website?" unten.',
        },
        {
          q: 'Gehört mir meine Website?',
          a: 'Deine Domain (auf deinen Namen), all deine Inhalte und deine Daten gehören dir, und du kannst jederzeit alles exportieren. Die Website selbst, Design, Code, Hosting, ist Teil des Abos: du hast ein volles Nutzungsrecht, solange du abonniert bist, und wir halten sie schnell, sicher und aktuell. Wir sagen das offen, weil eine feste Monatsgebühr ohne Einrichtungskosten nur funktioniert, wenn wir die Seite hosten und pflegen, nicht als einmalige Übergabe. Willst du die Seite ganz besitzen, gibt es eine einmalige Ablöse, frag einfach.',
        },
        {
          q: 'Was passiert, wenn ich kündige?',
          a: 'Monatlich kündbar, ohne Gebühr. Deine Domain bleibt deins und zeigt, wohin du willst, und wir übergeben einen vollständigen Export deiner Inhalte und Daten. Die betreute Seite geht offline, außer du nimmst die einmalige Ablöse, um sie auf eigenem Hosting weiterzubetreiben. Kein Geiseldrama, aber die gebaute Seite gibt es auch nicht gratis. Was du behältst, steht schriftlich fest.',
        },
        {
          q: 'Kann ich die Seite stattdessen ganz kaufen?',
          a: 'Ja. Wenn du Code und Design lieber besitzt und selbst hostest, machen wir ein Angebot für einen einmaligen Build oder eine Ablöse deiner aktuellen Abo-Seite. Sag uns, was du bevorzugst.',
        },
        {
          q: 'Kann ich später den Plan wechseln?',
          a: 'Ja, hoch oder runter, jederzeit. Wir ergänzen oder passen Funktionen auf deiner bestehenden Seite an, kein Neubau, keine Ausfallzeit.',
        },
      ],
      ctaHeading: 'Erzähl uns von deinem Unternehmen.',
      ctaBody: 'Wir empfehlen den richtigen Plan, ehrlich, auch wenn es der kleinste ist.',
      ctaButton: 'Angebot anfragen',
    },
    websiteCheck: {
      metaTitle: 'Website- & Google-Check, eine fokussierte 1:1-Session',
      metaDescription:
        'Buche eine fokussierte 1:1-Session: Wir prüfen Website und Google-Unternehmensprofil live und geben dir eine priorisierte To-do-Liste. Festpreis, kein Abo.',
      heroEyebrow: 'Website- & Google-Check',
      heroTitle: 'Ein klarer Blick auf deine Seite, in einer Stunde.',
      heroSubtitle:
        'Eine fokussierte 1:1-Videosession. Wir gehen Website und Google-Eintrag live durch, und du gehst mit einer kurzen, priorisierten Liste, was zuerst zu beheben ist.',
      priceLine: '',
      priceSub: 'Eine Stunde + schriftliche To-do-Liste. Kein Abo, kein Upselling.',
      coverEyebrow: 'Was wir uns ansehen',
      coverHeading: 'Die Dinge, die wirklich etwas bewegen.',
      coverBody:
        'Jedes Unternehmen ist anders, also folgt die Session dem, was für dich am wichtigsten ist. Gemeinsame Basis:',
      covers: [
        {
          title: 'Erster Eindruck & Conversion',
          body: 'Schafft die Seite in fünf Sekunden Vertrauen? Sind die Handlungsaufrufe klar? Wo springen Besucher:innen ab?',
        },
        {
          title: 'Google-Unternehmensprofil',
          body: 'Kategorien, Fotos, Öffnungszeiten, Bewertungen, und die Lücken, die dich aus dem lokalen Map-Pack halten.',
        },
        {
          title: 'Lokales SEO, die Basis',
          body: 'Titel, Überschriften, Schema und die Suchen, für die du ranken solltest, aber noch nicht tust.',
        },
        {
          title: 'Tempo & Mobil',
          body: 'Ladezeit, Mobile-Layout und die schnellen Gewinne, die Rankings und Conversions heben.',
        },
      ],
      stepsEyebrow: 'So läuft es',
      stepsHeading: 'Einfach, und in einer Woche erledigt.',
      steps: [
        {
          title: '1. Termin buchen',
          body: 'Nenn uns Website und Google-Eintrag. Wir schicken einen Kalender-Link und eine kurze Vorbereitungsnotiz.',
        },
        {
          title: '2. Eine Stunde live treffen',
          body: 'Mit Bildschirmfreigabe, praktisch. Wir prüfen gemeinsam und beantworten jede Frage.',
        },
        {
          title: '3. To-do-Liste erhalten',
          body: 'Innerhalb von 48 Stunden bekommst du eine schriftliche, priorisierte Liste, selbst umsetzen oder an uns übergeben.',
        },
      ],
      getEyebrow: 'Womit du gehst',
      getHeading: 'Klarheit, mit der du arbeiten kannst.',
      gets: [
        'Eine priorisierte schriftliche To-do-Liste',
        'Schnelle Gewinne für diese Woche',
        'Eine ehrliche Einschätzung, was sich zu investieren lohnt',
        'Keine Verpflichtung, uns für mehr zu beauftragen',
      ],
      forHeading: 'Gut passend, wenn…',
      forItems: [
        'du eine Seite hast, die keine Kund:innen bringt',
        'sich dein Google-Eintrag halbfertig anfühlt',
        'du gleich Geld ausgeben willst und erst eine zweite Meinung möchtest',
        'du das Problem verstehen willst, statt ein Paket verkauft zu bekommen',
      ],
      ctaHeading: 'Buche deinen Website- & Google-Check.',
      ctaBody: 'Nenn uns deine Website und wir schicken innerhalb von 24 Stunden einen Termin.',
      ctaButton: 'Session anfragen',
    },
    ui: {
      popular: 'Am häufigsten gewählt',
      pricingNav: 'Preise',
    },
  },

  'pt-br': {
    promises: {
      eyebrow: 'Com o que você pode contar',
      title: 'Compromissos claros, não promessas vagas.',
      note: '',
      items: [
        { stat: '5 dias', label: 'até a primeira prévia' },
        { stat: '< 24 h', label: 'de resposta em dias úteis' },
        { stat: '20+', label: 'presenças locais: Google Maps, Apple Maps e mais' },
      ],
    },
    reviews: {
      eyebrow: 'Nas palavras deles',
      title: 'Donos de negócio, não agências.',
      body: 'Como é trabalhar com a gente, um estúdio em Berlim que está sempre por perto quando você precisa.',
      draftNote: '',
      items: [
        {
          quote:
            'Construíram exatamente o que precisávamos e explicaram cada passo em linguagem simples. Sem jargão, sem empurrar serviço.',
          author: 'Adele Restaurant',
          role: 'Dona de restaurante · Berlim',
        },
        {
          quote:
            'Rápido, honesto, e o site realmente traz reservas. Deveríamos ter feito há um ano.',
          author: 'ATEM Studio',
          role: 'Dono de estúdio de yoga · Berlim',
        },
        {
          quote:
            'Trilíngue desde o primeiro dia, e nosso perfil no Google finalmente está à altura. Vale cada euro.',
          author: 'diBoaS',
          role: 'Dono da diBoaS Finance · Berlim',
        },
      ],
    },
    trustBadges: {
      eyebrow: 'Feito do jeito certo',
      items: [
        'Conforme o GDPR por padrão',
        'Feito em Berlim',
        'Acessível WCAG 2.2 AA',
        'Domínio e conteúdo são seus',
      ],
    },
    homeFaq: {
      eyebrow: 'Bom saber',
      title: 'Perguntas que ouvimos muito.',
      items: [
        {
          q: 'Quanto custa um site?',
          a: 'Simples: uma taxa mensal fixa que cobre design, hospedagem, atualizações e suporte, sem custo de setup. Planos a partir de 219 €/mês. Prefere ser dono do site em vez de assinar? Também fazemos projetos únicos. Veja a página de preços.',
        },
        {
          q: 'Quanto tempo leva?',
          a: 'A maioria dos sites de pequenos negócios entra no ar em duas a três semanas assim que temos seu conteúdo. Você vê uma prévia funcional na primeira semana e refinamos juntos a partir daí.',
        },
        {
          q: 'Vocês criam em alemão, inglês e português?',
          a: 'Sim. Somos um estúdio trilíngue. A maioria dos clientes de Berlim lança em alemão e inglês; negócios da comunidade brasileira acrescentam português. As traduções são escritas por nós, não por máquina.',
        },
        {
          q: 'O site é meu?',
          a: 'Seu domínio, seu conteúdo e seus dados são seus, sempre, com exportação completa quando quiser. O site em si (design, código, hospedagem) faz parte da assinatura mensal: seu para usar enquanto assinante, mantido seguro e atualizado por nós. Quer ser dono por completo? Oferecemos uma compra única (buy-out). Dizemos isso claramente, sem surpresas nas letras miúdas.',
        },
        {
          q: 'E a manutenção contínua?',
          a: 'Incluída. Atualizações, backups, segurança e pequenas mudanças de conteúdo fazem parte do seu plano mensal, nada extra para pensar, sem faturas-surpresa. (Se preferir comprar o site de uma vez em vez de assinar, oferecemos manutenção como opção separada.)',
        },
        {
          q: 'O que diferencia vocês de uma agência grande?',
          a: 'Você fala com quem constrói o seu site, não com um vendedor. Menos clientes, mais atenção, e padrões de engenharia, rápido, acessível, em dia com o GDPR, que a maioria das lojas de template pula.',
        },
      ],
    },
    pricing: {
      metaTitle: 'Preços, assinatura de site para negócios com dono presente',
      metaDescription:
        'Preços mensais transparentes de sites para pequenos negócios em Berlim. Uma taxa mensal fixa, design, hospedagem, atualizações e suporte. Sem custo de setup, cancele quando quiser; domínio e conteúdo são sempre seus.',
      heroEyebrow: 'Assinatura de site',
      heroTitle: 'Um preço mensal. Toda a sua presença online, resolvida.',
      heroSubtitle:
        'Design, construção, hospedagem, atualizações e suporte por uma taxa mensal fixa, sem custo de setup. Cancele quando quiser; domínio e conteúdo são sempre seus, e você pode comprar o site por completo a qualquer momento.',
      draftNote:
        'Por mês, líquido (mais impostos, se aplicável). Inclui hospedagem, atualizações e suporte, sem taxa de setup.',
      tiers: [
        {
          id: 'start',
          name: 'Início',
          tagline: 'Entre no ar do jeito certo.',
          price: '219 €',
          priceSuffix: '/mês',
          priceNote: 'Sem setup · cancele quando quiser',
          popular: false,
          cta: 'Começar aqui',
          features: [
            'Site de uma página, sob medida',
            'Mobile-first, rápido, acessível',
            'Formulário de contato para seu e-mail',
            'Domínio, SSL e hospedagem na UE inclusos',
            'SEO on-page básico',
            'Banner de cookies GDPR + páginas legais',
            'Atualizações, backups e suporte inclusos',
          ],
        },
        {
          id: 'growth',
          name: 'Crescimento',
          tagline: 'O que a maioria precisa.',
          price: '390 €',
          priceSuffix: '/mês',
          priceNote: 'Sem setup · cancele quando quiser',
          popular: true,
          cta: 'Escolher Crescimento',
          features: [
            'Até 5 páginas sob medida',
            'Bilíngue (DE + EN)',
            'SEO local + marcação schema',
            'Configuração do Perfil da Empresa no Google',
            'Formulário + proteção anti-spam',
            'Atualizações e backups mensais',
            'Analytics + Search Console',
          ],
        },
        {
          id: 'complete',
          name: 'Completo',
          tagline: 'Sua presença digital, resolvida.',
          price: '570 €',
          priceSuffix: '/mês',
          priceNote: 'Sem setup · cancele quando quiser',
          popular: false,
          cta: 'Ir de Completo',
          features: [
            'Tudo do Crescimento',
            'Trilíngue (DE + EN + PT-BR)',
            'Agendamento ou e-commerce simples',
            'SEO contínuo + ajuda com conteúdo',
            'Gestão do Perfil da Empresa no Google',
            'Suporte prioritário',
            'Revisão de desempenho trimestral',
          ],
        },
      ],
      outroNote:
        'Sem taxa de setup, sem contratos longos, cancele a qualquer mês. Domínio e conteúdo são sempre seus; se cancelar, o site gerenciado sai do ar, mas uma compra única (buy-out) permite levar o site e rodá-lo por conta própria.',
      customHeading: 'Prefere ser dono por completo?',
      customBody:
        'Também construímos sites de compra única (você é dono do código e hospeda você mesmo), fazemos só SEO, ou aplicações maiores. Diga o que precisa e moldamos um plano em torno disso.',
      includesEyebrow: 'Todo plano inclui',
      includesHeading: 'O que nunca deveria ser extra.',
      includesBody:
        'Outras lojas cobram hospedagem, SSL e atualizações à parte. Nós não. O básico está sempre incluso.',
      includes: [
        {
          title: 'Design sob medida',
          body: 'Sem templates. Construído em torno da sua marca e dos seus clientes, do zero.',
        },
        {
          title: 'Domínio, hospedagem e segurança',
          body: 'Seu próprio domínio, hospedagem rápida na UE, SSL e monitoramento proativo, tudo configurado para você.',
        },
        {
          title: 'Mobile-first e acessível',
          body: 'Impecável no celular, acessível WCAG 2.2 AA e afinado para os Core Web Vitals.',
        },
        {
          title: 'Suporte direto',
          body: 'Você fala com quem construiu seu site. Atualizações resolvidas rápido, em linguagem clara.',
        },
      ],
      termsEyebrow: 'As letras miúdas, em palavras claras',
      termsHeading: 'Condições justas, ao estilo alemão.',
      terms: [
        'Seu domínio fica em seu nome, e seu conteúdo e dados são sempre seus, incluindo exportação completa quando solicitar.',
        'O site em si (design, código, hospedagem) faz parte da assinatura: você tem licença de uso enquanto assinante, e nós o mantemos no ar, seguro e atualizado.',
        'Mês a mês, cancele a qualquer momento sem taxa. Se cancelar, o site gerenciado sai do ar, você fica com domínio, conteúdo e dados; uma compra única (buy-out) permite levar o site em si.',
        'Seu direito legal de arrependimento (Widerrufsrecht) se aplica a contratos de consumo. Os termos completos (AGB) e a política de privacidade são fornecidos antes da assinatura.',
      ],
      faqHeading: 'Dúvidas sobre preços',
      faq: [
        {
          q: 'É verdade que não há taxa de setup?',
          a: 'Correto, você paga uma taxa mensal fixa, nada adiantado. Ela cobre design, construção, hospedagem, atualizações e suporte. Isso só fecha porque o site é uma assinatura gerenciada, não uma entrega única, veja "O site é meu?" abaixo.',
        },
        {
          q: 'O site é meu?',
          a: 'Seu domínio (em seu nome), todo o seu conteúdo e seus dados são seus, e você pode exportar tudo quando quiser. O site em si, design, código, hospedagem, faz parte da assinatura: você tem licença completa de uso enquanto assinante, e nós o mantemos rápido, seguro e atualizado. Somos diretos sobre isso porque uma taxa mensal fixa sem custo de setup só funciona se o site for algo que hospedamos e mantemos, não uma entrega única. Se preferir ser dono por completo, oferecemos uma compra única, é só pedir.',
        },
        {
          q: 'O que acontece se eu cancelar?',
          a: 'Cancele a qualquer mês, sem taxa. Seu domínio continua seu e aponta para onde quiser, e entregamos uma exportação completa do seu conteúdo e dados. O site gerenciado sai do ar, a menos que você faça a compra única para mantê-lo na sua própria hospedagem. Sem reféns, e sem dar o site construído de graça também. O que você leva fica por escrito.',
        },
        {
          q: 'Posso comprar o site por completo?',
          a: 'Sim. Se preferir ser dono do código e do design e hospedar você mesmo, orçamos um projeto único ou a compra do seu site de assinatura atual. Diga o que prefere.',
        },
        {
          q: 'Posso trocar de plano depois?',
          a: 'Sim, para cima ou para baixo, a qualquer momento. Adicionamos ou ajustamos recursos no seu site atual, sem reconstrução, sem tempo fora do ar.',
        },
      ],
      ctaHeading: 'Conte sobre o seu negócio.',
      ctaBody: 'Vamos recomendar o plano certo, com honestidade, mesmo que seja o menor.',
      ctaButton: 'Pedir orçamento',
    },
    websiteCheck: {
      metaTitle: 'Check de site e Google, uma sessão 1:1 focada',
      metaDescription:
        'Agende uma sessão 1:1 focada: revisamos seu site e seu Perfil da Empresa no Google ao vivo e entregamos uma lista de ações priorizada. Preço fixo, sem assinatura.',
      heroEyebrow: 'Check de site e Google',
      heroTitle: 'Um olhar honesto sobre o seu site, em uma hora.',
      heroSubtitle:
        'Uma sessão 1:1 por vídeo, focada. Passamos pelo seu site e pelo seu perfil no Google ao vivo, e você sai com uma lista curta e priorizada do que corrigir primeiro.',
      priceLine: '',
      priceSub: 'Uma hora + lista de ações por escrito. Sem assinatura, sem empurrar serviço.',
      coverEyebrow: 'O que analisamos',
      coverHeading: 'As coisas que realmente fazem diferença.',
      coverBody:
        'Cada negócio é diferente, então a sessão segue o que mais importa para o seu. Pontos comuns:',
      covers: [
        {
          title: 'Primeira impressão e conversão',
          body: 'O site gera confiança em cinco segundos? As chamadas para ação são óbvias? Onde os visitantes desistem?',
        },
        {
          title: 'Perfil da Empresa no Google',
          body: 'Categorias, fotos, horários, avaliações, e as lacunas que mantêm você fora do mapa local.',
        },
        {
          title: 'Básico de SEO local',
          body: 'Títulos, cabeçalhos, schema e as buscas em que você deveria aparecer, mas ainda não.',
        },
        {
          title: 'Velocidade e mobile',
          body: 'Tempo de carregamento, layout no celular e os ganhos rápidos que elevam ranking e conversão.',
        },
      ],
      stepsEyebrow: 'Como funciona',
      stepsHeading: 'Simples, e resolvido em uma semana.',
      steps: [
        {
          title: '1. Reserve um horário',
          body: 'Diga seu site e seu perfil no Google. Enviamos um link de agenda e uma nota curta de preparação.',
        },
        {
          title: '2. Encontro ao vivo de uma hora',
          body: 'Com tela compartilhada, mão na massa. Revisamos juntos e respondemos cada pergunta.',
        },
        {
          title: '3. Receba sua lista de ações',
          body: 'Em até 48 horas você recebe uma lista escrita e priorizada, para fazer sozinho ou entregar para nós.',
        },
      ],
      getEyebrow: 'Com o que você sai',
      getHeading: 'Clareza para agir.',
      gets: [
        'Uma lista de ações escrita e priorizada',
        'Ganhos rápidos para esta semana',
        'Uma leitura honesta do que vale investir',
        'Nenhuma obrigação de nos contratar para mais nada',
      ],
      forHeading: 'Combina se…',
      forItems: [
        'você tem um site que não traz clientes',
        'seu perfil no Google parece pela metade',
        'você está prestes a gastar e quer uma segunda opinião antes',
        'você prefere entender o problema a receber um pacote empurrado',
      ],
      ctaHeading: 'Agende seu check de site e Google.',
      ctaBody: 'Diga seu site e enviamos um horário em até 24 horas.',
      ctaButton: 'Solicitar sessão',
    },
    ui: {
      popular: 'Mais escolhido',
      pricingNav: 'Preços',
    },
  },
};
