/**
 * 24 bonsai species — care + styles + techniques + propagation data.
 *
 * Sourced from agency-internal bonsai-horticulture research 2026-05-26.
 * Cross-reference against bonsaiempire.com / bonsaimirai.com / herons.co.uk
 * before publishing as authoritative client-facing content.
 *
 * DRAFT items (see comments inline) need human verification:
 * - Chloroleucon tortum: exact cold tolerance + cuttings success rate
 * - Serissa japonica: cuttings success rate
 *
 * Climate calibration: Berlin Hardiness Zone 7b.
 * Olea europaea requires frost-free winter shelter (not fully hardy).
 */

export type Locale = 'de' | 'en';
export type Category = 'indoor' | 'outdoor' | 'both';
export type PropagationMethod = 'Seed' | 'Cuttings' | 'Air layering' | 'Grafting';

export interface Tree {
  slug: string;
  popularName: { de: string; en: string };
  scientificName: string;
  family: string;
  origin: string;
  category: Category;
  beginnerFriendly: boolean;
  introduction: { de: string; en: string };
  care: {
    sun: { de: string; en: string };
    soil: { de: string; en: string };
    watering: { de: string; en: string };
    fertilizing: { de: string; en: string };
    temperature: { de: string; en: string };
    pruning: { de: string; en: string };
  };
  styles: Array<{
    name: string;
    de: string;
    en: string;
  }>;
  techniques: Array<{
    name: { de: string; en: string };
    period: { de: string; en: string };
    minimumAge: string;
    description: { de: string; en: string };
  }>;
  propagation: {
    method: PropagationMethod;
    period: { de: string; en: string };
    postCare: { de: string; en: string };
  };
  photos: Array<{
    src: string;
    alt: { de: string; en: string };
    credit: string;
    license: string;
  }>;
}

