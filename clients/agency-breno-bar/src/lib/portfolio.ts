/**
 * Portfolio entries — 9 live projects displayed on /portfolio.
 *
 * Each entry has slug, live URL, thumbnail, locale-keyed name/description, and
 * a `vertical` + `services` tag set for filter chips. The `description` is
 * trilingual (EN / DE / pt-BR) per the i18n architecture.
 *
 * Internal demos (slug prefixed "demo-") link to the actual deployed Vercel
 * subdomains. External projects link directly.
 */

import type { Locale } from './site';

export interface PortfolioEntry {
  slug: string;
  liveUrl: string;
  imageSrc: string; // 1600×1000 (16:10) WebP under public/img/portfolio/
  imageAlt: Record<Locale, string>;
  name: string; // proper noun, identical across locales
  vertical: string; // tag for filter chips
  services: Array<'website' | 'seo' | 'gbp' | 'social'>;
  stackBadge: string; // 'Astro 6 · Tier 2' or 'Next.js · Tier 3'
  featured?: boolean; // surfaced on the home portfolio-sampler section
  shortDescription: Record<Locale, string>;
  longDescription: Record<Locale, string>;
}

export const PORTFOLIO: readonly PortfolioEntry[] = [
  {
    slug: 'bonsai-kodama',
    liveUrl: 'https://demo-bonsai-kodama.vercel.app',
    imageSrc: '/img/portfolio/portfolio-bonsai-kodama.webp',
    imageAlt: {
      en: 'Kodama Bonsai, Berlin workshop site hero with bonsai photograph',
      de: 'Kodama Bonsai, Hero der Berliner Werkstatt-Seite mit Bonsai-Foto',
      'pt-br': 'Kodama Bonsai, hero do ateliê berlinense com foto de bonsai',
    },
    name: 'Kodama Bonsai',
    vertical: 'Education · Artisan',
    services: ['website', 'seo'],
    stackBadge: 'Astro 6 · 4 locales',
    featured: true,
    shortDescription: {
      en: 'A small Berlin workshop documenting 24 bonsai species, care, styles, propagation. Four-locale knowledge garden.',
      de: 'Eine kleine Berliner Werkstatt, die 24 Bonsai-Arten dokumentiert, Pflege, Stile, Vermehrung. Wissens-Garten in vier Sprachen.',
      'pt-br':
        'Um pequeno ateliê berlinense documentando 24 espécies de bonsai, cuidado, estilos, propagação. Acervo em quatro idiomas.',
    },
    longDescription: {
      en: 'A multilingual educational resource built on Astro 6 + Tailwind v4. 24 species × 4 locales = 134 routes. Per-species care grid, technique timeline, propagation guide. Schema.org EducationalOrganization + LocalBusiness graph. Cultural translations (not machine 1:1) by botanical-vocabulary specialists.',
      de: 'Eine mehrsprachige Wissens-Plattform auf Basis von Astro 6 + Tailwind v4. 24 Arten × 4 Sprachen = 134 Routen. Pro Art: Pflegeraster, Technik-Timeline, Vermehrungsleitfaden. Schema.org-Graph mit EducationalOrganization + LocalBusiness. Kulturell angepasste Übersetzungen (kein wörtliches 1:1) von Botanik-Spezialisten.',
      'pt-br':
        'Recurso educacional multilíngue em Astro 6 + Tailwind v4. 24 espécies × 4 idiomas = 134 rotas. Por espécie: grade de cuidados, linha do tempo de técnicas, guia de propagação. Grafo Schema.org com EducationalOrganization + LocalBusiness. Traduções culturalmente adaptadas (não 1:1) por especialistas em vocabulário botânico.',
    },
  },
  {
    slug: 'restaurant-adele',
    liveUrl: 'https://demo-restaurant-adele.vercel.app',
    imageSrc: '/img/portfolio/portfolio-restaurant-adele.webp',
    imageAlt: {
      en: 'Adèle, Berlin Mitte restaurant site hero with plated dish',
      de: 'Adèle, Hero der Berlin-Mitte-Restaurantseite mit angerichtetem Gericht',
      'pt-br': 'Adèle, hero do restaurante em Berlin Mitte com prato montado',
    },
    name: 'Adèle',
    vertical: 'Gastronomy · Fine-dining',
    services: ['website', 'seo', 'gbp'],
    stackBadge: 'Astro 6 · 2 locales',
    featured: true,
    shortDescription: {
      en: 'Modern-European five-course menu in Berlin Mitte. Reservation-led booking + seasonal menu rotation.',
      de: 'Modern-europäisches Fünf-Gänge-Menü in Berlin-Mitte. Reservierungsgeführte Buchung + saisonaler Menü-Wechsel.',
      'pt-br':
        'Menu europeu moderno de cinco pratos em Berlin Mitte. Reserva guiada + rotação sazonal do menu.',
    },
    longDescription: {
      en: 'Refined gastronomy positioning, bone palette, serif display, weekly menu prominence. OpenTable integration, structured weekly hours, multi-image Restaurant schema with seasonal aggregateRating disabled per Google policy.',
      de: 'Veredelte Gastronomie-Positionierung, Bone-Palette, Serifen-Display, wöchentliche Menü-Hervorhebung. OpenTable-Integration, strukturierte Wochenöffnungszeiten, mehrere Bilder im Restaurant-Schema; aggregateRating gemäß Google-Richtlinie deaktiviert.',
      'pt-br':
        'Posicionamento gastronômico refinado, paleta bone, display serifa, destaque semanal do menu. Integração OpenTable, horários semanais estruturados, schema Restaurant com múltiplas imagens; aggregateRating desativado conforme política do Google.',
    },
  },
  {
    slug: 'yoga-atem-studio',
    liveUrl: 'https://demo-yoga-atem-studio.vercel.app',
    imageSrc: '/img/portfolio/portfolio-yoga-atem-studio.webp',
    imageAlt: {
      en: 'Atem Studio, Bergmannkiez yoga studio site hero with silhouette in pose',
      de: 'Atem Studio, Hero der Yoga-Studio-Seite im Bergmannkiez mit Silhouette in Pose',
      'pt-br': 'Atem Studio, hero do estúdio de yoga em Bergmannkiez com silhueta em pose',
    },
    name: 'Atem Studio',
    vertical: 'Studio · Wellness',
    services: ['website', 'seo'],
    stackBadge: 'Astro 6 · 2 locales',
    featured: true,
    shortDescription: {
      en: 'Boutique yoga in Bergmannkiez. Small classes, slow transitions, real teachers.',
      de: 'Boutique-Yoga im Bergmannkiez. Kleine Klassen, langsame Übergänge, echte Lehrer:innen.',
      'pt-br':
        'Yoga boutique em Bergmannkiez. Aulas pequenas, transições lentas, professores de verdade.',
    },
    longDescription: {
      en: 'Lavender + ash palette deliberately calming. Class schedule grid, per-teacher pages, trial-class offer with consent-gated form. SportsActivityLocation schema for local-pack eligibility.',
      de: 'Lavendel + Asche-Palette bewusst beruhigend. Stundenplan-Raster, Lehrer:innen-Seiten, Probestunde mit zustimmungspflichtigem Formular. SportsActivityLocation-Schema für die lokale Suchergebnis-Box.',
      'pt-br':
        'Paleta lavanda + cinza, calmante por design. Grade de horários, página por professor, aula experimental com formulário gatedos por consentimento. Schema SportsActivityLocation para o pacote local.',
    },
  },
  {
    slug: 'coffee-saltlines',
    liveUrl: 'https://demo-coffee-saltlines.vercel.app',
    imageSrc: '/img/portfolio/portfolio-coffee-saltlines.webp',
    imageAlt: {
      en: 'Saltlines coffee, Friedrichshain café site hero with ocean wave imagery',
      de: 'Saltlines, Hero der Friedrichshainer Café-Seite mit Meereswellen-Bild',
      'pt-br': 'Saltlines, hero do café em Friedrichshain com imagem de onda do mar',
    },
    name: 'Saltlines Coffee',
    vertical: 'Gastronomy · Specialty café',
    services: ['website', 'seo'],
    stackBadge: 'Astro 6 · 2 locales',
    shortDescription: {
      en: 'Specialty-coffee bar at the Spreeufer in Friedrichshain. Cold brew with sea salt, ceremonial-grade matcha from Uji.',
      de: 'Spezialitätenkaffee-Bar am Spreeufer in Friedrichshain. Cold Brew mit Meersalz, Matcha aus Uji.',
      'pt-br':
        'Bar de café especial à beira do Spreeufer, em Friedrichshain. Cold brew com sal marinho, matcha cerimonial de Uji.',
    },
    longDescription: {
      en: 'Ocean palette, full-bleed wave hero, drinks-card pattern with rotating-roasterie sub-section. CafeOrCoffeeShop schema + opening-hours array + Spreeufer geo coordinates.',
      de: 'Ozean-Palette, ganzflächiger Wellen-Hero, Drinks-Karten-Muster mit rotierendem Röstereien-Bereich. CafeOrCoffeeShop-Schema + Öffnungszeiten-Array + Spreeufer-Geokoordinaten.',
      'pt-br':
        'Paleta oceânica, hero de onda em tela cheia, padrão de cards de drinks com seção rotativa de torrefações. Schema CafeOrCoffeeShop + array de horários + coordenadas geo do Spreeufer.',
    },
  },
  {
    slug: 'barber-bart-pomade',
    liveUrl: 'https://demo-barber-bart-pomade.vercel.app',
    imageSrc: '/img/portfolio/portfolio-barber-bart-pomade.webp',
    imageAlt: {
      en: 'Bart & Pomade, Friedrichshain barbershop site hero with bold typography',
      de: 'Bart & Pomade, Hero der Friedrichshainer Barbershop-Seite mit kräftiger Typografie',
      'pt-br': 'Bart & Pomade, hero da barbearia em Friedrichshain com tipografia em destaque',
    },
    name: 'Bart & Pomade Barbershop',
    vertical: 'Beauty · Barbershop',
    services: ['website', 'seo', 'gbp'],
    stackBadge: 'Astro 6 · 2 locales',
    shortDescription: {
      en: 'Classic scissor-cut + straight-razor shave in Friedrichshain. Walk-in or book.',
      de: 'Klassischer Schnitt mit Schere + Rasiermesser in Friedrichshain. Walk-in oder Buchung.',
      'pt-br':
        'Corte clássico com tesoura + barba com navalha em Friedrichshain. Walk-in ou agendamento.',
    },
    longDescription: {
      en: 'Dark-register barbershop palette (ink + warm-cream + brass-orange). Walk-in vs. booked-appointment distinction, service-price table, BarberShop schema with full operatingHours array.',
      de: 'Dunkles Barbershop-Register (Tinte + Warmcreme + Messing-Orange). Unterscheidung Walk-in vs. Termin, Preistabelle, BarberShop-Schema mit vollständigem operatingHours-Array.',
      'pt-br':
        'Paleta dark-register de barbearia (tinta + creme quente + laranja-latão). Distinção walk-in vs. agendado, tabela de preços de serviços, schema BarberShop com operatingHours completo.',
    },
  },
  {
    slug: 'lawyer-sander-voss',
    liveUrl: 'https://demo-lawyer-sander-voss.vercel.app',
    imageSrc: '/img/portfolio/portfolio-lawyer-sander-voss.webp',
    imageAlt: {
      en: 'Sander & Voss Rechtsanwälte, Berlin Mitte law firm site hero',
      de: 'Sander & Voss Rechtsanwälte, Hero der Berliner Kanzlei-Seite in Mitte',
      'pt-br': 'Sander & Voss Rechtsanwälte, hero do escritório de advocacia em Berlin Mitte',
    },
    name: 'Sander & Voss Rechtsanwälte',
    vertical: 'Professional services · Legal',
    services: ['website', 'seo'],
    stackBadge: 'Astro 6 · 2 locales',
    shortDescription: {
      en: 'Business-law firm in Berlin Mitte. Corporate, tax, employment, data-protection, since 2014.',
      de: 'Wirtschaftskanzlei in Berlin-Mitte. Gesellschafts-, Steuer-, Arbeits-, Datenschutzrecht, seit 2014.',
      'pt-br':
        'Escritório de direito empresarial em Berlin Mitte. Societário, tributário, trabalhista, proteção de dados, desde 2014.',
    },
    longDescription: {
      en: 'Forest-and-gold palette, serif-Bourbon typography, conservative dignified register. Per-practice-area sub-pages, attorney profiles with German Bar credentials, LegalService schema.',
      de: 'Forest-Grün und Goldakzent, Bourbon-Serif-Typografie, konservatives würdiges Register. Pro Rechtsgebiet eine Unterseite, Anwaltsprofile mit Kammerangaben, LegalService-Schema.',
      'pt-br':
        'Paleta verde-floresta com acento dourado, tipografia serif-Bourbon, registro conservador e digno. Sub-páginas por área, perfis de advogados com credenciais da Câmara Alemã, schema LegalService.',
    },
  },
  {
    slug: 'diboas',
    liveUrl: 'https://www.diboas.com',
    imageSrc: '/img/portfolio/portfolio-diboas.webp',
    imageAlt: {
      en: 'diBoaS, open-access finance platform hero with ocean photograph',
      de: 'diBoaS, Hero der Open-Access-Finanzplattform mit Meeresfotografie',
      'pt-br': 'diBoaS, hero da plataforma de finanças de acesso aberto com fotografia oceânica',
    },
    name: 'diBoaS',
    vertical: 'FinTech · Application',
    services: ['website'],
    stackBadge: 'Next.js · Tier 3',
    shortDescription: {
      en: "Open access. Fair opportunities. A money platform that wasn't built for institutions.",
      de: 'Offener Zugang. Faire Chancen. Eine Geld-Plattform, die nicht für Institutionen gebaut wurde.',
      'pt-br':
        'Acesso aberto. Oportunidades justas. Uma plataforma financeira não construída para instituições.',
    },
    longDescription: {
      en: 'Multilingual fintech marketing site with a "Try Demo" funnel + business + learn sub-properties. Ocean visual identity with mature financial-product copy.',
      de: 'Mehrsprachige FinTech-Marketingseite mit "Try-Demo"-Funnel + Business- + Learn-Unterbereichen. Ozeanische Bildsprache mit reifer Finanzprodukt-Copy.',
      'pt-br':
        'Site de marketing fintech multilíngue com funil "Try Demo" + sub-áreas Business + Learn. Identidade visual oceânica com copy de produto financeiro maduro.',
    },
  },
  {
    slug: 'bible-tt',
    liveUrl: 'https://bible-tt.vercel.app',
    imageSrc: '/img/portfolio/portfolio-bible-tt.webp',
    imageAlt: {
      en: 'The Transparent Translation, multilingual Bible-study site hero',
      de: 'The Transparent Translation, Hero der mehrsprachigen Bibelstudien-Seite',
      'pt-br': 'The Transparent Translation, hero do site multilíngue de estudos bíblicos',
    },
    name: 'The Transparent Translation',
    vertical: 'Education · Multilingual study',
    services: ['website'],
    stackBadge: '4 locales',
    shortDescription: {
      en: 'A Bible translation with nothing hidden. Four languages, deep linguistic analysis.',
      de: 'Eine Bibelübersetzung, in der nichts versteckt wird. Vier Sprachen, tiefe linguistische Analyse.',
      'pt-br':
        'Uma tradução da Bíblia que nada esconde. Quatro idiomas, análise linguística profunda.',
    },
    longDescription: {
      en: 'Quad-locale (EN/PT-BR/DE/ES) educational reading experience with a dignified literary tone. Verse-by-verse exploration; emphasis on transparency and source-language fidelity.',
      de: 'Vierfache-Locale (EN/PT-BR/DE/ES) Bildungs-Leseerfahrung in würdigem literarischem Ton. Vers-für-Vers-Erkundung; Schwerpunkt auf Transparenz und Quellsprach-Treue.',
      'pt-br':
        'Experiência educativa de leitura em quatro idiomas (EN/PT-BR/DE/ES) em tom literário e digno. Exploração verso a verso; ênfase em transparência e fidelidade à língua original.',
    },
  },
  {
    slug: 'myplanny',
    liveUrl: 'https://myplanny.vercel.app',
    imageSrc: '/img/portfolio/portfolio-myplanny.webp',
    imageAlt: {
      en: 'myPlanny, retail manager daily planner app interface',
      de: 'myPlanny, Schnittstelle der täglichen Planungs-App für Einzelhandelsmanager',
      'pt-br': 'myPlanny, interface do app de planejamento diário para gerentes de varejo',
    },
    name: 'myPlanny',
    vertical: 'SaaS · Application',
    services: ['website'],
    stackBadge: 'Application UI',
    shortDescription: {
      en: 'Daily-shift planner for retail store managers. Targets, KPIs, breaks, evening-shift handover.',
      de: 'Tagesplaner für Filialleiter:innen im Einzelhandel. Ziele, KPIs, Pausen, Abend-Schicht-Übergabe.',
      'pt-br':
        'Planejador diário para gerentes de loja no varejo. Metas, KPIs, pausas, passagem para o turno da noite.',
    },
    longDescription: {
      en: 'Vibrant gradient palette for an in-store internal tool. Daily-plan layout with team check-in, registers, KPI tiles, PDF export. German + English locale toggle.',
      de: 'Lebhafte Verlaufs-Palette für ein internes Filial-Tool. Tagesplan-Layout mit Team-Check-in, Kassen, KPI-Kacheln, PDF-Export. DE/EN-Umschaltung.',
      'pt-br':
        'Paleta vibrante em degradê para uma ferramenta interna de loja. Layout de plano diário com check-in da equipe, caixas, tiles de KPIs, exportação em PDF. Alternância DE/EN.',
    },
  },
];

export function getFeaturedPortfolio(): readonly PortfolioEntry[] {
  return PORTFOLIO.filter((p) => p.featured);
}

export function getPortfolioBySlug(slug: string): PortfolioEntry | undefined {
  return PORTFOLIO.find((p) => p.slug === slug);
}
