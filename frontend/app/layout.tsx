import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Provider } from "@/components/Provider";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
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
        <Provider>
          <Header />
          <div className="w-full border-b-2 border-slate-200"></div>
          {children}
          <div className="w-full border-t-2 border-slate-200"></div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
