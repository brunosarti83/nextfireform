import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// importing fonts in Next
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Fire-Form",
  description: "Example of a small Next.js app that maps a json into a form and shows results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
