'use client';

import { useEffect, useRef } from 'react';

export default function MapSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.aos-item')
              .forEach((el) => el.classList.add('is-visible'));
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white border-t border-primary/8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="aos-item">
            <span className="section-label mb-4 block">Find Us</span>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight tracking-tight">
              Visit Our
              <br />
              <span className="italic text-accent">Foundation.</span>
            </h2>
          </div>
          <div
            className="aos-item max-w-xs"
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-fg-subtle font-body">
                Office Address
              </div>
              <p className="text-sm text-fg-muted font-body leading-relaxed">
                USF HQ
                <br />
                123, Foundation Avenue
                <br />
                Mumbai, Maharashtra 400001
                <br />
                India
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-[0.3em] text-accent font-body font-semibold hover:text-accent-light transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map embed */}
        <div
          className="aos-item relative overflow-hidden border border-primary/10 shadow-warm"
          style={{ transitionDelay: '0.2s' }}
        >
          {/* Placeholder map — replace src with actual Google Maps embed URL */}
          <div
            className="relative w-full"
            style={{ paddingBottom: '45%', minHeight: '320px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713244166000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="USF Location — Mumbai, Maharashtra"
              aria-label="Google Map showing USF office location in Mumbai"
            />
            {/* Map overlay label */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-primary/15 px-4 py-3 shadow-warm pointer-events-none z-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-body font-semibold">
                  USF
                </span>
              </div>
              <p className="text-xs text-fg-subtle font-body mt-1">
                Mumbai, Maharashtra
              </p>
            </div>
          </div>
        </div>

        {/* Bottom info strip */}
        <div
          className="aos-item mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ transitionDelay: '0.3s' }}
        >
          {[
            {
              icon: (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
              label: 'Office Hours',
              value: 'Monday – Saturday\n9:00 AM – 6:00 PM IST',
            },
            {
              icon: (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                </svg>
              ),
              label: 'Phone',
              value: '+91 98765 43210\n+91 22 1234 5678',
            },
            {
              icon: (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
              label: 'Email',
              value: 'info@shelffoundation.org\ncsr@shelffoundation.org',
            },
          ]?.map((item) => (
            <div
              key={item?.label}
              className="flex items-start gap-4 p-5 bg-bg-warm border border-primary/8"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-primary/8 text-primary flex-shrink-0 mt-0.5">
                {item?.icon}
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-fg-subtle font-body mb-1">
                  {item?.label}
                </div>
                {item?.value?.split('\n')?.map((line, i) => (
                  <div key={i} className="text-sm text-fg-muted font-body">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
