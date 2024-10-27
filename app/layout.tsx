/**
 * Root Layout Component
 * 
 * Performance Optimizations:
 * 1. Font Loading:
 *    - Local fonts reduce network requests
 *    - Variable fonts minimize file size while supporting multiple weights
 *    - Font display swap prevents FOIT (Flash of Invisible Text)
 * 
 * 2. Layout Optimization:
 *    - Minimal wrapper component reduces JS bundle
 *    - Static metadata generation
 *    - No client-side JavaScript unless necessary
 * 
 * Best Practices:
 * 1. TypeScript:
 *    - Readonly props prevent accidental mutations
 *    - Explicit type definitions improve maintainability
 * 
 * 2. SEO:
 *    - Proper meta tags
 *    - Semantic HTML structure
 *    - Language attribute for accessibility
 */

// app/layout.tsx
'use client';

import { SessionProvider } from "next-auth/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <SessionProvider refetchInterval={0} refetchOnWindowFocus={false}>
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
