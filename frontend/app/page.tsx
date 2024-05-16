"use client";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { Header } from "@/components/header/Header";
import { Body } from "@/components/Body";
export default function Home() {
  return (
    <MetaMaskProvider sdkOptions={{ dappMetadata: {} }}>
      <Header />
      <Body />
    </MetaMaskProvider>
  );
}
