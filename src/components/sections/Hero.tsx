"use client";

import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Main Background Gradient - Strengthened opacity and extended coverage */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/75 z-0" />

      {/* Dynamic Image Grid - Moved slightly more to the right */}
      <div className="absolute right-0 top-0 h-full w-3/5 z-0">
        <div className="relative h-full w-full">
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 overflow-hidden"
          >
            <Image
              src="/images/hero-main.jpg"
              alt="Family moving into new home"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Floating Accent Images
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -left-24 bottom-32 w-48 h-64 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero-accent-1.jpg"
              alt="Community support"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary-500/10 backdrop-blur-sm" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute right-32 top-32 w-40 h-56 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero-accent-2.jpg"
              alt="Housing assistance"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary-500/10 backdrop-blur-sm" />
          </motion.div> */}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-1/4 top-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-2xl" />
      </div>

      {/* Content Container - Added max-width to ensure text doesn't extend too far */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl ml-8 md:ml-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Building Hope,
              <span className="block mt-2 text-primary-400">
                Creating Homes
              </span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-xl text-gray-200 mb-8 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            We're dedicated to helping individuals and families find stable housing 
            and build stronger communities through comprehensive support services.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Button href="/services" size="xl" variant="primary" className="border-2 border-white">
              Our Services
            </Button>
            <Button href="/get-involved" size="xl" variant="secondary" className="border-2 border-white">
              Get Involved
            </Button>
          </motion.div>

          <motion.div 
            className="mt-16 flex gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {[
              { number: '500+', label: 'Families Housed' },
              { number: '95%', label: 'Success Rate' },
              { number: '10+', label: 'Years of Service' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 