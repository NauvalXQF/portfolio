import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/context/AppProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Nauval Fadli — Aspiring Data Scientist",
    template: "%s | Muhammad Nauval Fadli",
  },
  description:
    "Informatics student at Universitas Diponegoro ('24) focused on data science. Python, SQL, and honest small projects.",
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
  openGraph: {
    title: "Muhammad Nauval Fadli — Aspiring Data Scientist",
    description:
      "Informatics UNDIP '24. Learning to turn data into clear insights.",
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('portfolio-theme');
    var theme = saved === 'light' || saved === 'dark' ? saved : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

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
  url: "https://github.com/NauvalXQF",
  sameAs: ["https://github.com/NauvalXQF"],
  knowsAbout: ["Data Science", "Python", "SQL", "Informatics"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
