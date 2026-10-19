import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingProvider } from "@/context/BookingContext";
import { BookingModal } from "@/components/BookingModal";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hiltonsbellaire.com"),
  title: "Hiltons Bellaire | Luxury Hotel in Chikakore, Kubwa, Abuja",
  description:
    "Contemporary comfort and thoughtful hospitality in Chikakore, Kubwa, Abuja. Boutique accommodations, 24-hour reception, air-conditioned rooms, and genuine Nigerian hospitality.",
  keywords: [
    "Hiltons Bellaire",
    "Hotel in Kubwa",
    "Chikakore hotel Abuja",
    "Abuja hotel",
    "Boutique hotel Abuja",
    "Kubwa accommodations",
  ],
  icons: {
    icon: [
      { url: "/icon.jpg" },
      { url: "/images/hotel/logo-mark.jpg" },
    ],
    apple: [
      { url: "/apple-touch-icon.jpg" },
      { url: "/images/hotel/logo-mark.jpg" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Hiltons Bellaire — A More Refined Stay in Abuja",
    description:
      "Contemporary comfort and thoughtful hospitality in Chikakore, Kubwa, Abuja.",
    url: "https://hiltonsbellaire.com",
    siteName: "Hiltons Bellaire",
    images: [
      {
        url: "/images/hotel/exterior-courtyard-night.png",
        width: 1200,
        height: 630,
        alt: "Hiltons Bellaire Hotel illuminated at night",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.jpg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
      </head>
      <body className="bg-ivory text-charcoal font-sans antialiased selection:bg-champagne/30 selection:text-midnight">
        <BookingProvider>
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
