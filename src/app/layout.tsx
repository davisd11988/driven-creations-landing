import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Driven Creations | Digital Design Agency",
  description:
    "We build brands that fight for attention — and win. Custom web design, branding, and digital marketing from Driven Creations.",
  keywords: [
    "web design",
    "branding",
    "digital marketing",
    "design agency",
    "Driven Creations",
    "Pixels of Power",
  ],
  openGraph: {
    title: "Driven Creations | Every Pixel Has Power",
    description:
      "Custom web design, branding, and digital marketing that makes your competition nervous.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driven Creations | Every Pixel Has Power",
    description:
      "Custom web design, branding, and digital marketing that makes your competition nervous.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
