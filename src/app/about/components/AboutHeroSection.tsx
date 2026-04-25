'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AboutHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.hero-reveal');
    if (!items) return;
    items.forEach((el, i) => {
      (el as HTMLElement).style.animation =
        `animationIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.12}s both`;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] flex items-end overflow-hidden bg-primary pt-32 pb-16"
      aria-label="About Hero"
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Accent glow top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(200,99,10,0.2) 0%, transparent 70%)',
        }}
      />

      {/* Large background letter */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
        <span
          className="font-display font-bold text-white/[0.03] select-none"
          style={{ fontSize: 'clamp(12rem, 30vw, 28rem)', lineHeight: 1 }}
        >
          SHE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="hero-reveal">
            <nav
              className="flex items-center gap-2 text-[11px] text-primary-300 font-body mb-8"
              aria-label="Breadcrumb"
            >
              <Link
                href="/homepage"
                className="hover:text-white transition-colors"
              >
                Home
              </Link>
              <span className="text-primary-400">/</span>
              <span className="text-white">About Us</span>
            </nav>
          </div>
          <div className="hero-reveal">
            <span className="section-label text-accent mb-6 block">
              Our Story
            </span>
          </div>
          <div className="hero-reveal">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.88] tracking-tight mb-6">
              Who We
              <br />
              <span className="italic" style={{ color: '#DA921A' }}>
                Really Are.
              </span>
            </h1>
          </div>
          <div className="hero-reveal">
            <p className="text-lg text-primary-200 font-body font-light leading-relaxed max-w-xl">
              A foundation built not by distant philanthropists, but by people
              who lived these challenges — and chose to return with purpose.
            </p>
          </div>
          <div className="hero-reveal flex items-center gap-6 mt-8">
            <Link
              href="/homepage#what-we-do"
              className="text-[11px] uppercase tracking-[0.3em] text-accent font-body font-semibold border-b border-accent/40 pb-1 hover:border-accent transition-colors"
            >
              Our Work
            </Link>
            <Link
              href="/contact"
              className="text-[11px] uppercase tracking-[0.3em] text-white/60 font-body font-medium hover:text-white transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
