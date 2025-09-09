import type { Metadata } from "next";
import { Montserrat, Geist_Mono, Black_Ops_One } from "next/font/google";
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
  title: "NomadSafe . Theft insurance for digital nomads",
  description: "Protect your electronic devices from theft and robbery anywhere in the world. Insurance specifically for digital nomads.",
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
      </body>
    </html>
  );
}
