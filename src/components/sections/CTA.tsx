import { Section } from '../common/Section';
import { Button } from '../common/Button';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  background?: 'white' | 'light' | 'dark';
}

export function CTA({
  title = "Ready to Get Started?",
  subtitle = "Join thousands of satisfied customers who trust us with their digital presence.",
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/about",
  background = 'dark'
}: CTAProps) {
  return (
    <Section background={background}>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
          background === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h2>
        <p className={`text-xl mb-8 ${
          background === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            href={primaryButtonLink}
            variant={background === 'dark' ? 'primary' : 'outline'}
            size="lg"
          >
            {primaryButtonText}
          </Button>
          {secondaryButtonText && (
            <Button 
              href={secondaryButtonLink}
              variant={background === 'dark' ? 'outline' : 'secondary'}
              size="lg"
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
} 