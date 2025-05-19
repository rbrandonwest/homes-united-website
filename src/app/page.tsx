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
      <Hero 
        title="Building Hope, Creating Homes"
        subtitle="Empowering communities through stable housing solutions and comprehensive support services."
      />
      <Features />
      <About />
      <div className="bg-gradient-to-b from-primary-50 to-white">
        <Services />
      </div>
      <div className="bg-gradient-to-b from-white to-primary-50/50">
        <Partners />
      </div>
      <div className="bg-gradient-to-br from-primary-50 to-white">
        <Testimonials />
      </div>
      <CTA 
        title="Ready to Make a Difference?"
        subtitle="Join us in our mission to provide stable housing"
        primaryButtonText="Get Started Today"
        background="light"
      />
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <Contact />
      </div>
    </main>
  );
}
