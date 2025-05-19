import { Services } from '@/components/sections/Services';
import { CTA } from '@/components/sections/CTA';

export default function ServicesPage() {
  return (
    <main>
      <Services />
      <CTA 
        title="Ready to Get Started?"
        subtitle="Let us help you find the right housing solution"
        primaryButtonText="Contact Us"
        background="light"
      />
    </main>
  );
} 