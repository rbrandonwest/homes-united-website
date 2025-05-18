'use client';

import { useState } from 'react';
import { Section } from '../common/Section';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

export function FAQ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services",
  faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web design, development, SEO optimization, and digital marketing solutions tailored to your business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks from start to finish. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide ongoing support and maintenance services to ensure your website continues to perform optimally. We offer various support packages to suit different needs."
    },
    {
      question: "How much does it cost?",
      answer: "Each project is unique and costs vary based on your specific requirements. We provide detailed quotes after understanding your needs during our initial consultation."
    },
    {
      question: "What is your process?",
      answer: "Our process includes discovery, planning, design, development, testing, and launch phases. We maintain clear communication throughout and involve you in key decisions."
    }
  ]
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full text-left p-4 rounded-lg bg-white shadow-sm hover:shadow transition-all duration-200 ${
                openIndex === index ? 'shadow-md' : ''
              }`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600">
                  {faq.answer}
                </p>
              )}
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
} 