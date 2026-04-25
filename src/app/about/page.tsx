import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHeroSection from './components/AboutHeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import VisionMissionSection from './components/VisionMissionSection';
import WhyShelfSection from './components/WhyShelfSection';
import OurApproachSection from './components/OurApproachSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — SHELF Foundation | Our Story, Vision & Mission',
  description: 'Learn about SHELF Foundation — who we are, our vision, mission, philosophy, and why we built SHELF to empower communities across India.',
};

export default function AboutPage() {
  return (
    <main className="relative bg-bg overflow-x-hidden">
      <Header />
      <AboutHeroSection />
      <WhoWeAreSection />
      <VisionMissionSection />
      <WhyShelfSection />
      <OurApproachSection />
      <Footer />
    </main>
  );
}
