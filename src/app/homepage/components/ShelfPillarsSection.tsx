'use client';

import { useEffect, useRef } from 'react';

/*
  BENTO GRID AUDIT — 3-col grid, 5 cards:
  Row 1: [Sports cs-1] + [Healthcare cs-1] + [Education cs-1] = 3/3 ✓
  Row 2: [Livelihood cs-1] + [Community cs-2] = 1+2 = 3/3 ✓
  All 5 cards placed. No orphan cells. ✓
*/

const pillars = [
  {
    letter: 'S',
    title: 'Sports',
    subtitle: 'Grassroots to Glory',
    description:
      'Grassroots development, athlete training, infrastructure support, and equal participation for every child regardless of background.',
    color: '#1B4332',
    accent: '#2D6A4F',
    items: [
      'Grassroots development',
      'Athlete training camps',
      'Infrastructure support',
      'Equal participation',
    ],
    image: 'https://images.unsplash.com/photo-1658178292816-885c89e35793',
    imageAlt:
      'Young Indian boys playing football on a dirt field, late afternoon golden light, rural setting',
    span: 'col-span-1',
  },
  {
    letter: 'H',
    title: 'Healthcare',
    subtitle: 'Health for All',
    description:
      'Free medical camps, health awareness drives, maternal & child care, and ensuring basic medical access in underserved areas.',
    color: '#7B3B06',
    accent: '#C8630A',
    items: [
      'Free medical camps',
      'Health awareness',
      'Maternal & child care',
      'Basic medical access',
    ],
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1e10bccbc-1772731674628.png',
    imageAlt:
      'Doctor in white coat examining a child patient at a rural medical camp, warm natural light',
    span: 'col-span-1',
  },
  {
    letter: 'E',
    title: 'Education',
    subtitle: 'Knowledge as Power',
    description:
      'Scholarships, digital literacy programs, school infrastructure improvements, and skill-based education for future-ready youth.',
    color: '#1B4332',
    accent: '#2D6A4F',
    items: [
      'Scholarships',
      'Digital literacy',
      'School infrastructure',
      'Skill-based education',
    ],
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1dbd2f84e-1775563435854.png',
    imageAlt:
      'Children sitting in a bright classroom with books open, attentive expressions, rural Indian school',
    span: 'col-span-1',
  },
  {
    letter: 'L',
    title: 'Livelihood',
    subtitle: 'Dignity Through Work',
    description:
      'Skill development, women empowerment programs, job readiness training, and entrepreneurship support for sustainable income.',
    color: '#7B3B06',
    accent: '#C8630A',
    items: [
      'Skill development',
      'Women empowerment',
      'Job readiness',
      'Entrepreneurship support',
    ],
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1d9988ad3-1766735549989.png',
    imageAlt:
      'Indian women in colourful saris learning sewing craft at a vocational training workshop, bright interior',
    span: 'col-span-1',
  },
  {
    letter: 'C',
    title: 'COMMUNITY',
    subtitle: 'COMMUNITY WELFARE AND SOCIAL DEVELOPMENT',
    description:
      'Cleanliness drives, sanitation improvements, tree plantation campaigns, and holistic community development initiatives.',
    color: '#1B4332',
    accent: '#2D6A4F',
    items: [
      'Cleanliness drives',
      'Sanitation improvements',
      'Tree plantation',
      'Community development',
    ],
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1ce5ad0df-1767817539747.png',
    imageAlt:
      'Volunteers planting saplings in a row at a community green drive, lush open field, bright daylight',
    span: 'col-span-2',
  },
];

