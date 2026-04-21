import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Color Converter - HEX, RGB, HSL, CMYK | color-converter",
  description:
    "Free online color converter tool. Convert colors between HEX, RGB, HSL, and CMYK formats instantly. Visual color picker, WCAG contrast checker, and closest CSS color name lookup.",
  keywords: [
    "hex to rgb",
    "color converter",
    "rgb to hex",
    "hsl to hex",
    "color picker",
    "cmyk converter",
    "hex color",
    "rgb color",
    "hsl color",
    "wcag contrast checker",
    "color accessibility",
  ],
  openGraph: {
    title: "Color Converter - HEX, RGB, HSL, CMYK",
    description:
      "Convert colors between HEX, RGB, HSL, and CMYK formats with a visual picker and WCAG contrast checker.",
    type: "website",
    url: "https://color-converter.vercel.app",
    siteName: "Color Converter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Converter - HEX, RGB, HSL, CMYK",
    description:
      "Convert colors between HEX, RGB, HSL, and CMYK formats with a visual picker and WCAG contrast checker.",
  },
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  metadataBase: new URL("https://color-converter.vercel.app"),
  alternates: {
    canonical: "/",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Color Converter",
              url: "https://color-converter.vercel.app",
              description:
                "Convert colors between HEX, RGB, HSL, and CMYK formats with a visual picker and WCAG contrast checker.",
              applicationCategory: "DesignApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "HEX to RGB conversion",
                "RGB to HEX conversion",
                "HSL to HEX conversion",
                "CMYK output",
                "Visual color picker",
                "WCAG contrast ratio checker",
                "CSS named color lookup",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
