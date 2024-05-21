"use client";
import { useAccount, useSDK } from "@metamask/sdk-react-ui";
import { ethers } from "ethers";
const CERTIFICATION_WALLET_ADDRESS =
  "0x29f9146174aaed443eec9cc3f43aac190c29f9f4";
export default function Admin() {
  const { address, isConnected } = useAccount();
  const provider = ethers.getDefaultProvider();
  return address === CERTIFICATION_WALLET_ADDRESS && isConnected ? (
    <>Welcome Admin</>
  ) : (
    <>Something went wrong</>
  );
}
