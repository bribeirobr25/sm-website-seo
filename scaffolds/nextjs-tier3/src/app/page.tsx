/**
 * Home page — minimal scaffold placeholder.
 *
 * Replace this body with client-specific sections per the matching
 * vertical template at `docs/design/templates/[vertical].md`.
 *
 * Import canonical components from `docs/design/components/_impl/`
 * (React variants — `.tsx`) only when the spec sheet §1 confirms
 * applicability for the client's vertical.
 */

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container-page">
          <p className="text-sm uppercase tracking-wider text-text-muted">Scaffold</p>
          <h1 className="mt-2 text-4xl sm:text-5xl text-text">
            Next.js Tier 3 scaffold is live.
          </h1>
          <p className="mt-4 max-w-prose text-text-muted leading-relaxed">
            This is the agency Tier-3 starter at <code>scaffolds/nextjs-tier3/</code>. Replace the
            body of <code>src/app/page.tsx</code> with the client's sections per
            <code>docs/design/templates/[vertical].md</code>. Populate
            <code>src/lib/site.ts</code> from <code>site.example.ts</code>, override the palette in
            <code>src/app/globals.css</code>, and run <code>pnpm db:push</code> after declaring
            <code>DATABASE_URL</code>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
