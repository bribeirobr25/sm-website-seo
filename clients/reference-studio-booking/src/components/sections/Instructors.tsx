'use client';

import { SITE } from '@/lib/site';
import { track, EVENTS } from '@/lib/analytics';
import { Placeholder } from '@/components/ui/Placeholder';

export function Instructors() {
  function handleProfile(slug: string) {
    track(EVENTS.INSTRUCTOR_PROFILE_VIEWED, {
      source_section: 'instructors',
      instructor_slug: slug,
    });
  }

  return (
    <section id="team" className="section bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-text">Wer unterrichtet</h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Klein bleibt klein. Zwei Lehrer mit unterschiedlichen Hintergründen und einem geteilten
            Verständnis von achtsamer Praxis.
          </p>
        </div>

        <ul className="mt-10 grid gap-8 md:grid-cols-2 max-w-4xl">
          {SITE.instructors.map((person) => (
            <li
              key={person.slug}
              onMouseEnter={() => handleProfile(person.slug)}
              className="flex flex-col sm:flex-row gap-5 items-start"
            >
              <div className="w-full sm:w-32 shrink-0">
                <Placeholder
                  label={`${person.name} — Portrait`}
                  aspectRatio="1 / 1"
                  rounded
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl text-text">{person.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-accent-deep font-medium">
                  {person.role}
                </p>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
