'use client';

import { useEffect, useRef } from 'react';

const cards = [
  {
    label: 'Our Vision',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
      </svg>
    ),
    headline:
      'An India where every citizen has equal access to opportunity — regardless of geography, gender, or circumstance.',
    color: 'bg-primary',
    textColor: 'text-white',
    accentColor: 'text-primary-200',
    labelColor: 'text-primary-300',
    iconBg: 'bg-white/10',
    iconColor: 'text-white',
  },
  {
    label: 'Our Mission',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    headline:
      'To create lasting, measurable impact across Sports, Healthcare, Education, Livelihood, and Community Development.',
    color: 'bg-accent',
    textColor: 'text-white',
    accentColor: 'text-white/70',
    labelColor: 'text-white/60',
    iconBg: 'bg-white/10',
    iconColor: 'text-white',
  },
  {
    label: 'Our Philosophy',
    icon: (
      <svg
        width="24"
        height="24"
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
    headline:
      'Charity without dignity is incomplete. We work as partners with communities — not as benefactors above them.',
    color: 'bg-bg-warm',
    textColor: 'text-primary',
    accentColor: 'text-fg-muted',
    labelColor: 'text-accent',
    iconBg: 'bg-primary/8',
    iconColor: 'text-primary',
    border: true,
  },
];

export default function VisionMissionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.stagger-parent')
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
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #1B4332 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">Our Foundation</span>
          <h2 className="font-display text-5xl md:text-6xl text-primary leading-tight tracking-tight">
            Vision, Mission &<br />
            <span className="italic text-accent">Philosophy</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-parent">
          {cards?.map((card) => (
            <div
              key={card?.label}
              className={`stagger-child ${card?.color} ${card?.border ? 'border border-primary/12' : ''} p-8 md:p-10 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-500 shadow-warm`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center ${card?.iconBg} ${card?.iconColor}`}
              >
                {card?.icon}
              </div>
              <div>
                <span
                  className={`text-[10px] uppercase tracking-[0.4em] font-body font-medium ${card?.labelColor} mb-3 block`}
                >
                  {card?.label}
                </span>
                <p
                  className={`font-display text-xl md:text-2xl leading-snug ${card?.textColor}`}
                >
                  {card?.headline}
                </p>
              </div>
              <div
                className={`w-8 h-px ${card?.border ? 'bg-accent' : 'bg-white/30'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
