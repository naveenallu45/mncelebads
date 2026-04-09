import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MN Celebrity Ads | Premium Celebrity Promotions",
  description: "Promote your brand with real celebrities. Increase trust and generate leads with high-end celebrity advertising.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="font-sans text-gray-200 bg-[#0B0B0B] min-h-full flex flex-col">{children}</body>
    </html>
  );
}
