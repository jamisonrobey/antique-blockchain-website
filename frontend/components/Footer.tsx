import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export const Footer = () => {
  return (
    <div className="mt-4 flex h-[10vh] w-full items-center justify-center px-2 sm:px-32 md:w-3/4 ">
      <Link href="https://github.com/jamisonrobey/antique-blockchain-website">
        <GitHubLogoIcon className="h-8 w-8 text-slate-800 duration-100 hover:text-blue-500" />
      </Link>
    </div>
  );
};
