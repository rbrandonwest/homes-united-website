import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero 
        title="Transform Your Digital Presence"
        subtitle="We create stunning websites that help businesses grow and succeed in the digital world."
      />

      <Features 
        title="What We Offer"
        subtitle="Everything you need to succeed in the digital world"
        features={[
          {
            title: "Modern Design",
            description: "Clean, professional designs that make your business stand out."
          },
          {
            title: "Mobile Responsive",
            description: "Websites that look great on any device, from phones to desktops."
          },
          {
            title: "SEO Optimized",
            description: "Built with search engines in mind to help you rank better."
          },
          {
            title: "Fast Performance",
            description: "Lightning-fast loading times for the best user experience."
          }
        ]}
      />

      <About 
        title="About Us"
        subtitle="Building Digital Excellence"
        description="We're a team of passionate designers and developers dedicated to creating exceptional digital experiences. With years of experience and a commitment to excellence, we help businesses transform their online presence and achieve their goals."
      />

      <Services 
        title="Our Services"
        subtitle="Choose the perfect solution for your needs"
      />

      <Testimonials 
        title="What Our Clients Say"
        subtitle="Don't just take our word for it - hear from some of our satisfied clients"
      />

      <FAQ />

      <CTA />

      <Contact 
        title="Get In Touch"
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />
    </>
  );
}
