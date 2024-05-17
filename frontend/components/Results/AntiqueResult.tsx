import { Item } from "@/types/types";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { interHeading } from "@/app/layout";
interface AntiqueResultProps {
  item: Item;
}

export const AntiqueResult: React.FC<AntiqueResultProps> = ({ item }) => {
  return (
    <div className="m-4 flex flex-col items-center rounded-md border border-slate-200 p-3 shadow-sm">
      <img className="h-96 w-96" src={item.image} alt={item.name} />
      <h1
        className={`${interHeading.className} my-2 w-full text-left text-slate-800`}
      >
        {item.name}
      </h1>
      <p className="text-slate-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p
        className={`${interHeading.className} my-2 flex w-full items-center text-left text-slate-800`}
      >
        Availability:
        {item.availability === "available" ? (
          <CheckCircledIcon className="mx-2 h-8 w-8 text-green-500" />
        ) : (
          <CrossCircledIcon className="mx-2 h-8 w-8 text-red-500" />
        )}
      </p>
    </div>
  );
};
