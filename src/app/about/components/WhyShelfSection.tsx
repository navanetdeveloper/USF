'use client';

import { useEffect, useRef } from 'react';

const pillars = [
  {
    letter: 'S',
    word: 'Sports',
    desc: 'Physical wellness, discipline, and teamwork — sports as a vehicle for holistic development.',
  },
  {
    letter: 'H',
    word: 'Healthcare',
    desc: 'Because health is the foundation of everything else. No growth without wellness.',
  },
  {
    letter: 'E',
    word: 'Education',
    desc: 'Knowledge breaks cycles of poverty. Education is the longest-lasting investment.',
  },
  {
    letter: 'L',
    word: 'Livelihood',
    desc: 'Sustainable income and dignified work transform families across generations.',
  },
  {
    letter: 'C',
    word: 'COMMUNITY WELFARE ',
    desc: 'To support women empowerment, self-help groups, and entrepreneurship initiatives',
  },
];

export default function WhyShelfSection() {
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
      className="relative py-24 bg-white border-y border-primary/8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F1C15 0%, #0A1510 100%)',
      }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="aos-item">
              <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-body font-medium mb-4 block">
                The Name
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-white leading-tight tracking-tight mb-6">
                Why
                <br />
                <span className="italic" style={{ color: '#DA921A' }}>
                  S.H.E?
                </span>
              </h2>
            </div>
            <div className="aos-item" style={{ transitionDelay: '0.1s' }}>
              <p className="text-base text-primary-200 font-body font-light leading-relaxed mb-6">
                A shelf holds the most important things in a home — books,
                medicine, trophies, memories. We chose SHELF because each letter
                represents a domain that holds up the structure of a thriving
                community.
              </p>
              <p className="text-sm text-primary-300 font-body font-light leading-relaxed">
                Together, these five pillars form an integrated framework.
                Strengthen one, and the others grow stronger. Neglect one, and
                the whole structure becomes unstable. This is why we work across
                all five simultaneously.
              </p>
            </div>
          </div>

          {/* Right: Pillar list */}
          <div className="stagger-parent space-y-0">
            {pillars?.map((pillar, i) => (
              <div
                key={pillar?.letter}
                className="stagger-child group flex items-start gap-6 py-6 border-b border-white/8 last:border-b-0 hover:bg-white/[0.03] px-4 -mx-4 transition-colors duration-300 cursor-default"
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-white/15 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                  <span className="font-display text-2xl font-bold text-white/40 group-hover:text-accent transition-colors duration-300">
                    {pillar?.letter}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-body text-base font-semibold text-white">
                      {pillar?.word}
                    </h3>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-primary-400 font-body">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-sm text-primary-300 font-body font-light leading-relaxed">
                    {pillar?.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
