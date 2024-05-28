import { Antique } from "@/types/types";

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
