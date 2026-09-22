import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { defaultDescription, siteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  display: "swap",
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Paweł Drojecki | React, Next.js, Nest.js",
    template: "%s | Paweł Drojecki",
  },
  description: defaultDescription,
  applicationName: "Portfolio Pawła Drojeckiego",
  authors: [{ name: "Paweł Drojecki", url: siteUrl }],
  creator: "Paweł Drojecki",
  keywords: [
    "Paweł Drojecki",
    "frontend developer",
    "fullstack developer",
    "React",
    "Next.js",
    "Nest.js",
    "TypeScript",
    "portfolio",
    "e-commerce",
    "product development",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Paweł Drojecki | React, Next.js, Nest.js",
    description: defaultDescription,
    url: siteUrl,
    siteName: "Paweł Drojecki",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Paweł Drojecki | React, Next.js, Nest.js",
    description: defaultDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Paweł Drojecki",
  url: siteUrl,
  jobTitle: "Frontend / Fullstack / Product Developer",
  sameAs: ["https://www.linkedin.com/in/pawel-drojecki/"],
  knowsAbout: [
    "React",
    "Next.js",
    "Nest.js",
    "TypeScript",
    "React Native",
    "Product development",
    "E-commerce",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="flex flex-col w-full">
          <Header />
          <main className="flex-1 h-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
