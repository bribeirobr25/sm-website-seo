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
    /** Optional hero photograph rendered full-bleed below the hero copy. */
    heroImageSrc?: string;
    heroImageAlt?: string;
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
    /** Optional photograph rendered alongside the About teaser. */
    aboutImageSrc?: string;
    aboutImageAlt?: string;
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
    /** Optional photograph rendered below the hero copy. */
    heroImageSrc?: string;
    heroImageAlt?: string;
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
        'For the small Berlin businesses that hold a Kiez together. We build the websites worthy of them.',
      heroImageSrc: '/img/home/hero-altbau-kiez.jpg',
      heroImageAlt:
        'A classic Berlin Altbau street: ornate facade in white and orange, ground-floor café with red awning, people at outdoor tables, trees casting shadows on the cobblestones.',
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
        "Three things, done well, by the same hands. A website worth being found on. A search result worth clicking. A Google profile worth opening. Social media if you really want it — we'll tell you when you don't.",
      portfolioEyebrow: 'Selected work',
      portfolioHeading: 'A few we like.',
      portfolioAllLink: 'See all projects →',
      aboutEyebrow: 'About',
      aboutHeading: 'A small studio. No upsell.',
      aboutBody: [
        "breno-bar is one set of hands, in Berlin. A studio quiet enough to notice what your business actually does — and small enough that you'll always know who built your site.",
        "We don't sell ad campaigns you can't sustain, dashboards you can't read, or growth that doesn't turn into customers. We build the room people walk into. That's the whole pitch.",
      ],
      aboutReadMore: 'Read the studio philosophy →',
      aboutImageSrc: '/img/home/studio-notebook.jpg',
      aboutImageAlt:
        'Overhead view of a small wooden table with a leather notebook, pen, and coffee mug, lit by slatted window light.',
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
        'Three small services, sold the way a Berlin shopkeeper sells anything — one at a time, with no obligation to buy the next.',
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
          shortTagline: 'The page someone sees just before they call you.',
          heroEyebrow: 'Service · 02',
          heroTitle: 'Found by the people already looking.',
          heroBody:
            "Half of your next month's customers are already searching for you tonight. SEO is making sure the page they find first isn't the closest competitor on Schönhauser Allee. We do the patient, boring work for ninety days. They start finding you.",
          bullets: [
            {
              title: 'The metadata Google quietly trusts.',
              body: 'Schema in the right places, in the right language, for the right business type. Boring to talk about. Decisive when someone in your Kiez types your service into a phone.',
            },
            {
              title: 'Researched at the Kiez level, not the agency level.',
              body: 'We learn the words your next customer actually types — in their language, in their neighborhood. No vanity keywords pulled from a SaaS list. Reviewed every ninety days as the seasons change.',
            },
            {
              title: 'Numbers you can read on a Sunday morning.',
              body: 'Google Search Console and the basics, set up under your account, not ours. One monthly note — what we did, what worked, what we will try next. No twelve-tab dashboards you will never open.',
            },
          ],
          outcomeHeading: 'What you get',
          outcomeBullets: [
            'An honest audit before any promises — usually finds three quick wins.',
            'On-page work done at build time. No retroactive Frankenstein retrofit.',
            'A monthly note you can read in three minutes — what moved, what to try next.',
          ],
          bestFor:
            'The Bäckerei, the salon, the dentist, the plumber. Any business where the customer is already searching — they just need to find you instead of someone else.',
          heroImageSrc: '/img/services/seo/hero-walking-phone.jpg',
          heroImageAlt:
            'A man sitting on a city sidewalk, hands cradling a phone, a passerby blurred in the background.',
          secondaryImageSrc: '/img/services/seo/bakery-display.jpg',
          secondaryImageAlt:
            'An overhead view of a bakery display case — croissants, danishes with red fruit, glass-jar cookies, marble counter, small label cards.',
        },
        'google-business': {
          name: 'Google Business Profile',
          shortTagline: 'The first half-second of every local search.',
          heroEyebrow: 'Service · 03',
          heroTitle: 'The listing that does the local-search heavy lifting.',
          heroBody:
            "When someone three blocks away types 'Bäckerei in der Nähe' into their phone, the answer is a list of three businesses. Your job is to be one of them. Ours is to make that happen — and then keep it that way.",
          bullets: [
            {
              title: 'Set up the way Google actually wants it.',
              body: 'Verified ownership, the most-specific category, the right service area, the right hours, every photo geo-tagged at the door. Tedious. Decisive. Done once, then maintained.',
            },
            {
              title: 'Quiet upkeep, every month.',
              body: 'Two posts a month. Every review answered within forty-eight hours. Photos refreshed when the menu turns. Q&A kept current. The way it should look when someone discovers you on a Tuesday.',
            },
            {
              title: 'A polite way to ask for reviews.',
              body: 'A short, your-domain URL that takes a happy customer straight to the review form. DSGVO-safe message templates in DE, EN, and PT-BR. A quiet alert if no review has come in for three weeks — usually means something worth asking about.',
            },
          ],
          outcomeHeading: 'What you get',
          outcomeBullets: [
            'A listing that looks like the business actually wants the call.',
            'Posts, reviews answered, photos current — every month, on the calendar.',
            'One number you will actually look at: how many phones called the listing this month.',
          ],
          bestFor:
            "Anyone customers find with the word 'nearby' in the search. The studio, the clinic, the workshop, the kitchen — anywhere with a door or a service area.",
          heroImageSrc: '/img/services/google-business/hero-aseli-storefront.jpg',
          heroImageAlt:
            'A small Berlin shopfront — green double doors, red enamel signage reading "Aseli — Berliner Original — seit 1921", ivy climbing the facade.',
          secondaryImageSrc: '/img/services/google-business/mid-phone-map.jpg',
          secondaryImageAlt:
            'A hand holding a smartphone displaying a navigation map at night, surrounded by colourful city-light bokeh.',
        },
        'social-media': {
          name: 'Social media',
          shortTagline: "Two posts a week, in your voice, that don't take your Tuesday.",
          heroEyebrow: 'Service · 04 (optional)',
          heroTitle: 'A small social cadence you can actually sustain.',
          heroBody:
            'Most owner-operators we meet have an Instagram they last posted to on a Wednesday in March. Not because they have no story — because there is no time. We post twice a week from your photos, in your voice. No viral promises. Just visible, quietly, every week.',
          bullets: [
            {
              title: 'Two posts a week. Drawn from your week.',
              body: 'Your photos, your menu, your small milestones — drafted by us, approved by you, never an automated caption. The way it would sound if you had the time to write it yourself.',
            },
            {
              title: 'Someone watching the inbox on weekdays.',
              body: 'DMs and comments checked every weekday. Personal questions routed to you. Routine ones answered in the voice we agreed on. Nothing falls through to Monday.',
            },
            {
              title: 'Slow, real numbers. No bought followers.',
              body: 'Slow, real growth. The people who follow you are people who could walk in. One short monthly note about what worked and what did not.',
            },
          ],
          outcomeHeading: 'What you get',
          outcomeBullets: [
            'Two posts a week, ready in your drafts before Monday morning.',
            'Inbox watched, answered, escalated — every weekday.',
            'A note once a month — what worked, what did not, what we will try.',
          ],
          bestFor:
            'The owner who knows social matters — and who also knows they cannot personally be the one posting at nine on a Sunday night.',
          heroImageSrc: '/img/services/social-media/hero-florist.jpg',
          heroImageAlt:
            'A florist seen through hanging plants in the doorway of her shop, working quietly at a counter of cut flowers.',
          secondaryImageSrc: '/img/services/social-media/latte-overhead.jpg',
          secondaryImageAlt:
            'Overhead view of four cappuccinos with leaf and heart latte art arranged on a small round wooden table.',
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
        "A few rooms we have built. Some for businesses already running on Schönhauser Allee, some still in demo form on a quiet vercel.app URL — waiting for the owner to say yes. All of them have a live link below.",
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
        'breno-bar is one set of hands, in Berlin. Trilingual websites for owner-led businesses — three services, not thirty, because nobody needed thirty.',
      heroImageSrc: '/img/about/berlin-altbau-dawn.jpg',
      heroImageAlt:
        'A quiet Berlin street at dawn — Altbau buildings catching the first warm light, no traffic, no people.',
      sections: [
        {
          title: 'Why small',
          body: 'Most agencies grow until they need account managers, project managers, and meetings about meetings. The person who heard the first sentence is no longer the person writing the code. We chose not to grow that way. Every project is touched by the same hands, start to finish.',
        },
        {
          title: 'Why three services',
          body: 'Website + SEO + Google Business Profile. That is most of what a small local business needs to be found and called. Social media is an optional fourth, if you want it. We will not build you an app. We will not run your ads. We will not write your newsletter. Plenty of good studios will.',
        },
        {
          title: 'How we work',
          body: 'A demo first, then a conversation. You see a working version of your site before you commit to a single euro. Every line of code lives on your GitHub. Every deploy lives on your Vercel. The domain stays in your name. Nothing rented from us — we like you free to find us back, not stuck with us.',
        },
        {
          title: 'Languages',
          body: "Berlin German and international English by default. Brazilian Portuguese, European Portuguese, and Spanish when your audience asks for them. Translation is cultural — a Kreuzberg café and a São Paulo padaria don't sound alike, even when they sell the same coffee.",
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
        'Tell us what you are trying to build. We answer in one or two paragraphs, within one business day. No sales call. No decks. No follow-up sequence.',
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
        'Für die kleinen Berliner Geschäfte, die einen Kiez zusammenhalten. Wir bauen die Webseiten, die ihrer würdig sind.',
      heroImageSrc: '/img/home/hero-altbau-kiez.jpg',
      heroImageAlt:
        'Eine klassische Berliner Altbaustraße: ornamentale Fassade in Weiß und Orange, Café im Erdgeschoss mit roter Markise, Menschen an Außentischen, Bäume werfen Schatten aufs Kopfsteinpflaster.',
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
        'Drei Dinge, gut gemacht, von denselben Händen. Eine Website, auf der gefunden zu werden zählt. Ein Suchergebnis, das einen Klick wert ist. Ein Google-Profil, das geöffnet werden will. Social Media, falls du es wirklich willst — wir sagen dir, wann nicht.',
      portfolioEyebrow: 'Ausgewählte Arbeiten',
      portfolioHeading: 'Ein paar, die uns gefallen.',
      portfolioAllLink: 'Alle Projekte ansehen →',
      aboutEyebrow: 'Studio',
      aboutHeading: 'Ein kleines Studio. Kein Upsell.',
      aboutBody: [
        'breno-bar ist ein Paar Hände, in Berlin. Ein Studio, leise genug, um zu sehen, was dein Geschäft wirklich tut — und klein genug, dass du immer weißt, wer deine Seite gebaut hat.',
        'Wir verkaufen keine Werbekampagnen, die du nicht halten kannst, keine Dashboards, die du nicht liest, und kein Wachstum, das nicht zu Kund:innen wird. Wir bauen den Raum, in den die Leute reingehen. Das ist das ganze Versprechen.',
      ],
      aboutReadMore: 'Studio-Philosophie lesen →',
      aboutImageSrc: '/img/home/studio-notebook.jpg',
      aboutImageAlt:
        'Draufsicht auf einen kleinen Holztisch mit Lederheft, Stift und Kaffeetasse, beleuchtet durch das Lattenmuster der Jalousien.',
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
        'Drei kleine Leistungen, verkauft so, wie ein Berliner Geschäft alles verkauft — eine nach der anderen, ohne Pflicht, die nächste zu nehmen.',
      services: {
        website: {
          name: 'Website',
          shortTagline: 'Der erste Raum, in den dein nächster Kunde geht.',
          heroEyebrow: 'Leistung · 01',
          heroTitle: 'Eine Seite, die dir einen Anruf einbringt.',
          heroBody:
            'Die meisten deiner nächsten Kund:innen werden dich auf einem Handy treffen — irgendwo an der Schönhauser Allee, am U-Bahnsteig, zwischen zwei Terminen. Was sie in diesen vier Sekunden sehen, entscheidet, ob sie reingehen — oder weitergehen.',
          heroImageSrc: '/img/services/website/hero-terrace.jpg',
          heroImageAlt:
            'Ein Restaurant durch sein Schaufenster bei Nacht — goldenes Kronleuchterlicht, Gäste an Tischen, ein Kellner in Bewegung.',
          bullets: [
            {
              title: 'Spricht jede Sprache, die dein Block spricht.',
              body: 'Die Hälfte von Berlin lebt schon am Dienstag in zwei Sprachen. Deine Seite sollte jeder von ihnen das Gefühl geben, dass wir sie für sie gebaut haben.',
            },
            {
              title: 'Sieht nicht aus wie die vier Cafés in derselben Straße.',
              body: 'Theme-gebaute Seiten erkennt jeder, der zwei davon gesehen hat. Deine wird keine davon sein. Deine Farben, deine Fotos, dein Raum.',
            },
            {
              title: 'Die langweiligen deutschen Teile, erledigt.',
              body: 'Cookie-Banner, Datenschutzerklärung, Impressum — für dein Unternehmen geschrieben, nie aus einem Generator kopiert. Du hörst auf, dir darum Sorgen zu machen. Du gehst zurück und kümmerst dich um den Laden.',
            },
          ],
          outcomeHeading: 'Was du bekommst',
          outcomeBullets: [
            'Fünf bis zwölf Seiten, schnell auch beim schlechtesten U-Bahn-Signal.',
            'Deine Domain, dein Code, deine Kontrolle. Nichts von uns gemietet.',
            'Live in drei bis sechs Wochen — online, bevor der nächste ruhige Dienstag kommt.',
          ],
          bestFor:
            'Das Café, das leise seine Preise erhöht hat. Das Studio mit der Warteliste. Der Barber, der keine Walk-ins mehr annimmt. Geschäfte, die gut genug sind, um eine ruhigere, bessere Eingangstür zu brauchen.',
          secondaryImageSrc: '/img/services/website/barista-pour.jpg',
          secondaryImageAlt:
            'Ein Barista in lederner Schürze, Seitenprofil, konzentriert beim Aufschäumen der Milch an der Espressomaschine.',
        },
        seo: {
          name: 'SEO',
          shortTagline: 'Die Seite, die jemand sieht, kurz bevor er dich anruft.',
          heroEyebrow: 'Leistung · 02',
          heroTitle: 'Gefunden von Menschen, die schon suchen.',
          heroBody:
            'Die Hälfte deiner Kund:innen vom nächsten Monat sucht heute Abend schon nach dir. SEO heißt sicherzustellen, dass die Seite, die sie zuerst finden, nicht der nächste Konkurrent an der Schönhauser Allee ist. Wir machen die geduldige, langweilige Arbeit für neunzig Tage. Dann fangen sie an, dich zu finden.',
          bullets: [
            {
              title: 'Die Metadaten, denen Google still vertraut.',
              body: 'Schema an den richtigen Stellen, in der richtigen Sprache, für die richtige Geschäftsart. Langweilig zu besprechen. Entscheidend, wenn jemand in deinem Kiez deine Leistung ins Handy tippt.',
            },
            {
              title: 'Recherchiert auf Kiez-Ebene, nicht auf Agentur-Ebene.',
              body: 'Wir lernen die Wörter, die deine nächsten Kund:innen wirklich tippen — in ihrer Sprache, in ihrer Nachbarschaft. Keine Vanity-Keywords aus einer SaaS-Liste. Alle neunzig Tage überprüft, wenn die Jahreszeiten wechseln.',
            },
            {
              title: 'Zahlen, die du sonntagmorgens lesen kannst.',
              body: 'Google Search Console und die Basics, unter deinem Konto eingerichtet, nicht unserem. Eine monatliche Notiz — was wir gemacht haben, was funktioniert hat, was wir als nächstes probieren. Keine zwölf-Tab-Dashboards, die du nie öffnest.',
            },
          ],
          outcomeHeading: 'Was du bekommst',
          outcomeBullets: [
            'Ein ehrliches Audit vor jedem Versprechen — findet meistens drei schnelle Verbesserungen.',
            'On-Page-Arbeit zur Bauzeit erledigt. Kein nachträglicher Frankenstein-Umbau.',
            'Eine monatliche Notiz, die du in drei Minuten liest — was sich bewegt hat, was wir als nächstes probieren.',
          ],
          bestFor:
            'Die Bäckerei, der Salon, die Praxis, der Klempner. Jedes Geschäft, bei dem Kund:innen schon suchen — sie müssen dich nur finden statt jemand anderen.',
          heroImageSrc: '/img/services/seo/hero-walking-phone.jpg',
          heroImageAlt:
            'Ein Mann sitzt auf einem Bürgersteig, Hände um sein Handy, eine vorbeigehende Person verschwommen im Hintergrund.',
          secondaryImageSrc: '/img/services/seo/bakery-display.jpg',
          secondaryImageAlt:
            'Draufsicht auf die Auslage einer Bäckerei — Croissants, Danishes mit roten Früchten, Keksgläser, Marmortresen, kleine Etiketten.',
        },
        'google-business': {
          name: 'Google Business Profile',
          shortTagline: 'Die erste halbe Sekunde jeder lokalen Suche.',
          heroEyebrow: 'Leistung · 03',
          heroTitle: 'Der Eintrag, der die lokale Suche macht.',
          heroBody:
            "Wenn jemand drei Blocks entfernt 'Bäckerei in der Nähe' ins Handy tippt, ist die Antwort eine Liste von drei Geschäften. Dein Job ist, eines davon zu sein. Unserer ist, das zu schaffen — und dann dafür zu sorgen, dass es so bleibt.",
          bullets: [
            {
              title: 'Eingerichtet so, wie Google es wirklich will.',
              body: 'Verifiziertes Eigentum, die spezifischste Kategorie, das richtige Servicegebiet, die richtigen Öffnungszeiten, jedes Foto an der Tür geo-getaggt. Mühsam. Entscheidend. Einmal gemacht, dann gepflegt.',
            },
            {
              title: 'Stille Pflege, jeden Monat.',
              body: 'Zwei Beiträge im Monat. Jede Bewertung in achtundvierzig Stunden beantwortet. Fotos aufgefrischt, wenn die Karte wechselt. Q&A aktuell gehalten. So, wie es aussehen sollte, wenn dich jemand am Dienstag entdeckt.',
            },
            {
              title: 'Eine höfliche Art, um Bewertungen zu bitten.',
              body: 'Eine kurze URL auf deiner Domain, die zufriedene Kund:innen direkt zum Bewertungsformular führt. DSGVO-sichere Templates auf DE, EN und PT-BR. Ein leiser Alarm, wenn drei Wochen lang keine Bewertung kam — meistens gibt es etwas, worüber sich zu fragen lohnt.',
            },
          ],
          outcomeHeading: 'Was du bekommst',
          outcomeBullets: [
            'Ein Eintrag, der aussieht, als wollte das Geschäft den Anruf wirklich haben.',
            'Beiträge, beantwortete Bewertungen, aktuelle Fotos — jeden Monat, im Kalender.',
            'Eine Zahl, die du wirklich anschauen wirst: wie viele Telefone den Eintrag diesen Monat angerufen haben.',
          ],
          bestFor:
            "Alle, die Kund:innen mit dem Wort 'in der Nähe' in der Suche finden. Das Studio, die Praxis, die Werkstatt, die Küche — überall mit einer Tür oder einem Servicegebiet.",
          heroImageSrc: '/img/services/google-business/hero-aseli-storefront.jpg',
          heroImageAlt:
            'Ein kleines Berliner Schaufenster — grüne Doppeltüren, rotes Emailschild „Aseli — Berliner Original — seit 1921", Efeu an der Fassade.',
          secondaryImageSrc: '/img/services/google-business/mid-phone-map.jpg',
          secondaryImageAlt:
            'Eine Hand hält ein Smartphone mit einer Navigations-Karte bei Nacht, umgeben von bunten Bokeh-Stadtlichtern.',
        },
        'social-media': {
          name: 'Social Media',
          shortTagline:
            'Zwei Beiträge pro Woche, in deiner Stimme, die dir den Dienstag nicht stehlen.',
          heroEyebrow: 'Leistung · 04 (optional)',
          heroTitle: 'Ein kleiner Social-Rhythmus, den du wirklich halten kannst.',
          heroBody:
            'Die meisten inhabergeführten Geschäfte, die wir kennenlernen, haben ein Instagram, in das sie zuletzt an einem Mittwoch im März gepostet haben. Nicht weil ihnen die Geschichten fehlen — sondern weil die Zeit fehlt. Wir posten zweimal pro Woche aus deinen Fotos, in deiner Stimme. Keine viralen Versprechen. Nur sichtbar, leise, jede Woche.',
          bullets: [
            {
              title: 'Zwei Beiträge pro Woche. Aus deiner Woche.',
              body: 'Deine Fotos, deine Karte, deine kleinen Meilensteine — von uns entworfen, von dir freigegeben, nie eine automatische Caption. So, wie es klingen würde, wenn du selbst die Zeit hättest, es zu schreiben.',
            },
            {
              title: 'Jemand schaut werktags in den Posteingang.',
              body: 'DMs und Kommentare werden jeden Werktag geprüft. Persönliche Fragen werden an dich weitergeleitet. Routinefragen mit der Stimme beantwortet, auf die wir uns geeinigt haben. Nichts bleibt bis Montag liegen.',
            },
            {
              title: 'Langsame, echte Zahlen. Keine gekauften Follower.',
              body: 'Langsames, echtes Wachstum. Die Leute, die dir folgen, sind Leute, die reinkommen könnten. Eine kurze monatliche Notiz, was funktioniert hat und was nicht.',
            },
          ],
          outcomeHeading: 'Was du bekommst',
          outcomeBullets: [
            'Zwei Beiträge pro Woche, vor Montagmorgen in deinen Drafts.',
            'Posteingang gelesen, beantwortet, weitergeleitet — jeden Werktag.',
            'Eine Notiz im Monat — was funktioniert hat, was nicht, was wir als nächstes probieren.',
          ],
          bestFor:
            'Der/die Eigentümer:in, der/die weiß, dass Social Media zählt — und gleichzeitig weiß, dass er/sie nicht persönlich sonntagabends um neun postet.',
          heroImageSrc: '/img/services/social-media/hero-florist.jpg',
          heroImageAlt:
            'Eine Floristin, gesehen durch hängende Pflanzen in der Tür ihres Ladens, ruhig arbeitend an einem Tisch mit geschnittenen Blumen.',
          secondaryImageSrc: '/img/services/social-media/latte-overhead.jpg',
          secondaryImageAlt:
            'Draufsicht auf vier Cappuccinos mit Blatt- und Herz-Latte-Art auf einem kleinen runden Holztisch.',
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
        'Ein paar Räume, die wir gebaut haben. Einige für Geschäfte, die schon an der Schönhauser Allee laufen, einige noch als Demo auf einer ruhigen vercel.app-URL — wartend, bis der/die Eigentümer:in ja sagt. Alle mit einem Live-Link unten.',
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
        'breno-bar ist ein Paar Hände, in Berlin. Mehrsprachige Webseiten für inhabergeführte Unternehmen — drei Leistungen, nicht dreißig, weil niemand dreißig brauchte.',
      heroImageSrc: '/img/about/berlin-altbau-dawn.jpg',
      heroImageAlt:
        'Eine ruhige Berliner Straße in der Dämmerung — kahle Baumreihen, Altbauten im Hintergrund, der Fernsehturm in der Ferne, keine Menschen, kein Verkehr.',
      sections: [
        {
          title: 'Warum klein',
          body: 'Die meisten Agenturen wachsen, bis sie Account Manager, Projekt Manager und Meetings über Meetings brauchen. Die Person, die den ersten Satz gehört hat, ist nicht mehr die Person, die den Code schreibt. Wir haben uns entschieden, nicht so zu wachsen. Jedes Projekt wird von denselben Händen berührt, von Anfang bis Ende.',
        },
        {
          title: 'Warum drei Leistungen',
          body: 'Website + SEO + Google Business Profile. Das ist das meiste, was ein kleines lokales Geschäft braucht, um gefunden und angerufen zu werden. Social Media ist eine optionale Vierte, wenn du sie willst. Wir bauen dir keine App. Wir schalten dir keine Werbung. Wir schreiben deinen Newsletter nicht. Es gibt genug gute Studios dafür.',
        },
        {
          title: 'Wie wir arbeiten',
          body: 'Erst eine Demo, dann ein Gespräch. Du siehst eine funktionierende Version deiner Seite, bevor du einen einzigen Euro versprichst. Jede Codezeile liegt auf deinem GitHub. Jedes Deployment liegt auf deinem Vercel. Die Domain bleibt auf deinem Namen. Nichts von uns gemietet — wir mögen es, wenn du uns aus freien Stücken wiederfindest, nicht weil du festhängst.',
        },
        {
          title: 'Sprachen',
          body: 'Berliner Deutsch und internationales Englisch als Standard. Brasilianisches Portugiesisch, europäisches Portugiesisch und Spanisch, wenn deine Zielgruppe danach fragt. Übersetzung ist kulturell — ein Kreuzberger Café und eine padaria in São Paulo klingen nicht gleich, auch wenn sie denselben Kaffee verkaufen.',
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
        'Erzähl uns, was du bauen willst. Wir antworten in ein oder zwei Absätzen, innerhalb eines Werktags. Kein Verkaufsgespräch. Keine Folien. Keine Follow-up-Sequenz.',
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
        'Para os pequenos negócios berlinenses que sustentam um bairro. A gente constrói os sites que eles merecem.',
      heroImageSrc: '/img/home/hero-altbau-kiez.jpg',
      heroImageAlt:
        'Uma rua clássica de Altbau berlinense: fachada ornamentada em branco e laranja, café no térreo com toldo vermelho, pessoas em mesas externas, árvores projetando sombras nos paralelepípedos.',
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
        'Três coisas, bem feitas, pelas mesmas mãos. Um site que vale a pena ser encontrado. Um resultado de busca que vale o clique. Um perfil do Google que vale a pena abrir. Redes sociais se você realmente quiser — a gente avisa quando não quiser.',
      portfolioEyebrow: 'Trabalhos selecionados',
      portfolioHeading: 'Alguns que a gente gosta.',
      portfolioAllLink: 'Ver todos os projetos →',
      aboutEyebrow: 'Estúdio',
      aboutHeading: 'Um pequeno estúdio. Sem upsell.',
      aboutBody: [
        'breno-bar é um par de mãos, em Berlim. Um estúdio tranquilo o bastante para perceber o que seu negócio realmente faz — e pequeno o bastante para você sempre saber quem construiu seu site.',
        'A gente não vende campanhas de anúncios que você não consegue sustentar, dashboards que você não consegue ler, ou crescimento que não vira cliente. A gente constrói o cômodo onde as pessoas entram. É essa a proposta toda.',
      ],
      aboutReadMore: 'Ler a filosofia do estúdio →',
      aboutImageSrc: '/img/home/studio-notebook.jpg',
      aboutImageAlt:
        'Vista de cima de uma pequena mesa de madeira com caderno de couro, caneta e xícara de café, iluminada pelo padrão das venezianas.',
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
        'Três pequenos serviços, vendidos como um comerciante berlinense vende qualquer coisa — um de cada vez, sem obrigação de comprar o próximo.',
      services: {
        website: {
          name: 'Site',
          shortTagline: 'O primeiro cômodo onde seu próximo cliente vai entrar.',
          heroEyebrow: 'Serviço · 01',
          heroTitle: 'Um site que rende ligação.',
          heroBody:
            'A maioria dos seus próximos clientes vai te encontrar pelo celular — em pé em algum ponto da Schönhauser Allee, esperando o U-Bahn, entre duas reuniões. O que eles virem nesses quatro segundos decide se entram, ou seguem em frente.',
          heroImageSrc: '/img/services/website/hero-terrace.jpg',
          heroImageAlt:
            'Um restaurante visto pela janela da frente à noite — luz dourada do candelabro, clientes em volta das mesas, um garçom se movendo entre elas.',
          bullets: [
            {
              title: 'Fala todo idioma que seu quarteirão fala.',
              body: 'Metade de Berlim vive em dois idiomas já na terça-feira. Seu site deveria fazer cada um deles se sentir como o público para quem a gente construiu.',
            },
            {
              title: 'Não parece com os quatro cafés da mesma rua.',
              body: 'Sites feitos com template são reconhecíveis por qualquer um que tenha visto dois. O seu não vai ser um deles. Suas cores, suas fotos, seu cômodo.',
            },
            {
              title: 'As partes alemãs chatas, resolvidas.',
              body: 'Cookie banner, Datenschutzerklärung, Impressum — escritos para o seu negócio, nunca colados de um gerador. Você para de se preocupar com isso. Volta a cuidar do salão.',
            },
          ],
          outcomeHeading: 'O que você recebe',
          outcomeBullets: [
            'Cinco a doze páginas, rápidas até no pior sinal do U-Bahn.',
            'Seu domínio, seu código, seu controle. Nada alugado da gente.',
            'No ar em três a seis semanas — online antes da próxima terça-feira morna.',
          ],
          bestFor:
            'O café que aumentou silenciosamente os preços. O estúdio com lista de espera. O barbeiro que parou de aceitar walk-ins. Negócios bons o bastante para precisar de uma porta de entrada mais tranquila e melhor.',
          secondaryImageSrc: '/img/services/website/barista-pour.jpg',
          secondaryImageAlt:
            'Um barista de avental de couro, perfil lateral, concentrado em vaporizar o leite na máquina de espresso.',
        },
        seo: {
          name: 'SEO',
          shortTagline: 'A página que alguém vê pouco antes de te ligar.',
          heroEyebrow: 'Serviço · 02',
          heroTitle: 'Encontrado por quem já está procurando.',
          heroBody:
            'Metade dos seus clientes do mês que vem já está te procurando esta noite. SEO é garantir que a página que eles encontram primeiro não é o concorrente mais próximo da Schönhauser Allee. A gente faz o trabalho paciente e chato por noventa dias. Eles começam a te encontrar.',
          bullets: [
            {
              title: 'Os metadados em que o Google silenciosamente confia.',
              body: 'Schema nos lugares certos, no idioma certo, para o tipo certo de negócio. Chato de discutir. Decisivo quando alguém no seu bairro digita seu serviço no celular.',
            },
            {
              title: 'Pesquisado no nível do bairro, não no nível da agência.',
              body: 'A gente aprende as palavras que seu próximo cliente realmente digita — no idioma dele, na vizinhança dele. Sem palavras-chave de vaidade tiradas de uma lista de SaaS. Revisado a cada noventa dias quando as estações mudam.',
            },
            {
              title: 'Números que você consegue ler num domingo de manhã.',
              body: 'Google Search Console e o básico, configurados sob sua conta, não a nossa. Uma nota mensal — o que a gente fez, o que funcionou, o que vamos tentar a seguir. Sem dashboards de doze abas que você nunca vai abrir.',
            },
          ],
          outcomeHeading: 'O que você recebe',
          outcomeBullets: [
            'Uma auditoria honesta antes de qualquer promessa — geralmente encontra três ganhos rápidos.',
            'Trabalho on-page feito no momento da construção. Sem remendo Frankenstein retroativo.',
            'Uma nota mensal que você lê em três minutos — o que se moveu, o que vamos tentar.',
          ],
          bestFor:
            'A padaria, o salão, o dentista, o encanador. Qualquer negócio onde o cliente já está procurando — eles só precisam te encontrar em vez de outra pessoa.',
          heroImageSrc: '/img/services/seo/hero-walking-phone.jpg',
          heroImageAlt:
            'Um homem sentado na calçada urbana, mãos segurando um celular, um transeunte desfocado ao fundo.',
          secondaryImageSrc: '/img/services/seo/bakery-display.jpg',
          secondaryImageAlt:
            'Vista de cima da vitrine de uma padaria — croissants, danishes com frutas vermelhas, potes de biscoito, balcão de mármore, pequenas etiquetas.',
        },
        'google-business': {
          name: 'Google Business Profile',
          shortTagline: 'O primeiro meio-segundo de toda busca local.',
          heroEyebrow: 'Serviço · 03',
          heroTitle: 'O perfil que faz o trabalho pesado da busca local.',
          heroBody:
            "Quando alguém a três quarteirões digita 'padaria perto de mim' no celular, a resposta é uma lista de três negócios. Seu trabalho é ser um deles. O nosso é fazer isso acontecer — e depois cuidar para que continue assim.",
          bullets: [
            {
              title: 'Configurado do jeito que o Google realmente quer.',
              body: 'Propriedade verificada, a categoria mais específica, a área de atendimento certa, os horários certos, cada foto geo-marcada na porta. Tedioso. Decisivo. Feito uma vez, depois mantido.',
            },
            {
              title: 'Manutenção silenciosa, todo mês.',
              body: 'Dois posts por mês. Toda avaliação respondida em quarenta e oito horas. Fotos atualizadas quando o cardápio muda. Q&A em dia. Como deveria parecer quando alguém te descobre numa terça-feira.',
            },
            {
              title: 'Um jeito educado de pedir avaliações.',
              body: 'Uma URL curta no seu domínio que leva um cliente satisfeito direto para o formulário de avaliação. Templates compatíveis com LGPD/DSGVO em DE, EN e PT-BR. Um alerta silencioso se passarem três semanas sem avaliação — geralmente significa algo a perguntar.',
            },
          ],
          outcomeHeading: 'O que você recebe',
          outcomeBullets: [
            'Um perfil que parece que o negócio realmente quer a ligação.',
            'Posts, avaliações respondidas, fotos atuais — todo mês, na agenda.',
            'Um número que você vai mesmo olhar: quantos celulares ligaram pro perfil este mês.',
          ],
          bestFor:
            "Qualquer um que clientes encontram com a palavra 'perto' na busca. O estúdio, a clínica, a oficina, a cozinha — qualquer lugar com uma porta ou área de atendimento.",
          heroImageSrc: '/img/services/google-business/hero-aseli-storefront.jpg',
          heroImageAlt:
            'Uma pequena fachada berlinense — portas verdes duplas, placa em esmalte vermelho com "Aseli — Berliner Original — desde 1921", hera subindo pela parede.',
          secondaryImageSrc: '/img/services/google-business/mid-phone-map.jpg',
          secondaryImageAlt:
            'Uma mão segurando um smartphone com um mapa de navegação à noite, cercada por bokeh colorido das luzes da cidade.',
        },
        'social-media': {
          name: 'Redes sociais',
          shortTagline: 'Dois posts por semana, na sua voz, que não roubam sua terça-feira.',
          heroEyebrow: 'Serviço · 04 (opcional)',
          heroTitle: 'Um pequeno ritmo social que você consegue mesmo manter.',
          heroBody:
            'A maioria dos donos com quem a gente conversa tem um Instagram em que o último post foi numa quarta de março. Não porque não tenham história — porque não há tempo. A gente posta duas vezes por semana com suas fotos, na sua voz. Sem promessa viral. Só visível, em silêncio, toda semana.',
          bullets: [
            {
              title: 'Dois posts por semana. Da sua semana.',
              body: 'Suas fotos, seu cardápio, seus pequenos marcos — rascunhados pela gente, aprovados por você, nunca uma legenda automática. Do jeito que soaria se você tivesse tempo de escrever sozinho.',
            },
            {
              title: 'Alguém olhando a caixa de entrada em dias úteis.',
              body: 'DMs e comentários conferidos todo dia útil. Perguntas pessoais encaminhadas pra você. Perguntas de rotina respondidas na voz que combinamos. Nada cai pra segunda-feira.',
            },
            {
              title: 'Números lentos e reais. Sem seguidores comprados.',
              body: 'Crescimento lento e real. As pessoas que te seguem são pessoas que poderiam entrar pela porta. Uma nota curta uma vez por mês sobre o que funcionou e o que não.',
            },
          ],
          outcomeHeading: 'O que você recebe',
          outcomeBullets: [
            'Dois posts por semana, prontos nos seus rascunhos antes de segunda de manhã.',
            'Caixa de entrada lida, respondida, escalada — todo dia útil.',
            'Uma nota uma vez por mês — o que funcionou, o que não, o que vamos tentar.',
          ],
          bestFor:
            'O dono que sabe que rede social importa — e que também sabe que não vai ser ele postando às nove da noite num domingo.',
          heroImageSrc: '/img/services/social-media/hero-florist.jpg',
          heroImageAlt:
            'Uma florista vista por entre plantas penduradas na porta da loja, trabalhando em silêncio em um balcão de flores cortadas.',
          secondaryImageSrc: '/img/services/social-media/latte-overhead.jpg',
          secondaryImageAlt:
            'Vista de cima de quatro cappuccinos com latte art em folha e coração, dispostos sobre uma pequena mesa redonda de madeira.',
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
        'Alguns cômodos que a gente construiu. Alguns para negócios que já rodam pela Schönhauser Allee, alguns ainda em forma de demo numa URL tranquila do vercel.app — esperando o dono dizer sim. Todos têm um link ao vivo abaixo.',
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
        'breno-bar é um par de mãos, em Berlim. Sites multilíngues para negócios liderados pelo dono — três serviços, não trinta, porque ninguém precisava de trinta.',
      heroImageSrc: '/img/about/berlin-altbau-dawn.jpg',
      heroImageAlt:
        'Uma rua berlinense silenciosa no amanhecer — árvores sem folhas, prédios Altbau ao fundo, a Fernsehturm ao longe, sem pessoas, sem trânsito.',
      sections: [
        {
          title: 'Por que pequeno',
          body: 'A maioria das agências cresce até precisar de account managers, project managers e reuniões sobre reuniões. A pessoa que ouviu a primeira frase não é mais a pessoa que escreve o código. A gente escolheu não crescer assim. Cada projeto é tocado pelas mesmas mãos, do começo ao fim.',
        },
        {
          title: 'Por que três serviços',
          body: 'Site + SEO + Google Business Profile. Isso é a maior parte do que um pequeno negócio local precisa para ser encontrado e procurado. Redes sociais é uma quarta opcional, se você quiser. A gente não vai construir seu app. Não vai gerir seus anúncios. Não vai escrever sua newsletter. Tem estúdio bom o bastante por aí pra isso.',
        },
        {
          title: 'Como trabalhamos',
          body: 'Primeiro uma demo, depois uma conversa. Você vê uma versão funcionando do seu site antes de prometer um único euro. Cada linha de código fica no seu GitHub. Cada deploy fica no seu Vercel. O domínio permanece no seu nome. Nada alugado da gente — a gente gosta de ser reencontrado por escolha, não por dependência.',
        },
        {
          title: 'Idiomas',
          body: 'Alemão de Berlim e inglês internacional por padrão. Português brasileiro, português europeu e espanhol quando seu público pedir. Tradução é cultural — um café de Kreuzberg e uma padaria de São Paulo não soam iguais, mesmo quando vendem o mesmo café.',
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
        'Conta pra gente o que você está tentando construir. A gente responde em um ou dois parágrafos, dentro de um dia útil. Sem call comercial. Sem deck. Sem sequência de follow-up.',
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
