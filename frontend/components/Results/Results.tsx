import { Item } from "@/types/types";
import { useEffect, useState } from "react";
import { AntiqueResult } from "./AntiqueResult";
import { LoadingResults } from "./LoadingResults";
interface ResultsProps {
  initialResults: Item[];
}
export const Results: React.FC<ResultsProps> = ({ initialResults }) => {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<Item[]>(initialResults);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    fetch(`/api/results?page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        setResults(json);
        setLoading(false);
      });
  };

  return (
    <div className=" no-scrollbar grid h-[60vh] w-full grid-cols-3 place-items-center gap-2 overflow-scroll rounded-2xl ">
      {loading ? (
        <LoadingResults number={15} />
      ) : (
        results.map((result) => (
          <AntiqueResult item={result} key={result.name} />
        ))
      )}
    </div>
  );
};
