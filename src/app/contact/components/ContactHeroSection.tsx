'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const contactDetails = [
  {
    label: 'Address',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    value:
      'USF HQ\n123, Foundation Avenue\nMumbai, Maharashtra 400001\nIndia',
  },
  {
    label: 'Phone',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
      </svg>
    ),
    value: '+91 98765 43210\n+91 22 1234 5678',
  },
  {
    label: 'Email',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    value: 'info@shelffoundation.org\ncsr@shelffoundation.org',
  },
];

export default function ContactHeroSection() {
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
      className="relative min-h-[65vh] flex items-end overflow-hidden pt-32 pb-0"
      style={{
        background: 'linear-gradient(135deg, #1B4332 0%, #0F2A1E 100%)',
      }}
      aria-label="Contact Hero"
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
      {/* Accent glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(200,99,10,0.18) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left: Heading */}
          <div className="pb-16">
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
                <span className="text-white">Contact Us</span>
              </nav>
            </div>
            <div className="hero-reveal">
              <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-body font-medium mb-6 block">
                Get In Touch
              </span>
            </div>
            <div className="hero-reveal">
              <h1 className="font-display text-5xl md:text-7xl text-white leading-[0.88] tracking-tight mb-6">
                Let's Build
                <br />
                <span className="italic" style={{ color: '#DA921A' }}>
                  Together.
                </span>
              </h1>
            </div>
            <div className="hero-reveal">
              <p className="text-base text-primary-200 font-body font-light leading-relaxed max-w-md">
                Whether you want to volunteer, partner, donate, or simply learn
                more — we'd love to hear from you. Every conversation could
                change a life.
              </p>
            </div>
          </div>

          {/* Right: Contact details floating card */}
          <div className="hero-reveal pb-0 lg:-mb-12">
            <div className="bg-white shadow-warm-lg p-8 md:p-10">
              <h2 className="font-display text-xl font-semibold text-primary mb-8">
                Reach Us Directly
              </h2>
              <div className="space-y-7">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/8 text-primary flex-shrink-0 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-fg-subtle font-body mb-1">
                        {item.label}
                      </div>
                      {item.value.split('\n').map((line, i) => (
                        <div
                          key={i}
                          className="text-sm text-fg-muted font-body leading-relaxed"
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-primary/10">
                <div className="flex items-center gap-4">
                  {['LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-[18px] uppercase tracking-[0.2em] text-fg-subtle font-body hover:text-primary transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>
    </section>
  );
}
