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
import { Antique } from "@/types/types";

interface SearchProps {
  initialResults: Antique[];
}

export const Search: React.FC<SearchProps> = ({ initialResults }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCirca, setSelectedCirca] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");
  const [endOfResults, setEndOfResults] = useState(false);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<Antique[]>(initialResults);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setPage(1); // Reset page number to 1
    fetchData();
  };

  const handleCircaChange = (value: string) => {
    setSelectedCirca(value);
    setPage(1); // Reset page number to 1
  };

  const handleAvailabilityChange = (value: string) => {
    setSelectedAvailability(value);
    setPage(1); // Reset page number to 1
  };

  const fetchData = () => {
    setLoading(true);
    fetch(
      `/api/antiques?pageNumber=${page}&category=${selectedCategory}&period=${selectedCirca}&available=${selectedAvailability}`,
    )
      .then((res) => res.json())
      .then((json) => {
        // @ts-ignore
        if (json.status === 205) {
          setEndOfResults(true);
        }
        if (endOfResults) {
          setEndOfResults(false);
        }
        setResults(json);
        setLoading(false);
      });
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page > 1 ? page - 1 : 1);
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
          onClick={fetchData}
        >
          <UpdateIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="my-8 w-full border-b-2 border-slate-200"></div>
      <div className="no-scrollbar grid w-full grid-cols-[repeat(auto-fit,_minmax(400,_1fr))] gap-2 overflow-scroll rounded-2xl">
        {endOfResults ? (
          <>End of results</>
        ) : loading ? (
          <LoadingResults number={15} />
        ) : (
          results.map((result) => (
            <AntiqueResult antique={result} key={result.id} />
          ))
        )}
      </div>
      <div className="mt-4 flex w-3/4 justify-between p-2">
        <button
          className={`${page === 1 ? "bg-slate-200" : "bg-blue-500"} rounded-md px-4 py-2 text-white`}
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className={`${endOfResults ? "bg-slate-200" : "bg-blue-500"} rounded-md bg-blue-500 px-4 py-2 text-white`}
          disabled={endOfResults}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};
