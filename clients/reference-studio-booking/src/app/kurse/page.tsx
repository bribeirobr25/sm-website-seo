import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Classes } from '@/components/sections/Classes';
import { Pricing } from '@/components/sections/Pricing';

export const metadata: Metadata = {
  title: 'Kurse',
  description:
    'Hatha, Vinyasa, Yin und Pranayama. Vier Praxisrichtungen im Studio Sereno in Berlin Mitte.',
};

export default function KursePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Classes />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
