"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function Hero({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  secondaryCtaText, 
  secondaryCtaLink 
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden mt-20 md:mt-16">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-main.jpg"
          alt="Family moving into new home"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-16 md:pt-0">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href={ctaLink || "/get-involved"}
              className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              {ctaText || "Get Started Today"}
            </Link>
            <Link
              href={secondaryCtaLink || "/about"}
              className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              {secondaryCtaText || "Learn More"}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 