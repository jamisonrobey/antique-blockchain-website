import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { Body } from "./Body";
import { Header } from "./Header";

export const App = async () => {
  const { sdk, connected, connecting, account } = useSDK();
  try {
    await sdk?.connect();
  } catch (err) {
    console.warn(`No accounts found`, err);
  }

  return (
    <MetaMaskProvider sdkOptions={{ dappMetadata: {} }}>
      <Header />
      <div className="w-full border-b-2 border-slate-200"></div>
      <Body />
    </MetaMaskProvider>
  );
};
