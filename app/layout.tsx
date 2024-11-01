import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WorkLog',
  description: 'Keep track of your work hours'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-6xl mx-auto min-h-[100dvh] flex flex-col">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
