"use client";
import {
  MetaMaskButton,
  MetaMaskUIProvider,
  useAccount,
  useSDK,
} from "@metamask/sdk-react-ui";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { interHeading } from "./fonts/fonts";
import { MetaMaskConnect } from "./MetaMaskConnect";

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <MetaMaskUIProvider sdkOptions={{ dappMetadata: {} }}>
      <MetaMaskConnect>{children}</MetaMaskConnect>
    </MetaMaskUIProvider>
  );
};
