import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import AboutIntroSection from './components/AboutIntroSection';
import GetInvolvedSection from './components/GetInvolvedSection';
import HeroSection from './components/HeroSection';
import ImpactSection from './components/ImpactSection';
import ShelfPillarsSection from './components/ShelfPillarsSection';

export const metadata: Metadata = {
  title:
    'Home — USF | Empowering Lives, Strengthening Communities',
  description:
    'USF works across Sports, Healthcare, Education, Livelihood & Community Development to uplift underserved communities across India.',
};

export default function HomepagePage() {
  return (
    <main className="relative bg-bg overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutIntroSection />
      <ShelfPillarsSection />
    <ImpactSection />
      <GetInvolvedSection />
      <Footer />
    </main>
  );
}
