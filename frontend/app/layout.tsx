import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        className={`${interText.className} mx-auto  grid place-items-center bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
