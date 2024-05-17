import { Item } from "@/types/types";
import { useEffect, useState } from "react";
import { AntiqueResult } from "./AntiqueResult";
import { LoadingResults } from "./LoadingResults";

interface ResultsProps {}
export const Results: React.FC<ResultsProps> = () => {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/results?page=1")
      .then((res) => res.json())
      .then((json) => {
        setResults(json);
        setLoading(false);
      });
  }, []);
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
