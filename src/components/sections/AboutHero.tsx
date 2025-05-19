"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="relative bg-gray-900 text-white pt-36 md:pt-32">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/about-hero.jpg"
          alt="HomesUnited community impact"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/90" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About HomesUnited
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Since 2020, we&apos;ve been dedicated to transforming lives through stable housing and comprehensive support services. Our commitment to the community drives everything we do.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
              <div className="text-gray-300">Families Housed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">6</div>
              <div className="text-gray-300">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">100%</div>
              <div className="text-gray-300">Commitment</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 