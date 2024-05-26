"use client";
import { Selector } from "@/components/selector/Selector";
import {
  useAccount,
  useSDK,
  useSignMessage,
  useConnect,
  useContractWrite,
} from "@metamask/sdk-react-ui";
import { SelectorsState } from "@/types/types";
import { UploadIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { ethers } from "ethers";
import { useState } from "react";
import { interHeading } from "@/components/fonts/fonts";
import {
  CERTIFICATION_WALLET,
  CERTIFICATION_CONTRACT,
  CERTIIFCATION_ABI,
} from "@/types/types";
import { ToastContainer, toast } from "react-toastify";
import { categorySelectorItems, circaSelectorItems, availabilitySelectorOptions } from "@/types/types";
export default function Admin() {
  const { connected, account, sdk } = useSDK();
  const { isConnected } = useAccount();

  const {
    data: signData,
    isError: isSignError,
    isLoading: isSignLoading,
    isSuccess: isSignSuccess,
    signMessage,
  } = useSignMessage();
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string | undefined>();
    const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCirca, setSelectedCirca] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");

  const fetchNonce = async () => {
    const response = await fetch("/api/admin/");
    const nonce = await response.json();
    return nonce;
  };

  const handleSignMessage = async () => {
    const nonce = await fetchNonce();
    const messageToSign = `${nonce}Signing as Authentication Body`;
    signMessage({ message: messageToSign });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (name == "") {
      toast.error("Missing antique name");
      return;
    }

    if (!image) {
      toast.error("Missing image");
      return;
    }

    try {
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ signData, image }),
      });

      const data = await response.json();
      console.log(data);

      if (data.status === 400) {
        toast.error("Bad request, debug: missing body");
        return;
      }

      if (data.status === 401 || data.status == 403) {
        toast.error("Nonce error, try refreshing and signing new message");
        return;
      }

      if (data.status === 503) {
        toast.error(
          "Interal server error (You are missing environment variables",
        );
        return;
      }

      if (data.status !== 200) {
        toast.error(
          "Somthing went wrong with image upload, and we couldn't add the antique",
        );

        return;
      }
      toast.success("Successfully uploaded image, adding antique to chain");

      if (
        typeof window.ethereum === "undefined" ||
        // @ts-ignore
        typeof window.web3 === "undefined"
      ) {
        toast.error("Provider error");
      }

      // @ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const antiqueCertificationContract = new ethers.Contract(
        CERTIFICATION_CONTRACT,
        CERTIIFCATION_ABI,
        provider.getSigner(),
      );

      const tx = await antiqueCertificationContract.addAntique(name, selectedCategory, selectedCirca, account, selectedAvailability);
      await tx.wait();
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong (client side)");
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

    const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const handleCircaChange = (value: string) => {
    setSelectedCirca(value);
  };

  const handleAvailabilityChange = (value: string) => {
    setSelectedAvailability(value);
  };

  return account === CERTIFICATION_WALLET && connected ? (
    <>
      <ToastContainer position="top-right" />
      <div className=" my-8 grid h-[60dvh] w-3/4 grid-cols-2 place-items-center justify-center  text-slate-800">
        <h1 className={`${interHeading.className} col-span-2 text-3xl`}>
          Admin page
        </h1>
        <p className={`${isSignSuccess ? "hidden" : "visible"}`}>
          This is the admin page for adding antiques, please sign a message with
          your wallet to proceed.
        </p>
        {isConnected && (
          <div
            className={`${signData ? "hidden" : "visible"} items center flex space-x-8 border-2 border-slate-200 p-4 duration-100 hover:border-blue-500 hover:text-blue-500`}
            onClick={() => handleSignMessage()}
          >
            <button
              disabled={isSignLoading}
              className={`${interHeading.className}`}
            >
              Sign message
            </button>
            <EnvelopeClosedIcon className="h-6 w-6 " />
          </div>
        )}
        <div
          className={`${isSignSuccess ? "visible" : "hidden"} col-span-2 h-full w-3/4 rounded-3xl border border-slate-200`}
        >
          <form
            className="grid grid-cols-2 space-y-4 p-8"
            onSubmit={handleSubmit}
          >
            <h2 className="200 col-span-2 border-b-2 border-slate-200 text-2xl ">
              Antique Submission
            </h2>

            <input
              id="antiqueName"
              onChange={handleNameChange}
              className="text col-span-2 rounded-lg border-2 border-slate-200 p-2 duration-100 hover:border-blue-500 focus:outline-blue-500"
              placeholder="Item name"
              type="text"
            />
                    <Selector
          items={categorySelectorItems}
          type="Category"
          value={selectedCategory}
          onValueChange={handleCategoryChange}
        />
        <Selector
          items={circaSelectorItems}
          type="Circa"
          value={selectedCirca}
          onValueChange={handleCircaChange}
        />
        <Selector
          items={availabilitySelectorOptions}
          type="Availability"
          value={selectedAvailability}
          onValueChange={handleAvailabilityChange}
        />
            <input
              type="file"
              className="col-span-2 rounded-lg border-2 border-slate-200 px-2 py-4"
              onChange={handleImageChange}
            />
            <button className="col-span-2 flex w-full items-center justify-evenly rounded-lg border-2 border-slate-200 p-2 duration-100 hover:border-blue-500 hover:text-blue-500">
              <p>Submit</p>
              <UploadIcon className="h-6 w-6" />
            </button>
          </form>
        </div>
        <div className={`${isSignError ? "visible" : "hidden"}`}>
          Error try refreshing if you are the authentication body
        </div>
      </div>
    </>
  ) : (
    <>This page is for the certification body only</>
  );
}
