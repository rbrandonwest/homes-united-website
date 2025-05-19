import { generateMetadata } from '@/lib/metadata';
import { AboutHero } from '../../components/sections/AboutHero';
import { Mission } from '../../components/sections/Mission';
import { Partners } from '../../components/sections/Partners';
import { CTA } from '../../components/sections/CTA';

export const metadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about our company, our mission, and the team behind our success.',
  path: '/about'
});

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Mission />
      <Partners />
      <CTA 
        title="Ready to Learn More?"
        subtitle="Get in touch with our team"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />
    </main>
  );
} 