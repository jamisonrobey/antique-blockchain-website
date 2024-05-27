import { useEffect, useState } from "react";
import { Antique } from "@/types/types";
import { AntiqueResult } from "./AntiqueResult";
import { LoadingResults } from "./LoadingResults";
interface ResultsProps {
  initialResults: Antique[];
}
export const Results: React.FC<ResultsProps> = ({ initialResults }) => {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<Antique[]>(initialResults);
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
    <div className="no-scrollbar grid w-full grid-cols-[repeat(auto-fit,_minmax(400,_1fr))] gap-2 overflow-scroll rounded-2xl">
      {loading ? (
        <LoadingResults number={15} />
      ) : (
        results.map((result) => (
          <AntiqueResult antique={result} key={result.name} />
        ))
      )}
    </div>
  );
};
