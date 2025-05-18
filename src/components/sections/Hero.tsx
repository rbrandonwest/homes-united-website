import { Button } from '../common/Button';
import { Section } from '../common/Section';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function Hero({
  title = "Transform Your Digital Presence",
  subtitle = "We create stunning websites that help businesses grow and succeed in the digital world.",
  ctaText = "Get Started",
  ctaLink = "/contact",
  secondaryCtaText = "Learn More",
  secondaryCtaLink = "/about"
}: HeroProps) {
  return (
    <Section 
      background="white" 
      className="relative overflow-hidden"
      spacing="large"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-blue-100/50" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-blue-50/50" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={ctaLink} size="lg">
            {ctaText}
          </Button>
          
          <Button 
            href={secondaryCtaLink} 
            variant="outline" 
            size="lg"
          >
            {secondaryCtaText}
          </Button>
        </div>
      </div>
    </Section>
  );
} 