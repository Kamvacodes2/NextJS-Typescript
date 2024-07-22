import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marketer Flow",
  description: `A dedicated platform for digital marketers and SEO experts,
   providing them with a space to share knowledge, tools, 
   and resources, and to stay updated with industry trends.
  Sharing marketing strategies, discussing SEO techniques, 
  seeking advice on analytics, and staying updated with industry trends.
  Features: Marketing guides, SEO tools, analytics dashboards, and trend analysis
  `,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn></SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
