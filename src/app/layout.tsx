import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header/header';
import { Analytics } from '@vercel/analytics/next';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE">
      <body
        className={`${spaceGrotesk.variable} bg-background text-primary antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
