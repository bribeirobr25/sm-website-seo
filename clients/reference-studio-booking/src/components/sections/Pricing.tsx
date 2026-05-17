'use client';

import { useEffect, useRef } from 'react';
import { SITE } from '@/lib/site';
import { track, EVENTS } from '@/lib/analytics';
import { Button } from '@/components/ui/Button';

export function Pricing() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            track(EVENTS.PRICING_VIEWED, { source_section: 'pricing' });
            obs.disconnect();
            return;
          }
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  function handleBooking(tier: string) {
    track(EVENTS.CTA_CLICK, { source_section: 'pricing', cta_label: tier });
    track(EVENTS.BOOKING_STARTED, {
      source_section: 'pricing',
      booking_provider: SITE.booking.provider,
      pricing_tier: tier,
    });
  }

  return (
    <section id="preise" ref={ref} className="section bg-bg">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-text">Preise</h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Drei Wege, bei uns zu praktizieren. Wechseln ist jederzeit möglich.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {SITE.pricing.map((tier) => (
            <li
              key={tier.name}
              className={`relative bg-surface border rounded-lg p-7 ${
                tier.featured ? 'border-accent shadow-elev' : 'border-border'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-7 inline-flex items-center px-3 py-1 rounded-full bg-accent text-bg text-xs font-medium">
                  Beliebt
                </span>
              )}
              <h3 className="font-display text-xl text-text">{tier.name}</h3>
              <p className="mt-4 font-display text-3xl text-text tabular">{tier.price}</p>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">{tier.description}</p>
              <div className="mt-6">
                <Button
                  href={SITE.booking.url}
                  external
                  variant={tier.featured ? 'primary' : 'secondary'}
                  size="md"
                  onClick={() => handleBooking(tier.name)}
                  className="w-full"
                >
                  {SITE.booking.label}
                </Button>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs text-text-muted text-center">
          Preise inkl. 19 % MwSt. · Probestunde 12 € · Hochwertige Matten kostenfrei vor Ort.
        </p>
      </div>
    </section>
  );
}
