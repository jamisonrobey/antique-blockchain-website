import { ethers } from "ethers";
const contractAddress = "0xd4a888483bbd5a3c5cb6a9bd713ef08168b7ec58";
const ABI = [
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_test",
        type: "string[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "test",
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
      url: "https://sepolia.infura.io/v3/e92a7d24a42941179f92d65e108f0def",
    });
    const contract = new ethers.Contract(contractAddress, ABI, provider);
    const result = await contract.test(1);
    console.log(result);
  } catch (err) {
    console.warn(err);
  }
}
