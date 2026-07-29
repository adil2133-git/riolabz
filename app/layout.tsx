import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/layout/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://riolabz.com"),
  title: {
    default: "Riolabz | Next-Gen Web & Mobile Product Engineering",
    template: "%s | Riolabz",
  },
  description:
    "Architecting the future of enterprise software, high-performing websites, and scalable mobile products for forward-thinking brands globally.",
  keywords: [
    "Software Engineering",
    "Web Development",
    "Mobile Apps",
    "React Native",
    "Next.js",
    "Cloud DevOps",
    "Riolabz",
    "Kochi Infopark",
    "London Tech",
    "Dubai Internet City",
  ],
  authors: [{ name: "Riolabz Tech" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Riolabz | Next-Gen Web & Mobile Product Engineering",
    description:
      "Architecting the future of enterprise software, high-performing websites, and scalable mobile products for forward-thinking brands globally.",
    url: "https://riolabz.com",
    siteName: "Riolabz",
    images: [
      {
        url: "/trust-team.jpg",
        width: 1200,
        height: 630,
        alt: "Riolabz Global Engineering Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${instrumentSans.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
