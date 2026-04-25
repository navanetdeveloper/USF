'use client';

import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'About Us', href: '/about' },
  { label: 'What We Do', href: '/homepage#what-we-do' },
  { label: 'Impact', href: '/homepage#impact' },
  { label: 'Get Involved', href: '/homepage#get-involved' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-xl border-b border-primary/10 py-3 shadow-warm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-2.5 group">
            <AppLogo
              size={85}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">


            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks?.map((link) => {
              const isActive =
                link?.href === pathname ||
                (link?.href !== '/homepage' &&
                  pathname?.startsWith(link?.href?.split('#')?.[0]));
              return (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className={`relative px-3 py-2 text-[15px] font-medium tracking-wide transition-colors duration-200 group ${
                    isActive
                      ? 'text-yellow-800'
                      : 'text-fg-muted hover:text-yellow-900'
                  }`}
                >
                  {link?.label}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-px bg-accent transition-all duration-300 origin-left ${
                      isActive
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
          {/*   <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-[13px] font-semibold tracking-wide rounded-sm hover:bg-primary-light transition-colors duration-300 shadow-warm group"
            >
              Donate Now
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>*/}

            {/* Hamburger */}
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-end justify-center gap-[5px] group"
            >
              <span
                className={`w-full h-[1.5px] bg-primary rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px] w-full' : ''}`}
              />
              <span
                className={`h-[1.5px] bg-primary rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-3/4'}`}
              />
              <span
                className={`h-[1.5px] bg-primary rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px] w-full' : 'w-1/2'}`}
              />
            </button>
          </div>







        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{
          backdropFilter: menuOpen ? 'blur(8px)' : 'none',
          background: menuOpen ? 'rgba(15, 26, 18, 0.6)' : 'transparent',
        }}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-sm bg-bg shadow-warm-lg mobile-menu lg:hidden ${menuOpen ? 'open' : ''}`}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <nav className="flex flex-col gap-1 flex-1">
            {navLinks?.map((link, i) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-fg-muted hover:text-primary hover:bg-primary/5 rounded-sm transition-all duration-200 group"
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
              >
                <span className="w-1 h-1 rounded-full bg-accent opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all" />
                {link?.label}
              </Link>
            ))}
          </nav>
          <div className="pt-6 border-t border-primary/10">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white text-sm font-semibold tracking-wide rounded-sm hover:bg-primary-light transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
