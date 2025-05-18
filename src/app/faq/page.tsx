import { generateMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Contact } from '@/components/sections/Contact';

export const metadata = generateMetadata({
  title: 'FAQ',
  description: 'Find answers to commonly asked questions about our services and solutions.',
  path: '/faq'
});

export default function FAQPage() {
  return (
    <>
      <Hero 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and solutions"
        ctaText="Contact Us"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
      />
      
      <FAQ />
      
      <CTA 
        title="Still Have Questions?"
        subtitle="Contact us directly and we'll help you find the answers you need."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />
      
      <Contact />
    </>
  );
} 