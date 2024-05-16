import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";

export const interText = Inter({ weight: "400", subsets: ["latin"] });
export const interHeading = Inter({ weight: "700", subsets: ["latin"] });
const metadata: Metadata = {
  title: "AntiqueChain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interText.className} bg-white grid place-items-center`}
      >
        {children}
      </body>
    </html>
  );
}
