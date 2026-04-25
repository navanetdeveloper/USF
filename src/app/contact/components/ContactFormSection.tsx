'use client';

import React, { useEffect, useRef, useState } from 'react';

const subjects = [
  'General Inquiry',
  'Volunteer',
  'NGO Partnership',
  'Corporate CSR',
  'Sponsorship',
  'Media / Press',
  'Donation',
  'Other',
];

export default function ContactFormSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler — connect to backend/email service here
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white border-b border-primary/8 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #1B4332 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Label + info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="aos-item">
              <span className="section-label mb-4 block">Send a Message</span>
              <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight tracking-tight">
                Start a<br />
                <span className="italic text-accent">conversation.</span>
              </h2>
            </div>
            <div className="aos-item" style={{ transitionDelay: '0.1s' }}>
              <p className="text-sm text-fg-muted font-body leading-relaxed">
                Fill in the form and our team will get back to you within 48
                hours. For urgent matters, please call us directly.
              </p>
            </div>
            <div
              className="aos-item space-y-4 pt-4"
              style={{ transitionDelay: '0.2s' }}
            >
              {[
                'Response within 48 hours',
                'All inquiries are confidential',
                'Available Mon–Fri, 9AM–6PM IST',
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 group">
                  <div className="hover-line" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-fg-subtle font-body">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="lg:col-span-8 aos-item"
            style={{ transitionDelay: '0.15s' }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-primary/5 border border-primary/15">
                <div className="w-16 h-16 flex items-center justify-center bg-primary text-white mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl text-primary mb-3">
                  Message Sent!
                </h3>
                <p className="text-sm text-fg-muted font-body max-w-sm leading-relaxed">
                  Thank you for reaching out. Our team will get back to you
                  within 48 hours. Together, we will build something meaningful.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[11px] uppercase tracking-[0.3em] text-accent font-body font-semibold hover:text-accent-light transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label
                      htmlFor="fullName"
                      className="block text-[10px] uppercase tracking-[0.3em] text-fg-subtle font-body mb-2"
                    >
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Arjun Sharma"
                      className="w-full bg-transparent border-b border-primary/20 py-3 text-sm text-fg font-body focus:outline-none focus:border-primary transition-colors placeholder:text-fg-subtle/40"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-focus-within:w-full transition-all duration-500" />
                  </div>
                  <div className="relative group">
                    <label
                      htmlFor="email"
                      className="block text-[10px] uppercase tracking-[0.3em] text-fg-subtle font-body mb-2"
                    >
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="arjun@example.com"
                      className="w-full bg-transparent border-b border-primary/20 py-3 text-sm text-fg font-body focus:outline-none focus:border-primary transition-colors placeholder:text-fg-subtle/40"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-focus-within:w-full transition-all duration-500" />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label
                      htmlFor="phone"
                      className="block text-[10px] uppercase tracking-[0.3em] text-fg-subtle font-body mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 8939301100"
                      className="w-full bg-transparent border-b border-primary/20 py-3 text-sm text-fg font-body focus:outline-none focus:border-primary transition-colors placeholder:text-fg-subtle/40"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-focus-within:w-full transition-all duration-500" />
                  </div>
                  <div className="relative group">
                    <label
                      htmlFor="subject"
                      className="block text-[10px] uppercase tracking-[0.3em] text-fg-subtle font-body mb-2"
                    >
                      Subject <span className="text-accent">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-primary/20 py-3 text-sm text-fg font-body focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-fg-subtle">
                        Select a subject
                      </option>
                      {subjects.map((s) => (
                        <option key={s} value={s} className="text-fg bg-white">
                          {s}
                        </option>
                      ))}
                    </select>
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-focus-within:w-full transition-all duration-500" />
                    <div className="absolute right-0 bottom-3 pointer-events-none text-fg-subtle">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <label
                    htmlFor="message"
                    className="block text-[10px] uppercase tracking-[0.3em] text-fg-subtle font-body mb-2"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest, initiative, or how you'd like to collaborate..."
                    className="w-full bg-transparent border-b border-primary/20 py-3 text-sm text-fg font-body focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-fg-subtle/40"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Submit */}
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-fg-subtle font-body">
                    <span className="text-accent">*</span> Required fields
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-white text-sm font-semibold tracking-wide hover:bg-primary-light transition-all duration-300 hover:-translate-y-0.5 shadow-warm hover:shadow-warm-lg"
                  >
                    Send Message
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
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
