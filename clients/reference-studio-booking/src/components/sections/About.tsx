import { SITE } from '@/lib/site';
import { Placeholder } from '@/components/ui/Placeholder';

export function About() {
  return (
    <section id="ueber-uns" className="section bg-bg">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <Placeholder
            label="Studioraum — warmes Naturlicht, Holzboden (1400×1050)"
            aspectRatio="4 / 3"
            rounded
          />
        </div>

        <div className="order-1 lg:order-2 max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-deep font-medium">
            Über uns
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-text leading-tight">
            Ein Studio für ruhige, achtsame Praxis.
          </h2>
          <p className="mt-5 text-text-muted leading-relaxed">
            Studio Sereno wurde {SITE.foundedYear} von {SITE.founder} gegründet — mit der Idee,
            einen Ort in Mitte zu schaffen, an dem Yoga nicht laut, schnell oder leistungsorientiert
            sein muss. Wir unterrichten in kleinen Gruppen, achten auf Ausrichtung und Atem, und
            arbeiten in einem hellen, schlichten Raum mit Holzboden.
          </p>
          <p className="mt-4 text-text-muted leading-relaxed">
            Anfänger sind genauso willkommen wie langjährig Praktizierende. Hochwertige Matten,
            Decken und Bolster stellen wir kostenfrei. Komm in bequemer Kleidung — alles andere
            findet sich.
          </p>
        </div>
      </div>
    </section>
  );
}
