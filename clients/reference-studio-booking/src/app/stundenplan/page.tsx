import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Stundenplan',
  description: 'Wochenplan für Studio Sereno Yoga. Buchung über Mindbody.',
};

// Wochenplan — DRAFT, Inhaber zur Bestätigung
const SCHEDULE = [
  { day: 'Montag', sessions: [
    { time: '07:30 – 08:45', name: 'Hatha', teacher: 'Anna' },
    { time: '18:30 – 19:30', name: 'Vinyasa Flow', teacher: 'Jonas' },
  ]},
  { day: 'Dienstag', sessions: [
    { time: '09:00 – 10:15', name: 'Yin Yoga', teacher: 'Anna' },
    { time: '19:00 – 19:45', name: 'Pranayama & Meditation', teacher: 'Jonas' },
  ]},
  { day: 'Mittwoch', sessions: [
    { time: '07:30 – 08:45', name: 'Hatha', teacher: 'Anna' },
    { time: '18:30 – 19:30', name: 'Vinyasa Flow', teacher: 'Jonas' },
    { time: '20:00 – 21:15', name: 'Yin Yoga', teacher: 'Anna' },
  ]},
  { day: 'Donnerstag', sessions: [
    { time: '09:00 – 10:00', name: 'Vinyasa Flow', teacher: 'Jonas' },
    { time: '18:30 – 19:45', name: 'Hatha', teacher: 'Anna' },
  ]},
  { day: 'Freitag', sessions: [
    { time: '07:30 – 08:45', name: 'Hatha', teacher: 'Anna' },
    { time: '18:00 – 19:00', name: 'Vinyasa Flow', teacher: 'Jonas' },
  ]},
  { day: 'Samstag', sessions: [
    { time: '09:30 – 10:45', name: 'Vinyasa Flow', teacher: 'Jonas' },
    { time: '11:15 – 12:30', name: 'Yin Yoga', teacher: 'Anna' },
  ]},
  { day: 'Sonntag', sessions: [
    { time: '10:00 – 11:15', name: 'Hatha', teacher: 'Anna' },
  ]},
];

export default function StundenplanPage() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl text-text">Stundenplan</h1>
            <p className="mt-4 text-text-muted leading-relaxed">
              Klassen finden im Studio in Berlin Mitte statt. Buchung und Wartelisten laufen über
              Mindbody. Probestunden buchst du direkt bei uns.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={SITE.booking.url} external variant="primary" size="md">
                {SITE.booking.label}
              </Button>
              <Button href="/trial" variant="secondary" size="md">
                {SITE.trial.label}
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SCHEDULE.map((day) => (
              <div
                key={day.day}
                className="bg-surface border border-border rounded-lg p-5"
              >
                <h2 className="font-display text-xl text-text">{day.day}</h2>
                <ul className="mt-4 divide-y divide-border">
                  {day.sessions.map((s) => (
                    <li key={`${day.day}-${s.time}`} className="py-3">
                      <p className="text-sm text-text tabular">{s.time}</p>
                      <p className="mt-1 text-base text-text">{s.name}</p>
                      <p className="text-xs text-text-muted">mit {s.teacher}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-text-muted">
            <span className="font-medium">DRAFT —</span> Wochenplan vom Inhaber zur Bestätigung vor
            Produktionscutover. Tatsächliche Klassenzeiten werden aus Mindbody synchronisiert.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
