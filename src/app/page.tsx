import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Partners } from '@/components/sections/Partners';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Services />
      <Partners />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
}
