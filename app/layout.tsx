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
  title: "Muhammad Nauval Fadli | Portfolio",
  description:
    "Data Scientist Enthusiast & CS Student at Universitas Diponegoro. Showcasing projects in data, computer graphics, and software development.",
  keywords: ["portfolio", "data science", "informatika", "undip", "nauval"],
  authors: [{ name: "Muhammad Nauval Fadli" }],
  openGraph: {
    title: "Muhammad Nauval Fadli | Portfolio",
    description: "Data Scientist Enthusiast - UNDIP'24",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080b14] text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
