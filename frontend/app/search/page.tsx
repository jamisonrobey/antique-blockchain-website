import { ethers } from "ethers";
const contractAddress = "0x52306d85E087910d985e9dC79F54003d3af2Fd18";
const ABI = [
  {
    inputs: [],
    name: "testString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default async function Search({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  try {
    const provider = new ethers.providers.JsonRpcProvider({
      fetchOptions: {
        referrer: "https:localhost:3000",
      },
      url: "http://localhost:7545",
    });
    const contract = new ethers.Contract(contractAddress, ABI, provider);
    const result = await contract.testString();
    console.log(result);
  } catch (err) {
    console.warn(err);
  }
}
