"use client";
import { useEffect, useState } from "react";
import { MetaMaskButton, useAccount, useSDK } from "@metamask/sdk-react-ui";
import { ExclamationTriangleIcon, CircleIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { interHeading } from "./fonts/fonts";

interface MetaMaskConnectProps {
  children: React.ReactNode;
}

export const MetaMaskConnect: React.FC<MetaMaskConnectProps> = ({
  children,
}) => {
  const { connected, connecting } = useSDK();
  useEffect(() => {
    console.table(connected, connecting);
  }, [connected, connecting]);
  return (
    <>
      {connected ? (
        children
      ) : (
        <div className="fixed inset-0 z-10 backdrop-blur-sm">
          <div className="flex min-h-screen items-center justify-center">
            <div className="flex w-2/3 flex-col items-center rounded-3xl p-4 text-slate-700 shadow-lg xl:w-1/3">
              <span
                className={`${interHeading.className} flex w-1/3 items-center justify-center space-x-4 rounded-3xl bg-red-300 p-4 text-red-700`}
              >
                <ExclamationTriangleIcon className="mb-1 h-4 w-4 md:h-8 md:w-8" />
                <span className="text-base md:text-2xl">Alert</span>
              </span>
              <h1 className="m-4 w-full text-center text-xl">
                Not connected to MetaMask account
                <div className="m-4">
                  <MetaMaskButton></MetaMaskButton>
                </div>
                Or if you need it, you can install the{" "}
                <Link
                  href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                  className={`${interHeading.className} duration-75 hover:text-blue-500`}
                >
                  MetaMask
                </Link>{" "}
                extension
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
