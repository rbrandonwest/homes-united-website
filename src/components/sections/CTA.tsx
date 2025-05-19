"use client";

import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Button } from '../common/Button';

interface CTAProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  background?: 'light' | 'dark';
}

export function CTA({ 
  title, 
  subtitle, 
  primaryButtonText, 
  primaryButtonLink = '/contact',
  secondaryButtonText, 
  secondaryButtonLink = '/about',
  background = 'light'
}: CTAProps) {
  return (
    <Section className={background === 'dark' ? 'bg-primary-600' : 'bg-white'}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className={`text-3xl md:text-4xl font-bold mb-6 ${
            background === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className={`text-xl mb-8 ${
            background === 'dark' ? 'text-white/90' : 'text-gray-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Button 
            href={primaryButtonLink} 
            variant={background === 'dark' ? 'secondary' : 'primary'} 
            size="lg"
          >
            {primaryButtonText}
          </Button>
          {secondaryButtonText && (
            <Button 
              href={secondaryButtonLink} 
              variant="outline" 
              size="lg"
            >
              {secondaryButtonText}
            </Button>
          )}
        </motion.div>
      </div>
    </Section>
  );
} 