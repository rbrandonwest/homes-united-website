import { Section } from '../common/Section';
import { Card } from '../common/Card';

interface Testimonial {
  quote: string;
  author: string;
  title?: string;
  company?: string;
  image?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

export function Testimonials({
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it - hear from some of our satisfied clients",
  testimonials = [
    {
      quote: "Working with this team was a game-changer for our business. Our new website has helped us attract more customers and grow our brand.",
      author: "Sarah Johnson",
      title: "CEO",
      company: "TechStart Inc."
    },
    {
      quote: "The attention to detail and level of professionalism was outstanding. They delivered exactly what we needed, on time and on budget.",
      author: "Michael Chen",
      title: "Founder",
      company: "GrowthLabs"
    },
    {
      quote: "Our new website has received countless compliments from our customers. The design is beautiful and the functionality is perfect.",
      author: "Emily Brown",
      title: "Marketing Director",
      company: "InnovateNow"
    }
  ]
}: TestimonialsProps) {
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
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col">
            {/* Quote Icon */}
            <div className="mb-6">
              <svg 
                className="w-8 h-8 text-blue-600" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote Text */}
            <blockquote className="flex-1 mb-6">
              <p className="text-gray-600 italic">
                "{testimonial.quote}"
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center">
              {testimonial.image && (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
              )}
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                {(testimonial.title || testimonial.company) && (
                  <div className="text-gray-600">
                    {testimonial.title}
                    {testimonial.title && testimonial.company && " at "}
                    {testimonial.company}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
} 