"use client";

import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import { CTA } from '@/components/sections/CTA';
import { motion } from 'framer-motion';

const volunteerOpportunities = [
  {
    title: "Housing Navigator",
    description: "Help individuals and families find stable housing by providing guidance through the housing search process.",
    commitment: "4-6 hours/week",
    requirements: ["Training provided", "Good communication skills", "Basic computer literacy"]
  },
  {
    title: "SOAR Advocate",
    description: "Assist with SSI/SSDI applications and help clients access benefits they're entitled to.",
    commitment: "6-8 hours/week",
    requirements: ["SOAR certification required", "Detail-oriented", "Patient and empathetic"]
  },
  {
    title: "Community Outreach",
    description: "Spread awareness about our services and connect with potential clients and partners.",
    commitment: "2-4 hours/week",
    requirements: ["Outgoing personality", "Local community knowledge", "Reliable transportation"]
  }
];

const supportWays = [
  {
    title: "Make a Donation",
    description: "Your financial support helps us provide essential services and support to those in need.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Become a Partner",
    description: "Partner with us to create more opportunities for housing and support services.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Spread the Word",
    description: "Share our mission with your network and help us reach more people in need.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    )
  }
];

export function GetInvolvedContent() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Make a Difference
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Join us in our mission to provide stable housing and support services to those in need.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Button href="#volunteer" size="xl">
              Start Volunteering
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Volunteer Opportunities */}
      <Section id="volunteer" className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Volunteer Opportunities
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Make a direct impact in your community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {volunteerOpportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {opportunity.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {opportunity.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-primary-700 mb-2">
                  Time Commitment
                </h4>
                <p className="text-gray-700">{opportunity.commitment}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-700 mb-2">
                  Requirements
                </h4>
                <ul className="text-gray-700 space-y-2">
                  {opportunity.requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Other Ways to Support */}
      <Section className="bg-gradient-to-b from-white to-primary-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Other Ways to Support
          </h2>
          <p className="text-xl text-gray-700">
            Every contribution makes a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {supportWays.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="inline-block p-3 bg-primary-100 rounded-xl mb-6">
                <div className="text-primary-700">
                  {way.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {way.title}
              </h3>
              <p className="text-gray-700">
                {way.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Make a Difference?"
        subtitle="Join our community of volunteers and supporters"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Donate Now"
        secondaryButtonLink="#"
      />
    </main>
  );
} 