import { Search } from "./Search/Search";
import { Item } from "@/types/types";

interface BodyProps {
  initialResults: Item[];
}

export const Body: React.FC<BodyProps> = async ({ initialResults }) => {
  return (
    <div className="flex w-full items-center border-x-2 border-slate-200 px-2 sm:w-3/4 sm:px-0">
      <Search initialResults={initialResults} />
    </div>
  );
};
