'use client';

import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const footerLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'About Us', href: '/about' },
  { label: 'What We Do', href: '/homepage#what-we-do' },
  { label: 'Impact', href: '/homepage#impact' },
  { label: 'Get Involved', href: '/homepage#get-involved' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  return (
    <footer className="border-t border-primary/10 bg-bg pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Arc Browser Split Pattern */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2.5">
              <AppLogo size={60} />
              <div className="flex flex-col leading-none">


              </div>
            </div>
            <p className="text-[13px] text-fg-subtle leading-relaxed font-body">
              We rose from this land.
              <br />
              Now, we give back to it.
            </p>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-ring" />
              <span className="text-[11px] text-fg-subtle font-body">
                Guided by Gratitude.Progress with Purpose.
              </span>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 items-start pt-1">
            {footerLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-[14px] font-medium text-fg-muted hover:text-primary transition-colors duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-primary/10">
          <p className="text-[12px] text-fg-subtle font-body">
            © {year} USF. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-fg-subtle hover:text-primary transition-colors duration-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="text-fg-subtle hover:text-primary transition-colors duration-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-fg-subtle hover:text-primary transition-colors duration-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <span className="text-fg-subtle text-[12px]">·</span>
            <Link
              href="/contact"
              className="text-[12px] text-fg-subtle hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-[12px] text-fg-subtle hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
