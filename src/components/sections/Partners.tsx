"use client";

import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import Image from 'next/image';

const partners = [
  {
    name: "BBHC",
    logo: "/images/partners/bbhc-homes-united-the-homeless-projects_1.png",
    description: "Broward Behavioral Health Coalition"
  },
  {
    name: "Henderson Behavioral Health",
    logo: "/images/partners/henderson-behavioral-health-homes-united-the-homeless-projects_1.png",
    description: "Leading behavioral healthcare provider"
  },
  {
    name: "Hope South Florida",
    logo: "/images/partners/hope-south-florida-homes-united-the-homeless-projects.png",
    description: "Faith-based homeless services"
  },
  {
    name: "Banyan Health Systems",
    logo: "/images/partners/banyan-homes-united-the-homeless-projects_1.jpeg",
    description: "Comprehensive healthcare services"
  },
  {
    name: "Coral Ridge Presbyterian Church",
    logo: "/images/partners/coral-ridge-presbytarian-homes-united-the-homeless-projects.jpg_1.jpeg",
    description: "Community faith partner"
  },
  {
    name: "The Salvation Army",
    logo: "/images/partners/salvation-army-homes-united-the-homeless-projects_1.png",
    description: "Global charitable organization"
  }
];

export function Partners() {
  return (
    <Section className="bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-16">
        <motion.p
          className="text-gray-700 font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          TRUSTED PARTNERSHIPS
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Working Together for Change
        </motion.h2>
        <motion.p
          className="text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Collaborating with leading organizations to provide comprehensive support and services
        </motion.p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-24 relative mb-6">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-700 text-sm">
                {partner.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <a 
          href="/contact" 
          className="text-gray-700 hover:text-primary-800 font-semibold inline-flex items-center gap-2"
        >
          Become a Partner
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </a>
      </motion.div>
    </Section>
  );
} 