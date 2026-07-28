import type { Metadata } from "next";
import { Inter, Instrument_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Riolabz | Next-Gen Web & Mobile Product Engineering",
  description:
    "Architecting the future of enterprise software, high-performing websites, and scalable mobile products for forward-thinking brands globally.",
  icons: {
    icon: "/favicon.png",
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
      className={`${inter.variable} ${instrumentSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}

