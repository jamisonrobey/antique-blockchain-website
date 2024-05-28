import { ethers } from "ethers";
import { NextResponse } from "next/server";
import {
  CERTIFICATION_ABI_DEV,
  CERTIFICATION_ABI_PROD,
  CERTIFICATION_CONTRACT_ABI,
} from "@/types/ABI";
import { Antique } from "@/types/types";
import {
  CERTIFICATION_CONTRACT_DEV,
  CERTIFICATION_CONTRACT_PROD,
  CERTIFICATION_CONTRACT_ADDRESS,
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
  const offset = (parseInt(pageNumber) - 1) * 5; // 5 is items per page
  try {
    const contract = new ethers.Contract(
      CERTIFICATION_CONTRACT_ADDRESS,
      CERTIFICATION_CONTRACT_ABI,
      provider,
    );

    const antiques = await contract.getAntiques(
      pageNumber,
      category,
      period,
      true,
    );

    const convertedJson = convertToKeyValue(antiques);
    return NextResponse.json(convertedJson);
  } catch (error) {
    // @ts-ignore
    if (error.reason === "end") {
      return NextResponse.json({ status: 205 });
    }
    return NextResponse.json({ status: 500 });
  }
}
