import { ethers } from "ethers";
import { NextResponse } from "next/server";
import { CERTIFICATION_ABI_DEV, CERTIFICATION_ABI_PROD } from "@/types/ABI";
import { Antique } from "@/types/types";
import {
  CERTIFICATION_CONTRACT_DEV,
  CERTIFICATION_CONTRACT_PROD,
} from "@/types/types";

const provider = new ethers.providers.JsonRpcProvider({
  fetchOptions: {
    referrer: "http://localhost",
  },
  // @ts-ignore
  url: process.env.NGROK_PROXY,
});

export function convertToKeyValue(antiquesArray: any[]): Antique[] {
  let antiques: Antique[] = [];

  antiquesArray.forEach((antique: any) => {
    antiques.push({
      id: antique.id._hex,
      name: antique.name,
      description: antique.description,
      category: antique.category,
      period: antique.period,
      owner: antique.owner,
      available: antique.available,
      image: antique.image,
    });
  });

  return antiques;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageNumber = searchParams.get("pageNumber") || "1";
  const category = searchParams.get("category") || "all";
  const period = searchParams.get("period") || "all";
  const available = searchParams.get("available") === "true";

  try {
    const contract = new ethers.Contract(
      CERTIFICATION_CONTRACT_DEV,
      CERTIFICATION_ABI_DEV,
      provider,
    );

    // Call the getAntiques function from the contract
    const antiques = await contract.getAntiques(
      parseInt(pageNumber, 10),
      category,
      period,
      true,
    );

    const convertedJson = convertToKeyValue(antiques);
    return NextResponse.json(convertedJson);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
