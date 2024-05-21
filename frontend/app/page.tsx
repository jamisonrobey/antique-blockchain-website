import { Search } from "@/components/Search/Search";
import { items } from "./api/results/route";
export default function Page() {
  return (
    <div className="flex w-full items-center border-x-2 border-slate-200 px-2 sm:w-3/4 sm:px-0">
      <Search initialResults={items.slice(0, 14)} />
    </div>
  );
}
