/**
 * Free lead-magnet tools (F3 — icreateyoursite benchmark borrow).
 *
 * Trilingual UI strings for the two tools + their hub. Typed Record<Locale, …>
 * (compile-time parity), kept out of PAGE_STRINGS like funnel.ts.
 *
 *   F3a  GBP / Local-SEO check  → guided self-audit + lead capture (no paid API).
 *   F3b  Website scan           → PageSpeed (Google PSI API) + header/DSGVO hints.
 *
 * Endpoints degrade gracefully without API keys (see api/site-scan.ts,
 * api/gbp-check.ts). Nothing here makes legal claims — results are hints, not
 * Rechtsberatung, and the pages say so.
 */

import type { Locale } from './site';

export interface ToolsContent {
  hub: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { href: string; name: string; desc: string; cta: string }[];
  };
  scan: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    urlLabel: string;
    urlPlaceholder: string;
    submit: string;
    running: string;
    privacyNote: string;
    checksHeading: string;
    checks: string[];
    resultHeading: string;
    errorBody: string;
    ctaHeading: string;
    ctaBody: string;
    ctaButton: string;
    // result labels
    labelPerformance: string;
    labelSeo: string;
    labelAccessibility: string;
    labelBestPractices: string;
    labelSecurity: string;
    labelHttps: string;
    disclaimer: string;
  };
  gbp: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    cityLabel: string;
    cityPlaceholder: string;
    websiteLabel: string;
    websitePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    running: string;
    privacyNote: string;
    checklistHeading: string;
    checklist: string[];
    successTitle: string;
    successBody: string;
    errorBody: string;
    ctaHeading: string;
    ctaBody: string;
    ctaButton: string;
  };
}

