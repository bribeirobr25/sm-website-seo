'use client';

import { SITE } from '@/lib/site';
import { track, EVENTS } from '@/lib/analytics';
import { Placeholder } from '@/components/ui/Placeholder';

export function Classes() {
  function handleClassView(slug: string) {
    track(EVENTS.CLASS_VIEWED, { source_section: 'classes', class_slug: slug });
  }

  return (
    <section id="kurse" className="section bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-text">Unsere Kurse</h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Vier Praxisrichtungen, das ganze Jahr über. Jede Klasse wird von einem erfahrenen
            Lehrer geleitet — kleine Gruppen mit Platz für Korrekturen.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {SITE.classes.map((cls) => (
            <li
              key={cls.slug}
              onMouseEnter={() => handleClassView(cls.slug)}
              className="group bg-bg border border-border rounded-lg p-6 hover:border-accent transition-colors"
            >
              <Placeholder
                label={`${cls.name} — Praxisfoto`}
                aspectRatio="3 / 2"
                rounded
                className="mb-5"
              />
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl text-text">{cls.name}</h3>
                <span className="text-xs text-text-muted tabular shrink-0">
                  {cls.duration} min
                </span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-accent-deep font-medium">
                {cls.level}
              </p>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">{cls.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
