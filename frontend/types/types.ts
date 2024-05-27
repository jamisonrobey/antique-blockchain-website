import { ethers } from "ethers";
export const categorySelectorItems = [
  "all",
  "furniture",
  "pottery",
  "glassware",
  "collectables",
];

export const circaSelectorItems = [
  "all",
  "Pre-1700s",
  "1700s",
  "1800s",
  "1900s",
  "2000s",
];

export const availabilitySelectorOptions = ["all", "available", "unavailable"];

export interface Antique {
  id: number;
  name: string;
  description: string;
  category: string;
  period: string;
  owner: string;
  available: boolean;
  image: string;
}
export const CERTIFICATION_WALLET =
  "0x29F9146174aAEd443eEc9cC3F43aAc190C29f9F4".toLowerCase();
export const CERTIFICATION_CONTRACT_PROD =
  "0x6dFfE55E7da9033400bF28e24fBAB0da37ce55bc";
export const CERTIFICATION_CONTRACT_DEV =
  "0x60cF1eAEfc116Bd949b1142355833564655BDA1D";

export interface SelectorsState {
  selectedCategory: string;
  selectedCirca: string;
  selectedAvailability: string;
}

export type OnSelectorsChange = (state: SelectorsState) => void;

export const items = [
  {
    name: "Antique Wooden Chair",
    category: "furniture",
    circa: "pre-1700s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Vintage Glass Vase",
    category: "glassware",
    circa: "1800s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Victorian Sofa",
    category: "furniture",
    circa: "1800s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Classic China Set",
    category: "glassware",
    circa: "1900s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Edwardian Armchair",
    category: "furniture",
    circa: "1900s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Modern Glass Table",
    category: "glassware",
    circa: "2000s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Baroque Cabinet",
    category: "furniture",
    circa: "1700s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Crystal Chandelier",
    category: "glassware",
    circa: "pre-1700s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Rustic Dining Table",
    category: "furniture",
    circa: "1800s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Art Deco Mirror",
    category: "glassware",
    circa: "1900s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Minimalist Sofa",
    category: "furniture",
    circa: "2000s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Gothic Candle Holder",
    category: "glassware",
    circa: "1700s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Renaissance Dresser",
    category: "furniture",
    circa: "pre-1700s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Antique Crystal Bowl",
    category: "glassware",
    circa: "1800s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Georgian Sideboard",
    category: "furniture",
    circa: "1700s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Vintage Wine Glass",
    category: "glassware",
    circa: "1900s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Contemporary Bed",
    category: "furniture",
    circa: "2000s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Medieval Goblet",
    category: "glassware",
    circa: "pre-1700s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "French Provincial Wardrobe",
    category: "furniture",
    circa: "1700s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Art Nouveau Lamp",
    category: "glassware",
    circa: "1800s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Modern Bookshelf",
    category: "furniture",
    circa: "2000s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Colonial Desk",
    category: "furniture",
    circa: "1800s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Rococo Mirror",
    category: "glassware",
    circa: "1700s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Regency Dining Set",
    category: "furniture",
    circa: "1800s",
    availability: "available",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
  {
    name: "Classic Tea Set",
    category: "glassware",
    circa: "1900s",
    availability: "unavailable",
    image:
      "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg",
  },
];
