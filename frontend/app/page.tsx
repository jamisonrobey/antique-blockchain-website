import { items } from "./api/results/route";
import { Body } from "@/components/Body";
export default async function Home() {
  const initialResults = items.slice(0, 14);
  return <Body initialResults={initialResults} />;
}
