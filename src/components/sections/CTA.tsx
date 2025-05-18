"use client";

import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import Link from 'next/link';

export function CTA() {
  return (
    <Section className="bg-primary-600 text-gray-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          Ready to Make a Difference?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Join us in our mission to provide stable housing and build stronger communities.
          Your support can change lives.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link
            href="/get-involved"
            className="inline-block px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Involved
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary-700 text-gray-700 font-semibold rounded-lg border-2 border-white hover:bg-primary-800 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </Section>
  );
} 