export default function SHEPillarsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.aos-item, .stagger-parent')
              .forEach((el) => {
                el.classList.add('is-visible');
              });
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
      className="relative py-24 bg-bg-warm overflow-hidden"
      id="what-we-do"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="aos-item">
            <span className="section-label mb-4 block">
              The S.H.E.L.F. Framework
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-primary leading-[0.9] tracking-tight">
              Our Five
              <br />
              <span className="italic text-accent">Pillars</span>
            </h2>
          </div>
          <div
            className="aos-item max-w-xs"
            style={{ transitionDelay: '0.15s' }}
          >
            <p className="text-sm text-fg-muted font-body leading-relaxed">
              Each letter of SHE represents a domain of impact — five
              interconnected pillars that together build thriving,
              self-sufficient communities.
            </p>
          </div>
        </div>

        {/* Bento Grid — 3 columns */}
        {/* Row 1: S, H, E (each col-span-1) = 3/3 ✓ */}
        {/* Row 2: L (col-span-1), F (col-span-2) = 3/3 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-parent">
          {/* Row 1: Sports */}
          <div className="stagger-child col-span-1 pillar-card bg-white border border-primary/10 shadow-warm overflow-hidden group">
            <div className="relative h-48 image-zoom overflow-hidden">
              <img
                src={pillars?.[0]?.image}
                alt={pillars?.[0]?.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-end gap-3">
                <span className="font-display text-5xl font-bold text-white/30 leading-none">
                  {pillars?.[0]?.letter}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/80 font-body pb-1">
                  {pillars?.[0]?.subtitle}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                {pillars?.[0]?.title}
              </h3>
              <p className="text-sm text-fg-muted font-body leading-relaxed mb-4">
                {pillars?.[0]?.description}
              </p>
              <ul className="space-y-1.5">
                {pillars?.[0]?.items?.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-fg-subtle font-body"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 1: Healthcare */}
          <div className="stagger-child col-span-1 pillar-card bg-white border border-primary/10 shadow-warm overflow-hidden group">
            <div className="relative h-48 image-zoom overflow-hidden">
              <img
                src={pillars?.[1]?.image}
                alt={pillars?.[1]?.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-accent/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-end gap-3">
                <span className="font-display text-5xl font-bold text-white/30 leading-none">
                  {pillars?.[1]?.letter}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/80 font-body pb-1">
                  {pillars?.[1]?.subtitle}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                {pillars?.[1]?.title}
              </h3>
              <p className="text-sm text-fg-muted font-body leading-relaxed mb-4">
                {pillars?.[1]?.description}
              </p>
              <ul className="space-y-1.5">
                {pillars?.[1]?.items?.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-fg-subtle font-body"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 1: Education */}
          <div className="stagger-child col-span-1 pillar-card bg-white border border-primary/10 shadow-warm overflow-hidden group">
            <div className="relative h-48 image-zoom overflow-hidden">
              <img
                src={pillars?.[2]?.image}
                alt={pillars?.[2]?.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-end gap-3">
                <span className="font-display text-5xl font-bold text-white/30 leading-none">
                  {pillars?.[2]?.letter}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/80 font-body pb-1">
                  {pillars?.[2]?.subtitle}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                {pillars?.[2]?.title}
              </h3>
              <p className="text-sm text-fg-muted font-body leading-relaxed mb-4">
                {pillars?.[2]?.description}
              </p>
              <ul className="space-y-1.5">
                {pillars?.[2]?.items?.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-fg-subtle font-body"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2: Livelihood (col-span-1) */}
          <div className="stagger-child col-span-1 pillar-card bg-primary text-white border border-primary shadow-warm overflow-hidden group">
            <div className="relative h-48 image-zoom overflow-hidden">
              <img
                src={pillars?.[3]?.image}
                alt={pillars?.[3]?.imageAlt}
                className="w-full h-full object-cover opacity-60"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-end gap-3">
                <span className="font-display text-5xl font-bold text-white/30 leading-none">
                  {pillars?.[3]?.letter}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/80 font-body pb-1">
                  {pillars?.[3]?.subtitle}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold text-white mb-2">
                {pillars?.[3]?.title}
              </h3>
              <p className="text-sm text-primary-200 font-body leading-relaxed mb-4">
                {pillars?.[3]?.description}
              </p>
              <ul className="space-y-1.5">
                {pillars?.[3]?.items?.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-primary-200 font-body"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2: Foundation (col-span-2) */}
          <div className="stagger-child md:col-span-2 pillar-card bg-white border border-primary/10 shadow-warm overflow-hidden group">
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative md:w-1/2 h-48 md:h-auto image-zoom overflow-hidden">
                <img
                  src={pillars?.[4]?.image}
                  alt={pillars?.[4]?.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />
                <div className="absolute bottom-4 left-4 md:bottom-auto md:top-4 flex items-end gap-3">
                  <span className="font-display text-6xl font-bold text-white/30 leading-none">
                    {pillars?.[4]?.letter}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-body font-medium mb-2">
                  {pillars?.[4]?.subtitle}
                </span>
                <h3 className="font-display text-3xl font-semibold text-primary mb-3">
                  {pillars?.[4]?.title}
                </h3>
                <p className="text-sm text-fg-muted font-body leading-relaxed mb-5">
                  {pillars?.[4]?.description}
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {pillars?.[4]?.items?.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-fg-subtle font-body"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
