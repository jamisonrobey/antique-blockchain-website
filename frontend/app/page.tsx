import { items } from "@/types/types";
import { Search } from "@/components/Search";
export default async function Page() {
  return (
    <div className="flex w-full items-center border-x-2 border-slate-200 px-2 sm:w-3/4 sm:px-0">
      <Search initialResults={items.slice(0, 14)} />
    </div>
  );
}
