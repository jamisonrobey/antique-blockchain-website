"use client";
import { UpdateIcon } from "@radix-ui/react-icons";
import { Selector } from "../selector/Selector";
import { useState, useEffect } from "react";
import {
  categorySelectorItems,
  circaSelectorItems,
  availabilitySelectorOptions,
} from "@/types/types";
import { Results } from "../Results/Results";
import { Item } from "@/types/types";
interface SearchProps {
  initialResults: Item[];
}
export const Search: React.FC<SearchProps> = ({ initialResults }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCirca, setSelectedCirca] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const handleCircaChange = (value: string) => {
    setSelectedCirca(value);
  };

  const handleAvailabilityChange = (value: string) => {
    setSelectedAvailability(value);
  };

  return (
    <div className="flex flex-grow flex-col items-center">
      <div className="flex w-full items-center justify-evenly p-2 sm:w-3/4 ">
        <Selector
          items={categorySelectorItems}
          type="Category"
          value={selectedCategory}
          onValueChange={handleCategoryChange}
        />
        <Selector
          items={circaSelectorItems}
          type="Circa"
          value={selectedCirca}
          onValueChange={handleCircaChange}
        />
        <Selector
          items={availabilitySelectorOptions}
          type="Availability"
          value={selectedAvailability}
          onValueChange={handleAvailabilityChange}
        />
        <button
          className={`mt-5 rounded-md border border-slate-200 p-2 text-7xl text-slate-800 shadow-sm duration-100 hover:bg-blue-500 hover:text-white`}
        >
          <UpdateIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="my-8 w-full border-b-2 border-slate-200"></div>
      <Results initialResults={initialResults} />
    </div>
  );
};
