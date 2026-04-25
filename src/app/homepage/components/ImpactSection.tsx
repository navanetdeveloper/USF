'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: 5000,
    suffix: '+',
    label: 'Many Lives Impacted',
    sublabel: 'Across 5 pillars of change',
    index: '01',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Also Communities Supported',
    sublabel: 'Villages and urban clusters',
    index: '02',
  },
  {
    value: 25,
    suffix: '+',
    label: ' & Initiatives Completed',
    sublabel: 'Measurable, documented outcomes',
    index: '03',
  },
];

function useCounter(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
}

function StatCard({
  stat,
  isVisible,
}: {
  stat: (typeof stats)[0];
  isVisible: boolean;
}) {
  const count = useCounter(stat.value, isVisible, 2000);
  return (
    <div className="flex flex-col group cursor-default px-6 py-4 border-r border-white/10 last:border-r-0">
      <span className="text-[12px] font-mono text-primary-300 mb-2 tracking-widest uppercase">
        {stat.index} — {stat.sublabel}
      </span>
      <div
        className="stat-number font-display font-semibold tracking-tight leading-none mb-2"
        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
      >
      </div>
      <p className="text-4xl text-primary-200 font-body font-light leading-relaxed max-w-xs">
        {stat.label}
      </p>
    </div>
  );
}

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target
              .querySelectorAll('.aos-item')
              .forEach((el) => el.classList.add('is-visible'));
          }
        });
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      id="impact"
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

      {/* Accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(200,99,10,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-3 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-3">
          <div className="aos-item">
            <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-body font-medium mb-4 block">
              Our Impact
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9] tracking-tight">
            Performance that
              <br />
              <span className="italic" style={{ color: '#DA921A' }}>
                speak truth.
              </span>
            </h2>
          </div>
          <div
            className="aos-item max-w-sm"
            style={{ transitionDelay: '0.15s' }}
          >
            <p className="text-sm text-primary-300 font-body leading-relaxed">
              Every number represents a life touched, a community strengthened,
              and a future made brighter. These are placeholder milestones — our
              journey is just beginning.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div
          className="aos-item border border-white/10 bg-white/[0.02] backdrop-blur-sm"
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0">
            {stats.map((stat) => (
              <StatCard key={stat.index} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        </div>

        {/* Approach pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-parent">
          {[
            {
              title: 'Community-First',
              desc: 'Every decision starts with listening to the people we serve.',
            },
            {
              title: 'Long-Term Sustainability',
              desc: 'We build programs that outlast our presence in communities.',
            },
            {
              title: 'Transparent Outcomes',
              desc: 'Open reporting on every rupee spent and every life changed.',
            },
            {
              title: 'Strategic Partnerships',
              desc: 'Collaborating with NGOs, corporates, and government bodies.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="stagger-child group relative border border-white/8 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-accent/30 transition-all duration-500"
            >
              <div className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <h3 className="font-body text-base font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-primary-300 font-body font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
