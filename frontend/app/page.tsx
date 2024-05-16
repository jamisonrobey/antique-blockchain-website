"use client";
import { useEffect, useState } from "react";
import { MetaMaskProvider, useSDK } from "@metamask/sdk-react";
import { Header } from "@/components/header/Header";
import { Body } from "@/components/Body";
import { Suspense } from "react";
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
      <Body />
    </MetaMaskProvider>
  );
}
