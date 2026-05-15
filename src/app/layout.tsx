import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Fashion Template",
  description: "A white-label master fashion website template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
