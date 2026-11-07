import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://opankcs.com"),
  title: {
    default: "Muhammad Nauval Fadli — Aspiring Data Scientist",
    template: "%s | Muhammad Nauval Fadli",
  },
  description:
    "Informatics student at Universitas Diponegoro ('24) focused on data science. Python, SQL, and honest small projects — built and self-hosted end to end.",
  keywords: [
    "Muhammad Nauval Fadli",
    "data science",
    "portfolio",
    "informatika undip",
    "python",
    "sql",
    "nauval",
  ],
  authors: [{ name: "Muhammad Nauval Fadli" }],
  creator: "Muhammad Nauval Fadli",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Nauval Fadli — Aspiring Data Scientist",
    description:
      "Informatics UNDIP '24. Learning to turn data into clear insights.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Nauval Fadli — Aspiring Data Scientist",
    description:
      "Informatics UNDIP '24. Python, SQL, and honest small projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Nauval Fadli",
  jobTitle: "Aspiring Data Scientist",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Diponegoro",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Semarang",
    addressCountry: "ID",
  },
  url: "https://opankcs.com",
  sameAs: ["https://github.com/NauvalXQF"],
  knowsAbout: ["Data Science", "Python", "SQL", "Informatics"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
