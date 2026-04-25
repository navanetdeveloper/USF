'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const roles = [
  {
    icon: (
      <svg
        width="28"
        height="28"
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
    title: 'Volunteer',
    description:
      'Contribute your time and skills on the ground. Join our network of dedicated change-makers across India.',
    cta: 'Join as Volunteer',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Partner NGO',
    description:
      'Collaborate with us on shared missions. Pool resources, knowledge, and reach for greater collective impact.',
    cta: 'Explore Partnership',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
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
    title: 'Corporate CSR',
    description:
      'Align your CSR mandate with our five pillars. Transparent reporting, measurable outcomes, genuine impact.',
    cta: 'Corporate Collaboration',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
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
    title: 'Sponsor',
    description:
      'Fund a specific initiative, scholarship, or medical camp. Your sponsorship directly reaches the people who need it most.',
    cta: 'Sponsor an Initiative',
  },
];

export default function GetInvolvedSection() {
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-bg overflow-hidden"
      id="get-involved"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #1B4332 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="aos-item">
            <span className="section-label mb-4 block">Be the Change</span>
            <h2 className="font-display text-5xl md:text-7xl text-primary leading-[0.9] tracking-tight mb-6">
              Join Us <span className="italic text-accent">Today.</span>
            </h2>
            <p className="max-w-xl mx-auto text-base text-fg-muted font-body font-light leading-relaxed">
              Whether you have time, expertise, funds, or a network — there is a
              meaningful role for you in the SHELF mission. Every contribution,
              however small, multiplies.
            </p>
          </div>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-parent mb-16">
          {roles?.map((role) => (
            <div
              key={role?.title}
              className="stagger-child group relative bg-white border border-primary/10 p-7 hover:border-accent/30 hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1 cursor-default"
            >
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-accent-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-12 h-12 flex items-center justify-center bg-primary/8 text-primary mb-5 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                {role?.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-3">
                {role?.title}
              </h3>
              <p className="text-sm text-fg-muted font-body font-light leading-relaxed mb-5">
                {role?.description}
              </p>
              <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-body font-semibold group-hover:tracking-[0.4em] transition-all duration-300">
                {role?.cta} →
              </span>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="aos-item relative overflow-hidden bg-primary p-12 md:p-16 text-center"
          style={{ transitionDelay: '0.3s' }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle, #FAF8F3 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-10"
            style={{
              background:
                'radial-gradient(circle, #C8630A 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.5em] text-primary-300 font-body font-medium mb-4 block">
              Together We Rise
            </span>
            <h3 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4">
              Ready to make a<br />
              <span className="italic" style={{ color: '#E07A2A' }}>
                real difference?
              </span>
            </h3>
            <p className="max-w-lg mx-auto text-sm text-primary-200 font-body font-light leading-relaxed mb-8">
              Your involvement — in any form — directly strengthens communities
              across India. Take the first step today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-sm font-semibold tracking-wide hover:bg-accent-light transition-all duration-300 shadow-accent hover:-translate-y-0.5"
              >
                Contact Us
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

     {/*         <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-wide hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
*/}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
