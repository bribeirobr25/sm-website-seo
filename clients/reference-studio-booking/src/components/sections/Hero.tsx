'use client';

import { SITE } from '@/lib/site';
import { track, EVENTS } from '@/lib/analytics';
import { Button } from '@/components/ui/Button';
import { Placeholder } from '@/components/ui/Placeholder';

export function Hero() {
  function trialClick() {
    track(EVENTS.CTA_CLICK, { source_section: 'hero', cta_label: 'probestunde' });
    track(EVENTS.TRIAL_SIGNUP_STARTED, { source_section: 'hero' });
  }

  function bookingClick() {
    track(EVENTS.CTA_CLICK, { source_section: 'hero', cta_label: 'klasse_buchen' });
    track(EVENTS.BOOKING_STARTED, {
      source_section: 'hero',
      booking_provider: SITE.booking.provider,
    });
  }

  return (
    <section className="section bg-bg">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-deep font-medium">
            Yoga in Berlin Mitte
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-text leading-[1.1]">
            Eine ruhige Praxis, mitten in der Stadt.
          </h1>
          <p className="mt-6 text-lg text-text-muted leading-relaxed">
            Hatha, Vinyasa, Yin und Pranayama — in kleinen Gruppen unterrichtet, mit Sorgfalt für
            Ausrichtung und Atem. Seit {SITE.foundedYear}.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/trial" size="lg" onClick={trialClick}>
              {SITE.trial.label}
            </Button>
            <Button
              href={SITE.booking.url}
              external
              variant="secondary"
              size="lg"
              onClick={bookingClick}
            >
              {SITE.booking.label}
            </Button>
          </div>

          <p className="mt-4 text-xs text-text-muted">
            Probestunde: 12 € · Drop-in ab 22 € · Keine Bindung
          </p>
        </div>

        <div className="lg:order-last">
          <Placeholder
            label="Hero — kleine Klasse in warmem Naturlicht (1600×1200)"
            aspectRatio="4 / 3"
            rounded
          />
        </div>
      </div>
    </section>
  );
}
