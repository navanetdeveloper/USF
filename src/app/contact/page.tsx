import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHeroSection from './components/ContactHeroSection';
import ContactFormSection from './components/ContactFormSection';
import CollaborationSection from './components/CollaborationSection';
import MapSection from './components/MapSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — USF | Reach Out, Partner, Donate',
  description:
    'Get in touch with USF. Reach us for volunteering, NGO partnerships, corporate CSR, sponsorships, or general inquiries.',
};

export default function ContactPage() {
  return (
    <main className="relative bg-bg overflow-x-hidden">
      <Header />
      <ContactHeroSection />
      <ContactFormSection />
      <CollaborationSection />
      <MapSection />
      <Footer />
    </main>
  );
}
