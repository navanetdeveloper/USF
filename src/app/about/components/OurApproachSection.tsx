'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const approaches = [
  {
    number: '01',
    title: 'Community-First',
    desc: 'We listen before we act. Every initiative is co-designed with the communities it serves — because they know their needs best.',
    detail:
      'Field surveys, community meetings, and local leadership involvement precede every program launch.',
  },
  {
    number: '02',
    title: 'Long-Term Sustainability',
    desc: "We don't run one-day camps and disappear. Our programs are designed to create self-sustaining systems that outlast our direct involvement.",
    detail:
      'Capacity building, local volunteer training, and institutional partnerships ensure continuity.',
  },
  {
    number: '03',
    title: 'Transparent Outcomes',
    desc: 'Every rupee donated is tracked. Every life changed is documented. We publish impact reports that hold us accountable.',
    detail:
      'Quarterly reporting, third-party audits, and public dashboards (coming soon).',
  },
  {
    number: '04',
    title: 'Strategic Partnerships',
    desc: 'We actively seek partners — NGOs, corporations, government bodies, and academic institutions — who align with our mission.',
    detail:
      'MoU-based collaborations, CSR partnerships, and cross-sector coalitions for maximum leverage.',
  },
];

export default function OurApproachSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.aos-item, .stagger-parent')
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
      className="relative py-24 bg-bg-warm overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#1B4332 1px, transparent 1px), linear-gradient(90deg, #1B4332 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="aos-item">
            <span className="section-label mb-4 block">How We Work</span>
            <h2 className="font-display text-5xl md:text-6xl text-primary leading-tight tracking-tight">
              Our Approach
              <br />
              <span className="italic text-accent">to Change.</span>
            </h2>
          </div>
          <div
            className="aos-item max-w-sm"
            style={{ transitionDelay: '0.15s' }}
          >
            <p className="text-sm text-fg-muted font-body leading-relaxed">
              Impact without method is charity. Impact with method is
              transformation. Here is how we ensure every effort counts.
            </p>
          </div>
        </div>

        {/* Approach grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10 border border-primary/10 stagger-parent">
          {approaches?.map((item) => (
            <div
              key={item?.number}
              className="stagger-child group bg-white p-8 md:p-10 hover:bg-bg-warm transition-colors duration-400 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex items-start gap-5 mb-5">
                <span className="font-mono text-xs text-fg-subtle mt-1">
                  {item?.number}
                </span>
                <h3 className="font-display text-2xl font-semibold text-primary">
                  {item?.title}
                </h3>
              </div>
              <p className="text-sm text-fg-muted font-body leading-relaxed mb-4 pl-8">
                {item?.desc}
              </p>
              <p className="text-xs text-fg-subtle font-body leading-relaxed pl-8 italic">
                {item?.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="aos-item mt-16 text-center"
          style={{ transitionDelay: '0.4s' }}
        >
          <p className="text-base text-fg-muted font-body mb-6">
            Want to understand our work more deeply?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/homepage#what-we-do"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-semibold tracking-wide hover:bg-primary-light transition-all duration-300 hover:-translate-y-0.5 shadow-warm"
            >
              See What We Do
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
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/25 text-primary text-sm font-semibold tracking-wide hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
