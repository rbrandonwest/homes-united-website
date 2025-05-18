import { generateMetadata } from '@/lib/metadata';
import { About } from '@/components/sections/About';
import { Team } from '@/components/sections/Team';
import { Contact } from '@/components/sections/Contact';

export const metadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about our company, our mission, and the team behind our success.',
  path: '/about'
});

export default function AboutPage() {
  return (
    <>
      <About 
        title="Our Story"
        subtitle="Building Digital Excellence Since 2015"
        description="We started with a simple mission: to help businesses succeed in the digital world. Today, we're proud to have helped hundreds of companies transform their online presence and achieve their goals. Our team of experts combines creativity with technical expertise to deliver exceptional results for every client."
      />

      <Team />

      <Contact 
        title="Want to Learn More?"
        subtitle="Get in touch with us to discuss how we can help your business grow."
      />
    </>
  );
} 