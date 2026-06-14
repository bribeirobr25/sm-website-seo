/**
 * Portfolio entries, 9 live projects displayed on /portfolio.
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
    stackBadge: 'Multilingual website · 4 languages',
    featured: true,
    shortDescription: {
      en: 'A small Berlin workshop documenting 24 bonsai species, care, styles, propagation. Four-locale knowledge garden.',
      de: 'Eine kleine Berliner Werkstatt, die 24 Bonsai-Arten dokumentiert, Pflege, Stile, Vermehrung. Wissens-Garten in vier Sprachen.',
      'pt-br':
        'Um pequeno ateliê berlinense documentando 24 espécies de bonsai, cuidado, estilos, propagação. Acervo em quatro idiomas.',
    },
    longDescription: {
      en: 'A multilingual knowledge garden. 24 bonsai species in 4 languages, carefully translated by botanical specialists. Per-species care grid, technique timeline, propagation guide.',
      de: 'Ein mehrsprachiger Wissens-Garten. 24 Bonsai-Arten in 4 Sprachen, sorgfältig übersetzt von Botanik-Spezialisten. Pro Art: Pflegeraster, Technik-Timeline, Vermehrungsleitfaden.',
      'pt-br':
        'Um jardim de conhecimento multilíngue. 24 espécies de bonsai em 4 idiomas, traduzidas com cuidado por especialistas em botânica. Por espécie: grade de cuidados, linha do tempo de técnicas, guia de propagação.',
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
    stackBadge: 'Multilingual website · 2 languages',
    featured: true,
    shortDescription: {
      en: 'Modern-European five-course menu in Berlin Mitte. Reservation-led booking + seasonal menu rotation.',
      de: 'Modern-europäisches Fünf-Gänge-Menü in Berlin-Mitte. Reservierungsgeführte Buchung + saisonaler Menü-Wechsel.',
      'pt-br':
        'Menu europeu moderno de cinco pratos em Berlin Mitte. Reserva guiada + rotação sazonal do menu.',
    },
    longDescription: {
      en: 'Refined fine-dining positioning. Weekly menu front and centre. Online table booking, structured opening hours, Google-ready listing.',
      de: 'Veredelte Fine-Dining-Positionierung. Wochenmenü im Vordergrund. Online-Tischbuchung, strukturierte Öffnungszeiten, Google-fertiger Eintrag.',
      'pt-br':
        'Posicionamento gastronômico refinado. Menu semanal em destaque. Reserva de mesa online, horários estruturados, listagem Google pronta.',
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
    stackBadge: 'Multilingual website · 2 languages',
    featured: true,
    shortDescription: {
      en: 'Boutique yoga in Bergmannkiez. Small classes, slow transitions, real teachers.',
      de: 'Boutique-Yoga im Bergmannkiez. Kleine Klassen, langsame Übergänge, echte Lehrer:innen.',
      'pt-br':
        'Yoga boutique em Bergmannkiez. Aulas pequenas, transições lentas, professores de verdade.',
    },
    longDescription: {
      en: "Calm, contemplative atmosphere. Class schedule grid, per-teacher pages, trial-class signup form. Google listing optimised for 'yoga near me' searches.",
      de: "Ruhige, kontemplative Atmosphäre. Stundenplan-Raster, Lehrer:innen-Seiten, Probestunden-Formular. Google-Eintrag, optimiert für 'Yoga in der Nähe'-Suchen.",
      'pt-br':
        "Atmosfera calma e contemplativa. Grade de horários, página por professor, formulário de aula experimental. Listagem Google otimizada para buscas por 'yoga perto de mim'.",
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
    stackBadge: 'Multilingual website · 2 languages',
    shortDescription: {
      en: 'Specialty-coffee bar at the Spreeufer in Friedrichshain. Cold brew with sea salt, ceremonial-grade matcha from Uji.',
      de: 'Spezialitätenkaffee-Bar am Spreeufer in Friedrichshain. Cold Brew mit Meersalz, Matcha aus Uji.',
      'pt-br':
        'Bar de café especial à beira do Spreeufer, em Friedrichshain. Cold brew com sal marinho, matcha cerimonial de Uji.',
    },
    longDescription: {
      en: 'Full drinks menu with a rotating-roastery section. Opening hours, exact Spreeufer location, café listing fully populated on Google.',
      de: 'Vollständige Getränkekarte mit rotierendem Röstereien-Bereich. Öffnungszeiten, exakter Spreeufer-Standort, vollständig befüllter Café-Eintrag bei Google.',
      'pt-br':
        'Cardápio completo de bebidas com seção rotativa de torrefações. Horários de funcionamento, localização exata no Spreeufer, listagem do café totalmente preenchida no Google.',
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
    stackBadge: 'Multilingual website · 2 languages',
    shortDescription: {
      en: 'Classic scissor-cut + straight-razor shave in Friedrichshain. Walk-in or book.',
      de: 'Klassischer Schnitt mit Schere + Rasiermesser in Friedrichshain. Walk-in oder Buchung.',
      'pt-br':
        'Corte clássico com tesoura + barba com navalha em Friedrichshain. Walk-in ou agendamento.',
    },
    longDescription: {
      en: 'Walk-in vs. booking clearly separated. Service-price table. Fully populated Google listing with opening hours, photos and services.',
      de: 'Walk-in vs. Termin klar getrennt. Preistabelle. Vollständig befüllter Google-Eintrag mit Öffnungszeiten, Fotos und Services.',
      'pt-br':
        'Walk-in e agendamento claramente separados. Tabela de preços de serviços. Listagem Google totalmente preenchida com horários, fotos e serviços.',
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
    stackBadge: 'Multilingual website · 2 languages',
    shortDescription: {
      en: 'Business-law firm in Berlin Mitte. Corporate, tax, employment, data-protection, since 2014.',
      de: 'Wirtschaftskanzlei in Berlin-Mitte. Gesellschafts-, Steuer-, Arbeits-, Datenschutzrecht, seit 2014.',
      'pt-br':
        'Escritório de direito empresarial em Berlin Mitte. Societário, tributário, trabalhista, proteção de dados, desde 2014.',
    },
    longDescription: {
      en: 'Conservative, dignified register fitting a Berlin business-law practice. Per-practice-area sub-pages, attorney profiles with German Bar credentials, Google listing for professional services.',
      de: 'Konservatives, würdiges Register, passend für eine Berliner Wirtschaftskanzlei. Pro Rechtsgebiet eine Unterseite, Anwaltsprofile mit Kammerangaben, Google-Eintrag für professionelle Dienstleistungen.',
      'pt-br':
        'Registro conservador e digno, adequado para um escritório de direito empresarial em Berlim. Sub-páginas por área, perfis de advogados com credenciais da Câmara Alemã, listagem Google para serviços profissionais.',
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
    stackBadge: 'Multilingual web application',
    shortDescription: {
      en: "Open access. Fair opportunities. A money platform that wasn't built for institutions.",
      de: 'Offener Zugang. Faire Chancen. Eine Geld-Plattform, die nicht für Institutionen gebaut wurde.',
      'pt-br':
        'Acesso aberto. Oportunidades justas. Uma plataforma financeira não construída para instituições.',
    },
    longDescription: {
      en: 'Multilingual marketing site for an open-access money platform. Try-it-yourself demo entry point, separate Business and Learn sections, mature financial-product voice.',
      de: 'Mehrsprachige Marketingseite für eine Open-Access-Geld-Plattform. Selbst-Ausprobieren-Demo, getrennte Business- und Learn-Bereiche, reife Finanzprodukt-Stimme.',
      'pt-br':
        'Site de marketing multilíngue para uma plataforma financeira de acesso aberto. Ponto de entrada para experimentar a demo, seções separadas de Business e Learn, voz madura de produto financeiro.',
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
    stackBadge: 'Multilingual reading experience · 4 languages',
    shortDescription: {
      en: 'A Bible translation with nothing hidden. Four languages, deep linguistic analysis.',
      de: 'Eine Bibelübersetzung, in der nichts versteckt wird. Vier Sprachen, tiefe linguistische Analyse.',
      'pt-br':
        'Uma tradução da Bíblia que nada esconde. Quatro idiomas, análise linguística profunda.',
    },
    longDescription: {
      en: 'A four-language reading experience (EN, PT-BR, DE, ES) with a dignified literary tone. Verse-by-verse exploration, emphasis on transparency and fidelity to the source languages.',
      de: 'Eine viersprachige Leseerfahrung (EN, PT-BR, DE, ES) in würdigem literarischem Ton. Vers-für-Vers-Erkundung, Schwerpunkt auf Transparenz und Treue zur Ursprungssprache.',
      'pt-br':
        'Uma experiência de leitura em quatro idiomas (EN, PT-BR, DE, ES) em tom literário e digno. Exploração verso a verso, ênfase em transparência e fidelidade à língua original.',
    },
  },
  {
    slug: 'eiscafe-bellini',
    liveUrl: 'https://demo-gastronomy.vercel.app',
    imageSrc: '/img/portfolio/portfolio-eiscafe-bellini.webp',
    imageAlt: {
      en: 'Eiscafé Bellini, Berlin gelateria site hero with the gelato counter',
      de: 'Eiscafé Bellini, Hero der Berliner Gelateria-Seite mit der Eistheke',
      'pt-br': 'Eiscafé Bellini, hero do site da gelateria berlinense com o balcão de gelato',
    },
    name: 'Eiscafé Bellini',
    vertical: 'Gastronomy · Gelateria',
    services: ['website', 'seo', 'gbp'],
    stackBadge: 'Multilingual website · 2 languages',
    shortDescription: {
      en: 'Three generations of family gelato in Berlin since 1987. Named-source ingredients, seasonal menu.',
      de: 'Drei Generationen Familieneis in Berlin seit 1987. Zutaten aus benannten Quellen, saisonale Karte.',
      'pt-br':
        'Três gerações de gelato de família em Berlim desde 1987. Ingredientes de origem nomeada, cardápio sazonal.',
    },
    longDescription: {
      en: 'A neighbourhood gelateria in Prenzlauer Berg. Bilingual menu of gelato, sorbet, and Spezialitäten with named-source ingredients (Bronte pistachio, Modica chocolate), seasonal rotation, and a warm family story.',
      de: 'Eine Kiez-Gelateria in Prenzlauer Berg. Zweisprachige Karte mit Eis, Sorbet und Spezialitäten aus benannten Quellen (Bronte-Pistazie, Modica-Schokolade), saisonalem Wechsel und einer warmen Familiengeschichte.',
      'pt-br':
        'Uma gelateria de bairro em Prenzlauer Berg. Cardápio bilíngue de gelato, sorbet e Spezialitäten com ingredientes de origem nomeada (pistache de Bronte, chocolate de Modica), rotação sazonal e uma história de família acolhedora.',
    },
  },
];

export function getFeaturedPortfolio(): readonly PortfolioEntry[] {
  return PORTFOLIO.filter((p) => p.featured);
}

export function getPortfolioBySlug(slug: string): PortfolioEntry | undefined {
  return PORTFOLIO.find((p) => p.slug === slug);
}
