"use client";
import { MetaMaskProvider } from "@metamask/sdk-react";
interface ProviderProps {
  children: React.ReactNode;
}
export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <MetaMaskProvider sdkOptions={{ dappMetadata: {} }}>
      {children}
    </MetaMaskProvider>
  );
};
