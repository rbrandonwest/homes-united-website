import { Hero } from '@/components/sections/Hero';
import { Contact } from '@/components/sections/Contact';
import { Section } from '@/components/common/Section';
import { Card } from '@/components/common/Card';

export default function ContactPage() {
  return (
    <>
      <Hero 
        title="Contact Us"
        subtitle="We're here to help bring your vision to life"
        ctaText="Call Us"
        ctaLink="tel:+15551234567"
        secondaryCtaText="Email Us"
        secondaryCtaLink="mailto:contact@example.com"
      />

      <Section background="light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <div className="mb-4">
              <svg className="w-8 h-8 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </Card>

          <Card className="text-center">
            <div className="mb-4">
              <svg className="w-8 h-8 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">contact@example.com</p>
          </Card>

          <Card className="text-center">
            <div className="mb-4">
              <svg className="w-8 h-8 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">123 Business St, City, State 12345</p>
          </Card>
        </div>
      </Section>

      <Contact 
        title="Send Us a Message"
        subtitle="We'll get back to you as soon as possible"
      />
    </>
  );
} 