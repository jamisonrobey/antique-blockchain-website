import type { Metadata } from "next";
import "./globals.css";
import { interText } from "@/components/fonts/fonts";
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
