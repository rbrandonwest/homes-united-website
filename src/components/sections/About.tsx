import { Section } from '../common/Section';
import { Button } from '../common/Button';

interface AboutProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export function About({
  title = "About Us",
  subtitle = "Building Digital Excellence",
  description = "We're a team of passionate designers and developers dedicated to creating exceptional digital experiences. With years of experience and a commitment to excellence, we help businesses transform their online presence and achieve their goals.",
  ctaText = "Learn More",
  ctaLink = "/about",
  stats = [
    { value: "10+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "24/7", label: "Support" }
  ]
}: AboutProps) {
  return (
    <Section background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-600 mb-6">
            {subtitle}
          </p>
          <p className="text-gray-600 mb-8">
            {description}
          </p>
          <Button href={ctaLink}>
            {ctaText}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
} 