import { interHeading } from "@/app/layout";
import { useSDK } from "@metamask/sdk-react";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Tooltip from "@radix-ui/react-tooltip";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
export const Header = () => {
  const { account, sdk } = useSDK();
  const disconnect = async () => {
    if (sdk) {
      sdk.terminate();
    }
  };
  return (
    <div className="flex justify-between w-full my-2 px-32 ">
      <div className="flex items-center flex-grow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 sm:h-16 sm:w-16 text-blue-500"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 15l6 -6" />
          <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
          <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
        </svg>
        <h1 className={`${interHeading.className} text-lg sm:text-4xl`}>
          <Link
            href="/"
            className="hover:text-slate-500 duration-150 text-slate-800"
          >
            AntiqueChain
          </Link>
        </h1>
      </div>
      <nav className="hidden xl:flex flex-grow flex-col xl:flex-row items-center text-slate-800 duration-150 justify-evenly  lg:text-xl xl:text-lg 2xl:text-xl">
        <Link href="" className="hover:text-slate-500 duration-150">
          Antiques
        </Link>
        <Link href="" className="hover:text-slate-500 duration-150">
          Admin
        </Link>

        <Link href="" className=" hover:text-slate-500 duration-150  ">
          Repo
        </Link>
        <span>
          {account ? (
            <div className="flex items-center flex-grow text-center space-x-2">
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <button className=" inline-flex items-center justify-center rounded-full bg-white  outline-none ">
                      <div
                        onClick={disconnect}
                        className="w-4 h-4 hover:bg-red-500 duration-400  bg-green-500 rounded-full mx-4"
                      ></div>
                    </button>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade  select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                      sideOffset={5}
                    >
                      Disconnect
                      <Tooltip.Arrow className="fill-white" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
              {account}
            </div>
          ) : (
            <div className="flex items-center flex-grow  space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full mx-4"></div>
              <>Not connected</>
            </div>
          )}
        </span>
      </nav>
      <div className="xl:hidden flex items-center">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="" aria-label="sidebar">
              <HamburgerMenuIcon className="w-8 h-8" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                <Link href="" className="hover:text-slate-500 duration-150">
                  Antiques
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="" className="hover:text-slate-500 duration-150">
                  Admin
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                <Link href="" className="hover:text-slate-500 duration-150">
                  Repo
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};
