import { ethers } from "ethers";
export const categorySelectorItems = [
  "all",
  "furniture",
  "pottery",
  "glassware",
  "collectibles",
];

export const circaSelectorItems = [
  "all",
  "Pre1700s",
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
export const CERTIFICATION_CONTRACT_ADDRESS =
  "0xeBbFdFF91F6B4aB8b5F7329F55Db43b59E56d536";
export const CERTIFICATION_CONTRACT_PROD =
  "0x04282Ed92E556bdAecf48a3c8F39cfD38A017713";
export const CERTIFICATION_CONTRACT_DEV =
  "0xee69B8Cc85c247Ea2080796086Fc013983f7A93D";

export interface SelectorsState {
  selectedCategory: string;
  selectedCirca: string;
  selectedAvailability: string;
}

export type OnSelectorsChange = (state: SelectorsState) => void;
