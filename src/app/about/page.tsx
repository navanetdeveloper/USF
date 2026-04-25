import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import AboutHeroSection from './components/AboutHeroSection';
import OurApproachSection from './components/OurApproachSection';
import VisionMissionSection from './components/VisionMissionSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import WhyShelfSection from './components/WhyShelfSection';

export const metadata: Metadata = {
  title: 'About Us — SHE Foundation | Our Story, Vision & Mission',
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
