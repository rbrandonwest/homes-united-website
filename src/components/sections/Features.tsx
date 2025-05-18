import { Section } from '../common/Section';
import { Card } from '../common/Card';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

export function Features({
  title = "What We Offer",
  subtitle = "Everything you need to succeed in the digital world",
  features = [
    {
      title: "Modern Design",
      description: "Clean, professional designs that make your business stand out."
    },
    {
      title: "Mobile Responsive",
      description: "Websites that look great on any device, from phones to desktops."
    },
    {
      title: "SEO Optimized",
      description: "Built with search engines in mind to help you rank better."
    },
    {
      title: "Fast Performance",
      description: "Lightning-fast loading times for the best user experience."
    }
  ]
}: FeaturesProps) {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="text-center">
            {feature.icon && (
              <div className="mb-4">{feature.icon}</div>
            )}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
} 