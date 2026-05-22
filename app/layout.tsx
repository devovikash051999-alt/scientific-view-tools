import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Free Online Tools Suite - Scientific Views',
  description: '50-in-1 premium online calculator, converter, health tracker, and developer utility web suite. Immediate calculations and beautiful design.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
       <head>
         <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
       </head>
      <body suppressHydrationWarning className="bg-slate-950 text-slate-200 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-200 min-h-screen">
        {children}
      </body>
    </html>
  );
}
