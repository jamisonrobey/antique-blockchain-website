import { CERTIFICATION_CONTRACT_DEV } from "@/types/types";
import { interHeading } from "@/components/fonts/fonts";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { CERTIFICATION_ABI_DEV } from "@/types/ABI";
import { ethers } from "ethers";
import { convertToKeyValue } from "../api/antiques/route";

const provider = new ethers.providers.JsonRpcProvider({
  fetchOptions: {
    referrer: "http://localhost",
  },
  // @ts-ignore
  url: process.env.NGROK_PROXY,
});

export default async function Antique({
  searchParams,
}: {
  searchParams?: { antiqueId: number };
}) {
  const antiqueId = searchParams?.antiqueId;
  console.log(antiqueId);
  const contract = new ethers.Contract(
    CERTIFICATION_CONTRACT_DEV,
    CERTIFICATION_ABI_DEV,
    provider,
  );
  const antique = await contract.getAntiqueById(antiqueId);
  return (
    <div className="m-4 flex w-3/4 flex-col items-center rounded-md border border-slate-200 p-3 shadow-sm">
      <img className="w-1/2" src={antique.image} alt={antique.name} />
      <h1
        className={`${interHeading.className} my-2 w-full text-left text-slate-800`}
      >
        {antique.name}
      </h1>
      <p className="text-slate-800">{antique.description}</p>
      <p
        className={`${interHeading.className} my-2 flex w-full items-center text-left text-slate-800`}
      >
        Availability:
        {antique.available === true ? (
          <CheckCircledIcon className="mx-2 h-8 w-8 text-green-500" />
        ) : (
          <CrossCircledIcon className="mx-2 h-8 w-8 text-red-500" />
        )}
      </p>
      <p className="w-full text-left">
        <span className={`${interHeading.className}`}>Owner:</span>{" "}
        {antique.owner}
      </p>
    </div>
  );
}
