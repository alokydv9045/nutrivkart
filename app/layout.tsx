import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

import Providers from '@/components/Providers';
import BrowserExtensionFix from '@/components/BrowserExtensionFix';
import ErrorBoundary from '@/components/ErrorBoundary';
import { constructMetadata, getOrganizationSchema } from '@/lib/seo';

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = constructMetadata();

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0E1A',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const organizationSchema = getOrganizationSchema();
  
  return (
    <html lang='en' suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} ${outfit.variable}`} suppressHydrationWarning>
        <BrowserExtensionFix />
        <Providers>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
