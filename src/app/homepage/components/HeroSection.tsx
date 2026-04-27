'use client';

import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const taglines = [
  'We rose from this land. Now, we give back to it.',
  'Guided by Gratitude.Progress with Purpose.',
  'From Growth to Giving Back.',
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Reveal items on mount
    const items = sectionRef.current?.querySelectorAll('.hero-reveal');
    if (!items) return;
    items.forEach((el, i) => {
      (el as HTMLElement).style.animation =
        `animationIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s both`;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg pt-24 pb-16"
      aria-label="Hero"
    >
      {/* Grid overlay lines */}
      <div className="grid-overlay">
        <div className="grid-inner">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="grid-line-v" />
          ))}
        </div>
      </div>

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #1B4332 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Left decorative image */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-40 h-60 hidden xl:block hero-reveal">
        <div className="w-full h-full overflow-hidden border border-primary/15 p-1.5 bg-bg-warm shadow-warm">
          <AppImage
            src="https://images.unsplash.com/photo-1685541000777-8d0995d38909"
            alt="Children playing cricket on a dusty field, warm afternoon sunlight, community sports"
            width={160}
            height={240}
            className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-700"
          />
        </div>
        <span className="absolute -bottom-7 left-0 text-[8px] uppercase tracking-[0.4em] text-fg-subtle font-body">
          Sports / Community
        </span>
      </div>

      {/* Right decorative image */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-40 h-60 hidden xl:block hero-reveal">
        <div className="w-full h-full overflow-hidden border border-primary/15 p-1.5 bg-bg-warm shadow-warm">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1dba6a74e-1772702758964.png"
            alt="Village women attending health awareness camp, bright saris, rural India, warm daylight"
            width={160}
            height={240}
            className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-700"
          />
        </div>
        <span className="absolute -bottom-7 right-0 text-[8px] uppercase tracking-[0.4em] text-fg-subtle font-body text-right">
          Healthcare / India
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <div className="hero-reveal">
          <span className="section-label mb-8 block">
            Est. 2026 · USF
          </span>
        </div>

 <div className="hero-reveal">
          <span className="section-labell mb-8 block">
          "Guided by Gratitude Progress with Purpose."
          </span>
        </div>


        <div className="hero-reveal">
          <h1 className="font-display leading-[0.9] tracking-tight text-primary mb-6">
            <span
              className="block"
              style={{ fontSize: 'clamp(3.2rem, 8.5vw, 8rem)' }}
            >
              Empowering
            </span>
            <span
              className="block italic"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7.5rem)',
                background:
                  'linear-gradient(to right, #C8630A, #DA921A, #C8630A)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200% auto',
                animation: 'shimmerText 4s linear infinite',
              }}
            >
              Lives.
            </span>
            <span
              className="block"
              style={{
                fontSize: 'clamp(2.4rem, 6.5vw, 6rem)',
                marginTop: '-0.1em',
              }}
            >
              Strengthening
            </span>
            <span
              className="block"
              style={{
                fontSize: 'clamp(2.4rem, 6.5vw, 6rem)',
                color: '#2D6A4F',
              }}
            >
              Communities.
            </span>
          </h1>
        </div>

        <div className="hero-reveal">
          <p className="max-w-2xl mx-auto text-[11px] md:text-xs tracking-[0.35em] text-fg-muted uppercase font-body font-medium mb-3 leading-relaxed px-4">
            Committed to Sports · Healthcare · Education · Livelihood ·
            Community Development
          </p>
        </div>

        <div className="hero-reveal">
          <p className="max-w-xl mx-auto text-base md:text-lg text-fg-muted font-body font-light leading-relaxed mb-10">
            {taglines[0]}
          </p>
        </div>

        <div className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/homepage#get-involved"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-semibold tracking-wide shadow-warm hover:bg-primary-light transition-all duration-300 hover:-translate-y-0.5 hover:shadow-warm-lg"
          >
            Get Involved
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-primary/25 text-primary text-sm font-semibold tracking-wide hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}

    </section>
  );
}
