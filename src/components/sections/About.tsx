"use client";

import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Button } from '../common/Button';
import Image from 'next/image';

export function About() {
  return (
    <Section className="bg-gradient-to-b from-white to-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="relative aspect-square rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/about-image.jpg"
            alt="Our mission in action"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-500/10" />
        </motion.div>

        {/* Content Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At Homes United, we believe that stable housing is the foundation for building better lives and stronger communities.
              </p>
              <p>
                Our dedicated team works tirelessly to connect individuals and families with housing opportunities while providing comprehensive support services to ensure long-term stability.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Comprehensive housing assistance",
                "Supportive services coordination",
                "Community-based approach",
                "Long-term stability focus"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <svg 
                    className="w-5 h-5 text-primary-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mt-8"
            >
              <Button href="/about" size="lg">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
} 