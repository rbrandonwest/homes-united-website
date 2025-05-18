"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimations } from './../../hooks/useAnimations';
import { Section } from '../common/Section';
import { Button } from '../common/Button';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  startColor: string;
  endColor: string;
}

const services: Service[] = [
  {
    title: "Housing Navigation",
    description: "Expert guidance through housing options and processes",
    startColor: "rgb(59, 130, 246)",  // blue-500
    endColor: "rgb(37, 99, 235)",     // blue-600
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: [
      "Housing search assistance",
      "Application support",
      "Landlord mediation",
      "Move-in coordination"
    ]
  },
  {
    title: "Support Services",
    description: "Comprehensive support for long-term stability",
    startColor: "rgb(99, 102, 241)",  // primary-500
    endColor: "rgb(79, 70, 229)",     // primary-600
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    features: [
      "Case management",
      "Life skills training",
      "Financial counseling",
      "Employment assistance"
    ]
  },
  {
    title: "SOAR Assistance",
    description: "Help with SSI/SSDI benefits access",
    startColor: "rgb(236, 72, 153)",  // accent-500
    endColor: "rgb(219, 39, 119)",    // accent-600
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [
      "Application assistance",
      "Documentation support",
      "Appeals process help",
      "Benefit management"
    ]
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref } = useAnimations();

  return (
    <Section className="bg-gradient-to-b from-white to-primary-50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Comprehensive support for your housing journey
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setActiveIndex(index)}
            style={{
              background: activeIndex === index 
                ? `linear-gradient(to right, ${service.startColor}, ${service.endColor})`
                : 'white',
              transition: 'all 0.5s ease-in-out'
            }}
            className={`
              relative cursor-pointer rounded-2xl p-8 h-full
              transition-all duration-500 ease-in-out
              hover:-translate-y-2 shadow-lg hover:shadow-2xl
              ${activeIndex === index ? 'text-white' : 'text-gray-900'}
            `}
          >
            <div className="flex flex-col h-full">
              <div 
                className={`
                  w-16 h-16 flex items-center justify-center rounded-xl mb-6
                  transition-colors duration-500
                  ${activeIndex === index ? 'bg-white/20' : 'bg-primary-100'}
                `}
              >
                <div className={`transition-colors duration-500 ${
                  activeIndex === index ? 'text-white' : 'text-primary-700'
                }`}>
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              
              <p className={`mb-6 transition-colors duration-500 ${
                activeIndex === index ? 'text-white' : 'text-gray-700'
              }`}>
                {service.description}
              </p>

              <ul className="space-y-3 mt-auto">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg 
                      className={`w-5 h-5 flex-shrink-0 transition-colors duration-500 ${
                        activeIndex === index ? 'text-white' : 'text-primary-700'
                      }`} 
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-gray-700 mt-12"
      >
        <Button 
          href="/services"
          size="lg"
          variant="primary"
        >
          Get Started Today
        </Button>
      </motion.div>
    </Section>
  );
} 