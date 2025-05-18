"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '../common/Section';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Program Participant",
    quote: "HomesUnited didn't just help me find a house - they helped me rebuild my life. Their support went beyond housing to truly caring about my success.",
    image: "/images/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Community Partner",
    quote: "The dedication and professionalism of the HomesUnited team is unmatched. They truly understand the complexities of housing assistance.",
    image: "/images/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Lisa Thompson",
    role: "Program Graduate",
    quote: "Thanks to HomesUnited, I now have a stable home for my family. Their comprehensive support made all the difference in our journey.",
    image: "/images/testimonial-3.jpg"
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section className="bg-gradient-to-b from-white to-primary-50 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Success Stories
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Real stories from people we've helped in our community
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            className="relative h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-white">
                <div className="font-semibold text-xl">{testimonials[activeIndex].name}</div>
                <div className="text-primary-200">{testimonials[activeIndex].role}</div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="mb-8"
            >
              <svg className="w-12 h-12 text-primary-300 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-2xl text-gray-600 italic mb-6">
                {testimonials[activeIndex].quote}
              </p>
            </motion.div>

            <div className="flex gap-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary-500 scale-125' : 'bg-primary-200'
                  }`}
                >
                  <span className="sr-only">View testimonial {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 