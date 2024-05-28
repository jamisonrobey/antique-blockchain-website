"use client";
import { useState } from "react";
import { useSDK } from "@metamask/sdk-react-ui";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import { CERTIFICATION_CONTRACT_ADDRESS } from "@/types/types";
import { CERTIFICATION_CONTRACT_ABI } from "@/types/ABI";
import { interHeading } from "../fonts/fonts";

interface OwnerSwapProps {
  id: number;
  address: string;
  history: OwnerHistoryEntry[];
}

interface OwnerHistoryEntry {
  antiqueId: number;
  oldOwner: string;
  newOwner: string;
  timestamp: string;
}

export const OwnerSwap: React.FC<OwnerSwapProps> = ({
  id,
  address,
  history,
}) => {
  const { account } = useSDK();
  const [newOwner, setNewOwner] = useState("");
  const changeOwner = async () => {
    if (!ethers.utils.isAddress(newOwner)) {
      toast.error("New owner address is invalid");
      return;
    }
    if (
      typeof window.ethereum === "undefined" ||
      // @ts-ignore
      typeof window.web3 === "undefined"
    ) {
      // Handle provider not available
    }

    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const antiqueCertificationContract = new ethers.Contract(
      CERTIFICATION_CONTRACT_ADDRESS,
      CERTIFICATION_CONTRACT_ABI,
      provider.getSigner(),
    );

    const tx = await antiqueCertificationContract.changeOwner(id, newOwner);
    await tx.wait();
  };

  const handleOwnerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewOwner(e.target.value);
  };

  return (
    <div className="flex w-full flex-col items-center space-y-8 border border-slate-200 p-16 ">
      <ToastContainer position="top-right"></ToastContainer>
      <h2 className="border-b-2 border-slate-200 text-lg">
        <span className={`${interHeading.className}`}>Owned by:</span> {address}
      </h2>
      <div className="space-y-8">
        <h2 className={`${interHeading.className}`}>Owner History</h2>
        {history.length === 0 ? (
          <p>No history available.</p>
        ) : (
          history.map((entry, index) => (
            <div key={index} className="rounded-xl border border-slate-200 p-4">
              <p>
                <strong>Antique ID:</strong> {entry.antiqueId}
              </p>
              <p>
                <strong>Old Owner:</strong> {entry.oldOwner}
              </p>
              <p>
                <strong>New Owner:</strong> {entry.newOwner}
              </p>
              <p>
                <strong>Timestamp:</strong> {entry.timestamp}
              </p>
              <hr />
            </div>
          ))
        )}
        <div
          className={`${
            account === address.toLowerCase() ? "visible" : "hidden"
          } flex flex-col items-center border border-slate-200 p-4`}
        >
          You currently own this item and can change it's owner.
          <input
            placeholder="New owner"
            onChange={handleOwnerChange}
            className="mt-4 w-full border border-slate-200 p-4"
          />
          <button
            onClick={changeOwner}
            className="mt-4 border-2 border-slate-200 p-4 duration-100 hover:border-blue-500 hover:text-blue-500"
          >
            Change Owner
          </button>
        </div>
      </div>
    </div>
  );
};
