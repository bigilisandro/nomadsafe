import type { Metadata } from "next";
import { Montserrat, Geist_Mono, Black_Ops_One } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const blackOpsOne = Black_Ops_One({
  variable: "--font-black-ops-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NomadSafe - Theft Insurance for Digital Nomads | Protect Your Devices Worldwide",
  description: "Protect your electronic devices from theft and robbery anywhere in the world. Specialized insurance for digital nomads, remote workers, and travelers. Laptop, camera, smartphone coverage.",
  keywords: "digital nomad insurance, device theft insurance, laptop insurance, camera insurance, travel insurance, electronic device protection, nomad insurance, remote worker insurance",
  authors: [{ name: "NomadSafe" }],
  creator: "NomadSafe",
  publisher: "NomadSafe",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nomadsafe.com",
    siteName: "NomadSafe",
    title: "NomadSafe - Theft Insurance for Digital Nomads",
    description: "Protect your electronic devices from theft and robbery anywhere in the world. Specialized insurance for digital nomads and remote workers.",
    images: [
      {
        url: "https://nomadsafe.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NomadSafe - Device Theft Insurance for Digital Nomads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NomadSafe - Theft Insurance for Digital Nomads",
    description: "Protect your electronic devices from theft and robbery anywhere in the world.",
    images: ["https://nomadsafe.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://nomadsafe.com",
  },
  verification: {
    google: "S4Rp9IQzwEC4EtikEdtSV3IZ0ZvLJ_HWOjH6Y75_Mn8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} ${blackOpsOne.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NomadSafe",
              "description": "Theft insurance for digital nomads and remote workers. Protect your electronic devices worldwide.",
              "url": "https://nomadsafe.com",
              "logo": "https://nomadsafe.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "support@nomadsafe.com"
              },
              "sameAs": [
                "https://twitter.com/nomadsafe",
                "https://linkedin.com/company/nomadsafe"
              ],
              "offers": {
                "@type": "Offer",
                "name": "Digital Nomad Device Insurance",
                "description": "Insurance coverage for electronic devices against theft and robbery",
                "category": "Insurance",
                "areaServed": "Worldwide"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
