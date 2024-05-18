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

export interface Item {
  name: string;
  category: string;
  circa: string;
  availability: string;
  image: string;
}

export interface PaginatedItemsResponse {
  status: number;
  items: Item[];
}
