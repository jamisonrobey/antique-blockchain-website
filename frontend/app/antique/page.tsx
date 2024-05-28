import {
  CERTIFICATION_CONTRACT_ADDRESS,
  CERTIFICATION_CONTRACT_DEV,
} from "@/types/types";
import { interHeading } from "@/components/fonts/fonts";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { CERTIFICATION_ABI_DEV, CERTIFICATION_CONTRACT_ABI } from "@/types/ABI";
import { ethers } from "ethers";
import { OwnerSwap } from "@/components/Results/OwnerSwap";
const provider = new ethers.providers.JsonRpcProvider({
  fetchOptions: {
    referrer: "http://localhost",
  },
  // @ts-ignore
  url: process.env.INFURA_KEY,
});

export default async function Antique({
  searchParams,
}: {
  searchParams?: { antiqueId: number };
}) {
  const antiqueId = searchParams?.antiqueId;
  const contract = new ethers.Contract(
    CERTIFICATION_CONTRACT_ADDRESS,
    CERTIFICATION_CONTRACT_ABI,
    provider,
  );
  const antique = await contract.getAntiqueById(antiqueId);

  const eventAbi = [
    "event OwnerChanged(uint256 indexed antiqueId, address indexed oldOwner, address indexed newOwner, uint256 timestamp)",
  ];
  async function fetchOwnerHistory(antiqueId: number) {
    const filter = contract.filters.OwnerChanged(antiqueId);
    const events = await contract.queryFilter(filter);

    return events.map((event: any) => ({
      antiqueId: event.args.antiqueId._hex,
      oldOwner: event.args.oldOwner,
      newOwner: event.args.newOwner,
      timestamp: new Date(event.args.timestamp * 1000).toLocaleString(),
    }));
  }

  // @ts-ignore
  const ownerHistory = await fetchOwnerHistory(antiqueId);

  return (
    <div className="justify-content-center m-4 grid w-3/4 grid-cols-2 place-items-center space-y-8 rounded-md border border-slate-200 p-3 shadow-sm">
      <div className="w-3/4 space-y-8">
        <h1
          className={`${interHeading.className} my-2 w-full text-left text-3xl text-slate-800`}
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
      </div>
      <img
        className="w-full rounded-lg border border-slate-200"
        src={antique.image}
        alt={antique.name}
      />
      <div className="col-span-2 w-3/4">
        <OwnerSwap
          history={ownerHistory}
          id={antique.id._hex}
          address={antique.owner}
        />
      </div>
    </div>
  );
}
