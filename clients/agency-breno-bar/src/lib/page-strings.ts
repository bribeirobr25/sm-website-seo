/**
 * Per-locale chrome prose for breno-bar.
 *
 * One single source for: home · services overview + 4 service detail · portfolio
 * (index + per-entry chrome) · about · contact · imprint · privacy.
 *
 * Trilingual: EN (reference) · DE · pt-BR. Validated by
 * `scripts/validate-translations.mjs` — every locale must declare the same keys
 * as EN at runtime.
 *
 * Register decisions (per the build plan):
 *   - EN: "we", Apple-clean, premium-international voice
 *   - DE: "du" informal (Apple.com/DE uses Sie, but our SMB target reads as too formal)
 *   - pt-BR: "você"
 */

import type { ServiceSlug } from './services';
import type { Locale } from './site';

export interface ServiceStrings {
  name: string;
  shortTagline: string; // 1-line in the services overview card
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  /** Optional hero photograph rendered full-bleed below the hero copy. Path relative to /public. */
  heroImageSrc?: string;
  /** Alt text for the hero photograph (per locale, since this lives inside the locale block). */
  heroImageAlt?: string;
  bullets: { title: string; body: string }[]; // 3-block "what we do"
  outcomeHeading: string;
  outcomeBullets: string[]; // 3 outcome statements
  bestFor: string;
  /** Optional secondary photograph rendered before the Best-for section. */
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
}

export interface PageStrings {
  home: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitleLines: string[];
    heroSubtitle: string;
    statTitle: string;
    statLine1: string; // 3 stats joined by ' · '
    statLine2: string;
    statLine3: string;
    statLabel1: string;
    statLabel2: string;
    statLabel3: string;
    servicesEyebrow: string;
    servicesHeading: string;
    servicesBody: string;
    portfolioEyebrow: string;
    portfolioHeading: string;
    portfolioAllLink: string;
    aboutEyebrow: string;
    aboutHeading: string;
    aboutBody: string[];
    aboutReadMore: string;
    ctaEyebrow: string;
    ctaHeading: string;
    ctaBody: string;
  };
  services: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    services: Record<ServiceSlug, ServiceStrings>;
  };
  portfolio: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    visitLive: string;
    backToPortfolio: string;
    relatedCases: string;
    stackLabel: string;
    servicesLabel: string;
    verticalLabel: string;
    detailTitleSuffix: string; // appended to entry.name in <title>
    detailDescriptionPrefix: string; // appended to longDescription in meta
  };
  about: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitle: string;
    heroLead: string;
    sections: { title: string; body: string }[];
    foundedNote: string;
  };
  contact: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    formNameLabel: string;
    formNamePlaceholder: string;
    formEmailLabel: string;
    formEmailPlaceholder: string;
    formMessageLabel: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSending: string;
    formSuccessTitle: string;
    formSuccessBody: string;
    formErrorTitle: string;
    formErrorBody: string;
    formServiceUnavailable: string;
    alternativesHeading: string;
    alternativesBody: string;
    privacyNote: string;
  };
  privacy: {
    title: string;
    description: string;
    headingSuffix: string; // "Privacy policy" / "Datenschutzerklärung" / "Política de privacidade"
    lastUpdated: string; // localized date
    sections: { title: string; body: string }[];
  };
  imprint: {
    title: string;
    description: string;
    headingSuffix: string;
    intro: string;
    providerHeading: string;
    representedByHeading: string;
    contactHeading: string;
    vatHeading: string;
    vatNote: string;
    disputeHeading: string;
    disputeBody: string;
    disclaimerHeading: string;
    disclaimerBody: string;
  };
}

