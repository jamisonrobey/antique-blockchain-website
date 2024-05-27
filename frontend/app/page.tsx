import { Search } from "@/components/Search";
import { ethers } from "ethers";
import { CERTIFICATION_ABI_DEV } from "@/types/ABI";
import { CERTIFICATION_CONTRACT_DEV } from "@/types/types";
import { convertToKeyValue } from "./api/antiques/route";

const provider = new ethers.providers.JsonRpcProvider({
  fetchOptions: {
    referrer: "http://localhost",
  },
  // @ts-ignore
  url: process.env.NGROK_PROXY,
});

export default async function Page() {
  let antiques;
  try {
    const contract = new ethers.Contract(
      CERTIFICATION_CONTRACT_DEV,
      CERTIFICATION_ABI_DEV,
      provider,
    );

    const antiqueRes = await contract.getAntiques(1, "all", "all", true);
    antiques = convertToKeyValue(antiqueRes);
    console.log(antiques);
  } catch (error) {
    console.error(error);
  }
  return (
    <div className="flex w-full items-center border-x-2 border-slate-200 px-2 sm:w-3/4 sm:px-0">
      {/* @ts-ignore */}
      <Search initialResults={antiques} />
    </div>
  );
}
