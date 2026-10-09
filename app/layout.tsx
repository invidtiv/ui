import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { OpenPanelComponent } from "@openpanel/nextjs";
import { Geist, Outfit, Geist_Mono } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/config/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "react widgets",
    "react components",
    "tailwindcss ui",
    "shadcn/ui",
    "shadcn ui components",
    "react ui library",
    "customizable components",
    "dark mode components",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        width: 1200,
        height: 630,
        url: siteConfig.ogImage,
        alt: `${siteConfig.name} Cover`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: siteConfig.title,
    description: siteConfig.description,
    card: "summary_large_image",
    images: [
      {
        width: 1200,
        height: 630,
        url: siteConfig.ogImage,
        alt: `${siteConfig.name} Cover`,
      },
    ],
    site: siteConfig.author,
    creator: siteConfig.author,
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${outfit.variable} ${geistMono.variable} typeset typeset-app antialiased`}>
        <OpenPanelComponent
          clientId={process.env.OPEN_PANEL_CLIENT_ID!}
          trackScreenViews={true}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <div className="relative w-full">
              <SiteHeader />
              <div className="flex-1 p-6">{children}</div>
              <SiteFooter />
            </div>
          <TailwindIndicator />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
