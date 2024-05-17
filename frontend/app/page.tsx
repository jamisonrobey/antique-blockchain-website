"use client";
import { useEffect, useState } from "react";
import { MetaMaskProvider, useSDK } from "@metamask/sdk-react";
import { Header } from "@/components/Header";
import { Body } from "@/components/Body";
import { Footer } from "@/components/Footer";
export default function Home() {
  const { sdk, connected } = useSDK();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sdk) {
      setLoading(false);
    }
  }, [sdk]);

  return (
    <MetaMaskProvider sdkOptions={{ dappMetadata: {} }}>
      <Header />
      <div className="w-full border-b-2 border-slate-200"></div>
      <Body />
      <div className="w-full border-t-2 border-slate-200"></div>
      <Footer />
    </MetaMaskProvider>
  );
}