export const PAGE_STRINGS: Record<Locale, PageStrings> = {
  en: {
    home: {
      title: 'breno-bar — Websites worth being proud of.',
      description:
        'A small Berlin studio building websites for owner-led businesses. Website, SEO, Google Business Profile. Trilingual delivery.',
      heroEyebrow: 'STUDIO · BERLIN',
      heroTitleLines: ['Websites worth', 'being proud of.'],
      heroSubtitle:
        'Three services for owner-led businesses. Website. SEO. Google Business Profile.',
      statTitle: 'Numbers we like',
      statLine1: '10',
      statLine2: '6',
      statLine3: '4',
      statLabel1: 'projects shipped',
      statLabel2: 'verticals served',
      statLabel3: 'languages spoken',
      servicesEyebrow: 'Services',
      servicesHeading: 'Three things, done well.',
      servicesBody:
        'A focused practice. Website + SEO + Google Business Profile. Social media as an optional fourth. No upsells, no buzzwords, no agency-of-agencies dance.',
      portfolioEyebrow: 'Selected work',
      portfolioHeading: 'A few we like.',
      portfolioAllLink: 'See all projects →',
      aboutEyebrow: 'About',
      aboutHeading: 'A small studio. No upsell.',
      aboutBody: [
        'breno-bar is a single-operator studio in Berlin. We design and deploy multilingual marketing websites — small, fast, accessible, and built around the few things a local business actually needs to be found and called.',
        "We don't use no-code stacks; every project ships on its own codebase you own, on a host you control. We don't sell ad campaigns or social-media frequency you can't sustain. We don't chase growth metrics that don't turn into customers.",
      ],
      aboutReadMore: 'Read the studio philosophy →',
      ctaEyebrow: 'Start a conversation',
      ctaHeading: "Let's build yours.",
      ctaBody:
        'Reply within one business day. No sales call, no decks — just a one-paragraph answer.',
    },
    services: {
      title: 'Services — breno-bar',
      description:
        'Three core services for owner-led businesses: website creation, search-engine optimization, Google Business Profile setup. Plus optional social-media management.',
      heroEyebrow: 'Services',
      heroTitle: 'Three services. One studio. No upsell.',
      heroSubtitle:
        'Each service is sold as a standalone build with an optional monthly retainer. No long contracts; you can stop any month.',
      services: {
        website: {
          name: 'Website',
          shortTagline: 'The first room your next customer will walk into.',
          heroEyebrow: 'Service · 01',
          heroTitle: 'A site that earns you a phone call.',
          heroBody:
            "Most of your next customers will meet you on a phone — standing somewhere on Schönhauser Allee, waiting for the U-Bahn, between two meetings. What they see in those four seconds decides whether they walk in, or keep walking.",
          heroImageSrc: '/img/services/website/hero-terrace.jpg',
          heroImageAlt:
            'A restaurant seen through its front window at night — golden chandelier light, diners around tables, a server moving between them.',
          bullets: [
            {
              title: 'Speaks every language your block does.',
              body: 'Half of Berlin lives in two languages by Tuesday. Your site should make every one of them feel they were the audience we built it for.',
            },
            {
              title: "Doesn't look like the four cafés on the same street.",
              body: "Theme-built sites are recognisable to anyone who's seen two of them. Yours won't be one of those. Your colours, your photographs, your room.",
            },
            {
              title: 'The boring German parts, handled.',
              body: 'Cookie banner, Datenschutzerklärung, Impressum — written for your business, never pasted from a generator. You stop worrying about them. You go back to running the place.',
            },
          ],
          outcomeHeading: 'What you get',
          outcomeBullets: [
            'Five to twelve pages, fast on the worst U-Bahn signal.',
            'Your domain, your code, your control. Nothing rented from us.',
            'Live in three to six weeks — online before the next slow Tuesday.',
          ],
          bestFor:
            'The café that quietly raised its prices. The studio with a wait-list. The barber who stopped taking walk-ins. Businesses good enough to need a quieter, better front door.',
          secondaryImageSrc: '/img/services/website/barista-pour.jpg',
          secondaryImageAlt:
            'A barista in a leather apron, side profile, focused on pouring milk from a steel pitcher at the espresso machine.',
        },
        seo: {
          name: 'SEO',
          shortTagline: 'Local SEO. Honest. Measurable. No black-hat shortcuts.',
          heroEyebrow: 'Service · 02',
          heroTitle: 'Found by the people already looking.',
          heroBody:
            'Local SEO done the slow correct way: on-page structure, schema markup, Google Search Console + Bing Webmaster Tools, technical correctness. We do not buy backlinks. We do not promise page-one in two weeks. We do what works in 90 days.',
          bullets: [
            {
              title: "Schema markup that's correct",
              body: 'Most-specific @type per business. LocalBusiness + ProfessionalService + Organization. No aggregateRating self-serving stars. Properly typed inLanguage per locale.',
            },
            {
              title: 'Real keyword research',
              body: 'For your neighborhood, your service, your language. Real search volumes, not vanity terms. Reviewed quarterly.',
            },
            {
              title: 'Console + analytics',
              body: 'Search Console + Bing Webmaster + GA4 set up under your account. Monthly retainer report with the metrics that matter (impressions, position, conversions).',
            },
          ],
          outcomeHeading: 'What you get',
          outcomeBullets: [
            'Audit of your current state with prioritized fix list.',
            'Schema + on-page + technical SEO shipped within the build.',
            'Monthly report with concrete next-step recommendations.',
          ],
          bestFor:
            'Businesses where the customer is already searching — restaurants, salons, clinics, studios, trades.',
        },
        'google-business': {
          name: 'Google Business Profile',
          shortTagline: 'Setup + monthly optimization of the GBP listing. Photos, posts, reviews.',
          heroEyebrow: 'Service · 03',
          heroTitle: 'The listing that does the local-search heavy lifting.',
          heroBody:
            'Setting up + optimizing your Google Business Profile is often the single highest-ROI action for a local business. We set it up properly the first time, then maintain it monthly: photos, posts, review responses, hours, services, Q&A.',
          bullets: [
            {
              title: 'Setup done right',
              body: 'Verified ownership, category + sub-category fits, service-area calibration, attributes, hours including holidays, every photo geo-tagged.',
            },
            {
              title: 'Monthly optimization',
              body: 'Two posts per month, every review responded to within 48 h, photos refreshed, Q&A maintained. Quarterly review of insights + recommendations.',
            },
            {
              title: 'Review-generation playbook',
              body: 'A vanity URL on your domain that funnels to your review form. Friendly per-jurisdiction templates (DSGVO-compliant). Drought alerts if no reviews in 21 days.',
            },
          ],
          outcomeHeading: 'What you get',
          outcomeBullets: [
            'Verified, fully-populated GBP listing.',
            'Monthly content + review cadence with documented response rate.',
            'Dashboard view of insights — calls, direction requests, photo views.',
          ],
          bestFor: 'Any business with a physical location or a defined service area.',
        },
        'social-media': {
          name: 'Social media',
          shortTagline:
            'Light-touch Instagram + Facebook posting for businesses with no marketing staff.',
          heroEyebrow: 'Service · 04 (optional)',
          heroTitle: 'A small social cadence you can actually sustain.',
          heroBody:
            'Not a viral-growth promise. A sane, sustainable posting rhythm for owner-operated businesses where the founder has no time to be a content creator. Two posts a week, real photos, response monitoring, no buying followers.',
          bullets: [
            {
              title: 'Two posts per week',
              body: 'Drafted from your photos, your hours, your menu, your milestones. Reviewed by you before publish — never automated copy-paste.',
            },
            {
              title: 'Response monitoring',
              body: "DM + comment monitoring weekdays. Routed to you if it needs a personal reply, handled by us if it doesn't.",
            },
            {
              title: 'No buying followers',
              body: "Honest organic growth. Slow but real. You'll know which posts worked because the metrics are reported monthly.",
            },
          ],
          outcomeHeading: 'What you get',
          outcomeBullets: [
            'Two-posts-per-week cadence on Instagram + Facebook.',
            'DM/comment monitoring weekdays.',
            "Monthly report — what worked, what didn't, what we'll try next.",
          ],
          bestFor:
            "Businesses that need to be visible on social but don't want a part-time content hire.",
        },
      },
    },
    portfolio: {
      title: 'Portfolio — breno-bar',
      description:
        'Selected work — local-business demos and external projects. Each entry includes the live URL, stack, and a short case-study.',
      heroEyebrow: 'Portfolio',
      heroTitle: 'Selected work.',
      heroSubtitle:
        "Local-business demos (Berlin verticals) plus a few external projects we've helped ship. Every entry has a live URL.",
      visitLive: 'Visit live site',
      backToPortfolio: '← All projects',
      relatedCases: 'Other recent work',
      stackLabel: 'Stack',
      servicesLabel: 'Services',
      verticalLabel: 'Vertical',
      detailTitleSuffix: 'Portfolio — breno-bar',
      detailDescriptionPrefix: 'Case study:',
    },
    about: {
      title: 'About — breno-bar',
      description:
        'A small Berlin studio building websites for owner-led businesses. Workshop philosophy: three services, no upsell.',
      heroEyebrow: 'About',
      heroTitle: 'A small studio with a slow practice.',
      heroLead:
        'breno-bar is a single-operator studio in Berlin. We build trilingual marketing websites for owner-led businesses — and we sell three services, not thirty.',
      sections: [
        {
          title: 'Why small',
          body: 'Most agencies grow until they need account managers, project managers, and meetings about meetings. We chose not to. Every project is touched by the person who designs it — fewer handoffs, fewer wrong assumptions, fewer surprise invoices.',
        },
        {
          title: 'Why three services',
          body: "Website + SEO + Google Business Profile. That's 90 % of what an owner-led local business actually needs. We can do social media as a sustainable add-on. We will not build you an app, run your paid ads, or write your newsletter.",
        },
        {
          title: 'How we work',
          body: 'A demo first, then a conversation. You see a working version of your site before you commit to anything. Every commit is on your GitHub, every deploy is on your Vercel, every domain is in your name. Nothing locked behind us.',
        },
        {
          title: 'Languages',
          body: 'Berlin German + international English are the defaults. Brazilian Portuguese, Spanish, and Portuguese-Portugal available when the audience needs them. Translation is cultural, not literal.',
        },
      ],
      foundedNote: 'Founded 2026 by Breno Ribeiro in Berlin.',
    },
    contact: {
      title: 'Contact — breno-bar',
      description: 'Start a conversation. Reply within one business day.',
      heroEyebrow: 'Contact',
      heroTitle: "Let's talk.",
      heroSubtitle:
        'Write what you need. We answer in one or two paragraphs within a business day. No sales call, no slide decks.',
      formNameLabel: 'Your name',
      formNamePlaceholder: 'Jane Doe',
      formEmailLabel: 'Email',
      formEmailPlaceholder: 'you@example.com',
      formMessageLabel: 'What are you trying to do?',
      formMessagePlaceholder:
        'A few sentences about your business, what you want, and any constraints (timeline, budget range, languages).',
      formSubmit: 'Send message',
      formSending: 'Sending…',
      formSuccessTitle: 'Message received.',
      formSuccessBody:
        "Thanks — we'll reply within one business day. Check your spam folder if you don't hear from us.",
      formErrorTitle: 'Something went wrong.',
      formErrorBody:
        "We couldn't send your message. Please try again, or email us directly at the address below.",
      formServiceUnavailable:
        'The contact form is temporarily unavailable. Please email us directly — we still read every message.',
      alternativesHeading: 'Or write directly',
      alternativesBody: 'Some people prefer email or a DM. All these reach us.',
      privacyNote:
        'Your message is sent via Resend (EU servers). We never share your data and we delete inquiries 12 months after the last reply.',
    },
    privacy: {
      title: 'Privacy policy — breno-bar',
      description: 'GDPR/DSGVO privacy policy for breno-bar. Operated from the EU.',
      headingSuffix: 'Privacy policy',
      lastUpdated: 'Last updated: May 27, 2026',
      sections: [
        {
          title: '1. Data controller',
          body: 'Data controller under the GDPR (DSGVO in German):\n\n{{LEGAL_ENTITY}}\nBerlin, Germany\nEmail: {{CONTROLLER_EMAIL}}\nPhone: {{CONTROLLER_PHONE}}',
        },
        {
          title: '2. Server logs',
          body: 'When you visit the site, technical information is logged automatically (browser, operating system, timestamp). This is processed under Art. 6(1)(f) GDPR (legitimate interest in technical operation). Logs are retained 7–14 days then deleted.',
        },
        {
          title: '3. Contact form',
          body: 'When you submit the contact form, we process your name, email, and message via Resend (EU servers) for the purpose of replying to your inquiry. Legal basis: Art. 6(1)(b) GDPR (pre-contractual measures) or Art. 6(1)(f) (legitimate interest in answering inbound contact). Inquiries are deleted 12 months after the last reply.',
        },
        {
          title: '4. Cookies + tracking',
          body: 'We use technically necessary cookies only (the cookie-banner state). Analytics cookies and third-party scripts are loaded only after you give explicit consent via the cookie banner. You can withdraw consent at any time via the "Manage preferences" link in the footer.',
        },
        {
          title: '5. Third-party processors',
          body: '{{PROCESSORS_LIST}}\n\nAll processors are subject to Art. 28 GDPR data-processing agreements.',
        },
        {
          title: '6. Data retention',
          body: 'We retain personal data only as long as needed for the stated purpose or as required by law:\n• Server logs: 7–14 days\n• Cookie consent: 180 days (stored locally in your browser)\n• Contact-form inquiries: 12 months after the last reply\n• Commercial correspondence (if any): up to 10 years per German HGB/AO retention rules',
        },
        {
          title: '7. Data security',
          body: 'TLS encryption (HTTPS) for all data transmission. HSTS-preload, Content-Security-Policy, X-Frame-Options, X-Content-Type-Options. Despite these measures, we cannot guarantee absolute internet-transmission security.',
        },
        {
          title: '8. Your rights',
          body: 'You have the right to: information (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18), data portability (Art. 20), objection (Art. 21), and complaint to the supervisory authority (Art. 77). To exercise these rights, email {{CONTROLLER_EMAIL}}.',
        },
        {
          title: '9. Supervisory authority',
          body: 'The competent supervisory authority is the Berliner Beauftragte für Datenschutz und Informationsfreiheit (Berlin Commissioner for Data Protection and Freedom of Information), Friedrichstr. 219, 10969 Berlin.',
        },
      ],
    },
    imprint: {
      title: 'Legal notice — breno-bar',
      description: 'Information required under § 5 TMG (German Telemedia Act).',
      headingSuffix: 'Legal notice',
      intro: 'Information required under § 5 TMG (German Telemedia Act).',
      providerHeading: 'Provider',
      representedByHeading: 'Represented by',
      contactHeading: 'Contact',
      vatHeading: 'VAT identification number',
      vatNote: 'Sales-tax identification number under § 27a UStG:',
      disputeHeading: 'Online dispute resolution',
      disputeBody:
        'The European Commission provides an online dispute resolution platform: https://ec.europa.eu/consumers/odr. We are not obliged or willing to participate in dispute-resolution proceedings before a consumer arbitration board.',
      disclaimerHeading: 'Disclaimer',
      disclaimerBody:
        'The content of this site has been prepared with care. Despite this, no liability is assumed for the accuracy, completeness, or timeliness of information. This is a working portfolio site; the projects shown are real client work, but specific business claims belong to those clients.',
    },
  },
  de: {
    home: {
      title: 'breno-bar — Webseiten, auf die man stolz sein kann.',
      description:
        'Ein kleines Berliner Studio, das Webseiten für inhabergeführte Unternehmen baut. Website, SEO, Google Business Profile. Trilingual.',
      heroEyebrow: 'STUDIO · BERLIN',
      heroTitleLines: ['Webseiten, auf die', 'man stolz sein kann.'],
      heroSubtitle:
        'Drei Leistungen für inhabergeführte Unternehmen. Website. SEO. Google Business Profile.',
      statTitle: 'Zahlen, die wir mögen',
      statLine1: '10',
      statLine2: '6',
      statLine3: '4',
      statLabel1: 'Projekte umgesetzt',
      statLabel2: 'Branchen bedient',
      statLabel3: 'Sprachen gesprochen',
      servicesEyebrow: 'Leistungen',
      servicesHeading: 'Drei Dinge, gut gemacht.',
      servicesBody:
        'Eine fokussierte Praxis. Website + SEO + Google Business Profile. Social Media als optionale Vierte. Keine Zusatzverkäufe, keine Buzzwords, kein Agentur-im-Agentur-Tanz.',
      portfolioEyebrow: 'Ausgewählte Arbeiten',
      portfolioHeading: 'Ein paar, die uns gefallen.',
      portfolioAllLink: 'Alle Projekte ansehen →',
      aboutEyebrow: 'Studio',
      aboutHeading: 'Ein kleines Studio. Kein Upsell.',
      aboutBody: [
        'breno-bar ist ein Solo-Studio in Berlin. Wir gestalten und deployen mehrsprachige Marketing-Webseiten — klein, schnell, zugänglich, gebaut um die wenigen Dinge, die ein lokales Unternehmen wirklich braucht, um gefunden und angerufen zu werden.',
        'Wir nutzen keine No-Code-Stacks; jedes Projekt landet auf einer eigenen Codebasis, die dir gehört, auf einem Host, den du kontrollierst. Wir verkaufen keine Werbekampagnen oder Social-Media-Frequenzen, die du nicht halten kannst. Wir jagen keine Wachstumsmetriken, die nicht zu Kund:innen werden.',
      ],
      aboutReadMore: 'Studio-Philosophie lesen →',
      ctaEyebrow: 'Gespräch starten',
      ctaHeading: 'Lass uns deins bauen.',
      ctaBody:
        'Antwort innerhalb eines Werktags. Kein Verkaufsgespräch, keine Folien — nur eine Antwort in einem Absatz.',
    },
    services: {
      title: 'Leistungen — breno-bar',
      description:
        'Drei Kernleistungen für inhabergeführte Unternehmen: Website-Erstellung, Suchmaschinen-Optimierung, Google Business Profile. Plus optionale Social-Media-Pflege.',
      heroEyebrow: 'Leistungen',
      heroTitle: 'Drei Leistungen. Ein Studio. Kein Upsell.',
      heroSubtitle:
        'Jede Leistung wird als eigenständige Umsetzung verkauft, mit optionalem Monatsretainer. Keine Langzeitverträge; du kannst jeden Monat aufhören.',
      services: {
        website: {
          name: 'Website',
          shortTagline:
            'Eine mehrsprachige Marketing-Seite, deployed auf einer Infrastruktur, die du kontrollierst.',
          heroEyebrow: 'Leistung · 01',
          heroTitle: 'Eine Seite, die dir einen Anruf einbringt.',
          heroBody:
            'Eine mehrsprachige, zugängliche, schnelle Marketing-Website, gebaut auf Astro oder Next.js. Deployed auf Vercel unter deinem Konto, mit der Domain auf deinem Namen und der Codebasis auf deinem GitHub. Nichts hinter unserem Login eingesperrt.',
          bullets: [
            {
              title: 'Mehrsprachig ab Tag eins',
              body: 'EN + DE standardmäßig. PT-BR oder eine dritte Sprache, wenn deine Zielgruppe sie braucht. URL-Struktur + hreflang + Locale-spezifisches Schema beim Launch korrekt.',
            },
            {
              title: 'Handgebaut, keine Templates',
              body: 'Kein Drag-and-Drop, keine Theme-Store-Ableitungen. Deine Tokens, deine Typografie, deine Fotos. Gleiche Agentur-Standards in jedem Projekt; nichts sieht aus wie das letzte.',
            },
            {
              title: 'Echte Rechtskonformität',
              body: 'DSGVO/TMG, RGPD, LGPD — abgedeckt je nach Rechtsraum. Cookie-Banner, Datenschutzerklärung, Impressum: für dein Unternehmen geschrieben, nicht aus einem Generator kopiert.',
            },
          ],
          outcomeHeading: 'Was du bekommst',
          outcomeBullets: [
            '5–12 Seiten Marketing-Site, Mobile-First, WCAG 2.2 AA.',
            'Eigene Domain + Vercel-Deployment + 99,99 % Verfügbarkeit.',
            'Cookie- + Datenschutz- + Impressum-Seiten — ab Tag eins rechtskonform.',
          ],
          bestFor:
            'Inhabergeführte Unternehmen, die eine ernsthafte Web-Präsenz wollen, ohne SaaS-Abo-Müdigkeit.',
        },
        seo: {
          name: 'SEO',
          shortTagline: 'Lokales SEO. Ehrlich. Messbar. Keine Black-Hat-Abkürzungen.',
          heroEyebrow: 'Leistung · 02',
          heroTitle: 'Gefunden von Menschen, die schon suchen.',
          heroBody:
            'Lokales SEO auf die langsame korrekte Art: On-Page-Struktur, Schema-Markup, Google Search Console + Bing Webmaster Tools, technische Korrektheit. Wir kaufen keine Backlinks. Wir versprechen keine Seite-Eins in zwei Wochen. Wir machen, was in 90 Tagen funktioniert.',
          bullets: [
            {
              title: 'Schema-Markup, korrekt',
              body: 'Spezifischster @type pro Unternehmen. LocalBusiness + ProfessionalService + Organization. Keine aggregateRating-Selbstvergabe. inLanguage pro Sprache korrekt getypt.',
            },
            {
              title: 'Echte Keyword-Recherche',
              body: 'Für deinen Kiez, deine Leistung, deine Sprache. Echte Suchvolumina, keine Vanity-Terms. Quartalsweise überprüft.',
            },
            {
              title: 'Console + Analytics',
              body: 'Search Console + Bing Webmaster + GA4 unter deinem Konto eingerichtet. Monatlicher Retainer-Report mit den wichtigen Metriken (Impressions, Position, Conversions).',
            },
          ],
          outcomeHeading: 'Was du bekommst',
          outcomeBullets: [
            'Audit deines aktuellen Stands mit priorisierter Fix-Liste.',
            'Schema + On-Page + technisches SEO im Build enthalten.',
            'Monatlicher Report mit konkreten nächsten Schritten.',
          ],
          bestFor:
            'Unternehmen, bei denen Kund:innen bereits suchen — Restaurants, Salons, Praxen, Studios, Handwerk.',
        },
        'google-business': {
          name: 'Google Business Profile',
          shortTagline:
            'Einrichtung + monatliche Pflege des GBP-Eintrags. Fotos, Beiträge, Bewertungen.',
          heroEyebrow: 'Leistung · 03',
          heroTitle: 'Der Eintrag, der die lokale Suche macht.',
          heroBody:
            'Die Einrichtung + Optimierung deines Google Business Profile ist oft die einzelne Aktion mit dem höchsten ROI für ein lokales Unternehmen. Wir richten es beim ersten Mal richtig ein, dann pflegen wir es monatlich: Fotos, Beiträge, Bewertungsantworten, Öffnungszeiten, Services, Q&A.',
          bullets: [
            {
              title: 'Richtige Einrichtung',
              body: 'Verifiziertes Eigentum, Kategorie + Unterkategorie passend, Service-Area-Kalibrierung, Attribute, Öffnungszeiten inkl. Feiertage, jedes Foto geo-getaggt.',
            },
            {
              title: 'Monatliche Optimierung',
              body: 'Zwei Beiträge pro Monat, jede Bewertung innerhalb 48 h beantwortet, Fotos aufgefrischt, Q&A gepflegt. Quartalsmäßiger Insights-Review + Empfehlungen.',
            },
            {
              title: 'Review-Playbook',
              body: 'Eine Vanity-URL auf deiner Domain, die zum Bewertungsformular leitet. Freundliche per-Rechtsraum-Templates (DSGVO-konform). Drought-Alerts wenn 21 Tage ohne neue Bewertung.',
            },
          ],
          outcomeHeading: 'Was du bekommst',
          outcomeBullets: [
            'Verifizierter, vollständig befüllter GBP-Eintrag.',
            'Monatliche Content- + Bewertungskadenz mit dokumentierter Antwortrate.',
            'Dashboard-Sicht auf Insights — Anrufe, Wegbeschreibungen, Foto-Views.',
          ],
          bestFor: 'Jedes Unternehmen mit physischem Standort oder definiertem Servicegebiet.',
        },
        'social-media': {
          name: 'Social Media',
          shortTagline: 'Leichte Instagram-/Facebook-Pflege für Unternehmen ohne Marketing-Team.',
          heroEyebrow: 'Leistung · 04 (optional)',
          heroTitle: 'Ein kleiner Social-Rhythmus, den du wirklich halten kannst.',
          heroBody:
            'Kein viraler Wachstums-Versprechen. Ein vernünftiger, nachhaltiger Posting-Rhythmus für inhabergeführte Unternehmen, in denen der/die Eigentümer:in keine Zeit hat, Content-Creator zu sein. Zwei Beiträge pro Woche, echte Fotos, Antwort-Monitoring, keine gekauften Follower.',
          bullets: [
            {
              title: 'Zwei Beiträge pro Woche',
              body: 'Entworfen aus deinen Fotos, deinen Öffnungszeiten, deiner Karte, deinen Meilensteinen. Vor Veröffentlichung von dir geprüft — nie automatisiertes Copy-Paste.',
            },
            {
              title: 'Antwort-Monitoring',
              body: 'DM- + Kommentar-Monitoring werktags. An dich geleitet, wenn es persönliche Antwort braucht; von uns erledigt, wenn nicht.',
            },
            {
              title: 'Keine gekauften Follower',
              body: 'Ehrliches organisches Wachstum. Langsam, aber echt. Du wirst wissen, welche Beiträge gewirkt haben, weil die Metriken monatlich berichtet werden.',
            },
          ],
          outcomeHeading: 'Was du bekommst',
          outcomeBullets: [
            'Zwei-Beiträge-pro-Woche-Kadenz auf Instagram + Facebook.',
            'DM-/Kommentar-Monitoring werktags.',
            'Monatlicher Report — was funktioniert hat, was nicht, was wir als nächstes versuchen.',
          ],
          bestFor:
            'Unternehmen, die social sichtbar sein müssen, aber keinen Teilzeit-Content-Mitarbeiter wollen.',
        },
      },
    },
    portfolio: {
      title: 'Portfolio — breno-bar',
      description:
        'Ausgewählte Arbeiten — Demos lokaler Unternehmen und externe Projekte. Jeder Eintrag mit Live-URL, Stack und kurzem Case-Study.',
      heroEyebrow: 'Portfolio',
      heroTitle: 'Ausgewählte Arbeiten.',
      heroSubtitle:
        'Lokale Unternehmens-Demos (Berliner Branchen) plus einige externe Projekte, die wir mit umgesetzt haben. Jeder Eintrag hat eine Live-URL.',
      visitLive: 'Live-Seite besuchen',
      backToPortfolio: '← Alle Projekte',
      relatedCases: 'Weitere aktuelle Arbeiten',
      stackLabel: 'Stack',
      servicesLabel: 'Leistungen',
      verticalLabel: 'Branche',
      detailTitleSuffix: 'Portfolio — breno-bar',
      detailDescriptionPrefix: 'Fallstudie:',
    },
    about: {
      title: 'Studio — breno-bar',
      description:
        'Ein kleines Berliner Studio, das Webseiten für inhabergeführte Unternehmen baut. Werkstatt-Philosophie: drei Leistungen, kein Upsell.',
      heroEyebrow: 'Studio',
      heroTitle: 'Ein kleines Studio mit einer langsamen Praxis.',
      heroLead:
        'breno-bar ist ein Solo-Studio in Berlin. Wir bauen mehrsprachige Marketing-Webseiten für inhabergeführte Unternehmen — und wir verkaufen drei Leistungen, nicht dreißig.',
      sections: [
        {
          title: 'Warum klein',
          body: 'Die meisten Agenturen wachsen, bis sie Account Manager, Projekt Manager und Meetings über Meetings brauchen. Wir haben uns dagegen entschieden. Jedes Projekt wird von der Person berührt, die es gestaltet — weniger Übergaben, weniger falsche Annahmen, weniger überraschende Rechnungen.',
        },
        {
          title: 'Warum drei Leistungen',
          body: 'Website + SEO + Google Business Profile. Das sind 90 % von dem, was ein inhabergeführtes lokales Unternehmen wirklich braucht. Wir können Social Media als nachhaltige Ergänzung machen. Wir werden dir keine App bauen, keine Paid Ads schalten und keinen Newsletter schreiben.',
        },
        {
          title: 'Wie wir arbeiten',
          body: 'Erst eine Demo, dann ein Gespräch. Du siehst eine funktionierende Version deiner Seite, bevor du dich zu etwas verpflichtest. Jeder Commit liegt auf deinem GitHub, jedes Deploy auf deinem Vercel, jede Domain auf deinem Namen. Nichts bei uns eingesperrt.',
        },
        {
          title: 'Sprachen',
          body: 'Berliner Deutsch + internationales Englisch sind Standard. Brasilianisches Portugiesisch, Spanisch und Portugiesisch-Portugal verfügbar, wenn die Zielgruppe sie braucht. Übersetzung ist kulturell, nicht wörtlich.',
        },
      ],
      foundedNote: 'Gegründet 2026 von Breno Ribeiro in Berlin.',
    },
    contact: {
      title: 'Kontakt — breno-bar',
      description: 'Starte ein Gespräch. Antwort innerhalb eines Werktags.',
      heroEyebrow: 'Kontakt',
      heroTitle: 'Reden wir.',
      heroSubtitle:
        'Schreib, was du brauchst. Wir antworten in ein bis zwei Absätzen innerhalb eines Werktags. Kein Verkaufsgespräch, keine Folien.',
      formNameLabel: 'Dein Name',
      formNamePlaceholder: 'Maria Müller',
      formEmailLabel: 'E-Mail',
      formEmailPlaceholder: 'du@beispiel.de',
      formMessageLabel: 'Was willst du erreichen?',
      formMessagePlaceholder:
        'Ein paar Sätze über dein Unternehmen, was du willst und etwaige Rahmenbedingungen (Zeitrahmen, Budget-Spanne, Sprachen).',
      formSubmit: 'Nachricht senden',
      formSending: 'Wird gesendet…',
      formSuccessTitle: 'Nachricht erhalten.',
      formSuccessBody:
        'Danke — wir melden uns innerhalb eines Werktags. Schau in deinen Spam-Ordner, falls du nichts von uns hörst.',
      formErrorTitle: 'Etwas ist schiefgelaufen.',
      formErrorBody:
        'Wir konnten deine Nachricht nicht senden. Versuch es noch mal oder schreib uns direkt an die unten genannte Adresse.',
      formServiceUnavailable:
        'Das Kontaktformular ist gerade nicht verfügbar. Bitte schreib uns direkt — wir lesen weiterhin jede Nachricht.',
      alternativesHeading: 'Oder schreib direkt',
      alternativesBody: 'Manche bevorzugen E-Mail oder DM. Alles erreicht uns.',
      privacyNote:
        'Deine Nachricht wird per Resend (EU-Server) versendet. Wir geben deine Daten nicht weiter und löschen Anfragen 12 Monate nach der letzten Antwort.',
    },
    privacy: {
      title: 'Datenschutzerklärung — breno-bar',
      description: 'DSGVO-konforme Datenschutzerklärung für breno-bar. Betrieben aus der EU.',
      headingSuffix: 'Datenschutzerklärung',
      lastUpdated: 'Stand: 27. Mai 2026',
      sections: [
        {
          title: '1. Verantwortlicher',
          body: 'Verantwortlich im Sinne der DSGVO ist:\n\n{{LEGAL_ENTITY}}\nBerlin, Deutschland\nE-Mail: {{CONTROLLER_EMAIL}}\nTelefon: {{CONTROLLER_PHONE}}',
        },
        {
          title: '2. Server-Logfiles',
          body: 'Beim Besuch der Seite werden technische Informationen automatisch protokolliert (Browser, Betriebssystem, Zeitpunkt). Verarbeitung erfolgt auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am technischen Betrieb). Logs werden 7–14 Tage gespeichert und dann gelöscht.',
        },
        {
          title: '3. Kontaktformular',
          body: 'Bei Absenden des Kontaktformulars verarbeiten wir Name, E-Mail und Nachricht via Resend (EU-Server) zur Beantwortung deiner Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f (berechtigtes Interesse an Antwort auf eingehende Kontaktaufnahme). Anfragen werden 12 Monate nach letzter Antwort gelöscht.',
        },
        {
          title: '4. Cookies + Tracking',
          body: 'Wir setzen ausschließlich technisch notwendige Cookies ein (den Cookie-Banner-Zustand). Analyse-Cookies und Drittanbieter-Skripte werden ausschließlich nach deiner ausdrücklichen Einwilligung über den Cookie-Banner geladen. Du kannst deine Einwilligung jederzeit über den Link "Einstellungen verwalten" im Footer widerrufen.',
        },
        {
          title: '5. Eingebundene Drittdienste',
          body: '{{PROCESSORS_LIST}}\n\nMit allen Auftragsverarbeitern bestehen Auftragsverarbeitungsverträge nach Art. 28 DSGVO.',
        },
        {
          title: '6. Speicherdauer',
          body: 'Personenbezogene Daten speichern wir nur so lange, wie es für den jeweiligen Zweck erforderlich ist oder gesetzlich vorgeschrieben:\n• Server-Logfiles: 7–14 Tage\n• Cookie-Einstellungen: 180 Tage (lokal im Browser)\n• Kontaktformular-Anfragen: 12 Monate nach letzter Antwort\n• Geschäftliche Korrespondenz (falls vorhanden): bis zu 10 Jahre gemäß HGB/AO',
        },
        {
          title: '7. Datensicherheit',
          body: 'TLS-Verschlüsselung (HTTPS) für die gesamte Datenübertragung. HSTS-Preload, Content-Security-Policy, X-Frame-Options, X-Content-Type-Options. Trotz dieser Maßnahmen kann eine vollständig sichere Datenübertragung im Internet nicht garantiert werden.',
        },
        {
          title: '8. Deine Rechte',
          body: 'Du hast das Recht auf: Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21) und Beschwerde bei der Aufsichtsbehörde (Art. 77). Zur Ausübung: E-Mail an {{CONTROLLER_EMAIL}}.',
        },
        {
          title: '9. Aufsichtsbehörde',
          body: 'Zuständig ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit, Friedrichstr. 219, 10969 Berlin.',
        },
      ],
    },
    imprint: {
      title: 'Impressum — breno-bar',
      description: 'Angaben gemäß § 5 TMG.',
      headingSuffix: 'Impressum',
      intro: 'Angaben gemäß § 5 TMG.',
      providerHeading: 'Anbieter',
      representedByHeading: 'Vertreten durch',
      contactHeading: 'Kontakt',
      vatHeading: 'Umsatzsteuer-Identifikationsnummer',
      vatNote: 'Umsatzsteuer-Identifikationsnummer nach § 27a UStG:',
      disputeHeading: 'Online-Streitbeilegung',
      disputeBody:
        'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      disclaimerHeading: 'Haftungsausschluss',
      disclaimerBody:
        'Die Inhalte dieser Seite wurden sorgfältig erstellt. Trotz sorgfältiger Bearbeitung wird für die Richtigkeit, Vollständigkeit und Aktualität keine Haftung übernommen. Dies ist eine Portfolio-Seite; die gezeigten Projekte sind echte Kundenarbeiten, aber spezifische Geschäftsangaben gehören den jeweiligen Kund:innen.',
    },
  },
  'pt-br': {
    home: {
      title: 'breno-bar — Sites dos quais a gente se orgulha.',
      description:
        'Um pequeno estúdio berlinense que constrói sites para negócios liderados pelo dono. Site, SEO, Google Business Profile. Trilíngue.',
      heroEyebrow: 'ESTÚDIO · BERLIM',
      heroTitleLines: ['Sites dos quais', 'a gente se orgulha.'],
      heroSubtitle:
        'Três serviços para negócios liderados pelo dono. Site. SEO. Google Business Profile.',
      statTitle: 'Números que a gente gosta',
      statLine1: '10',
      statLine2: '6',
      statLine3: '4',
      statLabel1: 'projetos entregues',
      statLabel2: 'segmentos atendidos',
      statLabel3: 'idiomas falados',
      servicesEyebrow: 'Serviços',
      servicesHeading: 'Três coisas, bem feitas.',
      servicesBody:
        'Uma prática focada. Site + SEO + Google Business Profile. Mídia social como quarto opcional. Sem upsells, sem buzzwords, sem dança de agência-de-agência.',
      portfolioEyebrow: 'Trabalhos selecionados',
      portfolioHeading: 'Alguns que a gente gosta.',
      portfolioAllLink: 'Ver todos os projetos →',
      aboutEyebrow: 'Estúdio',
      aboutHeading: 'Um pequeno estúdio. Sem upsell.',
      aboutBody: [
        'breno-bar é um estúdio de um só operador em Berlim. A gente projeta e implanta sites de marketing multilíngues — pequenos, rápidos, acessíveis e construídos em torno das poucas coisas que um negócio local realmente precisa para ser encontrado e procurado.',
        'A gente não usa stacks no-code; cada projeto vai pra uma codebase própria que é sua, num host que você controla. A gente não vende campanhas de anúncios ou frequências de redes sociais que você não consegue sustentar. A gente não persegue métricas de crescimento que não viram clientes.',
      ],
      aboutReadMore: 'Ler a filosofia do estúdio →',
      ctaEyebrow: 'Comece uma conversa',
      ctaHeading: 'Vamos construir o seu.',
      ctaBody:
        'Resposta dentro de um dia útil. Sem call comercial, sem deck — só uma resposta de um parágrafo.',
    },
    services: {
      title: 'Serviços — breno-bar',
      description:
        'Três serviços principais para negócios liderados pelo dono: criação de site, SEO, Google Business Profile. Mais gestão opcional de redes sociais.',
      heroEyebrow: 'Serviços',
      heroTitle: 'Três serviços. Um estúdio. Sem upsell.',
      heroSubtitle:
        'Cada serviço é vendido como entrega autônoma com retainer mensal opcional. Sem contratos longos; você pode parar em qualquer mês.',
      services: {
        website: {
          name: 'Site',
          shortTagline:
            'Um site de marketing multilíngue, implantado em infraestrutura que você controla.',
          heroEyebrow: 'Serviço · 01',
          heroTitle: 'Um site que rende ligação.',
          heroBody:
            'Um site de marketing multilíngue, acessível, rápido, construído em Astro ou Next.js. Implantado no Vercel sob sua conta, com o domínio no seu nome e a codebase no seu GitHub. Nada trancado atrás do nosso login.',
          bullets: [
            {
              title: 'Multilíngue desde o dia um',
              body: 'EN + DE por padrão. PT-BR ou um terceiro idioma adicionado se seu público precisar. Estrutura de URL + hreflang + schema por idioma corretos no lançamento.',
            },
            {
              title: 'Feito à mão, sem templates',
              body: 'Sem arrasta-e-solta, sem derivados de loja de temas. Seus tokens, sua tipografia, suas fotos. As mesmas regras de agência em cada projeto; nada parecido com o anterior.',
            },
            {
              title: 'Compliance legal de verdade',
              body: 'DSGVO/TMG, RGPD, LGPD — cobertos por jurisdição. Banner de cookies, Política de Privacidade, Informações Legais: escritos para o seu negócio, não copiados de um gerador.',
            },
          ],
          outcomeHeading: 'O que você recebe',
          outcomeBullets: [
            '5–12 páginas de site de marketing, mobile-first, WCAG 2.2 AA.',
            'Domínio próprio + deploy no Vercel + 99,99 % de uptime.',
            'Páginas de cookies + privacidade + informações legais — corretas desde o dia um.',
          ],
          bestFor:
            'Negócios liderados pelo dono que querem presença web séria sem o cansaço de assinaturas SaaS.',
        },
        seo: {
          name: 'SEO',
          shortTagline: 'SEO local. Honesto. Mensurável. Sem atalhos black-hat.',
          heroEyebrow: 'Serviço · 02',
          heroTitle: 'Encontrado por quem já está procurando.',
          heroBody:
            'SEO local feito do jeito lento e correto: estrutura on-page, marcação Schema, Google Search Console + Bing Webmaster Tools, correção técnica. A gente não compra backlinks. Não promete primeira página em duas semanas. Faz o que funciona em 90 dias.',
          bullets: [
            {
              title: 'Marcação Schema correta',
              body: '@type mais específico por negócio. LocalBusiness + ProfessionalService + Organization. Sem auto-elogio com aggregateRating. inLanguage por idioma tipado corretamente.',
            },
            {
              title: 'Pesquisa real de palavras-chave',
              body: 'Para seu bairro, seu serviço, seu idioma. Volumes reais de busca, não termos vaidosos. Revisão trimestral.',
            },
            {
              title: 'Console + analytics',
              body: 'Search Console + Bing Webmaster + GA4 configurados sob sua conta. Relatório mensal de retainer com as métricas que importam (impressões, posição, conversões).',
            },
          ],
          outcomeHeading: 'O que você recebe',
          outcomeBullets: [
            'Auditoria do estado atual com lista priorizada de correções.',
            'Schema + on-page + SEO técnico entregues junto com o build.',
            'Relatório mensal com recomendações concretas de próximo passo.',
          ],
          bestFor:
            'Negócios onde o cliente já está pesquisando — restaurantes, salões, clínicas, estúdios, ofícios.',
        },
        'google-business': {
          name: 'Google Business Profile',
          shortTagline: 'Setup + otimização mensal do perfil GBP. Fotos, posts, avaliações.',
          heroEyebrow: 'Serviço · 03',
          heroTitle: 'O perfil que faz o trabalho pesado da busca local.',
          heroBody:
            'Configurar + otimizar seu Google Business Profile é frequentemente a ação de maior ROI para um negócio local. A gente faz certo da primeira vez e mantém mensalmente: fotos, posts, respostas a avaliações, horários, serviços, Q&A.',
          bullets: [
            {
              title: 'Setup feito direito',
              body: 'Propriedade verificada, categoria + subcategoria adequadas, calibração de área de atendimento, atributos, horários incluindo feriados, cada foto geo-tagueada.',
            },
            {
              title: 'Otimização mensal',
              body: 'Dois posts por mês, toda avaliação respondida em até 48 h, fotos atualizadas, Q&A mantido. Revisão trimestral de insights + recomendações.',
            },
            {
              title: 'Playbook de avaliações',
              body: 'Uma URL personalizada no seu domínio que direciona para o formulário de avaliação. Templates amigáveis por jurisdição (DSGVO-compliant). Alertas de seca se 21 dias sem avaliação.',
            },
          ],
          outcomeHeading: 'O que você recebe',
          outcomeBullets: [
            'Perfil GBP verificado e totalmente preenchido.',
            'Cadência mensal de conteúdo + avaliações com taxa de resposta documentada.',
            'Visão de dashboard dos insights — ligações, pedidos de rota, views de fotos.',
          ],
          bestFor: 'Qualquer negócio com endereço físico ou área de atendimento definida.',
        },
        'social-media': {
          name: 'Redes sociais',
          shortTagline:
            'Posting leve no Instagram + Facebook para negócios sem equipe de marketing.',
          heroEyebrow: 'Serviço · 04 (opcional)',
          heroTitle: 'Um pequeno ritmo social que você consegue mesmo manter.',
          heroBody:
            'Sem promessa de crescimento viral. Um ritmo de postagem sensato e sustentável para negócios geridos pelo dono em que a pessoa fundadora não tem tempo de ser criadora de conteúdo. Dois posts por semana, fotos reais, monitoramento de respostas, sem comprar seguidores.',
          bullets: [
            {
              title: 'Dois posts por semana',
              body: 'Rascunhados a partir das suas fotos, seus horários, seu cardápio, suas conquistas. Revisados por você antes de publicar — nunca cópia-e-cola automatizada.',
            },
            {
              title: 'Monitoramento de respostas',
              body: 'Monitoramento de DMs + comentários em dias úteis. Encaminhado a você se precisar de resposta pessoal, resolvido por nós se não.',
            },
            {
              title: 'Sem comprar seguidores',
              body: 'Crescimento orgânico honesto. Lento, mas real. Você vai saber quais posts funcionaram porque as métricas são reportadas mensalmente.',
            },
          ],
          outcomeHeading: 'O que você recebe',
          outcomeBullets: [
            'Cadência de dois posts por semana no Instagram + Facebook.',
            'Monitoramento de DMs/comentários em dias úteis.',
            'Relatório mensal — o que funcionou, o que não, o que vamos tentar a seguir.',
          ],
          bestFor:
            'Negócios que precisam de visibilidade social mas não querem contratar meio expediente de conteúdo.',
        },
      },
    },
    portfolio: {
      title: 'Portfólio — breno-bar',
      description:
        'Trabalhos selecionados — demos de negócios locais e projetos externos. Cada item inclui URL ao vivo, stack e um curto estudo de caso.',
      heroEyebrow: 'Portfólio',
      heroTitle: 'Trabalhos selecionados.',
      heroSubtitle:
        'Demos de negócios locais (segmentos berlinenses) mais alguns projetos externos que ajudamos a entregar. Todo item tem URL ao vivo.',
      visitLive: 'Visitar site ao vivo',
      backToPortfolio: '← Todos os projetos',
      relatedCases: 'Outros trabalhos recentes',
      stackLabel: 'Stack',
      servicesLabel: 'Serviços',
      verticalLabel: 'Segmento',
      detailTitleSuffix: 'Portfólio — breno-bar',
      detailDescriptionPrefix: 'Estudo de caso:',
    },
    about: {
      title: 'Estúdio — breno-bar',
      description:
        'Um pequeno estúdio berlinense que constrói sites para negócios liderados pelo dono. Filosofia de ateliê: três serviços, sem upsell.',
      heroEyebrow: 'Estúdio',
      heroTitle: 'Um pequeno estúdio com uma prática lenta.',
      heroLead:
        'breno-bar é um estúdio de um só operador em Berlim. Construímos sites de marketing multilíngues para negócios liderados pelo dono — e vendemos três serviços, não trinta.',
      sections: [
        {
          title: 'Por que pequeno',
          body: 'A maioria das agências cresce até precisar de account managers, project managers e reuniões sobre reuniões. A gente escolheu não. Cada projeto é tocado pela pessoa que o projeta — menos handoffs, menos suposições erradas, menos faturas surpresa.',
        },
        {
          title: 'Por que três serviços',
          body: 'Site + SEO + Google Business Profile. Isso são 90 % do que um negócio local liderado pelo dono realmente precisa. A gente faz redes sociais como adição sustentável. Não vai construir seu app, gerir seus anúncios pagos, nem escrever sua newsletter.',
        },
        {
          title: 'Como trabalhamos',
          body: 'Primeiro uma demo, depois uma conversa. Você vê uma versão funcionando do seu site antes de se comprometer com qualquer coisa. Todo commit fica no seu GitHub, todo deploy no seu Vercel, todo domínio no seu nome. Nada trancado conosco.',
        },
        {
          title: 'Idiomas',
          body: 'Alemão de Berlim + inglês internacional são padrões. Português brasileiro, espanhol e português-Portugal disponíveis quando o público precisar. Tradução é cultural, não literal.',
        },
      ],
      foundedNote: 'Fundado em 2026 por Breno Ribeiro em Berlim.',
    },
    contact: {
      title: 'Contato — breno-bar',
      description: 'Comece uma conversa. Resposta dentro de um dia útil.',
      heroEyebrow: 'Contato',
      heroTitle: 'Vamos conversar.',
      heroSubtitle:
        'Escreva o que você precisa. A gente responde em um ou dois parágrafos dentro de um dia útil. Sem call comercial, sem slide decks.',
      formNameLabel: 'Seu nome',
      formNamePlaceholder: 'João da Silva',
      formEmailLabel: 'E-mail',
      formEmailPlaceholder: 'voce@exemplo.com',
      formMessageLabel: 'O que você quer fazer?',
      formMessagePlaceholder:
        'Algumas frases sobre seu negócio, o que você quer, e quaisquer restrições (prazo, faixa de orçamento, idiomas).',
      formSubmit: 'Enviar mensagem',
      formSending: 'Enviando…',
      formSuccessTitle: 'Mensagem recebida.',
      formSuccessBody:
        'Obrigado — vamos responder dentro de um dia útil. Cheque o spam se não nos ouvir.',
      formErrorTitle: 'Algo deu errado.',
      formErrorBody:
        'Não conseguimos enviar sua mensagem. Tente de novo ou nos escreva diretamente no e-mail abaixo.',
      formServiceUnavailable:
        'O formulário de contato está temporariamente indisponível. Por favor, nos escreva diretamente — a gente continua lendo toda mensagem.',
      alternativesHeading: 'Ou escreva direto',
      alternativesBody: 'Algumas pessoas preferem e-mail ou DM. Tudo nos alcança.',
      privacyNote:
        'Sua mensagem é enviada via Resend (servidores na UE). Nunca compartilhamos seus dados e deletamos solicitações 12 meses após a última resposta.',
    },
    privacy: {
      title: 'Política de privacidade — breno-bar',
      description:
        'Política de privacidade conforme o GDPR/DSGVO da breno-bar. Operado a partir da UE.',
      headingSuffix: 'Política de privacidade',
      lastUpdated: 'Atualizada em: 27 de maio de 2026',
      sections: [
        {
          title: '1. Controlador dos dados',
          body: 'Controlador dos dados nos termos do GDPR (DSGVO em alemão):\n\n{{LEGAL_ENTITY}}\nBerlim, Alemanha\nE-mail: {{CONTROLLER_EMAIL}}\nTelefone: {{CONTROLLER_PHONE}}',
        },
        {
          title: '2. Logs do servidor',
          body: 'Ao visitar o site, informações técnicas são registradas automaticamente (navegador, sistema operacional, timestamp). O processamento ocorre sob o Art. 6(1)(f) do GDPR (interesse legítimo na operação técnica). Logs são retidos por 7–14 dias e então excluídos.',
        },
        {
          title: '3. Formulário de contato',
          body: 'Ao enviar o formulário de contato, processamos seu nome, e-mail e mensagem via Resend (servidores na UE) com o propósito de responder à sua solicitação. Base legal: Art. 6(1)(b) GDPR (medidas pré-contratuais) ou Art. 6(1)(f) (interesse legítimo em responder a contato recebido). Solicitações são excluídas 12 meses após a última resposta.',
        },
        {
          title: '4. Cookies + tracking',
          body: 'Usamos apenas cookies tecnicamente necessários (o estado do banner de cookies). Cookies analíticos e scripts de terceiros só são carregados após seu consentimento explícito no banner. Você pode retirar o consentimento a qualquer momento via link "Gerenciar preferências" no rodapé.',
        },
        {
          title: '5. Processadores terceiros',
          body: '{{PROCESSORS_LIST}}\n\nTodos os processadores estão sujeitos a contratos de processamento de dados do Art. 28 GDPR.',
        },
        {
          title: '6. Retenção de dados',
          body: 'Retemos dados pessoais apenas pelo tempo necessário ao propósito declarado ou conforme exigido por lei:\n• Logs do servidor: 7–14 dias\n• Consentimento de cookies: 180 dias (armazenado localmente no navegador)\n• Solicitações de formulário: 12 meses após última resposta\n• Correspondência comercial (se houver): até 10 anos por regras alemãs HGB/AO',
        },
        {
          title: '7. Segurança dos dados',
          body: 'Criptografia TLS (HTTPS) para toda transmissão. HSTS-preload, Content-Security-Policy, X-Frame-Options, X-Content-Type-Options. Apesar dessas medidas, não podemos garantir segurança absoluta de transmissão pela internet.',
        },
        {
          title: '8. Seus direitos',
          body: 'Você tem direito a: informação (Art. 15 GDPR), retificação (Art. 16), apagamento (Art. 17), restrição (Art. 18), portabilidade (Art. 20), oposição (Art. 21) e reclamação à autoridade supervisora (Art. 77). Para exercer: e-mail para {{CONTROLLER_EMAIL}}.',
        },
        {
          title: '9. Autoridade supervisora',
          body: 'A autoridade competente é a Berliner Beauftragte für Datenschutz und Informationsfreiheit (Comissária de Berlim para Proteção de Dados e Liberdade de Informação), Friedrichstr. 219, 10969 Berlim.',
        },
      ],
    },
    imprint: {
      title: 'Informações legais — breno-bar',
      description: 'Informações obrigatórias conforme § 5 TMG (lei alemã).',
      headingSuffix: 'Informações legais',
      intro: 'Informações obrigatórias conforme § 5 TMG (Telemediengesetz alemão).',
      providerHeading: 'Provedor',
      representedByHeading: 'Representado por',
      contactHeading: 'Contato',
      vatHeading: 'Número de identificação fiscal',
      vatNote: 'Número de identificação do imposto sobre vendas conforme § 27a UStG:',
      disputeHeading: 'Resolução online de disputas',
      disputeBody:
        'A Comissão Europeia disponibiliza uma plataforma de resolução online de disputas: https://ec.europa.eu/consumers/odr. Não somos obrigados nem dispostos a participar de procedimentos de resolução de disputa diante de uma câmara de arbitragem do consumidor.',
      disclaimerHeading: 'Aviso de responsabilidade',
      disclaimerBody:
        'O conteúdo desta página foi preparado com cuidado. Apesar do trabalho cuidadoso, não assumimos responsabilidade pela exatidão, completude ou atualidade. Esta é uma página de portfólio; os projetos mostrados são trabalhos reais de clientes, mas afirmações específicas pertencem a esses clientes.',
    },
  },
};
