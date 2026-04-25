/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4332',
          dark: '#0F2A1E',
          light: '#2D6A4F',
          50: '#F0F7F4',
          100: '#D6EDE3',
          200: '#A8D5BE',
          300: '#74B99A',
          400: '#4A9C7A',
          500: '#2D7D5C',
          600: '#1B4332',
          700: '#143426',
          800: '#0F2A1E',
          900: '#091A12',
        },
        accent: {
          DEFAULT: '#C8630A',
          light: '#DA921A',
          muted: 'rgba(200, 99, 10, 0.15)',
          50: '#FEF5EC',
          100: '#FDE8D0',
          200: '#F9C99A',
          300: '#F4A85E',
          400: '#DA921A',
          500: '#C8630A',
          600: '#A24E08',
          700: '#7B3B06',
          800: '#552804',
          900: '#2E1602',
        },
        bg: {
          DEFAULT: '#FAF8F3',
          warm: '#F5F0E8',
          dark: '#0F1C15',
        },
        fg: {
          DEFAULT: '#1A1A1A',
          muted: '#4A5568',
          subtle: '#718096',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero: 'clamp(3.5rem, 9vw, 8.5rem)',
        'hero-sm': 'clamp(2.5rem, 6vw, 5.5rem)',
        display: 'clamp(2rem, 4vw, 3.5rem)',
      },
      animation: {
        float: 'floatGentle 4s ease-in-out infinite',
        scan: 'scanLine 10s linear infinite',
        shimmer: 'shimmerText 4s linear infinite',
        'pulse-ring': 'pulseRing 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'animation-in':
          'animationIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanLine: {
          '0%': { top: '0', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        shimmerText: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseRing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.15)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        animationIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(28px)',
            filter: 'blur(8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)',
          },
        },
      },
      boxShadow: {
        warm: '0 4px 24px rgba(27, 67, 50, 0.1)',
        'warm-lg': '0 12px 40px rgba(27, 67, 50, 0.15)',
        accent: '0 4px 24px rgba(200, 99, 10, 0.2)',
        glass: '0 8px 32px rgba(27, 67, 50, 0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FAF8F3 0%, #F0EDE4 100%)',
        'dark-section': 'linear-gradient(180deg, #0F1C15 0%, #0A1510 100%)',
        'accent-gradient':
          'linear-gradient(to right, #C8630A, #DA921A, #C8630A)',
        'primary-gradient': 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
      },
    },
  },
  plugins: [],
};
