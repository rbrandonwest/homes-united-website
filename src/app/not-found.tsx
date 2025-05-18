import Link from 'next/link';
import { Button } from '@/components/common/Button';
import { Section } from '@/components/common/Section';

export default function NotFound() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">
            Go Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Support
          </Button>
        </div>
      </div>
    </Section>
  );
} 