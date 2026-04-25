'use client';

import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AboutIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.aos-item, .aos-item-left, .stagger-parent')
              .forEach((el) => {
                el.classList.add('is-visible');
              });
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white border-y border-primary/8 overflow-hidden"
      id="about-intro"
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#1B4332 1px, transparent 1px), linear-gradient(90deg, #1B4332 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image composition */}
          <div className="relative aos-item-left">
            <div className="aspect-[4/5] overflow-hidden bg-bg-warm border border-primary/10">
              <AppImage
                src="https://i.postimg.cc/PqJsJkYH/sss.jpg"
                alt="Volunteers and community members gathered outdoors, diverse group, warm sunshine, India"
                width={600}
                height={750}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Floating accent card
            <div className="absolute -bottom-8 -right-4 md:-right-8 w-48 bg-primary text-white p-6 shadow-warm-lg hidden md:block">
              <div className="font-display text-3xl font-semibold mb-1">
                5000+
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary-200 font-body">
                Lives Impacted
              </div>
            </div>
*/}
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-6">
            <div className="aos-item">
              <span className="section-label">Who We Are</span>
            </div>
            <div className="aos-item" style={{ transitionDelay: '0.1s' }}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-primary tracking-tight">
                Born from the ground.
                <br />
                <span className="italic text-accent">
                  Built for the people.
                </span>
              </h2>
            </div>
            <div className="aos-item" style={{ transitionDelay: '0.2s' }}>
              <p className="text-base md:text-lg text-fg-muted font-body font-light leading-relaxed">
                USF is a charitable trust committed to
                uplifting underserved communities across India. Founded by
                individuals who rose from these very communities, we believe in
                the power of giving back with purpose, transparency, and
                long-term commitment.
              </p>
            </div>
            <div className="aos-item" style={{ transitionDelay: '0.3s' }}>
              <p className="text-sm text-fg-subtle font-body leading-relaxed">
                SHE stands for Sports, Healthcare, Education, Livelihood, and
                Foundation — the five pillars through which we create lasting
                change. Every initiative we undertake is community-first,
                outcome-driven, and built to sustain beyond our presence.
              </p>
            </div>

            <div
              className="stagger-parent flex flex-col gap-3 pt-2"
              style={{ transitionDelay: '0.4s' }}
            >
              {[
                'Community-First Approach',
                'Long-Term Sustainability',
                'Transparent Outcomes',
                'Strategic Partnerships',
              ]?.map((item) => (
                <div
                  key={item}
                  className="stagger-child flex items-center gap-4 group"
                >
                  <div className="hover-line" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-fg-muted font-body font-medium group-hover:text-primary transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="aos-item pt-2" style={{ transitionDelay: '0.5s' }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 group"
              >
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-body font-semibold">
                  Our Full Story
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent transition-transform duration-300 group-hover:translate-x-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