export const TREES: readonly Tree[] = [
  // ============ INDOOR (10) ============
  {
    slug: 'ficus-retusa',
    popularName: { de: 'Ginseng-Ficus', en: 'Ginseng Ficus' },
    scientificName: 'Ficus retusa',
    family: 'Moraceae',
    origin: 'Tropical Asia',
    category: 'indoor',
    beginnerFriendly: true,
    introduction: {
      de: 'Ein robuster Zimmerbonsai mit glänzendem dunkelgrünem Laub und auffälligen Luftwurzeln. Bei Anfängern besonders beliebt, weil er Pflegefehler verzeiht und schnell wächst. Charakteristisch sind die fleischigen, manchmal stark verdickten Wurzeln, die ihm den Beinamen "Ginseng" einbrachten.',
      en: 'A robust indoor bonsai with glossy dark-green foliage and prominent aerial roots. Especially popular with beginners because it forgives care mistakes and grows quickly. Its fleshy, sometimes heavily swollen roots gave rise to the "ginseng" nickname.',
    },
    care: {
      sun: { de: 'Helles indirektes Licht, gerne auch einige Stunden direkte Morgensonne. Im Sommer ins Freie an einen halbschattigen Platz.', en: 'Bright indirect light; some direct morning sun is welcome. Move outdoors to a partly shaded spot in summer.' },
      soil: { de: 'Akadama 60 % + Bims 20 % + Lava 20 %, gut wasserdurchlässig.', en: 'Akadama 60% + pumice 20% + lava 20%, free-draining.' },
      watering: { de: 'Gießen, sobald die Substratoberfläche antrocknet. Verträgt kurze Trockenheit besser als Staunässe.', en: 'Water once the substrate surface dries. Tolerates brief drought better than waterlogging.' },
      fertilizing: { de: 'Alle 2 Wochen Frühling–Herbst mit organischem Flüssigdünger, im Winter alle 4–6 Wochen reduziert.', en: 'Every 2 weeks spring–autumn with organic liquid feed; reduced to every 4–6 weeks in winter.' },
      temperature: { de: '18–25 °C ganzjährig, nicht unter 15 °C, frostempfindlich.', en: '18–25 °C year-round, not below 15 °C, frost-sensitive.' },
      pruning: { de: 'Triebspitzen bei 6–8 Blättern auf 2 zurückschneiden; verträgt auch starken Rückschnitt im Frühjahr.', en: 'Pinch shoots back to 2 leaves once they have 6–8; tolerates hard pruning in spring.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil — leichte Stammkurven, sehr verbreitet bei Ficus.', en: 'Informal upright — gentle trunk curves, very common for Ficus.' },
      { name: 'Banyan', de: 'Banyan-Stil mit prägnanten Luftwurzeln, die zu Sekundärstämmen werden.', en: 'Banyan style with prominent aerial roots that become secondary trunks.' },
      { name: 'Ne-agari', de: 'Freigelegte Wurzeln — typisch für Ginseng-Ficus mit fleischigen Wurzelkörpern.', en: 'Exposed-root style — typical for Ginseng Ficus with fleshy root bodies.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Ganzjährig möglich, ideal späten Frühling–Sommer', en: 'Possible year-round, ideal late spring–summer' }, minimumAge: '2+ Jahre / 2+ years', description: { de: 'Aluminiumdraht 1–4 mm verwenden. Rinde ist druckempfindlich — regelmäßig kontrollieren und nach 6–8 Wochen abnehmen, bevor sie einwächst.', en: 'Use aluminum wire 1–4 mm. Bark is pressure-sensitive — check regularly and remove after 6–8 weeks before it bites in.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März–Mai) bei Temperaturen über 18 °C', en: 'Spring (March–May) at temperatures above 18 °C' }, minimumAge: 'Alle 2–3 Jahre / every 2–3 years', description: { de: 'Wurzelballen um ein Drittel zurückschneiden, in frisches Substrat setzen. Erholt sich rasch.', en: 'Reduce root mass by one-third and repot into fresh substrate. Recovers quickly.' } },
      { name: { de: 'Entlauben', en: 'Defoliation' }, period: { de: 'Frühsommer (Juni)', en: 'Early summer (June)' }, minimumAge: '5+ Jahre, nur an gesunden Bäumen', description: { de: 'Alle Blätter abschneiden, Stiele bleiben. Treibt mit kleineren Blättern wieder aus; verfeinert die Verzweigung.', en: 'Cut all leaves leaving petioles. Reflushes with smaller leaves; refines ramification.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Frühling–Sommer (Mai–August)', en: 'Spring–summer (May–August)' }, postCare: { de: 'Halbschattig halten, Substrat gleichmäßig feucht, hohe Luftfeuchtigkeit. Bewurzelung nach 4–8 Wochen. Abmoosen ebenfalls sehr erfolgreich.', en: 'Keep in half-shade with evenly moist substrate and high humidity. Roots form in 4–8 weeks. Air layering is also very successful.' } },
    photos: [
      { src: '/img/trees/ficus-retusa-1.webp', alt: { de: 'Ginseng-Ficus mit fleischigen Wurzeln', en: 'Ginseng Ficus with fleshy roots' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/ficus-retusa-2.webp', alt: { de: 'Ficus-retusa-Laub', en: 'Ficus retusa foliage' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/ficus-retusa-3.webp', alt: { de: 'Ficus-Bonsai im Banyan-Stil', en: 'Ficus bonsai in banyan style' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'ulmus-parvifolia',
    popularName: { de: 'Chinesische Ulme', en: 'Chinese Elm' },
    scientificName: 'Ulmus parvifolia',
    family: 'Ulmaceae',
    origin: 'East Asia',
    category: 'both',
    beginnerFriendly: true,
    introduction: { de: 'Eine der vielseitigsten Bonsai-Arten — feine Verzweigung, kleine Blätter und eine attraktive abblätternde Rinde. Wird in Europa oft als Indoor-Bonsai verkauft, gedeiht aber langfristig im Freien deutlich besser. Sehr anpassungsfähig und schnittverträglich.', en: 'One of the most versatile bonsai species — fine ramification, small leaves and attractive flaking bark. Often sold as an indoor bonsai in Europe but long-term it does much better outdoors. Highly adaptable and tolerant of pruning.' },
    care: {
      sun: { de: 'Volle Sonne im Freien, indoor heller Fensterplatz mit einigen Stunden direktem Licht.', en: 'Full sun outdoors; indoors a bright window with several hours of direct light.' },
      soil: { de: 'Akadama 50 % + Bims 25 % + Lava 25 %, gut drainiert.', en: 'Akadama 50% + pumice 25% + lava 25%, well-drained.' },
      watering: { de: 'Regelmäßig gießen, sobald das Substrat antrocknet — Ulmen mögen es feucht, aber nie staunass.', en: 'Water regularly as the substrate begins to dry — elms like moisture but never waterlogging.' },
      fertilizing: { de: 'Alle 2 Wochen März–Oktober mit organischem oder ausgewogenem Flüssigdünger.', en: 'Every 2 weeks March–October with organic or balanced liquid fertilizer.' },
      temperature: { de: 'Im Freien winterhart bis ca. −10 °C mit Wurzelschutz; chinesische Herkünfte vorsichtiger überwintern.', en: 'Outdoors hardy to roughly −10 °C with root protection; Chinese provenances need a more sheltered winter.' },
      pruning: { de: 'Triebspitzen bei 4–6 Blättern auf 2 zurückschneiden. Strukturschnitt im Spätwinter vor dem Austrieb.', en: 'Pinch shoots back to 2 leaves once they have 4–6. Structural pruning in late winter before bud break.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil — die häufigste Form für chinesische Ulmen.', en: 'Informal upright — the most common form for Chinese Elm.' },
      { name: 'Hokidachi', de: 'Besenstil — symmetrische, halbkugelige Krone, ideal für die feine Verzweigung der Ulme.', en: 'Broom style — symmetrical dome-shaped crown, ideal for the elm’s fine ramification.' },
      { name: 'Kabudachi', de: 'Mehrstämmiger Stil aus einer Wurzel.', en: 'Multi-trunk style from a single root base.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Spätherbst–Winter (November–Februar) ohne Laub', en: 'Late autumn–winter (November–February) without leaves' }, minimumAge: '2+ Jahre / 2+ years', description: { de: 'Aluminiumdraht; junge Rinde ist empfindlich. Nach 3–6 Monaten kontrollieren.', en: 'Aluminum wire; young bark is sensitive. Check after 3–6 months.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (Februar–April) wenn die Knospen schwellen', en: 'Spring (February–April) as buds swell' }, minimumAge: 'Alle 2 Jahre jüngere, alle 3–4 Jahre ältere Bäume', description: { de: 'Wurzeln um ein Drittel kürzen. Verträgt deutlichen Wurzelschnitt.', en: 'Prune roots back by one-third. Tolerates substantial root reduction.' } },
      { name: { de: 'Entlauben', en: 'Defoliation' }, period: { de: 'Frühsommer (Juni)', en: 'Early summer (June)' }, minimumAge: '5+ Jahre, nur an gesunden Bäumen', description: { de: 'Komplettes oder teilweises Entlauben fördert kleinere Blätter und feinere Verzweigung.', en: 'Full or partial defoliation promotes smaller leaves and finer ramification.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Frühsommer (Juni–Juli) Halbholzstecklinge', en: 'Early summer (June–July) semi-hardwood cuttings' }, postCare: { de: 'Halbschattig, feuchtes Substrat, hohe Luftfeuchte. Bewurzelung nach 6–10 Wochen. Auch Aussaat im Frühjahr möglich.', en: 'Half-shade, moist substrate, high humidity. Roots form in 6–10 weeks. Seed sowing in spring is also possible.' } },
    photos: [
      { src: '/img/trees/ulmus-parvifolia-1.webp', alt: { de: 'Chinesische Ulme als Bonsai', en: 'Chinese Elm as bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/ulmus-parvifolia-2.webp', alt: { de: 'Ulmus parvifolia Blätter', en: 'Ulmus parvifolia leaves' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/ulmus-parvifolia-3.webp', alt: { de: 'Chinese Elm Stamm-Detail', en: 'Chinese Elm trunk detail' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'carmona-retusa',
    popularName: { de: 'Fukientee', en: 'Fukien Tea' },
    scientificName: 'Carmona retusa',
    family: 'Boraginaceae',
    origin: 'South China, Southeast Asia',
    category: 'indoor',
    beginnerFriendly: false,
    introduction: { de: 'Ein häufig als Anfängerbonsai verkaufter, in der Pflege jedoch anspruchsvoller Zimmerbonsai mit kleinen, glänzenden Blättern und zarten weißen Blüten. Blüht praktisch ganzjährig, gefolgt von kleinen roten oder schwarzen Beeren. Reagiert empfindlich auf Standortwechsel, Zugluft und Wasserschwankungen.', en: 'A small-leaved, glossy indoor bonsai often marketed as a beginner tree but actually demanding in care, with delicate white flowers nearly year-round followed by small red or black berries. Sensitive to location changes, drafts and irregular watering.' },
    care: {
      sun: { de: 'Sehr hell, einige Stunden direkte Sonne (Süd-/Ostfenster). Im Sommer geschützt ins Freie.', en: 'Very bright, several hours of direct sun (south/east window). Sheltered outdoor position in summer.' },
      soil: { de: 'Akadama 60 % + Bims 20 % + Lava 20 %, leicht sauer.', en: 'Akadama 60% + pumice 20% + lava 20%, slightly acidic.' },
      watering: { de: 'Substrat gleichmäßig feucht halten, aber nie staunass. Kalkarmes (Regen-)Wasser bevorzugen.', en: 'Keep substrate evenly moist but never waterlogged. Prefers low-calcium (rain) water.' },
      fertilizing: { de: 'Alle 2 Wochen Frühling–Herbst, im Winter monatlich reduziert.', en: 'Every 2 weeks spring–autumn; reduced to monthly in winter.' },
      temperature: { de: '18–24 °C ganzjährig, nicht unter 15 °C, frostempfindlich.', en: '18–24 °C year-round, not below 15 °C, frost-sensitive.' },
      pruning: { de: 'Triebspitzen bei 6–8 Blättern auf 2 zurückschneiden. Stärkerer Schnitt im Frühjahr.', en: 'Pinch shoots back to 2 leaves once they have 6–8. Heavier pruning in spring.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil — am häufigsten im Handel.', en: 'Informal upright — most common in commerce.' },
      { name: 'Shakan', de: 'Geneigter Stil mit ausgeprägter Stammneigung.', en: 'Slanting style with pronounced trunk lean.' },
      { name: 'Kengai', de: 'Kaskade — passend zu hängenden Blütenzweigen.', en: 'Cascade — suits the species’ flowering pendulous branches.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Frühling–Sommer während aktiver Wachstumsphase', en: 'Spring–summer during active growth' }, minimumAge: '3+ Jahre / 3+ years', description: { de: 'Aluminiumdraht 1–3 mm. Holz ist spröde — vorsichtig biegen, lieber in mehreren Etappen.', en: 'Aluminum wire 1–3 mm. Wood is brittle — bend gently and in stages.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (April–Mai) bei Temperaturen über 18 °C', en: 'Spring (April–May) at temperatures above 18 °C' }, minimumAge: 'Alle 2 Jahre / every 2 years', description: { de: 'Wurzelschnitt vorsichtig (max. 1/4). Carmona reagiert empfindlich auf starke Wurzelreduktion.', en: 'Prune roots conservatively (max one-quarter). Carmona is sensitive to heavy root reduction.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Frühsommer (Mai–Juli) Halbholzstecklinge', en: 'Early summer (May–July) semi-hardwood cuttings' }, postCare: { de: 'Bodenwärme 22–25 °C, hohe Luftfeuchte, halbschattig. Bewurzelung nach 6–10 Wochen, oft schwierig.', en: 'Bottom heat 22–25 °C, high humidity, half-shade. Roots form in 6–10 weeks; often tricky.' } },
    photos: [
      { src: '/img/trees/carmona-retusa-1.webp', alt: { de: 'Fukientee mit weißen Blüten', en: 'Fukien Tea with white flowers' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/carmona-retusa-2.webp', alt: { de: 'Carmona-Bonsai-Detail', en: 'Carmona bonsai detail' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/carmona-retusa-3.webp', alt: { de: 'Fukientee-Stamm', en: 'Fukien Tea trunk' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'portulacaria-afra',
    popularName: { de: 'Geldbaum / Speckbaum', en: 'Elephant Bush / Dwarf Jade' },
    scientificName: 'Portulacaria afra',
    family: 'Didiereaceae',
    origin: 'Southern Africa',
    category: 'indoor',
    beginnerFriendly: true,
    introduction: { de: 'Ein extrem pflegeleichter sukkulenter Zimmerbonsai mit kleinen, fleischigen Blättern und rotbrauner Rinde. Verzeiht Trockenheit und ist deshalb ideal für Anfänger und Reisende. Wächst überraschend schnell und lässt sich leicht gestalten.', en: 'An extremely low-maintenance succulent indoor bonsai with small fleshy leaves and reddish-brown bark. Forgives drought and is therefore ideal for beginners and travellers. Grows surprisingly fast and is easy to shape.' },
    care: {
      sun: { de: 'Sehr hell, direkte Sonne ganzjährig — Süd- oder Westfenster, im Sommer ins Freie.', en: 'Very bright, direct sun year-round — south/west window, outdoors in summer.' },
      soil: { de: 'Sehr durchlässig: Bims 50 % + Akadama 30 % + Lava 20 %, oder Sukkulentensubstrat.', en: 'Very free-draining: pumice 50% + akadama 30% + lava 20%, or succulent mix.' },
      watering: { de: 'Sparsam — erst gießen, wenn das Substrat vollständig trocken ist. Im Winter fast trocken halten.', en: 'Sparingly — only water when the substrate is fully dry. Keep nearly dry in winter.' },
      fertilizing: { de: 'Monatlich Frühling–Herbst mit halb konzentriertem Flüssigdünger, im Winter aussetzen.', en: 'Monthly spring–autumn at half-strength liquid feed; skip in winter.' },
      temperature: { de: '15–30 °C, nicht unter 10 °C, frostempfindlich.', en: '15–30 °C, not below 10 °C, frost-sensitive.' },
      pruning: { de: 'Jederzeit möglich — Triebe auf gewünschte Länge zurückschneiden, Schnittstellen antrocknen lassen.', en: 'Possible any time — cut shoots to desired length and let cut surfaces callus.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil — natürlicher Wuchs.', en: 'Informal upright — natural growth habit.' },
      { name: 'Kengai', de: 'Kaskade — durch die weichen Triebe besonders geeignet.', en: 'Cascade — particularly suitable thanks to the soft shoots.' },
      { name: 'Kabudachi', de: 'Mehrstammstil — entsteht leicht aus mehreren Stecklingen.', en: 'Multi-trunk — easily formed from multiple cuttings.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Ganzjährig, ideal späten Frühling–Sommer', en: 'Year-round, ideally late spring–summer' }, minimumAge: '2+ Jahre / 2+ years', description: { de: 'Junge Triebe verholzen schnell. Vorsicht: Triebe sind brüchig, daher in mehreren kleinen Schritten biegen.', en: 'Young shoots lignify quickly. Caution: shoots are brittle, so bend in several small stages.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühling–Frühsommer (April–Juni)', en: 'Spring–early summer (April–June)' }, minimumAge: 'Alle 2–3 Jahre / every 2–3 years', description: { de: 'Wurzeln vor dem Einpflanzen 1–2 Tage antrocknen lassen, dann erst nach einer Woche wieder gießen.', en: 'Let roots dry 1–2 days before potting and wait a week before watering again.' } },
      { name: { de: 'Clip-and-grow', en: 'Clip-and-grow' }, period: { de: 'Wachstumsperiode (April–September)', en: 'Growing season (April–September)' }, minimumAge: '1+ Jahr', description: { de: 'Statt zu drahten oft besser: regelmäßig zurückschneiden, neue Triebe übernehmen die Richtung.', en: 'Often better than wiring: prune regularly and let new shoots take over the direction.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Ganzjährig, ideal Frühling–Sommer', en: 'Year-round, ideally spring–summer' }, postCare: { de: 'Stecklinge 1–3 Tage antrocknen lassen, dann in trockenes Substrat stecken. Erst nach 1–2 Wochen leicht angießen. Bewurzelung nach 2–4 Wochen.', en: 'Let cuttings callus for 1–3 days, then insert in dry substrate. Water lightly only after 1–2 weeks. Roots form in 2–4 weeks.' } },
    photos: [
      { src: '/img/trees/portulacaria-afra-1.webp', alt: { de: 'Portulacaria afra Bonsai', en: 'Portulacaria afra bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/portulacaria-afra-2.webp', alt: { de: 'Sukkulente Blätter', en: 'Succulent foliage' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/portulacaria-afra-3.webp', alt: { de: 'Speckbaum Stamm', en: 'Elephant Bush trunk' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'crassula-ovata',
    popularName: { de: 'Geldbaum / Jade-Baum', en: 'Jade Tree / Money Tree' },
    scientificName: 'Crassula ovata',
    family: 'Crassulaceae',
    origin: 'Southern Africa',
    category: 'indoor',
    beginnerFriendly: true,
    introduction: { de: 'Ein klassischer Sukkulenten-Bonsai mit dicken, glänzenden Blättern und einem charakteristisch wulstigen Stamm. Extrem genügsam, ideal für Einsteiger und vergessliche Pfleger. Im Gegensatz zur Portulacaria mit gröberer Blattmasse — weniger filigran, aber sehr robust.', en: 'A classic succulent bonsai with thick glossy leaves and a characteristically swollen trunk. Extremely undemanding, ideal for beginners and forgetful caretakers. Compared to Portulacaria the foliage is coarser — less delicate but very robust.' },
    care: {
      sun: { de: 'Sehr viel direkte Sonne, Süd- oder Westfenster. Im Sommer ins Freie an einen sonnigen Platz.', en: 'Lots of direct sun, south or west window. Outdoors in a sunny spot in summer.' },
      soil: { de: 'Sehr durchlässig: Bims 50 % + Akadama 30 % + Lava 20 %, oder Kakteenerde.', en: 'Very free-draining: pumice 50% + akadama 30% + lava 20%, or cactus mix.' },
      watering: { de: 'Sehr sparsam — erst gießen, wenn das Substrat vollständig trocken ist. Im Winter fast trocken halten.', en: 'Very sparingly — only water when substrate is fully dry. Keep nearly dry in winter.' },
      fertilizing: { de: 'Monatlich Frühling–Herbst mit halb konzentriertem Sukkulentendünger, im Winter aussetzen.', en: 'Monthly spring–autumn at half-strength succulent fertilizer; skip in winter.' },
      temperature: { de: '15–28 °C, nicht unter 8 °C, frostempfindlich.', en: '15–28 °C, not below 8 °C, frost-sensitive.' },
      pruning: { de: 'Jederzeit möglich — Triebe zurückschneiden, große Schnittstellen austrocknen lassen.', en: 'Possible any time — cut shoots back and let large cut surfaces callus.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil — natürlicher Wuchs.', en: 'Informal upright — natural habit.' },
      { name: 'Kabudachi', de: 'Mehrstämmig — Crassula treibt von Natur aus mehrere Stämme.', en: 'Multi-trunk — Crassula naturally produces multiple trunks.' },
      { name: 'Bunjin', de: 'Literatenstil — schlanker, gewundener Stamm mit sparsamem Laub.', en: 'Literati — slender twisted trunk with sparse foliage.' },
    ],
    techniques: [
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühling–Frühsommer (Mai–Juni) bei warmem Wetter', en: 'Spring–early summer (May–June) in warm weather' }, minimumAge: 'Alle 2–3 Jahre / every 2–3 years', description: { de: 'Wurzeln vor dem Einpflanzen 2–3 Tage antrocknen lassen, dann 7–10 Tage trocken halten.', en: 'Let roots dry 2–3 days before potting, then keep dry for 7–10 days.' } },
      { name: { de: 'Clip-and-grow', en: 'Clip-and-grow' }, period: { de: 'Wachstumsperiode (April–September)', en: 'Growing season (April–September)' }, minimumAge: '1+ Jahr', description: { de: 'Drahten ist kaum möglich — Form wird ausschließlich durch Rückschnitt entwickelt.', en: 'Wiring is hardly possible — form is developed exclusively by pruning.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Frühling–Sommer (Mai–August)', en: 'Spring–summer (May–August)' }, postCare: { de: 'Stecklinge 2–5 Tage antrocknen lassen, dann in trockenes Sukkulentensubstrat. Sehr leicht zu bewurzeln, oft in 3–5 Wochen.', en: 'Let cuttings callus 2–5 days, then insert in dry succulent substrate. Roots very easily, often in 3–5 weeks.' } },
    photos: [
      { src: '/img/trees/crassula-ovata-1.webp', alt: { de: 'Crassula ovata Bonsai', en: 'Crassula ovata bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/crassula-ovata-2.webp', alt: { de: 'Jade Baum Blätter', en: 'Jade tree leaves' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/crassula-ovata-3.webp', alt: { de: 'Geldbaum Stamm', en: 'Money tree trunk' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'schefflera-arboricola',
    popularName: { de: 'Zwerg-Strahlenaralie', en: 'Dwarf Umbrella Tree' },
    scientificName: 'Schefflera arboricola',
    family: 'Araliaceae',
    origin: 'Taiwan, Hainan',
    category: 'indoor',
    beginnerFriendly: true,
    introduction: { de: 'Ein robuster tropischer Zimmerbonsai mit auffälligen handförmigen Blättern und Neigung zu spektakulären Luftwurzeln. Verträgt schlechte Lichtverhältnisse besser als die meisten anderen Zimmerbonsai. Wird oft im "Hawaiian Umbrella"-Stil mit Luftwurzelsäulen gestaltet.', en: 'A robust tropical indoor bonsai with striking palmate leaves and a tendency to produce spectacular aerial roots. Tolerates low light better than most other indoor bonsai. Often styled in the "Hawaiian Umbrella" form with aerial-root columns.' },
    care: {
      sun: { de: 'Hell bis halbschattig, einige Stunden indirektes Licht reichen. Direkte Mittagssonne meiden.', en: 'Bright to partly shaded; a few hours of indirect light suffice. Avoid harsh midday sun.' },
      soil: { de: 'Akadama 50 % + Bims 30 % + Lava 20 %, feuchtigkeitsspeichernd.', en: 'Akadama 50% + pumice 30% + lava 20%, moisture-retentive.' },
      watering: { de: 'Substrat gleichmäßig feucht halten. Hohe Luftfeuchte fördert Luftwurzelbildung.', en: 'Keep substrate evenly moist. High humidity encourages aerial root formation.' },
      fertilizing: { de: 'Alle 2 Wochen Frühling–Herbst, im Winter monatlich.', en: 'Every 2 weeks spring–autumn, monthly in winter.' },
      temperature: { de: '18–25 °C ganzjährig, nicht unter 12 °C, frostempfindlich.', en: '18–25 °C year-round, not below 12 °C, frost-sensitive.' },
      pruning: { de: 'Triebe regelmäßig auf 1–2 Blätter zurückschneiden. Verträgt auch starken Rückschnitt.', en: 'Trim shoots regularly back to 1–2 leaves. Tolerates hard pruning.' },
    },
    styles: [
      { name: 'Banyan', de: 'Banyan-Stil — der "Hawaiian Umbrella"-Klassiker mit Luftwurzeln.', en: 'Banyan — the classic "Hawaiian Umbrella" with aerial roots.' },
      { name: 'Sekijoju', de: 'Wurzel-über-Stein — Wurzeln umschließen einen Felsen.', en: 'Root-over-rock — roots envelop a stone.' },
      { name: 'Moyogi', de: 'Informeller aufrechter Stil.', en: 'Informal upright style.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Ganzjährig möglich', en: 'Possible year-round' }, minimumAge: '2+ Jahre / 2+ years', description: { de: 'Holz ist sehr weich — vorsichtig drahten und früh entfernen (4–6 Wochen). Oft besser: Clip-and-grow.', en: 'Wood is very soft — wire gently and remove early (4–6 weeks). Often better: clip-and-grow.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühling–Frühsommer (April–Juni)', en: 'Spring–early summer (April–June)' }, minimumAge: 'Alle 2 Jahre / every 2 years', description: { de: 'Wurzeln um ein Drittel zurückschneiden. Schefflera erholt sich rasch.', en: 'Reduce roots by one-third. Schefflera recovers quickly.' } },
      { name: { de: 'Luftwurzeln fördern', en: 'Encouraging aerial roots' }, period: { de: 'Wachstumsperiode bei hoher Luftfeuchte', en: 'Growing season at high humidity' }, minimumAge: '3+ Jahre', description: { de: 'Plastiktüte oder feuchtes Sphagnum am Stamm anlegen; Luftwurzeln in 4–8 Wochen.', en: 'Wrap stem with plastic or damp sphagnum; aerial roots in 4–8 weeks.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Frühling–Sommer (Mai–August)', en: 'Spring–summer (May–August)' }, postCare: { de: 'Halbschattig, hohe Luftfeuchte, Bodenwärme 22–25 °C. Bewurzelung nach 4–8 Wochen.', en: 'Half-shade, high humidity, bottom heat 22–25 °C. Roots in 4–8 weeks.' } },
    photos: [
      { src: '/img/trees/schefflera-arboricola-1.webp', alt: { de: 'Schefflera arboricola Bonsai', en: 'Schefflera arboricola bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/schefflera-arboricola-2.webp', alt: { de: 'Strahlenaralie Blätter', en: 'Umbrella tree leaves' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/schefflera-arboricola-3.webp', alt: { de: 'Hawaiian Umbrella mit Luftwurzeln', en: 'Hawaiian umbrella with aerial roots' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'serissa-foetida',
    popularName: { de: 'Schneerose / Baum der tausend Sterne', en: 'Snow Rose / Tree of a Thousand Stars' },
    scientificName: 'Serissa japonica',
    family: 'Rubiaceae',
    origin: 'East Asia',
    category: 'indoor',
    beginnerFriendly: false,
    introduction: { de: 'Ein zierlicher Zimmerbonsai mit unzähligen kleinen weißen oder rosa Blüten von Frühjahr bis Herbst. Trotz des hübschen Aussehens als sehr launisch bekannt — wirft bei kleinsten Veränderungen Blätter ab. Ein "Diva-Bonsai", der erfahrenen Pflegern vorbehalten bleibt.', en: 'A delicate indoor bonsai covered with countless small white or pink flowers from spring to autumn. Despite its pretty appearance it is notoriously moody — drops leaves at the slightest change. A "diva bonsai" best left to experienced hobbyists.' },
    care: {
      sun: { de: 'Hell, einige Stunden direkte Morgensonne; im Sommer geschützt ins Freie.', en: 'Bright, several hours of direct morning sun; outdoors in a sheltered spot in summer.' },
      soil: { de: 'Akadama 60 % + Bims 20 % + Lava 20 %, leicht sauer.', en: 'Akadama 60% + pumice 20% + lava 20%, slightly acidic.' },
      watering: { de: 'Gleichmäßig feucht halten, weder austrocknen noch staunass. Kalkarmes Wasser bevorzugt.', en: 'Keep evenly moist — neither dry out nor waterlog. Low-calcium water preferred.' },
      fertilizing: { de: 'Alle 2 Wochen Frühling–Herbst mit organischem Flüssigdünger, im Winter monatlich reduziert.', en: 'Every 2 weeks spring–autumn with organic liquid feed; reduced to monthly in winter.' },
      temperature: { de: '15–22 °C, nicht unter 10 °C, frostempfindlich.', en: '15–22 °C, not below 10 °C, frost-sensitive.' },
      pruning: { de: 'Triebspitzen nach der Blüte auf 2 Blätter zurückschneiden. Stärkerer Schnitt im Frühjahr.', en: 'Pinch shoots back to 2 leaves after flowering. Heavier pruning in spring.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil — am häufigsten.', en: 'Informal upright — most common.' },
      { name: 'Netsuranari', de: 'Waldwurzel-Stil — mehrere Stämme aus einer Wurzel.', en: 'Connected-roots — multiple trunks from one root.' },
      { name: 'Shakan', de: 'Geneigter Stil.', en: 'Slanting style.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Frühling–Sommer', en: 'Spring–summer' }, minimumAge: '3+ Jahre / 3+ years', description: { de: 'Aluminiumdraht 1–2 mm. Sehr feine, brüchige Zweige — vorsichtig biegen.', en: 'Aluminum wire 1–2 mm. Very fine, brittle branches — bend with care.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März–April)', en: 'Spring (March–April)' }, minimumAge: 'Alle 2 Jahre / every 2 years', description: { de: 'Wurzelschnitt vorsichtig (max. 1/4). Serissa reagiert empfindlich.', en: 'Prune roots conservatively (max one-quarter). Serissa is sensitive.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Frühsommer (Juni–Juli) Halbholzstecklinge', en: 'Early summer (June–July) semi-hardwood cuttings' }, postCare: { de: 'Halbschattig, hohe Luftfeuchte, Bodenwärme. Bewurzelung in 6–10 Wochen.', en: 'Half-shade, high humidity, bottom heat. Roots in 6–10 weeks.' } },
    photos: [
      { src: '/img/trees/serissa-foetida-1.webp', alt: { de: 'Schneerose mit Blüten', en: 'Snow Rose in flower' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/serissa-foetida-2.webp', alt: { de: 'Serissa Bonsai Detail', en: 'Serissa bonsai detail' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/serissa-foetida-3.webp', alt: { de: 'Baum der tausend Sterne', en: 'Tree of a Thousand Stars' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'sageretia-theezans',
    popularName: { de: 'Chinesische Vogelpflaume', en: 'Chinese Bird Plum / Sweet Plum' },
    scientificName: 'Sageretia theezans',
    family: 'Rhamnaceae',
    origin: 'Southern China',
    category: 'indoor',
    beginnerFriendly: false,
    introduction: { de: 'Ein attraktiver Zimmerbonsai mit kleinen glänzenden Blättern und einer auffällig gefleckten, sich abblätternden Rinde. Bildet kleine cremeweiße Blüten und bläulich-violette Beeren. Reagiert empfindlich auf trockene Heizungsluft und braucht hohe Luftfeuchtigkeit.', en: 'An attractive indoor bonsai with small glossy leaves and conspicuously mottled, flaking bark. Produces small cream flowers and bluish-purple berries. Sensitive to dry indoor heating and needs high humidity.' },
    care: {
      sun: { de: 'Hell, indirektes Licht; im Sommer halbschattig ins Freie.', en: 'Bright indirect light; outdoors in half-shade in summer.' },
      soil: { de: 'Akadama 60 % + Bims 20 % + Lava 20 %.', en: 'Akadama 60% + pumice 20% + lava 20%.' },
      watering: { de: 'Substrat gleichmäßig feucht halten — verträgt keine Austrocknung. Hohe Luftfeuchte (über 50%) wichtig.', en: 'Keep substrate evenly moist — does not tolerate drying out. High humidity (above 50%) important.' },
      fertilizing: { de: 'Alle 2 Wochen Frühling–Herbst, im Winter monatlich.', en: 'Every 2 weeks spring–autumn, monthly in winter.' },
      temperature: { de: '15–22 °C, nicht unter 12 °C, frostempfindlich.', en: '15–22 °C, not below 12 °C, frost-sensitive.' },
      pruning: { de: 'Triebspitzen bei 6–8 Blättern auf 2 zurückschneiden. Verträgt regelmäßigen Schnitt.', en: 'Pinch shoots back to 2 leaves once they have 6–8. Tolerates regular pruning.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil — am häufigsten.', en: 'Informal upright — most common.' },
      { name: 'Hokidachi', de: 'Besenstil — passt zur feinen Verzweigung.', en: 'Broom style — suits the fine ramification.' },
      { name: 'Kabudachi', de: 'Mehrstammstil.', en: 'Multi-trunk style.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Frühling–Sommer', en: 'Spring–summer' }, minimumAge: '2+ Jahre / 2+ years', description: { de: 'Aluminiumdraht 1–3 mm. Rinde ist druckempfindlich — regelmäßig kontrollieren.', en: 'Aluminum wire 1–3 mm. Bark is pressure-sensitive — monitor regularly.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März–April)', en: 'Spring (March–April)' }, minimumAge: 'Alle 2 Jahre / every 2 years', description: { de: 'Wurzeln um ein Drittel kürzen. Bei Wärme (über 18 °C) umtopfen.', en: 'Reduce roots by one-third. Repot in warm conditions (above 18 °C).' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Frühsommer (Juni–Juli)', en: 'Early summer (June–July)' }, postCare: { de: 'Halbschattig, hohe Luftfeuchte, Bodenwärme 22–25 °C. Bewurzelung nach 6–10 Wochen.', en: 'Half-shade, high humidity, bottom heat 22–25 °C. Roots in 6–10 weeks.' } },
    photos: [
      { src: '/img/trees/sageretia-theezans-1.webp', alt: { de: 'Sageretia theezans Bonsai', en: 'Sageretia theezans bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/sageretia-theezans-2.webp', alt: { de: 'Vogelpflaume Rinde', en: 'Bird Plum bark' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/sageretia-theezans-3.webp', alt: { de: 'Chinese Sweet Plum', en: 'Chinese Sweet Plum' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'chloroleucon-tortum',
    popularName: { de: 'Brasilianischer Regenbaum', en: 'Brazilian Rain Tree' },
    scientificName: 'Chloroleucon tortum',
    family: 'Fabaceae',
    origin: 'Brazil (Atlantic Forest)',
    category: 'indoor',
    beginnerFriendly: false,
    introduction: { de: 'Ein exotischer tropischer Bonsai aus dem brasilianischen Küstenregenwald, bekannt für seine spiralförmig gedrehten Äste und fein gefiederten Blätter, die sich bei Dunkelheit oder Berührung schließen. Bildet flache, weiße, duftende Blütenbüschel. Pflegeintensiv, aber visuell extrem attraktiv.', en: 'An exotic tropical bonsai from the Brazilian Atlantic Forest, known for its twisted spiralling branches and finely pinnate leaves that fold at night or when touched. Produces flat clusters of fragrant white flowers. Demanding but visually striking.' },
    care: {
      sun: { de: 'Sehr hell, einige Stunden direkte Sonne. Im Sommer ins Freie an einen sonnigen Platz.', en: 'Very bright, several hours of direct sun. Outdoors in a sunny spot in summer.' },
      soil: { de: 'Akadama 50 % + Bims 30 % + Lava 20 %, gut drainiert.', en: 'Akadama 50% + pumice 30% + lava 20%, well-drained.' },
      watering: { de: 'Substrat gleichmäßig feucht halten, hohe Luftfeuchte. Trockenheit löst Blattfall aus.', en: 'Keep substrate evenly moist with high humidity. Drought triggers leaf drop.' },
      fertilizing: { de: 'Alle 2 Wochen Frühling–Herbst, im Winter monatlich reduziert.', en: 'Every 2 weeks spring–autumn, reduced to monthly in winter.' },
      temperature: { de: '20–28 °C, nicht unter 12 °C, sehr frostempfindlich.', en: '20–28 °C, not below 12 °C, very frost-sensitive.' },
      pruning: { de: 'Triebe nach Verholzung auf 2–3 Blattpaare zurückschneiden.', en: 'Cut shoots back to 2–3 leaf pairs after lignification.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil mit natürlich gedrehtem Stamm.', en: 'Informal upright with naturally twisted trunk.' },
      { name: 'Bunjin', de: 'Literatenstil — passt zur eleganten Spiralform der Äste.', en: 'Literati — suits the elegant spiral branch habit.' },
      { name: 'Shakan', de: 'Geneigter Stil.', en: 'Slanting style.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Frühling–Frühsommer', en: 'Spring–early summer' }, minimumAge: '3+ Jahre / 3+ years', description: { de: 'Vorsichtig drahten — Holz ist hart aber bruchanfällig. Form folgt oft schon der natürlichen Spirale.', en: 'Wire carefully — wood is hard but brittle. Form often follows the natural spiral.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Spätfrühling (Mai–Juni) bei warmem Wetter', en: 'Late spring (May–June) in warm weather' }, minimumAge: 'Alle 2–3 Jahre / every 2–3 years', description: { de: 'Wurzelschnitt moderat (max. 1/3). Nach dem Umtopfen warm und feucht halten.', en: 'Moderate root pruning (max one-third). Keep warm and humid after repotting.' } },
    ],
    propagation: { method: 'Seed', period: { de: 'Frühling (April–Mai)', en: 'Spring (April–May)' }, postCare: { de: 'Samen 24 Stunden in warmem Wasser einweichen. Keimung bei 25–28 °C nach 1–3 Wochen. Stecklinge oft schwierig.', en: 'Soak seed 24 h in warm water. Germinates at 25–28 °C in 1–3 weeks. Cuttings often unreliable.' } },
    photos: [
      { src: '/img/trees/chloroleucon-tortum-1.webp', alt: { de: 'Brasilianischer Regenbaum', en: 'Brazilian Rain Tree' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/chloroleucon-tortum-2.webp', alt: { de: 'Gefiederte Blätter', en: 'Pinnate foliage' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/chloroleucon-tortum-3.webp', alt: { de: 'Spiralstamm', en: 'Spiral trunk' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'bougainvillea-glabra',
    popularName: { de: 'Drillingsblume', en: 'Paper Flower / Bougainvillea' },
    scientificName: 'Bougainvillea glabra',
    family: 'Nyctaginaceae',
    origin: 'South America (Brazil)',
    category: 'indoor',
    beginnerFriendly: false,
    introduction: { de: 'Ein blühfreudiger tropischer Bonsai mit spektakulären, oft purpur-pinken Hochblättern, die die unscheinbaren echten Blüten umgeben. Verholzt schnell und entwickelt charakteristische, knorrige Stämme. Braucht viel Sonne und eine Trockenphase, um reichlich zu blühen.', en: 'A floriferous tropical bonsai with spectacular, often purple-pink bracts surrounding the inconspicuous true flowers. Lignifies quickly and develops characteristically gnarled trunks. Needs strong sun and a dry period to flower profusely.' },
    care: {
      sun: { de: 'Volle Sonne — so viel wie möglich. Im Sommer unbedingt ins Freie.', en: 'Full sun — as much as possible. Outdoors in summer is essential.' },
      soil: { de: 'Akadama 50 % + Bims 30 % + Lava 20 %, gut drainiert.', en: 'Akadama 50% + pumice 30% + lava 20%, well-drained.' },
      watering: { de: 'Reichlich in der Wachstumsphase, zwischen den Wassergaben leicht abtrocknen lassen. Vor der Blüte gezielt trocken halten, um Blüte auszulösen.', en: 'Generously during growth, letting substrate dry slightly between waterings. Before flowering, deliberately keep dry to trigger bloom.' },
      fertilizing: { de: 'Alle 2 Wochen Frühling–Herbst, im Sommer mit kaliumbetontem Dünger für Blüten.', en: 'Every 2 weeks spring–autumn, with potassium-rich feed in summer for flowering.' },
      temperature: { de: '18–30 °C, im Winter mind. 10 °C, frostempfindlich.', en: '18–30 °C, minimum 10 °C in winter, frost-sensitive.' },
      pruning: { de: 'Nach jeder Blüte zurückschneiden — neue Blüten erscheinen auf neuem Holz.', en: 'Prune after each flowering — new blooms form on new wood.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil.', en: 'Informal upright style.' },
      { name: 'Kengai', de: 'Kaskade — die hängenden blühenden Triebe wirken besonders attraktiv.', en: 'Cascade — pendulous flowering shoots are especially attractive.' },
      { name: 'Sekijoju', de: 'Wurzel-über-Stein — kräftige Wurzeln klammern sich um Felsen.', en: 'Root-over-rock — strong roots clasp around stones.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Sommer während aktivem Wachstum', en: 'Summer during active growth' }, minimumAge: '3+ Jahre / 3+ years', description: { de: 'Holz ist hart und spröde — junge Triebe drahten, ältere Äste mit Spannvorrichtungen formen. Achtung Dornen.', en: 'Wood is hard and brittle — wire young shoots; shape older branches with guy wires. Beware of thorns.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Spätfrühling (Mai) bei warmem Wetter', en: 'Late spring (May) in warm weather' }, minimumAge: 'Alle 2–3 Jahre / every 2–3 years', description: { de: 'Bougainvillea reagiert empfindlich auf Wurzelstörung — max. 1/4 der Wurzeln entfernen.', en: 'Bougainvillea is sensitive to root disturbance — remove at most one-quarter of the roots.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Sommer (Juni–August) Halbholzstecklinge', en: 'Summer (June–August) semi-hardwood cuttings' }, postCare: { de: 'Bodenwärme 25 °C, hohe Luftfeuchte. Bewurzelung kann 2–3 Monate dauern — Erfolgsquote moderat. Abmoosen oft zuverlässiger.', en: 'Bottom heat 25 °C, high humidity. Rooting can take 2–3 months with moderate success. Air layering is often more reliable.' } },
    photos: [
      { src: '/img/trees/bougainvillea-glabra-1.webp', alt: { de: 'Bougainvillea-Bonsai mit Blüten', en: 'Bougainvillea bonsai in flower' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/bougainvillea-glabra-2.webp', alt: { de: 'Drillingsblume Hochblätter', en: 'Paper flower bracts' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/bougainvillea-glabra-3.webp', alt: { de: 'Knorriger Stamm', en: 'Gnarled trunk' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },

  // ============ OUTDOOR (14) ============
  {
    slug: 'juniperus-chinensis',
    popularName: { de: 'Chinesischer Wacholder', en: 'Chinese Juniper' },
    scientificName: 'Juniperus chinensis',
    family: 'Cupressaceae',
    origin: 'East Asia',
    category: 'outdoor',
    beginnerFriendly: false,
    introduction: { de: 'Der klassische Bonsai-Wacholder, oft mit dramatischen Totholzpartien (Jin und Shari) gestaltet. Verzeiht keine Pflegefehler an den Wurzeln, ist aber äußerst formbar und langlebig — viele Meisterbäume sind Wacholder. Beliebte Sorten: Itoigawa und Kishu mit besonders feinem Schuppenlaub.', en: 'The classic bonsai juniper, often styled with dramatic deadwood (jin and shari). Unforgiving of root mistakes but extremely shapeable and long-lived — many masterpiece bonsai are junipers. Popular cultivars are Itoigawa and Kishu with especially fine scale foliage.' },
    care: {
      sun: { de: 'Volle Sonne ganzjährig — unverzichtbar für dichtes Laub und gesunde Triebe.', en: 'Full sun year-round — essential for dense foliage and healthy growth.' },
      soil: { de: 'Akadama 40 % + Bims 40 % + Lava 20 %, sehr durchlässig.', en: 'Akadama 40% + pumice 40% + lava 20%, very free-draining.' },
      watering: { de: 'Erst gießen, wenn die Substratoberfläche antrocknet — Wacholder hassen Staunässe.', en: 'Water only when the substrate surface starts to dry — junipers hate waterlogging.' },
      fertilizing: { de: 'Alle 2 Wochen März–Oktober mit organischem Dünger, im Winter aussetzen.', en: 'Every 2 weeks March–October with organic feed; skip in winter.' },
      temperature: { de: 'Winterhart bis −15 °C bei Wurzelschutz; ganzjährig draußen.', en: 'Hardy to −15 °C with root protection; outdoors year-round.' },
      pruning: { de: 'Triebspitzen mit den Fingern abkneifen (nicht mit der Schere — sonst werden Schnittstellen braun). Strukturschnitt im Spätsommer.', en: 'Pinch shoot tips with fingers (not scissors — cut surfaces turn brown). Structural pruning in late summer.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil — sehr verbreitet.', en: 'Informal upright — very common.' },
      { name: 'Shari / Jin', de: 'Totholzgestaltung — abgestorbene Stammpartien und tote Astspitzen.', en: 'Deadwood styling — stripped trunk sections and dead branch tips.' },
      { name: 'Kengai', de: 'Kaskade — passt zur natürlichen Wuchsform auf Felsen.', en: 'Cascade — suits the natural cliff-edge habit.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Herbst–Spätwinter (Oktober–Februar) bei Vegetationsruhe', en: 'Autumn–late winter (October–February) during dormancy' }, minimumAge: '3+ Jahre / 3+ years', description: { de: 'Kupferdraht traditionell für Konturen, Aluminium für feine Äste. Mehrere Monate auf dem Baum lassen, regelmäßig kontrollieren.', en: 'Copper traditionally for structural branches, aluminum for fine ones. Leave several months and inspect regularly.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März–April) vor der Triebbildung', en: 'Spring (March–April) before shoot emergence' }, minimumAge: 'Alle 3–5 Jahre / every 3–5 years', description: { de: 'Wurzelschnitt vorsichtig (max. 1/3). Mykorrhiza erhalten — etwas altes Substrat mitnehmen.', en: 'Conservative root pruning (max one-third). Preserve mycorrhiza — retain some old substrate.' } },
      { name: { de: 'Jin/Shari erstellen', en: 'Creating jin/shari' }, period: { de: 'Spätsommer–Frühherbst (August–September)', en: 'Late summer–early autumn (August–September)' }, minimumAge: '5+ Jahre, an gesunden Bäumen', description: { de: 'Rinde abschälen, Holz mit Jin-Werkzeug bearbeiten, anschließend mit Kalkschwefel weißen.', en: 'Strip bark, sculpt wood with jin tools, then whiten with lime sulphur.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Spätsommer (August–September) Halbholzstecklinge', en: 'Late summer (August–September) semi-hardwood cuttings' }, postCare: { de: 'Im Frühbeet oder Folienzelt halbschattig, feucht halten. Bewurzelung dauert 6–12 Monate. Auch Pfropfung verbreitet (z. B. Itoigawa auf robuste Unterlage).', en: 'Cold frame or polytunnel in half-shade, kept moist. Rooting takes 6–12 months. Grafting (e.g. Itoigawa onto robust rootstock) is also common.' } },
    photos: [
      { src: '/img/trees/juniperus-chinensis-1.webp', alt: { de: 'Chinesischer Wacholder Bonsai', en: 'Chinese Juniper bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/juniperus-chinensis-2.webp', alt: { de: 'Juniperus mit Jin/Shari', en: 'Juniperus with jin/shari' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/juniperus-chinensis-3.webp', alt: { de: 'Wacholder Schuppenblatt', en: 'Juniper scale foliage' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'juniperus-procumbens-nana',
    popularName: { de: 'Japanischer Kriechwacholder', en: 'Japanese Garden Juniper' },
    scientificName: "Juniperus procumbens 'Nana'",
    family: 'Cupressaceae',
    origin: 'Japan',
    category: 'outdoor',
    beginnerFriendly: true,
    introduction: { de: 'Der weltweit häufigste "Mall-Bonsai" — kompakt, robust und günstig. Trotz der schlechten Behandlung im Handel ein zäher und dankbarer Bonsai für Anfänger, wenn er draußen gehalten wird. Stachelige Nadeln statt Schuppenblätter — charakteristisches Merkmal.', en: 'The world’s most common "mall bonsai" — compact, robust and cheap. Despite poor handling in retail it is a tough and rewarding beginner bonsai when kept outdoors. Needle-like rather than scale-like foliage is a distinctive feature.' },
    care: {
      sun: { de: 'Volle Sonne ganzjährig — NIEMALS dauerhaft drinnen halten.', en: 'Full sun year-round — NEVER keep permanently indoors.' },
      soil: { de: 'Akadama 40 % + Bims 40 % + Lava 20 %, sehr durchlässig.', en: 'Akadama 40% + pumice 40% + lava 20%, very free-draining.' },
      watering: { de: 'Erst gießen, wenn das Substrat angetrocknet ist. Staunässe vermeiden.', en: 'Water only when the substrate has dried slightly. Avoid waterlogging.' },
      fertilizing: { de: 'Alle 2 Wochen März–Oktober mit organischem Dünger.', en: 'Every 2 weeks March–October with organic fertilizer.' },
      temperature: { de: 'Winterhart bis −10 °C mit Wurzelschutz; ganzjährig draußen.', en: 'Hardy to −10 °C with root protection; outdoors year-round.' },
      pruning: { de: 'Triebspitzen mit den Fingern abkneifen. Im Herbst Strukturschnitt.', en: 'Pinch shoot tips with fingers. Structural pruning in autumn.' },
    },
    styles: [
      { name: 'Kengai', de: 'Kaskade — natürlich hängende Wuchsform ideal dafür.', en: 'Cascade — the natural drooping habit is ideal.' },
      { name: 'Han-kengai', de: 'Halbkaskade — sehr verbreitet.', en: 'Semi-cascade — very common.' },
      { name: 'Moyogi', de: 'Informeller aufrechter Stil.', en: 'Informal upright style.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Herbst–Spätwinter (Oktober–Februar)', en: 'Autumn–late winter (October–February)' }, minimumAge: '3+ Jahre / 3+ years', description: { de: 'Aluminium- oder Kupferdraht. Junge Äste lassen sich gut formen; mehrere Monate auf dem Baum belassen.', en: 'Aluminum or copper wire. Young branches shape well; leave on for several months.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März–April)', en: 'Spring (March–April)' }, minimumAge: 'Alle 3–4 Jahre / every 3–4 years', description: { de: 'Wurzelschnitt vorsichtig (max. 1/3). Mykorrhiza erhalten.', en: 'Conservative root pruning (max one-third). Preserve mycorrhiza.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Spätsommer (August–September)', en: 'Late summer (August–September)' }, postCare: { de: 'Halbschattig, feucht, im Frühbeet überwintern. Bewurzelung nach 6–12 Monaten.', en: 'Half-shade, moist, overwinter in cold frame. Roots after 6–12 months.' } },
    photos: [
      { src: '/img/trees/juniperus-procumbens-nana-1.webp', alt: { de: 'Japanischer Kriechwacholder', en: 'Japanese Garden Juniper' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/juniperus-procumbens-nana-2.webp', alt: { de: 'Procumbens Kaskade', en: 'Procumbens cascade' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/juniperus-procumbens-nana-3.webp', alt: { de: 'Nana Nadeln', en: 'Nana foliage' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'pinus-thunbergii',
    popularName: { de: 'Japanische Schwarzkiefer', en: 'Japanese Black Pine' },
    scientificName: 'Pinus thunbergii',
    family: 'Pinaceae',
    origin: 'Japan, Korea',
    category: 'outdoor',
    beginnerFriendly: false,
    introduction: { de: 'Die Königin der japanischen Bonsai — symbolträchtig, kraftvoll, mit tief gefurchter Rinde. Pflege ist technisch anspruchsvoll: Kerzenstutzen (mekiri), Nadelschnitt und Pflege der Mykorrhiza sind Pflicht. Nichts für Anfänger, aber das ultimative Ziel vieler Bonsai-Liebhaber.', en: 'The queen of Japanese bonsai — symbolic, powerful, with deeply fissured bark. Care is technically demanding: candle-cutting (mekiri), needle reduction and mycorrhiza care are all required. Not for beginners, but the ultimate goal for many bonsai enthusiasts.' },
    care: {
      sun: { de: 'Volle Sonne ganzjährig — je sonniger, desto kürzere Nadeln und kompaktere Triebe.', en: 'Full sun year-round — more sun means shorter needles and more compact growth.' },
      soil: { de: 'Akadama 30 % + Bims 50 % + Lava 20 %, sehr durchlässig. Mykorrhiza unverzichtbar.', en: 'Akadama 30% + pumice 50% + lava 20%, very free-draining. Mycorrhiza essential.' },
      watering: { de: 'Erst gießen, wenn das Substrat deutlich angetrocknet ist. Mag eher trocken als nass.', en: 'Water only when substrate is clearly dry. Prefers dry side over wet.' },
      fertilizing: { de: 'Stark düngen März–Juni und September–Oktober, im Hochsommer reduziert. Organische Düngerkuchen bevorzugt.', en: 'Feed heavily March–June and September–October, reduced in midsummer. Organic fertilizer cakes preferred.' },
      temperature: { de: 'Winterhart bis −15 °C mit Wurzelschutz; ganzjährig draußen.', en: 'Hardy to −15 °C with root protection; outdoors year-round.' },
      pruning: { de: 'Kerzenstutzen (mekiri) Ende Juni–Anfang Juli — alle Kerzen abschneiden, treibt mit kürzeren Nadeln zur zweiten Welle aus.', en: 'Candle-cutting (mekiri) late June–early July — cut all candles to force shorter second flush.' },
    },
    styles: [
      { name: 'Chokkan', de: 'Formaler aufrechter Stil — Symbol für Stärke und Würde.', en: 'Formal upright — symbol of strength and dignity.' },
      { name: 'Moyogi', de: 'Informeller aufrechter Stil — sehr verbreitet.', en: 'Informal upright — very common.' },
      { name: 'Shakan', de: 'Geneigter Stil — wie windgebeugte Küstenkiefern.', en: 'Slanting — like wind-swept coastal pines.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Spätherbst–Winter (November–Februar)', en: 'Late autumn–winter (November–February)' }, minimumAge: '4+ Jahre / 4+ years', description: { de: 'Kupferdraht für Stamm und Hauptäste, Aluminium für feine Verzweigung. Verbleibt 12+ Monate.', en: 'Copper for trunk and main branches, aluminum for fine ramification. Leave on 12+ months.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März–April) wenn die Knospen schwellen', en: 'Spring (March–April) as buds swell' }, minimumAge: 'Alle 3–5 Jahre / every 3–5 years', description: { de: 'Wurzelschnitt vorsichtig (max. 1/3). Mykorrhiza unbedingt mitnehmen — altes Substrat nicht komplett entfernen.', en: 'Conservative root pruning (max one-third). Preserve mycorrhiza — do not bare-root.' } },
      { name: { de: 'Mekiri (Kerzenstutzen)', en: 'Mekiri (candle-cutting)' }, period: { de: 'Ende Juni – Anfang Juli', en: 'Late June – early July' }, minimumAge: '10+ Jahre, nur an gesunden, kräftigen Bäumen', description: { de: 'Frühjahrskerzen vollständig abschneiden, zwingt den Baum zu einem zweiten Trieb mit kürzeren Nadeln. Klassische Technik zur Nadelreduktion.', en: 'Cut all spring candles completely, forcing a second flush with shorter needles. Classical needle-reduction technique.' } },
      { name: { de: 'Nadelschnitt (habukari)', en: 'Needle plucking (hadagari)' }, period: { de: 'Herbst (Oktober–November)', en: 'Autumn (October–November)' }, minimumAge: '5+ Jahre', description: { de: 'Alte Nadeln und überschüssige neue Nadeln entfernen, um Licht ins Innere zu lassen und das Wachstum auszubalancieren.', en: 'Remove old needles and excess new ones to admit light and balance growth.' } },
    ],
    propagation: { method: 'Seed', period: { de: 'Frühjahr (März–April) nach Kaltstratifikation', en: 'Spring (March–April) after cold stratification' }, postCare: { de: 'Samen 1–2 Monate kalt stratifizieren. Aussaat in sandiges Substrat, Keimung in 4–8 Wochen. Stecklinge sehr schwierig — Pfropfung üblich für besondere Sorten.', en: 'Cold stratify seed 1–2 months. Sow in sandy substrate; germinates in 4–8 weeks. Cuttings very difficult — grafting is standard for select cultivars.' } },
    photos: [
      { src: '/img/trees/pinus-thunbergii-1.webp', alt: { de: 'Japanische Schwarzkiefer', en: 'Japanese Black Pine bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/pinus-thunbergii-2.webp', alt: { de: 'Schwarzkiefer Rinde', en: 'Black Pine bark' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/pinus-thunbergii-3.webp', alt: { de: 'Nadelbündel', en: 'Needle bundles' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'pinus-parviflora',
    popularName: { de: 'Japanische Mädchenkiefer', en: 'Japanese White Pine / Five-Needle Pine' },
    scientificName: 'Pinus parviflora',
    family: 'Pinaceae',
    origin: 'Japan',
    category: 'outdoor',
    beginnerFriendly: false,
    introduction: { de: 'Eleganter als die Schwarzkiefer, mit silbrig-grünen, in Fünfer-Büscheln wachsenden Nadeln. Wächst von Natur aus langsam und kompakt — daher häufig in der Bonsai-Welt zu finden. Wird oft auf Schwarzkiefer-Unterlagen gepfropft, um robustere Wurzelsysteme zu erhalten.', en: 'More elegant than the Black Pine, with silvery-green needles in bundles of five. Naturally slow-growing and compact — hence its popularity in bonsai. Often grafted onto Black Pine rootstock for sturdier root systems.' },
    care: {
      sun: { de: 'Volle Sonne ganzjährig.', en: 'Full sun year-round.' },
      soil: { de: 'Akadama 30 % + Bims 50 % + Lava 20 %, sehr durchlässig.', en: 'Akadama 30% + pumice 50% + lava 20%, very free-draining.' },
      watering: { de: 'Sparsam — Mädchenkiefer mag trockene Bedingungen, anfällig für Wurzelfäule.', en: 'Sparingly — White Pine likes dry conditions and is prone to root rot.' },
      fertilizing: { de: 'Mäßig düngen März–Oktober. Weniger als Schwarzkiefer, sonst werden Nadeln zu lang.', en: 'Moderate feeding March–October. Less than Black Pine, otherwise needles grow too long.' },
      temperature: { de: 'Winterhart bis −15 °C mit Wurzelschutz; ganzjährig draußen.', en: 'Hardy to −15 °C with root protection; outdoors year-round.' },
      pruning: { de: 'Kein mekiri wie bei der Schwarzkiefer — stattdessen Kerzen im Frühling auf die gewünschte Länge brechen.', en: 'No mekiri like Black Pine — instead snap candles to desired length in spring.' },
    },
    styles: [
      { name: 'Chokkan', de: 'Formaler aufrechter Stil.', en: 'Formal upright.' },
      { name: 'Moyogi', de: 'Informeller aufrechter Stil — am häufigsten.', en: 'Informal upright — most common.' },
      { name: 'Bunjin', de: 'Literatenstil — schlanker Stamm mit wenig Laub, sehr poetisch.', en: 'Literati — slender trunk with sparse foliage, very poetic.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Spätherbst–Winter (November–Februar)', en: 'Late autumn–winter (November–February)' }, minimumAge: '4+ Jahre / 4+ years', description: { de: 'Kupferdraht bevorzugt. Holz bricht eher als das der Schwarzkiefer — vorsichtig.', en: 'Copper wire preferred. Wood breaks more easily than Black Pine — bend cautiously.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März–April)', en: 'Spring (March–April)' }, minimumAge: 'Alle 4–5 Jahre / every 4–5 years', description: { de: 'Sehr konservativer Wurzelschnitt (max. 1/4). Mykorrhiza zwingend erhalten.', en: 'Very conservative root pruning (max one-quarter). Preserve mycorrhiza.' } },
      { name: { de: 'Kerzenbruch', en: 'Candle snapping' }, period: { de: 'Frühling (April–Mai) wenn Kerzen weich sind', en: 'Spring (April–May) while candles are soft' }, minimumAge: '5+ Jahre', description: { de: 'Frische Kerzen mit den Fingern auf die gewünschte Länge brechen, NICHT komplett entfernen wie bei der Schwarzkiefer.', en: 'Snap fresh candles with fingers to desired length — do NOT remove completely like Black Pine.' } },
    ],
    propagation: { method: 'Grafting', period: { de: 'Spätwinter (Februar–März)', en: 'Late winter (February–March)' }, postCare: { de: 'Standardpraxis: Veredelung auf Pinus thunbergii. Aussaat möglich, aber Sortenkonstanz unsicher; Stecklinge fast unmöglich.', en: 'Standard practice: graft onto Pinus thunbergii. Seed possible but cultivar consistency uncertain; cuttings nearly impossible.' } },
    photos: [
      { src: '/img/trees/pinus-parviflora-1.webp', alt: { de: 'Japanische Mädchenkiefer', en: 'Japanese White Pine' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/pinus-parviflora-2.webp', alt: { de: 'Fünf-Nadel-Bündel', en: 'Five-needle bundles' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/pinus-parviflora-3.webp', alt: { de: 'Mädchenkiefer Bunjin-Stil', en: 'White Pine literati' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'pinus-sylvestris',
    popularName: { de: 'Waldkiefer', en: 'Scots Pine' },
    scientificName: 'Pinus sylvestris',
    family: 'Pinaceae',
    origin: 'Europe, Northern Asia',
    category: 'outdoor',
    beginnerFriendly: false,
    introduction: { de: 'Eine in Europa heimische Kiefer mit charakteristischer orangeroter Rinde im oberen Stammbereich. In der Bonsai-Welt zunehmend beliebt, weil sie als Yamadori (Naturentnahme) aus den Bergen gewonnen werden kann. Robuster und kältetoleranter als japanische Kiefern, aber ähnliche Techniken in der Pflege.', en: 'A European native pine with characteristic orange-red bark on the upper trunk. Increasingly popular in bonsai because it can be collected as yamadori from the mountains. Hardier and more cold-tolerant than Japanese pines, but similar care techniques.' },
    care: {
      sun: { de: 'Volle Sonne ganzjährig.', en: 'Full sun year-round.' },
      soil: { de: 'Akadama 30 % + Bims 50 % + Lava 20 %, sehr durchlässig.', en: 'Akadama 30% + pumice 50% + lava 20%, very free-draining.' },
      watering: { de: 'Erst gießen, wenn das Substrat angetrocknet ist. Verträgt Trockenheit gut.', en: 'Water only when substrate has dried. Tolerates drought well.' },
      fertilizing: { de: 'Mäßig düngen März–Oktober. Sparsamer im Hochsommer.', en: 'Moderate feeding March–October. Less in midsummer.' },
      temperature: { de: 'Sehr winterhart bis −25 °C; ganzjährig draußen.', en: 'Very hardy to −25 °C; outdoors year-round.' },
      pruning: { de: 'Kerzen im Frühling brechen, kein mekiri. Alte Nadeln im Herbst auslichten.', en: 'Snap candles in spring, no mekiri. Thin old needles in autumn.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil — typisch für Yamadori.', en: 'Informal upright — typical of yamadori.' },
      { name: 'Bunjin', de: 'Literatenstil — passt zur natürlichen Wuchsform alter Waldkiefern.', en: 'Literati — suits the natural habit of old Scots Pines.' },
      { name: 'Shari / Jin', de: 'Totholzgestaltung — sehr verbreitet bei Yamadori-Material.', en: 'Deadwood styling — very common on yamadori material.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Herbst–Winter (Oktober–Februar)', en: 'Autumn–winter (October–February)' }, minimumAge: '4+ Jahre / 4+ years', description: { de: 'Kupferdraht bevorzugt. Junge Triebe lassen sich gut formen; lange auf dem Baum lassen.', en: 'Copper wire preferred. Young shoots bend well; leave on for a long time.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März–April) oder Spätsommer (August–September)', en: 'Spring (March–April) or late summer (August–September)' }, minimumAge: 'Alle 4–5 Jahre / every 4–5 years', description: { de: 'Konservativer Wurzelschnitt (max. 1/3). Mykorrhiza unbedingt mitnehmen.', en: 'Conservative root pruning (max one-third). Preserve mycorrhiza.' } },
      { name: { de: 'Nadelpaarreduktion', en: 'Needle thinning' }, period: { de: 'Herbst (Oktober)', en: 'Autumn (October)' }, minimumAge: '5+ Jahre', description: { de: 'Alte Nadeln zupfen, in starken Bereichen mehr Nadeln entfernen, um Energie auszugleichen.', en: 'Pluck old needles; remove more in strong areas to balance energy.' } },
    ],
    propagation: { method: 'Seed', period: { de: 'Frühjahr (März–April)', en: 'Spring (March–April)' }, postCare: { de: 'Kaltstratifikation 4–6 Wochen vor der Aussaat. Keimung in 3–6 Wochen. Yamadori-Sammlung im Spätwinter ist häufige Beschaffung.', en: 'Cold stratify seed 4–6 weeks before sowing. Germinates in 3–6 weeks. Yamadori collection in late winter is a common source.' } },
    photos: [
      { src: '/img/trees/pinus-sylvestris-1.webp', alt: { de: 'Waldkiefer Bonsai', en: 'Scots Pine bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/pinus-sylvestris-2.webp', alt: { de: 'Orangerote Rinde', en: 'Orange-red bark' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/pinus-sylvestris-3.webp', alt: { de: 'Pinus sylvestris Yamadori', en: 'Pinus sylvestris yamadori' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'acer-palmatum',
    popularName: { de: 'Japanischer Fächerahorn', en: 'Japanese Maple' },
    scientificName: 'Acer palmatum',
    family: 'Sapindaceae',
    origin: 'Japan, Korea, China',
    category: 'outdoor',
    beginnerFriendly: false,
    introduction: { de: 'Einer der schönsten Bonsai überhaupt — feine fünf- bis siebenlappige Blätter und spektakuläre rote, orange und gelbe Herbstfärbung. Viele Sorten ("Deshojo", "Kiyohime", "Arakawa") bieten unterschiedliche Blattformen und -farben. Empfindlich gegen Mittagssonne und trockene Luft.', en: 'One of the most beautiful bonsai of all — fine five- to seven-lobed leaves and spectacular red, orange and yellow autumn colour. Many cultivars ("Deshojo", "Kiyohime", "Arakawa") offer different leaf forms and colours. Sensitive to midday sun and dry air.' },
    care: {
      sun: { de: 'Morgensonne und Nachmittagsschatten — im Hochsommer halbschattig stellen, sonst Blattbrand.', en: 'Morning sun and afternoon shade — half-shade in midsummer to avoid leaf scorch.' },
      soil: { de: 'Akadama 60 % + Bims 20 % + Lava 20 %, leicht sauer.', en: 'Akadama 60% + pumice 20% + lava 20%, slightly acidic.' },
      watering: { de: 'Substrat gleichmäßig feucht halten; im Sommer evtl. zweimal täglich gießen. Verträgt keine Austrocknung.', en: 'Keep substrate evenly moist; in summer may need watering twice daily. Does not tolerate drying out.' },
      fertilizing: { de: 'Alle 2 Wochen März–Juni und September–Oktober. Im Hochsommer pausieren.', en: 'Every 2 weeks March–June and September–October. Pause in midsummer.' },
      temperature: { de: 'Winterhart bis −10 °C mit Wurzelschutz; im Winter vor Wind und starkem Frost schützen.', en: 'Hardy to −10 °C with root protection; shelter from wind and hard frost in winter.' },
      pruning: { de: 'Triebspitzen bei 2–3 Blattpaaren auf 1 Paar zurückschneiden. Hauptschnitt im Spätwinter vor dem Austrieb.', en: 'Pinch shoots back to 1 leaf pair when they have 2–3. Main pruning in late winter before bud break.' },
    },
    styles: [
      { name: 'Hokidachi', de: 'Besenstil — klassisch für Ahorn, betont die feine Verzweigung.', en: 'Broom style — classic for maple, accentuating fine ramification.' },
      { name: 'Moyogi', de: 'Informeller aufrechter Stil.', en: 'Informal upright.' },
      { name: 'Yose-ue', de: 'Wald — mehrere Stämme, im Herbst spektakulär.', en: 'Forest planting — multiple trunks, spectacular in autumn.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Spätfrühling–Frühsommer (Mai–Juni) wenn Triebe weich sind, oder Winter ohne Laub', en: 'Late spring–early summer (May–June) while shoots are soft, or winter without leaves' }, minimumAge: '2+ Jahre / 2+ years', description: { de: 'Aluminiumdraht. Rinde ist sehr druckempfindlich — nach 6–8 Wochen abnehmen.', en: 'Aluminum wire. Bark is very pressure-sensitive — remove after 6–8 weeks.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (Februar–März) wenn die Knospen schwellen', en: 'Spring (February–March) as buds swell' }, minimumAge: 'Alle 2 Jahre (junge), alle 3–4 Jahre (ältere)', description: { de: 'Wurzeln um ein Drittel zurückschneiden. Schnittstellen mit Pasta versiegeln, um Blutungen zu verhindern.', en: 'Reduce roots by one-third. Seal cuts with paste to prevent bleeding.' } },
      { name: { de: 'Entlauben', en: 'Defoliation' }, period: { de: 'Frühsommer (Juni)', en: 'Early summer (June)' }, minimumAge: '5+ Jahre, nur an gesunden Bäumen', description: { de: 'Komplettes Entlauben fördert kleinere Blätter und intensivere Herbstfärbung. Nicht jedes Jahr.', en: 'Full defoliation promotes smaller leaves and richer autumn colour. Not every year.' } },
    ],
    propagation: { method: 'Air layering', period: { de: 'Frühling–Frühsommer (Mai–Juni)', en: 'Spring–early summer (May–June)' }, postCare: { de: 'Abmoosen sehr zuverlässig — Bewurzelung in 8–12 Wochen. Aussaat im Frühjahr nach Kaltstratifikation; Sorten meist gepfropft.', en: 'Air layering very reliable — roots in 8–12 weeks. Seed in spring after cold stratification; cultivars usually grafted.' } },
    photos: [
      { src: '/img/trees/acer-palmatum-1.webp', alt: { de: 'Japanischer Fächerahorn im Herbst', en: 'Japanese Maple in autumn' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/acer-palmatum-2.webp', alt: { de: 'Fächerahorn Blätter', en: 'Maple foliage' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/acer-palmatum-3.webp', alt: { de: 'Acer palmatum Bonsai', en: 'Acer palmatum bonsai' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'acer-buergerianum',
    popularName: { de: 'Dreispitzahorn', en: 'Trident Maple' },
    scientificName: 'Acer buergerianum',
    family: 'Sapindaceae',
    origin: 'East China, Korea, Japan',
    category: 'outdoor',
    beginnerFriendly: true,
    introduction: { de: 'Robuster als der Fächerahorn und sehr beliebt für Anfänger und Wurzelausgangs-Studien (Nebari). Charakteristische dreilappige Blätter und eine wunderschön rissige, sich abblätternde Rinde im Alter. Bildet beeindruckende Wurzelausgänge — ideal für Wald- und Wurzel-über-Stein-Stile.', en: 'More robust than the Japanese Maple and very popular with beginners and for nebari studies. Characteristic three-lobed leaves and a beautifully cracked, flaking bark with age. Develops impressive root flare — ideal for forest and root-over-rock styles.' },
    care: {
      sun: { de: 'Volle Sonne bis Halbschatten. Im Hochsommer leichten Schatten geben.', en: 'Full sun to half-shade. Light shade in midsummer.' },
      soil: { de: 'Akadama 60 % + Bims 20 % + Lava 20 %.', en: 'Akadama 60% + pumice 20% + lava 20%.' },
      watering: { de: 'Substrat gleichmäßig feucht halten, im Sommer reichlich.', en: 'Keep substrate evenly moist, generously in summer.' },
      fertilizing: { de: 'Alle 2 Wochen März–Oktober.', en: 'Every 2 weeks March–October.' },
      temperature: { de: 'Winterhart bis −10 °C mit Wurzelschutz; ganzjährig draußen.', en: 'Hardy to −10 °C with root protection; outdoors year-round.' },
      pruning: { de: 'Triebspitzen bei 2–3 Blattpaaren auf 1 Paar zurückschneiden. Verträgt starken Schnitt.', en: 'Pinch shoots back to 1 leaf pair when they have 2–3. Tolerates hard pruning.' },
    },
    styles: [
      { name: 'Hokidachi', de: 'Besenstil — klassische Wahl.', en: 'Broom style — classic choice.' },
      { name: 'Sekijoju', de: 'Wurzel-über-Stein — kräftige Wurzeln umfassen Felsen.', en: 'Root-over-rock — strong roots envelop stones.' },
      { name: 'Yose-ue', de: 'Wald — sehr verbreitet.', en: 'Forest planting — very common.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Spätwinter (ohne Laub) oder Frühsommer (weiche Triebe)', en: 'Late winter (without leaves) or early summer (soft shoots)' }, minimumAge: '2+ Jahre / 2+ years', description: { de: 'Aluminiumdraht. Rinde ist empfindlich — regelmäßig kontrollieren und nach 6–8 Wochen abnehmen.', en: 'Aluminum wire. Bark is sensitive — check regularly and remove after 6–8 weeks.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (Februar–März)', en: 'Spring (February–March)' }, minimumAge: 'Alle 2 Jahre / every 2 years', description: { de: 'Wurzeln um ein Drittel kürzen. Verträgt aggressivere Behandlung als A. palmatum.', en: 'Reduce roots by one-third. Tolerates more aggressive treatment than A. palmatum.' } },
      { name: { de: 'Entlauben', en: 'Defoliation' }, period: { de: 'Frühsommer (Juni)', en: 'Early summer (June)' }, minimumAge: '5+ Jahre', description: { de: 'Komplettes Entlauben fördert feinere Verzweigung und kleinere Blätter.', en: 'Full defoliation promotes finer ramification and smaller leaves.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Frühsommer (Juni–Juli) Halbholzstecklinge', en: 'Early summer (June–July) semi-hardwood cuttings' }, postCare: { de: 'Halbschattig, feucht halten. Bewurzelung in 6–8 Wochen. Aussaat im Frühjahr nach Kaltstratifikation ebenfalls erfolgreich.', en: 'Half-shade, kept moist. Roots in 6–8 weeks. Seed in spring after cold stratification also successful.' } },
    photos: [
      { src: '/img/trees/acer-buergerianum-1.webp', alt: { de: 'Dreispitzahorn Bonsai', en: 'Trident Maple bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/acer-buergerianum-2.webp', alt: { de: 'Trident Maple Rinde', en: 'Trident Maple bark' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/acer-buergerianum-3.webp', alt: { de: 'Dreilappige Blätter', en: 'Three-lobed leaves' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'larix-kaempferi',
    popularName: { de: 'Japanische Lärche', en: 'Japanese Larch' },
    scientificName: 'Larix kaempferi',
    family: 'Pinaceae',
    origin: 'Japan',
    category: 'outdoor',
    beginnerFriendly: false,
    introduction: { de: 'Eine ungewöhnliche Konifere, die im Herbst goldgelb verfärbt und ihre Nadeln abwirft. Wächst sehr schnell und verzweigt sich fein — ideal für Waldgestaltungen und für Yamadori aus den Alpen. Im Frühjahr neuer hellgrüner Austrieb von beeindruckender Frische.', en: 'An unusual conifer that turns golden yellow in autumn and drops its needles. Grows fast and ramifies finely — ideal for forest plantings and for alpine yamadori. New spring growth is strikingly bright green.' },
    care: {
      sun: { de: 'Volle Sonne ganzjährig.', en: 'Full sun year-round.' },
      soil: { de: 'Akadama 50 % + Bims 30 % + Lava 20 %, leicht sauer.', en: 'Akadama 50% + pumice 30% + lava 20%, slightly acidic.' },
      watering: { de: 'Substrat gleichmäßig feucht halten — Lärche mag mehr Wasser als andere Koniferen.', en: 'Keep substrate evenly moist — larch likes more water than other conifers.' },
      fertilizing: { de: 'Alle 2 Wochen März–Oktober, im Hochsommer reduziert.', en: 'Every 2 weeks March–October, reduced in midsummer.' },
      temperature: { de: 'Sehr winterhart bis −25 °C; ganzjährig draußen.', en: 'Very hardy to −25 °C; outdoors year-round.' },
      pruning: { de: 'Neue Triebe im Frühling auf 2–3 Nadelbüschel zurückschneiden.', en: 'Cut new spring shoots back to 2–3 needle clusters.' },
    },
    styles: [
      { name: 'Yose-ue', de: 'Wald — Larix-Wälder sind ikonisch (z. B. Walter Pall).', en: 'Forest — larch forests are iconic (e.g. Walter Pall).' },
      { name: 'Moyogi', de: 'Informeller aufrechter Stil.', en: 'Informal upright.' },
      { name: 'Bunjin', de: 'Literatenstil — passt zur natürlichen Wuchsform an der Baumgrenze.', en: 'Literati — suits the natural alpine treeline habit.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Winter (November–Februar) ohne Nadeln', en: 'Winter (November–February) without needles' }, minimumAge: '3+ Jahre / 3+ years', description: { de: 'Aluminium- oder Kupferdraht. Rinde ist empfindlich; im Frühjahr-Saftaufstieg dickere Äste mit Schutz drahten.', en: 'Aluminum or copper wire. Bark is sensitive; in spring sap-rise protect bark on thicker branches.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März) kurz vor dem Austrieb', en: 'Spring (March) just before bud break' }, minimumAge: 'Alle 3–4 Jahre / every 3–4 years', description: { de: 'Wurzeln um ein Drittel kürzen. Mykorrhiza erhalten.', en: 'Reduce roots by one-third. Preserve mycorrhiza.' } },
      { name: { de: 'Nadelschnitt', en: 'Needle pinching' }, period: { de: 'Frühling während des Austriebs', en: 'Spring during bud break' }, minimumAge: '3+ Jahre', description: { de: 'Junge weiche Triebe mit den Fingern auf 2–3 Nadelbüschel kürzen, fördert kompakte Verzweigung.', en: 'Pinch young soft shoots back to 2–3 needle clusters to promote compact ramification.' } },
    ],
    propagation: { method: 'Seed', period: { de: 'Frühjahr (März–April) nach Kaltstratifikation', en: 'Spring (March–April) after cold stratification' }, postCare: { de: 'Kaltstratifikation 4–6 Wochen. Keimung in 3–6 Wochen. Yamadori-Sammlung aus den Alpen im Spätwinter ist häufig.', en: 'Cold stratify 4–6 weeks. Germinates in 3–6 weeks. Alpine yamadori collection in late winter is common.' } },
    photos: [
      { src: '/img/trees/larix-kaempferi-1.webp', alt: { de: 'Lärchen-Bonsai im Herbst', en: 'Larch bonsai in autumn' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/larix-kaempferi-2.webp', alt: { de: 'Larix Frühjahrsaustrieb', en: 'Larix spring growth' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/larix-kaempferi-3.webp', alt: { de: 'Japanische Lärche Yamadori', en: 'Japanese Larch yamadori' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'chamaecyparis-obtusa',
    popularName: { de: 'Hinoki-Scheinzypresse', en: 'Hinoki Cypress' },
    scientificName: 'Chamaecyparis obtusa',
    family: 'Cupressaceae',
    origin: 'Japan, Taiwan',
    category: 'outdoor',
    beginnerFriendly: false,
    introduction: { de: 'Eine elegante japanische Konifere mit fächerförmigen Schuppenblättern und natürlich kompakter Wuchsform. Die Sorte "Nana Gracilis" ist im Bonsai-Bereich am beliebtesten. Innere Triebe sterben leicht ab, wenn sie zu wenig Licht erhalten — regelmäßiges Auslichten ist Pflicht.', en: 'An elegant Japanese conifer with fan-shaped scale foliage and a naturally compact habit. The cultivar "Nana Gracilis" is most popular in bonsai. Inner shoots die off easily if shaded — regular thinning is essential.' },
    care: {
      sun: { de: 'Volle Sonne bis Halbschatten; ausreichend Licht ins Innere essenziell.', en: 'Full sun to half-shade; light penetration to the interior is essential.' },
      soil: { de: 'Akadama 50 % + Bims 30 % + Lava 20 %, leicht sauer.', en: 'Akadama 50% + pumice 30% + lava 20%, slightly acidic.' },
      watering: { de: 'Substrat gleichmäßig feucht halten, niemals austrocknen lassen.', en: 'Keep substrate evenly moist, never let it dry out.' },
      fertilizing: { de: 'Alle 2 Wochen März–Oktober mit organischem Dünger.', en: 'Every 2 weeks March–October with organic feed.' },
      temperature: { de: 'Winterhart bis −15 °C mit Wurzelschutz; ganzjährig draußen.', en: 'Hardy to −15 °C with root protection; outdoors year-round.' },
      pruning: { de: 'Schuppentriebe mit den Fingern abkneifen (nicht schneiden — Schnittstellen werden braun). Regelmäßig auslichten.', en: 'Pinch scale shoots with fingers (do not cut — cuts turn brown). Thin regularly.' },
    },
    styles: [
      { name: 'Chokkan', de: 'Formaler aufrechter Stil — symbolisiert Hinoki-Tempelbäume.', en: 'Formal upright — symbolic of Hinoki temple trees.' },
      { name: 'Moyogi', de: 'Informeller aufrechter Stil.', en: 'Informal upright.' },
      { name: 'Yose-ue', de: 'Wald — sehr ausdrucksstark.', en: 'Forest planting — very expressive.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Spätsommer–Herbst (August–November)', en: 'Late summer–autumn (August–November)' }, minimumAge: '3+ Jahre / 3+ years', description: { de: 'Kupferdraht. Holz ist relativ flexibel, regelmäßig kontrollieren.', en: 'Copper wire. Wood is relatively flexible; monitor regularly.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März–April) vor dem Austrieb', en: 'Spring (March–April) before bud break' }, minimumAge: 'Alle 3–4 Jahre / every 3–4 years', description: { de: 'Wurzelschnitt vorsichtig (max. 1/3). Mykorrhiza erhalten.', en: 'Conservative root pruning (max one-third). Preserve mycorrhiza.' } },
      { name: { de: 'Auslichten', en: 'Thinning' }, period: { de: 'Spätsommer–Herbst', en: 'Late summer–autumn' }, minimumAge: '3+ Jahre', description: { de: 'Innere und übereinanderliegende Triebe entfernen, damit Licht ins Innere gelangt — beugt dem Absterben der Innentriebe vor.', en: 'Remove inner and overlapping shoots so light reaches the interior — prevents inner-shoot dieback.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Spätsommer (August–September) Halbholzstecklinge', en: 'Late summer (August–September) semi-hardwood cuttings' }, postCare: { de: 'Im Frühbeet halbschattig, feucht. Bewurzelung in 6–12 Monaten. Pfropfen für besondere Sorten üblich.', en: 'Cold frame in half-shade, moist. Roots in 6–12 months. Grafting common for select cultivars.' } },
    photos: [
      { src: '/img/trees/chamaecyparis-obtusa-1.webp', alt: { de: 'Hinoki-Scheinzypresse', en: 'Hinoki Cypress' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/chamaecyparis-obtusa-2.webp', alt: { de: 'Nana Gracilis Schuppenblätter', en: 'Nana Gracilis scale foliage' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/chamaecyparis-obtusa-3.webp', alt: { de: 'Chamaecyparis Bonsai', en: 'Chamaecyparis bonsai' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'fagus-sylvatica',
    popularName: { de: 'Rotbuche', en: 'European Beech' },
    scientificName: 'Fagus sylvatica',
    family: 'Fagaceae',
    origin: 'Europe',
    category: 'outdoor',
    beginnerFriendly: false,
    introduction: { de: 'Eine europäische Laubart mit silbergrauer glatter Rinde und kupferfarbenem Marzeszenz-Laub, das den ganzen Winter über am Baum bleibt. Sehr beliebt für Wald- und Einzelgestaltungen. Wächst langsam — entwickelt aber mit der Zeit einen wunderschön gefurchten Stamm und eine dichte Krone.', en: 'A European deciduous species with smooth silver-grey bark and coppery marcescent foliage that stays on the tree all winter. Very popular for forest plantings and solitaire trees. Slow-growing — but develops a beautifully furrowed trunk and dense crown over time.' },
    care: {
      sun: { de: 'Halbschattig — Rotbuche verträgt keine pralle Mittagssonne, besonders im Sommer.', en: 'Half-shade — beech does not tolerate harsh midday sun, especially in summer.' },
      soil: { de: 'Akadama 50 % + Bims 30 % + Lava 20 %, leicht sauer.', en: 'Akadama 50% + pumice 30% + lava 20%, slightly acidic.' },
      watering: { de: 'Substrat gleichmäßig feucht halten; im Sommer reichlich, niemals austrocknen.', en: 'Keep substrate evenly moist; generously in summer, never let it dry out.' },
      fertilizing: { de: 'Alle 2 Wochen März–Juni und September–Oktober.', en: 'Every 2 weeks March–June and September–October.' },
      temperature: { de: 'Sehr winterhart bis −20 °C; ganzjährig draußen.', en: 'Very hardy to −20 °C; outdoors year-round.' },
      pruning: { de: 'Hauptschnitt im Spätwinter vor dem Austrieb. Nur EIN Austrieb pro Jahr — daher kein wiederholter Schnitt wie bei Ahorn.', en: 'Main pruning in late winter before bud break. Only ONE flush per year — so no repeated cutting like maple.' },
    },
    styles: [
      { name: 'Chokkan', de: 'Formaler aufrechter Stil — natürliche Wuchsform.', en: 'Formal upright — natural growth habit.' },
      { name: 'Yose-ue', de: 'Wald — Buchenwälder gehören zu den schönsten Bonsai-Kompositionen.', en: 'Forest — beech forests are among the most beautiful bonsai compositions.' },
      { name: 'Moyogi', de: 'Informeller aufrechter Stil.', en: 'Informal upright.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Spätherbst–Winter (Oktober–Februar)', en: 'Late autumn–winter (October–February)' }, minimumAge: '3+ Jahre / 3+ years', description: { de: 'Aluminiumdraht. Rinde ist sehr empfindlich — Schutzfolie verwenden, max. 4–6 Wochen.', en: 'Aluminum wire. Bark is very sensitive — use protective tape; max 4–6 weeks.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März) wenn die Knospen schwellen', en: 'Spring (March) as buds swell' }, minimumAge: 'Alle 3–4 Jahre / every 3–4 years', description: { de: 'Wurzeln vorsichtig um ein Drittel kürzen.', en: 'Carefully reduce roots by one-third.' } },
      { name: { de: 'Knospenauswahl', en: 'Bud selection' }, period: { de: 'Spätwinter (Februar–März)', en: 'Late winter (February–March)' }, minimumAge: '5+ Jahre', description: { de: 'Da Buche nur einmal pro Jahr austreibt, gezielt überflüssige Knospen entfernen, um Energie auf gewünschte Triebe zu lenken.', en: 'Since beech only flushes once a year, selectively remove unwanted buds to direct energy to chosen shoots.' } },
    ],
    propagation: { method: 'Seed', period: { de: 'Herbst (Oktober) direkt nach der Reife oder Frühling nach Kaltstratifikation', en: 'Autumn (October) immediately after ripening or spring after cold stratification' }, postCare: { de: 'Kaltstratifikation 3 Monate. Keimung im Frühling. Stecklinge sehr schwierig — Yamadori-Sammlung ist eine beliebte Alternative.', en: 'Cold stratify 3 months. Germinates in spring. Cuttings very difficult — yamadori collection is a popular alternative.' } },
    photos: [
      { src: '/img/trees/fagus-sylvatica-1.webp', alt: { de: 'Rotbuche als Bonsai', en: 'European Beech as bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/fagus-sylvatica-2.webp', alt: { de: 'Buche Wintermarzeszenz', en: 'Beech winter marcescence' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/fagus-sylvatica-3.webp', alt: { de: 'Fagus Wald-Komposition', en: 'Fagus forest composition' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'chaenomeles-japonica',
    popularName: { de: 'Japanische Zierquitte', en: 'Japanese Quince' },
    scientificName: 'Chaenomeles japonica',
    family: 'Rosaceae',
    origin: 'Japan',
    category: 'outdoor',
    beginnerFriendly: false,
    introduction: { de: 'Ein dornenbewehrter Blütenbonsai mit feurig roten, rosa oder weißen Blüten im zeitigen Frühjahr, oft noch vor dem Laubaustrieb. Bildet kleine duftende Quittenfrüchte. Verträgt starken Rückschnitt und ist sehr blühfreudig, braucht jedoch eine kalte Winterruhe für reichliche Blüte.', en: 'A thorny flowering bonsai with fiery red, pink or white blossoms in early spring, often before leaves emerge. Produces small fragrant quince fruits. Tolerates hard pruning and flowers profusely, but needs cold winter dormancy for abundant bloom.' },
    care: {
      sun: { de: 'Volle Sonne ganzjährig.', en: 'Full sun year-round.' },
      soil: { de: 'Akadama 50 % + Bims 30 % + Lava 20 %.', en: 'Akadama 50% + pumice 30% + lava 20%.' },
      watering: { de: 'Substrat gleichmäßig feucht halten, im Sommer reichlich.', en: 'Keep substrate evenly moist, generously in summer.' },
      fertilizing: { de: 'Alle 2 Wochen März–Oktober, im Sommer mit kaliumbetontem Dünger für Blütenansatz.', en: 'Every 2 weeks March–October, with potassium-rich feed in summer for flower buds.' },
      temperature: { de: 'Winterhart bis −20 °C; ganzjährig draußen, Kälteperiode für Blütenansatz nötig.', en: 'Hardy to −20 °C; outdoors year-round, cold period needed for flower set.' },
      pruning: { de: 'Direkt nach der Blüte zurückschneiden — Blütenknospen bilden sich auf altem Holz.', en: 'Prune immediately after flowering — buds form on old wood.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil.', en: 'Informal upright.' },
      { name: 'Kabudachi', de: 'Mehrstämmig — natürliche Wuchsform.', en: 'Multi-trunk — natural habit.' },
      { name: 'Han-kengai', de: 'Halbkaskade.', en: 'Semi-cascade.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Spätherbst–Winter (November–Februar)', en: 'Late autumn–winter (November–February)' }, minimumAge: '2+ Jahre / 2+ years', description: { de: 'Aluminiumdraht. Achtung Dornen. Drahten nicht zu eng — die Rinde ist empfindlich.', en: 'Aluminum wire. Mind the thorns. Do not wire too tight — bark is sensitive.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März) direkt nach der Blüte oder vor Knospenaustrieb', en: 'Spring (March) right after flowering or before bud break' }, minimumAge: 'Alle 2–3 Jahre / every 2–3 years', description: { de: 'Wurzeln um ein Drittel kürzen.', en: 'Reduce roots by one-third.' } },
      { name: { de: 'Blütenschnitt', en: 'Post-bloom pruning' }, period: { de: 'Direkt nach der Blüte (April)', en: 'Immediately after flowering (April)' }, minimumAge: '3+ Jahre', description: { de: 'Verblühte Triebe auf 2–3 Knospen zurückschneiden. Im Sommer keine starken Schnitte — sonst keine Blütenknospen.', en: 'Cut spent shoots back to 2–3 buds. No heavy summer pruning — would remove next year’s flower buds.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Sommer (Juni–August) Halbholzstecklinge', en: 'Summer (June–August) semi-hardwood cuttings' }, postCare: { de: 'Halbschattig, feucht, im Frühbeet überwintern. Bewurzelung in 8–12 Wochen. Auch Wurzelschösslinge.', en: 'Half-shade, moist, overwinter in cold frame. Roots in 8–12 weeks. Root suckers also viable.' } },
    photos: [
      { src: '/img/trees/chaenomeles-japonica-1.webp', alt: { de: 'Zierquitte mit roten Blüten', en: 'Japanese Quince with red flowers' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/chaenomeles-japonica-2.webp', alt: { de: 'Chaenomeles Bonsai', en: 'Chaenomeles bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/chaenomeles-japonica-3.webp', alt: { de: 'Quitte Frucht', en: 'Quince fruit' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'wisteria-sinensis',
    popularName: { de: 'Chinesischer Blauregen', en: 'Chinese Wisteria' },
    scientificName: 'Wisteria sinensis',
    family: 'Fabaceae',
    origin: 'China',
    category: 'outdoor',
    beginnerFriendly: false,
    introduction: { de: 'Spektakulärer Blütenbonsai mit hängenden Trauben aus violetten oder weißen Blüten im späten Frühjahr. Sehr wuchsstark und durstig — braucht im Sommer enorme Wassermengen. Älterer Stamm entwickelt eine spektakulär gefurchte Rinde und beeindruckend dicke Knorrigkeit.', en: 'A spectacular flowering bonsai with pendulous racemes of violet or white blooms in late spring. Very vigorous and thirsty — needs huge amounts of water in summer. Older trunks develop spectacularly furrowed bark and impressively gnarled girth.' },
    care: {
      sun: { de: 'Volle Sonne ganzjährig — unverzichtbar für Blüten.', en: 'Full sun year-round — essential for flowering.' },
      soil: { de: 'Akadama 50 % + Bims 30 % + Lava 20 %, feuchtigkeitsspeichernd.', en: 'Akadama 50% + pumice 30% + lava 20%, moisture-retentive.' },
      watering: { de: 'Sehr durstig — im Sommer bis zu zweimal täglich gießen. Während der Blütezeit Topf zeitweise im Wasserbad.', en: 'Very thirsty — water up to twice a day in summer. During flowering, set pot occasionally in a water tray.' },
      fertilizing: { de: 'Alle 2 Wochen März–Oktober, im Sommer mit phosphor- und kaliumreichem Dünger.', en: 'Every 2 weeks March–October, with phosphorus- and potassium-rich feed in summer.' },
      temperature: { de: 'Winterhart bis −20 °C; ganzjährig draußen.', en: 'Hardy to −20 °C; outdoors year-round.' },
      pruning: { de: 'Im Sommer (Juli–August) lange Ranken auf 4–6 Augen zurückschneiden — fördert Blütenknospen. Strukturschnitt im Winter.', en: 'In summer (July–August) cut long tendrils back to 4–6 buds — encourages flower buds. Structural pruning in winter.' },
    },
    styles: [
      { name: 'Kengai', de: 'Kaskade — passt zur natürlich hängenden Wuchsform der Blüten.', en: 'Cascade — suits the naturally pendulous flower habit.' },
      { name: 'Han-kengai', de: 'Halbkaskade — am häufigsten.', en: 'Semi-cascade — most common.' },
      { name: 'Moyogi', de: 'Informeller aufrechter Stil mit hängenden Blütenständen.', en: 'Informal upright with pendulous flower racemes.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Frühjahr nach der Blüte (Mai–Juni)', en: 'Spring after flowering (May–June)' }, minimumAge: '3+ Jahre / 3+ years', description: { de: 'Kupferdraht für ältere Äste, Aluminium für junge Ranken. Wisteria wächst extrem schnell — Draht regelmäßig kontrollieren.', en: 'Copper for older branches, aluminum for young tendrils. Wisteria grows extremely fast — check wire regularly.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Frühjahr (März) vor dem Austrieb, oder direkt nach der Blüte', en: 'Spring (March) before bud break, or right after flowering' }, minimumAge: 'Alle 2 Jahre / every 2 years', description: { de: 'Aggressiver Wurzelschnitt (bis zur Hälfte) wird gut vertragen — Wisteria entwickelt riesige Wurzelmassen.', en: 'Aggressive root pruning (up to half) is well tolerated — Wisteria develops huge root mass.' } },
      { name: { de: 'Sommerschnitt für Blüten', en: 'Summer pruning for blooms' }, period: { de: 'Juli–August', en: 'July–August' }, minimumAge: '3+ Jahre', description: { de: 'Lange Sommerranken auf 4–6 Augen zurückschneiden — zwingt zu Blütenknospen statt Blattmasse.', en: 'Cut long summer tendrils back to 4–6 buds — forces flower buds rather than leaf mass.' } },
    ],
    propagation: { method: 'Air layering', period: { de: 'Frühling–Frühsommer (Mai–Juni)', en: 'Spring–early summer (May–June)' }, postCare: { de: 'Abmoosen sehr erfolgreich, Bewurzelung in 6–12 Wochen. Aus Samen 7–15 Jahre bis zur ersten Blüte; veredelte Pflanzen bevorzugt.', en: 'Air layering very successful, roots in 6–12 weeks. From seed it takes 7–15 years to first bloom; grafted plants preferred.' } },
    photos: [
      { src: '/img/trees/wisteria-sinensis-1.webp', alt: { de: 'Wisteria-Bonsai in Blüte', en: 'Wisteria bonsai in bloom' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/wisteria-sinensis-2.webp', alt: { de: 'Blauregen-Trauben', en: 'Wisteria racemes' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/wisteria-sinensis-3.webp', alt: { de: 'Wisteria knorriger Stamm', en: 'Wisteria gnarled trunk' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'prunus-mume',
    popularName: { de: 'Japanische Aprikose / Ume', en: 'Japanese Apricot / Ume' },
    scientificName: 'Prunus mume',
    family: 'Rosaceae',
    origin: 'China, Korea, Japan',
    category: 'outdoor',
    beginnerFriendly: false,
    introduction: { de: 'Symbol des japanischen Neujahrs und der ersten Frühlingsboten — duftende rosa, weiße oder rote Blüten erscheinen im Spätwinter, oft noch im Schnee. Charakteristisch sind knorrige, dramatisch gestaltete Stämme älterer Bäume. Eine der spirituell bedeutendsten Bonsai-Arten in Japan.', en: 'Symbol of the Japanese New Year and the first sign of spring — fragrant pink, white or red blooms appear in late winter, often in the snow. Older trees develop characteristically gnarled, dramatically styled trunks. One of the most spiritually significant bonsai species in Japan.' },
    care: {
      sun: { de: 'Volle Sonne ganzjährig — unverzichtbar für reichliche Blüte.', en: 'Full sun year-round — essential for abundant flowering.' },
      soil: { de: 'Akadama 50 % + Bims 30 % + Lava 20 %.', en: 'Akadama 50% + pumice 30% + lava 20%.' },
      watering: { de: 'Substrat gleichmäßig feucht halten, im Sommer reichlich.', en: 'Keep substrate evenly moist, generously in summer.' },
      fertilizing: { de: 'Alle 2 Wochen März–Oktober, nach der Blüte stark düngen, im Sommer kaliumbetont.', en: 'Every 2 weeks March–October, feed heavily after flowering, potassium-rich in summer.' },
      temperature: { de: 'Winterhart bis −15 °C mit Wurzelschutz; Kälteperiode für Blütenansatz nötig.', en: 'Hardy to −15 °C with root protection; cold period needed for flower set.' },
      pruning: { de: 'Direkt nach der Blüte (März–April) stark zurückschneiden — Blütenknospen bilden sich am vorjährigen Holz.', en: 'Prune hard immediately after flowering (March–April) — flower buds form on previous year’s wood.' },
    },
    styles: [
      { name: 'Bunjin', de: 'Literatenstil — passt zur knorrigen, eleganten Wuchsform alter Ume.', en: 'Literati — suits the gnarled, elegant habit of old Ume.' },
      { name: 'Moyogi', de: 'Informeller aufrechter Stil.', en: 'Informal upright.' },
      { name: 'Shari', de: 'Totholzbereiche — symbolisch für das Überleben alter Bäume.', en: 'Deadwood sections — symbolic of old trees surviving.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Spätherbst–Winter (November–Februar) ohne Laub', en: 'Late autumn–winter (November–February) without leaves' }, minimumAge: '3+ Jahre / 3+ years', description: { de: 'Holz ist hart und spröde — vorsichtig biegen, mehrere Etappen. Schutzfolie verwenden.', en: 'Wood is hard and brittle — bend gradually in stages. Use protective tape.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Direkt nach der Blüte (März–April)', en: 'Immediately after flowering (March–April)' }, minimumAge: 'Alle 2 Jahre / every 2 years', description: { de: 'Wurzeln um ein Drittel kürzen. Schnittstellen mit Wundverschluss versiegeln.', en: 'Reduce roots by one-third. Seal cuts with wound paste.' } },
      { name: { de: 'Blütenschnitt', en: 'Post-bloom pruning' }, period: { de: 'Direkt nach der Blüte', en: 'Immediately after flowering' }, minimumAge: '3+ Jahre', description: { de: 'Verblühte Triebe stark auf 2–3 Augen zurückschneiden, um neue Blütenknospen für nächstes Jahr zu fördern.', en: 'Cut spent shoots back hard to 2–3 buds to encourage next year’s flower buds.' } },
    ],
    propagation: { method: 'Air layering', period: { de: 'Frühling–Frühsommer (Mai–Juni)', en: 'Spring–early summer (May–June)' }, postCare: { de: 'Abmoosen sehr zuverlässig. Stecklinge möglich, aber schwierig. Sorten werden meist veredelt.', en: 'Air layering very reliable. Cuttings possible but tricky. Cultivars usually grafted.' } },
    photos: [
      { src: '/img/trees/prunus-mume-1.webp', alt: { de: 'Ume-Blüten im Spätwinter', en: 'Ume blooms in late winter' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/prunus-mume-2.webp', alt: { de: 'Prunus mume Bonsai', en: 'Prunus mume bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/prunus-mume-3.webp', alt: { de: 'Knorriger Ume-Stamm', en: 'Gnarled Ume trunk' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
  {
    slug: 'olea-europaea',
    popularName: { de: 'Olive', en: 'Olive' },
    scientificName: 'Olea europaea',
    family: 'Oleaceae',
    origin: 'Mediterranean',
    category: 'outdoor',
    beginnerFriendly: false,
    introduction: { de: 'Eine der ältesten Kulturpflanzen der Welt, mit silbergrünem Laub und einem natürlich knorrigen, hohlen Stamm im Alter. Sehr beliebt für Yamadori aus Spanien, Italien und Griechenland. Verträgt Trockenheit hervorragend, ist aber in Berlin nicht voll winterhart — braucht ein kaltes, frostfreies Winterquartier.', en: 'One of the world’s oldest cultivated plants, with silver-green foliage and naturally gnarled, hollow trunks with age. Very popular as yamadori from Spain, Italy and Greece. Excellent drought tolerance but not fully hardy in Berlin — needs a cold but frost-free winter shelter.' },
    care: {
      sun: { de: 'Volle Sonne ganzjährig — so viel wie möglich.', en: 'Full sun year-round — as much as possible.' },
      soil: { de: 'Akadama 40 % + Bims 40 % + Lava 20 %, sehr durchlässig.', en: 'Akadama 40% + pumice 40% + lava 20%, very free-draining.' },
      watering: { de: 'Sparsam — erst gießen, wenn das Substrat deutlich angetrocknet ist. Verträgt Trockenheit gut.', en: 'Sparingly — water only when substrate has clearly dried. Tolerates drought well.' },
      fertilizing: { de: 'Alle 2 Wochen März–Oktober mit organischem Dünger.', en: 'Every 2 weeks March–October with organic feed.' },
      temperature: { de: 'Verträgt kurzzeitig bis ca. −5 °C; in Berlin frostfrei (0–10 °C) und hell überwintern.', en: 'Tolerates short spells to about −5 °C; in Berlin overwinter frost-free (0–10 °C) and bright.' },
      pruning: { de: 'Triebe nach Verholzung auf 2–3 Blattpaare zurückschneiden. Verträgt sehr starken Rückschnitt — auch bis ins alte Holz.', en: 'Cut shoots back to 2–3 leaf pairs after lignification. Tolerates very hard pruning — even into old wood.' },
    },
    styles: [
      { name: 'Moyogi', de: 'Informeller aufrechter Stil mit knorrigem Stamm.', en: 'Informal upright with gnarled trunk.' },
      { name: 'Shari', de: 'Totholz — natürlich hohle Stämme alter Oliven ideal dafür.', en: 'Shari — the naturally hollow trunks of old olives are ideal for this.' },
      { name: 'Bunjin', de: 'Literatenstil — passt zur eleganten Silhouette.', en: 'Literati — suits the elegant silhouette.' },
    ],
    techniques: [
      { name: { de: 'Drahten', en: 'Wiring' }, period: { de: 'Spätfrühling–Sommer während aktivem Wachstum', en: 'Late spring–summer during active growth' }, minimumAge: '3+ Jahre / 3+ years', description: { de: 'Holz ist hart, aber überraschend flexibel. Kupferdraht für Hauptäste, Aluminium für feine Triebe.', en: 'Wood is hard but surprisingly flexible. Copper for main branches, aluminum for fine shoots.' } },
      { name: { de: 'Umtopfen', en: 'Repotting' }, period: { de: 'Spätfrühling (April–Mai) bei stabilen Temperaturen über 15 °C', en: 'Late spring (April–May) at stable temperatures above 15 °C' }, minimumAge: 'Alle 3–4 Jahre / every 3–4 years', description: { de: 'Wurzeln um ein Drittel kürzen. Olive erholt sich rasch, wenn warm und sonnig.', en: 'Reduce roots by one-third. Olive recovers quickly when kept warm and sunny.' } },
      { name: { de: 'Entlauben', en: 'Defoliation' }, period: { de: 'Frühsommer (Juni)', en: 'Early summer (June)' }, minimumAge: '5+ Jahre, nur an gesunden Bäumen', description: { de: 'Komplettes Entlauben fördert kleinere Blätter und feinere Verzweigung — alle 2–3 Jahre möglich.', en: 'Full defoliation promotes smaller leaves and finer ramification — possible every 2–3 years.' } },
    ],
    propagation: { method: 'Cuttings', period: { de: 'Frühling–Sommer (Mai–August)', en: 'Spring–summer (May–August)' }, postCare: { de: 'Halbholzstecklinge bewurzeln in 8–12 Wochen unter halbschattig-feuchten Bedingungen. Yamadori-Sammlung im Mittelmeerraum ist verbreitete Beschaffung.', en: 'Semi-hardwood cuttings root in 8–12 weeks under half-shaded, moist conditions. Mediterranean yamadori collection is a common source.' } },
    photos: [
      { src: '/img/trees/olea-europaea-1.webp', alt: { de: 'Olivenbaum als Bonsai', en: 'Olive tree as bonsai' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/olea-europaea-2.webp', alt: { de: 'Silbergrünes Olivenlaub', en: 'Silver-green olive foliage' }, credit: 'Unsplash', license: 'CC0' },
      { src: '/img/trees/olea-europaea-3.webp', alt: { de: 'Hohler Olivenstamm', en: 'Hollow olive trunk' }, credit: 'Unsplash', license: 'CC0' },
    ],
  },
];

/** Search index — flat strings for client-side includes() filtering */
export interface SearchEntry {
  slug: string;
  popularNameDe: string;
  popularNameEn: string;
  scientificName: string;
  family: string;
  origin: string;
  category: Category;
  beginnerFriendly: boolean;
  searchBlob: string;
}

export const SEARCH_INDEX: readonly SearchEntry[] = TREES.map((t) => ({
  slug: t.slug,
  popularNameDe: t.popularName.de,
  popularNameEn: t.popularName.en,
  scientificName: t.scientificName,
  family: t.family,
  origin: t.origin,
  category: t.category,
  beginnerFriendly: t.beginnerFriendly,
  searchBlob: [t.popularName.de, t.popularName.en, t.scientificName, t.family, t.origin]
    .join(' ')
    .toLowerCase(),
}));

export function getTreeBySlug(slug: string): Tree | undefined {
  return TREES.find((t) => t.slug === slug);
}

export function getTreesByCategory(category: Category): readonly Tree[] {
  if (category === 'indoor') return TREES.filter((t) => t.category === 'indoor' || t.category === 'both');
  if (category === 'outdoor') return TREES.filter((t) => t.category === 'outdoor' || t.category === 'both');
  return TREES;
}

export function getBeginnerTrees(): readonly Tree[] {
  return TREES.filter((t) => t.beginnerFriendly);
}
