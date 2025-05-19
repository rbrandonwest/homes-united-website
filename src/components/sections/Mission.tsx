"use client";

import { motion } from 'framer-motion';
import { Section } from '../common/Section';

export function Mission() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-700">
            Our Mission & Values
          </h2>
          <p className="text-xl text-gray-600">
            Building stronger communities through housing stability and support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-600">Our Mission</h3>
            <p className="text-gray-600">
              HomesUnited is committed to providing stable housing solutions and comprehensive 
              support services to individuals and families in need. We believe that everyone 
              deserves a safe, stable place to call home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-600">Our Values</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">•</span>
                <span>Compassion in every interaction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">•</span>
                <span>Dignity and respect for all</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">•</span>
                <span>Community-focused solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">•</span>
                <span>Sustainable, long-term impact</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
} 