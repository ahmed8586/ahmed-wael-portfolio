import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ahmed Wael Farouk — Mechatronics Engineer & AI Specialist',
  description: 'Personal engineering portfolio of Ahmed Wael Farouk. Mechatronics Engineer, Automation Engineer, Electrical Engineer, and AI & Machine Learning Enthusiast from Badr University in Cairo (BUC).',
  keywords: [
    'Ahmed Wael',
    'Ahmed Wael Farouk',
    'Mechatronics Engineer',
    'Automation Engineer',
    'Electrical Engineer',
    'AI Engineer',
    'Machine Learning',
    'Deep Learning',
    'Siemens PLC',
    'Badr University in Cairo',
    'RAVEN-X Rover',
  ],
  authors: [{ name: 'Ahmed Wael Farouk' }],
  creator: 'Ahmed Wael Farouk',
  openGraph: {
    title: 'Ahmed Wael Farouk — Mechatronics Engineer & AI Specialist',
    description: 'I design automation systems, AI-powered applications, embedded systems, and data-driven engineering solutions.',
    url: 'https://ahmed-wael-portfolio.vercel.app',
    siteName: 'Ahmed Wael Portfolio',
    images: [
      {
        url: '/images/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahmed Wael Farouk Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Wael Farouk — Mechatronics Engineer & AI Specialist',
    description: 'Mechatronics Engineering graduate, Siemens PLC Certified, AI & ML Developer.',
    images: ['/images/avatar.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ahmed Wael Farouk',
  jobTitle: 'Mechatronics Engineer & AI Specialist',
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Badr University in Cairo (BUC)',
  },
  knowsAbout: [
    'Mechatronics Engineering',
    'Industrial Automation',
    'Siemens S7 PLC',
    'Artificial Intelligence',
    'Deep Learning',
    'SolidWorks CAD',
    'Electrical Power Distribution',
  ],
  url: 'https://ahmed-wael-portfolio.vercel.app',
  email: 'ahmedamrwael@gmail.com',
  telephone: '+201000719201',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#07090e] text-slate-100 selection:bg-blue-600 selection:text-white antialiased" suppressHydrationWarning>
        <Preloader />
        <ScrollProgressBar />
        <CustomCursor />
        <TopBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
