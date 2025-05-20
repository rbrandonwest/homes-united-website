"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/common/Button';

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
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content - Left Side */}
        <motion.div
          className="relative z-10 order-2 md:order-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/get-involved" variant="primary" size="lg">
              Get Started Today
            </Button>
            <Button href="/about" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Image - Right Side */}
        <motion.div 
          className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/hero-main.jpg"
            alt="Family moving into new home"
            fill
            className="object-cover object-center rounded-2xl transform hover:scale-105 transition-transform duration-700"
            priority
          />
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-100 rounded-full -z-10" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-100 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
} 