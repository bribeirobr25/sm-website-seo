import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Classes } from '@/components/sections/Classes';
import { About } from '@/components/sections/About';
import { Pricing } from '@/components/sections/Pricing';
import { Instructors } from '@/components/sections/Instructors';
import { Visit } from '@/components/sections/Visit';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Classes />
        <About />
        <Pricing />
        <Instructors />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
