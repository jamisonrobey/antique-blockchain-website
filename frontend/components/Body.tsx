import { interHeading } from "@/app/layout";
import { useSDK } from "@metamask/sdk-react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Search } from "./Search/Search";
import Link from "next/link";

export const Body = () => {
  const { sdk, connected, connecting, account } = useSDK();
  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };
  return (
    <>
      {account ? (
        <div className="min-h-screen/2 flex h-[80vh] w-full items-center justify-center border-x-2 border-slate-200 px-2 sm:w-3/4 sm:px-32 ">
          <Search />
        </div>
      ) : (
        <div className="fixed  inset-0 z-10 backdrop-blur-sm ">
          <div className="flex min-h-screen items-center justify-center">
            <div className="flex  w-2/3 flex-col items-center rounded-3xl   p-4 text-slate-700  shadow-lg xl:w-1/3">
              <span
                className={`${interHeading.className} flex w-1/3 items-center justify-evenly rounded-3xl bg-red-300 p-4 text-red-700 `}
              >
                <ExclamationTriangleIcon className="h-4 w-4 md:h-8 md:w-8 " />

                <span className="text-base md:text-2xl">Alert</span>
              </span>
              <br></br>
              <h1 className="m-4  w-full text-center text-xl">
                Not connected to MetaMask account
                <br></br>
                <button
                  onClick={connect}
                  className={`${interHeading.className} focus-outline-none m-4  rounded-2xl p-2 duration-75 hover:text-blue-500`}
                >
                  Connect
                </button>
                <br></br>
                Or if you needed you can install the{" "}
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
