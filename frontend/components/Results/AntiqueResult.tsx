import { Antique } from "@/types/types";
import Link from "next/link";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { interHeading } from "../fonts/fonts";
interface AntiqueResultProps {
  antique: Antique;
}

export const AntiqueResult: React.FC<AntiqueResultProps> = ({ antique }) => {
  return (
    <div className="m-4 flex flex-col items-center rounded-md border border-slate-200 p-3 shadow-sm">
      <img className="h-96 w-96" src={antique.image} alt={antique.name} />
      <div className="my-8 border border-slate-200 p-4">
        <Link
          href={`/antique?antiqueId=${antique.id}`}
          className={`${interHeading.className} my-2 w-full text-left text-slate-800`}
        >
          {antique.name}
        </Link>
        <p className="w-full text-left text-slate-800">{antique.description}</p>
        <p
          className={`${interHeading.className} my-2 flex w-full items-center text-left text-slate-800`}
        >
          Availability:
          {antique.available === true ? (
            <CheckCircledIcon className="mx-2 h-8 w-8 text-green-500" />
          ) : (
            <CrossCircledIcon className="mx-2 h-8 w-8 text-red-500" />
          )}
        </p>
      </div>
    </div>
  );
};
