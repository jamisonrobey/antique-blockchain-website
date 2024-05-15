import { interHeading } from "@/app/layout";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex justify-between w-full my-2 px-32">
      <div className="flex items-center flex-grow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-16 h-16 text-blue-500"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 15l6 -6" />
          <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
          <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
        </svg>
        <h1 className={`${interHeading.className} text-4xl`}>
          <Link
            href="/"
            className="hover:text-slate-500 duration-150 text-slate-800"
          >
            AntiqueChain
          </Link>
        </h1>
      </div>
      <nav className="flex flex-grow items-center text-slate-800 duration-150 justify-evenly text-xl">
        <Link href="" className="hover:text-slate-500 duration-150">
          Antiques
        </Link>
        <Link href="" className="hover:text-slate-500 duration-150">
          Admin
        </Link>
        <Link href="" className=" hover:text-slate-500 duration-150  ">
          Repo
        </Link>
      </nav>
    </div>
  );
};
