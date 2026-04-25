import type { Metadata, Viewport } from 'next';
import React from 'react';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  title: 'USF — Empowering Lives, Strengthening Communities',
  description:
    'USF works across Sports, Healthcare, Education, Livelihood & Community Development to uplift underserved communities across India.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fshelffound6941back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18"
        />

        <script
          type="module"
          defer
          src="https://static.rocket.new/rocket-shot.js?v=0.0.2"
        />
        
      </body>
    </html>
  );
}
