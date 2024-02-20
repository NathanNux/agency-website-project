import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const font = Poppins({
   subsets: ["latin"],
   weight : '400',
 });

export const metadata: Metadata = {
  title: "Centrum",
  description: "Centrum je tým kreativních lidí, kteří se vyvíjejí a tvoří aplikace, automatizace a  webové stránky s SEO managmentem pro firmy v Čr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../public/centrumfavicon.ico" />
      </Head>
      <body className={font.className}>
        <Analytics />
        {children}
        
        </body>
    </html>
  );
}
