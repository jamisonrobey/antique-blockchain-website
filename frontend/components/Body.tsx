import { interHeading } from "@/app/layout";
import { useSDK } from "@metamask/sdk-react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
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
        <div></div>
      ) : (
        <div className="fixed  inset-0 z-10 backdrop-blur-sm ">
          <div className="flex items-center justify-center min-h-screen">
            <div className="flex  flex-col w-1/3 items-center   text-slate-700 shadow-lg  p-4 rounded-3xl">
              <span
                className={`${interHeading.className} w-1/3 flex items-center justify-around text-red-700 bg-red-300 p-4 rounded-3xl `}
              >
                <ExclamationTriangleIcon className="h-8 w-8 " />

                <span className="text-2xl">Alert</span>
              </span>
              <br></br>
              <h1 className="w-full  m-4 text-center text-xl">
                Not connected to MetaMask account
                <br></br>
                <button
                  onClick={connect}
                  className={`${interHeading.className} focus-outline-none m-4  p-2 rounded-2xl hover:text-blue-500 duration-75`}
                >
                  Connect
                </button>
                <br></br>
                Or if you needed you can install the{" "}
                <Link
                  href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                  className={`${interHeading.className} hover:text-blue-500 duration-75`}
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
