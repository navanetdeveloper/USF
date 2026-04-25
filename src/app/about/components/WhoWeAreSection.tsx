'use client';

import AppImage from '@/components/ui/AppImage';
import { useEffect, useRef } from 'react';

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.aos-item, .aos-item-left, .stagger-parent')
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
      className="relative py-24 bg-white overflow-hidden border-b border-primary/8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left sticky image col */}
          <div className="lg:col-span-5 aos-item-left">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden bg-bg-warm border border-primary/10">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1169b2ada-1764663453913.png"
                  alt="Diverse group of Indian volunteers smiling together outdoors, bright sunny day, warm community spirit"
                  width={480}
                  height={640}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating quote card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-accent text-white p-6 max-w-xs shadow-accent hidden md:block">
                <p className="font-display text-lg italic leading-snug mb-2">
                  {'"'}Guided by Gratitude.Progress with Purpose.{'"'}
                </p>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-body">
                  USF
                </span>
              </div>
            </div>
          </div>

          {/* Right text col */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pt-4">
            <div className="aos-item">
              <span className="section-label mb-4 block">Who We Are</span>
              <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight tracking-tight">
                Born from the communities
                <br />
                <span className="italic text-accent">we now serve.</span>
              </h2>
            </div>

            <div
              className="aos-item space-y-4"
              style={{ transitionDelay: '0.1s' }}
            >
              <p className="text-base text-fg-muted font-body leading-relaxed">
                USF is a charitable trust registered
                and operating across India. We were founded by individuals who
                grew up in the very communities we work with today — people who
                experienced firsthand the gaps in education, healthcare, sports
                infrastructure, and livelihood opportunities.
              </p>
              <p className="text-base text-fg-muted font-body leading-relaxed">
                As we grew and found success, we made a conscious choice: to
                give back. Not as outsiders with solutions, but as insiders with
                understanding. SHE was born from this conviction — that the
                most powerful form of giving is returning to your roots with
                purpose, humility, and a long-term plan.
              </p>
            </div>

            <div
              className="aos-item border-l-2 border-accent pl-6 py-2"
              style={{ transitionDelay: '0.2s' }}
            >
              <p className="font-display text-xl italic text-primary leading-relaxed">
                "We rose from this land. Now, we give back to it."
              </p>
            </div>

            <div
              className="aos-item grid grid-cols-2 gap-4"
              style={{ transitionDelay: '0.3s' }}
            >
              {[
                { label: 'Year Founded', value: '2026' },
                { label: 'Registered In', value: 'India' },
                { label: 'Active Pillars', value: '5 Domains' },
                { label: 'Focus Area', value: 'Grassroots' },
              ]?.map((item) => (
                <div
                  key={item?.label}
                  className="bg-bg-warm border border-primary/8 p-4"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-fg-subtle font-body mb-1">
                    {item?.label}
                  </div>
                  <div className="font-display text-lg font-semibold text-primary">
                    {item?.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
