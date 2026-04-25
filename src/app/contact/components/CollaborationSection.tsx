'use client';

import React, { useEffect, useRef } from 'react';

const collaborations = [
  {
    type: 'NGO Partnerships',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    headline: 'Join forces with purpose',
    desc: 'We welcome partnerships with registered NGOs working in complementary domains. Together we multiply reach, share resources, and amplify outcomes.',
    tags: [
      'Joint Programs',
      'Resource Sharing',
      'Co-Advocacy',
      'Field Collaboration',
    ],
    accent: '#1B4332',
  },
  {
    type: 'Corporate CSR',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    headline: 'CSR that creates real change',
    desc: "Align your mandatory CSR spending with SHELF's five pillars. We provide full documentation, impact reports, and public acknowledgment of your contribution.",
    tags: ['Section 80G', 'Impact Reports', 'Site Visits', 'Brand Visibility'],
    accent: '#C8630A',
  },
  {
    type: 'Sponsorship',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    headline: 'Sponsor a life, sponsor a future',
    desc: "Choose a specific initiative — a scholarship, a medical camp, an athlete's training — and directly fund it. Know exactly where your money goes.",
    tags: [
      'Named Scholarships',
      'Medical Camps',
      'Sports Equipment',
      'School Infrastructure',
    ],
    accent: '#1B4332',
  },
  {
    type: 'Volunteer Programs',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    headline: 'Give your time, change a life',
    desc: 'From weekend drives to long-term field assignments, we have roles for every skill set — teaching, healthcare, technology, logistics, and community outreach.',
    tags: [
      'Weekend Drives',
      'Skill-Based Roles',
      'Field Work',
      'Remote Support',
    ],
    accent: '#C8630A',
  },
];

export default function CollaborationSection() {
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
            <span className="section-label mb-4 block">
              Ways to Collaborate
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-primary leading-tight tracking-tight">
              Find your
              <br />
              <span className="italic text-accent">role with us.</span>
            </h2>
          </div>
          <div
            className="aos-item max-w-sm"
            style={{ transitionDelay: '0.15s' }}
          >
            <p className="text-sm text-fg-muted font-body leading-relaxed">
              There are many ways to be part of the SHELF mission. Every form of
              involvement — however big or small — creates measurable, lasting
              change.
            </p>
          </div>
        </div>

        {/* Collaboration cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-parent">
          {collaborations?.map((collab) => (
            <div
              key={collab?.type}
              className="stagger-child group bg-white border border-primary/10 p-8 md:p-10 hover:border-accent/25 hover:shadow-warm-lg transition-all duration-500 relative overflow-hidden cursor-default"
            >
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-accent-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${collab?.accent}12`,
                    color: collab?.accent,
                  }}
                >
                  {collab?.icon}
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-fg-subtle font-body">
                  {collab?.type}
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-primary mb-3 group-hover:text-primary-light transition-colors duration-300">
                {collab?.headline}
              </h3>
              <p className="text-sm text-fg-muted font-body leading-relaxed mb-6">
                {collab?.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {collab?.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border border-primary/12 text-fg-subtle font-body font-medium group-hover:border-accent/25 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="aos-item mt-16 text-center"
          style={{ transitionDelay: '0.4s' }}
        >
          <p className="text-sm text-fg-muted font-body mb-2">
            Not sure which category fits you?
          </p>
          <p className="text-base text-fg font-body font-medium mb-6">
            Just reach out — we will find the right way to work together.
          </p>
          <a
            href="mailto:info@shelffoundation.org"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-accent font-body font-semibold border-b border-accent/40 pb-1 hover:border-accent transition-colors"
          >
            info@shelffoundation.org
          </a>
        </div>
      </div>
    </section>
  );
}