export const TOOLS: Record<Locale, ToolsContent> = {
  en: {
    hub: {
      metaTitle: 'Free tools — website scan & Google check',
      metaDescription:
        'Two free tools for Berlin businesses: scan your website for speed and GDPR hints, and get a guided Google Business Profile check.',
      eyebrow: 'Free tools',
      title: 'Two quick checks, no strings.',
      subtitle: 'Find out where you stand in a minute. No account, no sales call required.',
      items: [
        {
          href: '/tools/website-scan',
          name: 'Website scan',
          desc: 'Enter a URL and get speed, SEO, accessibility, and GDPR hints in one report.',
          cta: 'Scan a site',
        },
        {
          href: '/tools/gbp-check',
          name: 'Google Business check',
          desc: 'A guided checklist for your Google listing — plus a tailored review by email.',
          cta: 'Check my listing',
        },
      ],
    },
    scan: {
      metaTitle: 'Free website scan — speed, SEO & GDPR hints',
      metaDescription:
        'Scan any website for PageSpeed, SEO, accessibility, and GDPR/security hints. Free, instant, no account.',
      eyebrow: 'Website scan',
      title: 'How healthy is your website?',
      subtitle:
        'Enter a URL. We run Google PageSpeed and check security headers and common GDPR pitfalls. Takes about a minute.',
      urlLabel: 'Website URL',
      urlPlaceholder: 'https://your-site.de',
      submit: 'Scan now',
      running: 'Scanning… this can take up to a minute',
      privacyNote:
        'We only pass the URL to Google PageSpeed and fetch the page once. We don’t store your URL.',
      checksHeading: 'What we check',
      checks: [
        'PageSpeed (mobile) performance score',
        'SEO, accessibility & best-practices scores',
        'HTTPS + security headers',
        'Obvious GDPR red flags (trackers before consent)',
      ],
      resultHeading: 'Your results',
      errorBody:
        'We couldn’t scan that URL. Check it’s public and starts with https:// and try again.',
      ctaHeading: 'Want the issues fixed?',
      ctaBody: 'We turn a scan like this into a fast, clean, GDPR-compliant site.',
      ctaButton: 'Get a quote',
      labelPerformance: 'Performance',
      labelSeo: 'SEO',
      labelAccessibility: 'Accessibility',
      labelBestPractices: 'Best practices',
      labelSecurity: 'Security headers',
      labelHttps: 'HTTPS',
      disclaimer: 'Hints only — not legal advice. A green score is a good sign, not a guarantee.',
    },
    gbp: {
      metaTitle: 'Free Google Business Profile check',
      metaDescription:
        'Get a guided checklist to audit your Google Business Profile, plus a tailored review by email. Free, for Berlin businesses.',
      eyebrow: 'Google Business check',
      title: 'Is your Google listing pulling its weight?',
      subtitle:
        'Half your customers find you on the map first. Tell us your business and we’ll send a tailored review — and you can self-check with the list below right now.',
      nameLabel: 'Business name',
      namePlaceholder: 'Your business',
      cityLabel: 'City / Bezirk',
      cityPlaceholder: 'Berlin-Kreuzberg',
      websiteLabel: 'Website (optional)',
      websitePlaceholder: 'https://your-site.de',
      emailLabel: 'Your email',
      emailPlaceholder: 'you@example.com',
      submit: 'Send me my review',
      running: 'Sending…',
      privacyNote:
        'We use your email only to send your review. No newsletter, no sharing. See our privacy policy.',
      checklistHeading: 'Self-check while you’re here',
      checklist: [
        'Is your primary category the most specific one available?',
        'Are opening hours correct, including holidays?',
        'Do you have at least 10 recent photos?',
        'Are you actively collecting and replying to reviews?',
        'Do name, address & phone match your website exactly?',
        'Have you added services, products, and an updated description?',
      ],
      successTitle: 'On its way.',
      successBody:
        'Thanks — we’ll send your tailored Google Business review within one business day.',
      errorBody: 'Something went wrong. Please try again, or email us directly.',
      ctaHeading: 'Want us to manage it?',
      ctaBody: 'Google Business setup and monthly management are part of what we do.',
      ctaButton: 'See pricing',
    },
  },
  de: {
    hub: {
      metaTitle: 'Kostenlose Tools — Website-Scan & Google-Check',
      metaDescription:
        'Zwei kostenlose Tools für Berliner Betriebe: Website auf Tempo und DSGVO-Hinweise scannen und einen geführten Google-Unternehmensprofil-Check machen.',
      eyebrow: 'Kostenlose Tools',
      title: 'Zwei schnelle Checks, ohne Haken.',
      subtitle:
        'Finde in einer Minute heraus, wo du stehst. Kein Konto, kein Verkaufsgespräch nötig.',
      items: [
        {
          href: '/de/tools/website-scan',
          name: 'Website-Scan',
          desc: 'URL eingeben und Tempo, SEO, Barrierefreiheit und DSGVO-Hinweise in einem Bericht erhalten.',
          cta: 'Seite scannen',
        },
        {
          href: '/de/tools/gbp-check',
          name: 'Google-Unternehmens-Check',
          desc: 'Eine geführte Checkliste für deinen Google-Eintrag — plus eine maßgeschneiderte Auswertung per E-Mail.',
          cta: 'Eintrag prüfen',
        },
      ],
    },
    scan: {
      metaTitle: 'Kostenloser Website-Scan — Tempo, SEO & DSGVO-Hinweise',
      metaDescription:
        'Jede Website auf PageSpeed, SEO, Barrierefreiheit und DSGVO-/Sicherheits-Hinweise scannen. Kostenlos, sofort, ohne Konto.',
      eyebrow: 'Website-Scan',
      title: 'Wie gesund ist deine Website?',
      subtitle:
        'URL eingeben. Wir führen Google PageSpeed aus und prüfen Sicherheits-Header und typische DSGVO-Stolperfallen. Dauert etwa eine Minute.',
      urlLabel: 'Website-URL',
      urlPlaceholder: 'https://deine-seite.de',
      submit: 'Jetzt scannen',
      running: 'Wird gescannt… das kann bis zu einer Minute dauern',
      privacyNote:
        'Wir geben nur die URL an Google PageSpeed weiter und rufen die Seite einmal ab. Wir speichern deine URL nicht.',
      checksHeading: 'Was wir prüfen',
      checks: [
        'PageSpeed-Wert (mobil)',
        'SEO-, Barrierefreiheits- & Best-Practices-Werte',
        'HTTPS + Sicherheits-Header',
        'Offensichtliche DSGVO-Warnsignale (Tracker vor Einwilligung)',
      ],
      resultHeading: 'Deine Ergebnisse',
      errorBody:
        'Wir konnten diese URL nicht scannen. Prüfe, ob sie öffentlich ist und mit https:// beginnt, und versuch es erneut.',
      ctaHeading: 'Sollen wir die Probleme beheben?',
      ctaBody: 'Aus so einem Scan machen wir eine schnelle, saubere, DSGVO-konforme Seite.',
      ctaButton: 'Angebot anfragen',
      labelPerformance: 'Performance',
      labelSeo: 'SEO',
      labelAccessibility: 'Barrierefreiheit',
      labelBestPractices: 'Best Practices',
      labelSecurity: 'Sicherheits-Header',
      labelHttps: 'HTTPS',
      disclaimer:
        'Nur Hinweise — keine Rechtsberatung. Ein grüner Wert ist ein gutes Zeichen, keine Garantie.',
    },
    gbp: {
      metaTitle: 'Kostenloser Google-Unternehmensprofil-Check',
      metaDescription:
        'Geführte Checkliste für dein Google-Unternehmensprofil plus maßgeschneiderte Auswertung per E-Mail. Kostenlos, für Berliner Betriebe.',
      eyebrow: 'Google-Unternehmens-Check',
      title: 'Zieht dein Google-Eintrag sein Gewicht?',
      subtitle:
        'Die Hälfte deiner Kund:innen findet dich zuerst auf der Karte. Nenn uns deinen Betrieb und wir schicken eine maßgeschneiderte Auswertung — und mit der Liste unten kannst du dich gleich selbst prüfen.',
      nameLabel: 'Name des Betriebs',
      namePlaceholder: 'Dein Betrieb',
      cityLabel: 'Stadt / Bezirk',
      cityPlaceholder: 'Berlin-Kreuzberg',
      websiteLabel: 'Website (optional)',
      websitePlaceholder: 'https://deine-seite.de',
      emailLabel: 'Deine E-Mail',
      emailPlaceholder: 'du@beispiel.de',
      submit: 'Auswertung schicken',
      running: 'Wird gesendet…',
      privacyNote:
        'Wir nutzen deine E-Mail nur für die Auswertung. Kein Newsletter, keine Weitergabe. Siehe Datenschutzerklärung.',
      checklistHeading: 'Selbst-Check, solange du hier bist',
      checklist: [
        'Ist deine Hauptkategorie die spezifischste verfügbare?',
        'Sind die Öffnungszeiten korrekt, inkl. Feiertage?',
        'Hast du mindestens 10 aktuelle Fotos?',
        'Sammelst und beantwortest du aktiv Bewertungen?',
        'Stimmen Name, Adresse & Telefon exakt mit der Website überein?',
        'Hast du Leistungen, Produkte und eine aktuelle Beschreibung ergänzt?',
      ],
      successTitle: 'Unterwegs.',
      successBody:
        'Danke — wir schicken deine maßgeschneiderte Google-Auswertung innerhalb eines Werktags.',
      errorBody: 'Etwas ist schiefgelaufen. Bitte versuch es erneut oder schreib uns direkt.',
      ctaHeading: 'Sollen wir das übernehmen?',
      ctaBody:
        'Google-Unternehmensprofil einrichten und monatlich pflegen gehört zu dem, was wir tun.',
      ctaButton: 'Preise ansehen',
    },
  },
  'pt-br': {
    hub: {
      metaTitle: 'Ferramentas grátis — scan de site & check do Google',
      metaDescription:
        'Duas ferramentas grátis para negócios em Berlim: escaneie seu site em busca de velocidade e alertas de GDPR e faça um check guiado do Perfil da Empresa no Google.',
      eyebrow: 'Ferramentas grátis',
      title: 'Dois checks rápidos, sem pegadinha.',
      subtitle: 'Descubra onde você está em um minuto. Sem conta, sem ligação de vendas.',
      items: [
        {
          href: '/pt-br/tools/website-scan',
          name: 'Scan de site',
          desc: 'Digite uma URL e receba velocidade, SEO, acessibilidade e alertas de GDPR em um relatório.',
          cta: 'Escanear site',
        },
        {
          href: '/pt-br/tools/gbp-check',
          name: 'Check do Google',
          desc: 'Uma lista guiada para o seu perfil no Google — mais uma análise sob medida por e-mail.',
          cta: 'Verificar perfil',
        },
      ],
    },
    scan: {
      metaTitle: 'Scan de site grátis — velocidade, SEO e alertas de GDPR',
      metaDescription:
        'Escaneie qualquer site para PageSpeed, SEO, acessibilidade e alertas de GDPR/segurança. Grátis, na hora, sem conta.',
      eyebrow: 'Scan de site',
      title: 'Quão saudável é o seu site?',
      subtitle:
        'Digite uma URL. Rodamos o Google PageSpeed e verificamos cabeçalhos de segurança e armadilhas comuns de GDPR. Leva cerca de um minuto.',
      urlLabel: 'URL do site',
      urlPlaceholder: 'https://seu-site.com',
      submit: 'Escanear agora',
      running: 'Escaneando… pode levar até um minuto',
      privacyNote:
        'Passamos apenas a URL ao Google PageSpeed e buscamos a página uma vez. Não guardamos sua URL.',
      checksHeading: 'O que verificamos',
      checks: [
        'Pontuação de performance (PageSpeed mobile)',
        'Pontuações de SEO, acessibilidade e boas práticas',
        'HTTPS + cabeçalhos de segurança',
        'Sinais óbvios de GDPR (rastreadores antes do consentimento)',
      ],
      resultHeading: 'Seus resultados',
      errorBody:
        'Não conseguimos escanear essa URL. Verifique se é pública e começa com https:// e tente de novo.',
      ctaHeading: 'Quer os problemas resolvidos?',
      ctaBody: 'Transformamos um scan como este em um site rápido, limpo e em dia com o GDPR.',
      ctaButton: 'Pedir orçamento',
      labelPerformance: 'Performance',
      labelSeo: 'SEO',
      labelAccessibility: 'Acessibilidade',
      labelBestPractices: 'Boas práticas',
      labelSecurity: 'Cabeçalhos de segurança',
      labelHttps: 'HTTPS',
      disclaimer:
        'Apenas indícios — não é aconselhamento jurídico. Uma nota verde é bom sinal, não garantia.',
    },
    gbp: {
      metaTitle: 'Check grátis do Perfil da Empresa no Google',
      metaDescription:
        'Receba uma lista guiada para auditar seu Perfil da Empresa no Google, mais uma análise sob medida por e-mail. Grátis, para negócios em Berlim.',
      eyebrow: 'Check do Google',
      title: 'Seu perfil no Google está trabalhando por você?',
      subtitle:
        'Metade dos seus clientes encontra você primeiro no mapa. Diga seu negócio e enviamos uma análise sob medida — e com a lista abaixo você já se autoavalia agora.',
      nameLabel: 'Nome do negócio',
      namePlaceholder: 'Seu negócio',
      cityLabel: 'Cidade / bairro',
      cityPlaceholder: 'Berlim-Kreuzberg',
      websiteLabel: 'Site (opcional)',
      websitePlaceholder: 'https://seu-site.com',
      emailLabel: 'Seu e-mail',
      emailPlaceholder: 'voce@exemplo.com',
      submit: 'Enviar minha análise',
      running: 'Enviando…',
      privacyNote:
        'Usamos seu e-mail apenas para enviar a análise. Sem newsletter, sem compartilhar. Veja a política de privacidade.',
      checklistHeading: 'Autoavaliação enquanto está aqui',
      checklist: [
        'Sua categoria principal é a mais específica disponível?',
        'Os horários estão corretos, incluindo feriados?',
        'Você tem pelo menos 10 fotos recentes?',
        'Você coleta e responde avaliações ativamente?',
        'Nome, endereço e telefone batem exatamente com o site?',
        'Você adicionou serviços, produtos e uma descrição atualizada?',
      ],
      successTitle: 'A caminho.',
      successBody: 'Obrigado — enviaremos sua análise sob medida do Google em até um dia útil.',
      errorBody: 'Algo deu errado. Tente novamente ou escreva direto para nós.',
      ctaHeading: 'Quer que a gente cuide disso?',
      ctaBody: 'Configurar e gerenciar o Perfil da Empresa no Google faz parte do que fazemos.',
      ctaButton: 'Ver preços',
    },
  },
};
