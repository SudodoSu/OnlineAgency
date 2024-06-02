import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Nav/Nav";
// import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Villa Panorama",
  description:
    "Welcome to Villa Panorama, your luxurious accommodation in Istria. Experience breathtaking views, modern amenities, and personalized service. ⭐⭐⭐⭐⭐",
  icons: {
    icon: "/assets/images/logo.png",
  },
  generator: "Next.js",
  applicationName: "Accommodation Villa Panorama",
  referrer: "origin-when-cross-origin",
  keywords: ["Accommodation", "Villa Panorama", "Istria", "Croatia"],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    title: "Accommodation Villa Panorama - Istria",
    description:
      "Welcome to Villa Panorama, your luxurious accommodation in Istria. Experience breathtaking views, modern amenities, and personalized service. ⭐⭐⭐⭐⭐",
    url: "https://villapanoramaistria.com",
  },
  twitter: {
    card: "summary_large_image",
    // site: "@YourTwitterHandle",
    title: "Accommodation Villa Panorama - Istria",
    description:
      "Welcome to Villa Panorama, your luxurious accommodation in Istria. Experience breathtaking views, modern amenities, and personalized service. ⭐⭐⭐⭐⭐",
    images: [
      {
        url: "https://www.villapanoramaistria.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F27.92c57344.jpg&w=3840&q=75",
        alt: "Villa Panorama",
      },
    ],
  },
  authors: [
    { name: "Boost Web" },
    { name: "Boost Web", url: "https://boostweb.io" },
  ],
  creator: "Boost Web",
  publisher: "Boost Web",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <html lang={locale}>
        <body className={`${poppins.variable} font-poppins`}>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </>
  );
}
