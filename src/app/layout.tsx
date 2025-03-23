import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import { Sidebar } from '@/components/layouts/sidebar/sidebar';
import { ThemeProvider } from '@/components/providers/theme-provider';

import { cn } from '../lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nunatass.com'),
  title: 'Nuno Andrade Portfolio',
  description:
    'A Computer Engineer, with expertise in web and mobile development with a strong background in creating exceptional digital experiences, I bring a passion for learning and collaborating effectively within teams.',

  icons: {
    icon: {
      url: '/favicon.png',
      type: 'image/png',
    },
    shortcut: { url: '/favicon.png', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'relative flex h-screen w-screen')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <Header />
          <div className="no-scrollbar container flex h-max w-full flex-col justify-center overflow-x-hidden pl-20 pt-20 lg:pl-56 xl:pl-40">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
