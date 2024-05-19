import { Footer } from "@/components/Footer";
import { items } from "./api/results/route";
import { Provider } from "@/components/Provider";
import { Header } from "@/components/Header";
import { Body } from "@/components/Body";
export default async function Home() {
  const initialResults = items.slice(0, 14);
  return (
    <>
      <Provider>
        <Header />
        <div className="w-full border-b-2 border-slate-200"></div>
        <Body initialResults={initialResults} />
      </Provider>
      <div className="w-full border-t-2 border-slate-200"></div>
      <Footer />
    </>
  );
}
