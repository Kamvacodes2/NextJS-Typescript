import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100','200','300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: "Marketer Flow",
  description: `A dedicated platform for digital marketers and SEO experts,
   providing them with a space to share knowledge, tools, 
   and resources, and to stay updated with industry trends.
  Sharing marketing strategies, discussing SEO techniques, 
  seeking advice on analytics, and staying updated with industry trends.
  Features: Marketing guides, SEO tools, analytics dashboards, and trend analysis
  `,
  icons: {
    icon: '/assets.images/mrktr-site-logo.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ 
      elements: {
      formButtonPrimary: 'primary-gradient',
      footerActionLink: 'primary-text-gradient hover:text-primary-500'
    }}}>
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
