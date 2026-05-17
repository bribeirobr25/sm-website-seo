'use client';

import { SITE } from '@/lib/site';
import { track, EVENTS } from '@/lib/analytics';
import { ShareButton } from '@/components/ui/ShareButton';

const DAY_LABELS: Record<string, string> = {
  Mon: 'Montag',
  Tue: 'Dienstag',
  Wed: 'Mittwoch',
  Thu: 'Donnerstag',
  Fri: 'Freitag',
  Sat: 'Samstag',
  Sun: 'Sonntag',
};

export function Visit() {
  const mapsQuery = encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`,
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  function handleMap() {
    track(EVENTS.MAP_CLICK, { source_section: 'visit' });
  }
  function handlePhone() {
    track(EVENTS.PHONE_CLICK, { source_section: 'visit' });
  }
  function handleWhatsApp() {
    track(EVENTS.WHATSAPP_CLICK, { source_section: 'visit' });
  }

  return (
    <section id="kontakt" className="section bg-surface">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-text">Komm vorbei</h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Mitten in Berlin Mitte, zwei Minuten von der U-Bahn Oranienburger Tor.
          </p>

          <address className="not-italic mt-8 space-y-3 text-text">
            <p className="font-display text-lg">{SITE.name}</p>
            <p className="text-text-muted">
              {SITE.address.street}
              <br />
              {SITE.address.postalCode} {SITE.address.city}, {SITE.address.neighborhood}
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm pt-2">
              <a
                href={`tel:${SITE.phone}`}
                onClick={handlePhone}
                className="inline-flex items-center gap-2 text-text hover:text-accent transition-colors"
              >
                <span aria-hidden="true">📞</span>
                {SITE.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                onClick={handleWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text hover:text-accent transition-colors"
              >
                <span aria-hidden="true">💬</span>
                WhatsApp
              </a>
              <a
                href={mapsUrl}
                onClick={handleMap}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text hover:text-accent transition-colors"
              >
                <span aria-hidden="true">📍</span>
                Route in Google Maps
              </a>
            </div>
          </address>

          <div className="mt-8 pt-6 border-t border-border">
            <ShareButton source="visit" />
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl text-text">Öffnungszeiten</h3>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {SITE.hours.map((h) => (
              <li
                key={h.day}
                className="flex items-center justify-between py-3 text-sm"
              >
                <span className="text-text">{DAY_LABELS[h.day] ?? h.day}</span>
                <span className="text-text-muted tabular">
                  {h.open} – {h.close}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-text-muted">
            Kursplan und Buchung über Mindbody — Klassen finden auch außerhalb der Öffnungszeiten
            statt, wenn Lehrer:innen den Raum hüten.
          </p>
        </div>
      </div>
    </section>
  );
}
