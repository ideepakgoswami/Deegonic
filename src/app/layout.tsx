import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Deegonic – Premium Web Studio for Local Businesses & Clients Worldwide",
  description:
    "Deegonic builds fast, modern websites for local businesses in Delhi NCR and international brands. Next.js, TypeScript, and clean premium design.",
  openGraph: {
    title: "Deegonic | Custom Websites for Local Brands",
    description:
      "Premium web design and development for salons, clinics, restaurants, and small businesses in Delhi.",
    type: "website",
    locale: "en_IN",
    url: "https://deegonic.com",
    siteName: "Deegonic",
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
        className={`${plusJakartaSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
