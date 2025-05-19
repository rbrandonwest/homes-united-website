"use client";

import { motion } from 'framer-motion';
import { useAnimations } from './../../hooks/useAnimations';
import { Section } from '../common/Section';
import { FloatingElement } from '../common/FloatingElement';

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
  title = "How We Help",
  subtitle = "Comprehensive support for your housing needs",
  features = [
    {
      title: "Housing Navigation",
      description: "Expert guidance through housing options and application processes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "SOAR Assistance",
      description: "Help with SSI/SSDI applications and benefits access.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Support Services",
      description: "Ongoing support to ensure long-term housing stability.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Community Resources",
      description: "Connection to vital community services and support networks.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ]
}: FeaturesProps) {
  const { ref } = useAnimations();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4
      }
    }
  };

  return (
    <Section className="bg-gradient-to-b from-white to-primary-50 overflow-hidden" ref={ref}>
      <div className="relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingElement className="absolute top-20 -left-20" delay={0}>
            <div className="w-40 h-40 bg-primary-200 rounded-full blur-3xl opacity-20" />
          </FloatingElement>
          <FloatingElement className="absolute bottom-20 -right-20" delay={0.5}>
            <div className="w-40 h-40 bg-accent-200 rounded-full blur-3xl opacity-20" />
          </FloatingElement>
        </div>

        {/* Content */}
        <div className="relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <motion.div 
                    className="bg-primary-500 text-white p-3 rounded-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">
                    {feature.description}
                  </p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500 transform origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
} 