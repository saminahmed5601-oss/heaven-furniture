import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Noto_Serif_Bengali } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b1917",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Heaven Furniture Mart",
  description:
    "Designed. Crafted. Customized. Luxury bespoke furniture and interior styling studio on Agrabad Access Road, Chattogram, Bangladesh. Built around your space, size, and taste.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "Heaven Furniture Mart",
    "Luxury furniture Chattogram",
    "Bespoke furniture Bangladesh",
    "Agrabad Access Road furniture",
    "Custom interior design Chattogram",
    "Abul Kalam Bhuiyan",
    "Handcrafted wooden furniture",
  ],
  authors: [{ name: "Heaven Furniture Mart" }],
  openGraph: {
    title: "Heaven Furniture Mart",
    description:
      "Not made for everyone. Made for you. Discover bespoke luxury furniture tailored for your home and lifestyle in Chattogram.",
    url: "https://heavenfurnituremart.com",
    siteName: "Heaven Furniture Mart",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${notoSerifBengali.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-ivory text-espresso antialiased selection:bg-champagne selection:text-charcoal-deep">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
