import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";
import { IntroScreen } from "@/components/ui/IntroScreen";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aromal – Organic Yogurt & Bowls | Tirana",
    template: "%s | Aromal",
  },
  description:
    "Porosi online yogurt bowls, smoothies, dhe toaste organike. Përjeto freskinë natyrore në Tiranë.",
  keywords: ["aromal", "yogurt", "bowls", "organic", "tirana", "albania", "smoothie", "healthy food"],
  openGraph: {
    title: "Aromal – Organic Yogurt & Bowls",
    description: "Porosi online yogurt bowls, smoothies, dhe toaste organike. Përjeto freskinë natyrore në Tiranë.",
    siteName: "Aromal",
    locale: "sq_AL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aromal – Organic Yogurt & Bowls",
    description: "Yogurt bowls, smoothies dhe toaste organike — bërë me dashuri në Tiranë.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body
        className={`${outfit.variable} ${cormorant.variable} ${caveat.variable} antialiased`}
      >
        <ClientProviders>
          <IntroScreen>
            {children}
          </IntroScreen>
        </ClientProviders>
      </body>
    </html>
  );
}
