import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

interface Service {
  title: string;
  description: string;
  features: string[];
  price?: string;
  ctaText?: string;
  ctaLink?: string;
  highlighted?: boolean;
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

export function Services({
  title = "Our Services",
  subtitle = "Choose the perfect solution for your needs",
  services = [
    {
      title: "Basic Website",
      description: "Perfect for small businesses just getting started",
      features: [
        "Responsive Design",
        "5 Pages",
        "Contact Form",
        "Basic SEO",
      ],
      price: "$999",
      ctaText: "Get Started",
      ctaLink: "/contact"
    },
    {
      title: "Professional",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Basic",
        "Custom Design",
        "10 Pages",
        "Advanced SEO",
        "Analytics Integration"
      ],
      price: "$1,999",
      ctaText: "Get Started",
      ctaLink: "/contact",
      highlighted: true
    },
    {
      title: "Enterprise",
      description: "For large businesses with specific needs",
      features: [
        "Everything in Professional",
        "E-commerce Features",
        "Unlimited Pages",
        "Priority Support",
        "Custom Functionality"
      ],
      price: "Custom",
      ctaText: "Contact Us",
      ctaLink: "/contact"
    }
  ]
}: ServicesProps) {
  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index}
            className={`flex flex-col ${
              service.highlighted 
                ? 'border-2 border-blue-600 scale-105' 
                : ''
            }`}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>

            {service.price && (
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {service.price}
                </span>
              </div>
            )}

            <ul className="space-y-3 mb-8">
              {service.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex}
                  className="flex items-center text-gray-600"
                >
                  <svg 
                    className="w-5 h-5 text-green-500 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto text-center">
              <Button 
                href={service.ctaLink}
                variant={service.highlighted ? 'primary' : 'outline'}
                className="w-full"
              >
                {service.ctaText}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
} 