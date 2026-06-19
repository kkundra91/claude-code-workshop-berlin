import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { meta } from "../content";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${jost.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
