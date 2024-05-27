"use client";
import { UpdateIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { Selector } from "./selector/Selector";
import { AntiqueResult } from "./Results/AntiqueResult";
import { LoadingResults } from "./Results/LoadingResults";
import {
  categorySelectorItems,
  circaSelectorItems,
  availabilitySelectorOptions,
} from "@/types/types";
import { Results } from "@/components/Results/Results";
import { Antique } from "@/types/types";
interface SearchProps {
  initialResults: Antique[];
}
export const Search: React.FC<SearchProps> = ({ initialResults }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCirca, setSelectedCirca] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<Antique[]>(initialResults);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const handleCircaChange = (value: string) => {
    setSelectedCirca(value);
  };

  const handleAvailabilityChange = (value: string) => {
    setSelectedAvailability(value);
  };

  const fetchData = () => {
    fetch(
      `/api/antiques?category${selectedCategory}&period=${selectedCirca}&available=${selectedAvailability}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setResults(json);
        console.log(results);
        setLoading(false);
      });
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
          <UpdateIcon onClick={fetchData} className="h-5 w-5" />
        </button>
      </div>
      <div className="my-8 w-full border-b-2 border-slate-200"></div>
      <div className="no-scrollbar grid w-full grid-cols-[repeat(auto-fit,_minmax(400,_1fr))] gap-2 overflow-scroll rounded-2xl">
        {loading ? (
          <LoadingResults number={15} />
        ) : (
          results.map((result) => (
            <AntiqueResult antique={result} key={result.name} />
          ))
        )}
      </div>
    </div>
  );
};
