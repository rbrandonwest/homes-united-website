import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

export default function ServicesPage() {
  return (
    <>
      <Hero 
        title="Our Services"
        subtitle="Comprehensive web solutions tailored to your business needs"
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#services"
      />

      <Services 
        title="What We Offer"
        subtitle="Choose the perfect solution for your needs"
      />

      <Features 
        title="Why Choose Us"
        subtitle="We deliver comprehensive solutions that drive results"
      />

      <Testimonials />

      <Contact 
        title="Ready to Get Started?"
        subtitle="Contact us today to discuss your project"
      />
    </>
  );
} 