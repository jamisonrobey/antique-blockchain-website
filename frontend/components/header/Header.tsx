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
    <div className="mt-4 flex w-full justify-evenly px-2 sm:px-32 md:w-3/4 ">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-blue-500 sm:h-10 sm:w-10"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 15l6 -6" />
          <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
          <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
        </svg>
        <h1 className={`${interHeading.className}`}>
          <Link
            href="/"
            className="text-slate-800 duration-150 hover:text-slate-500 sm:text-xl"
          >
            AntiqueChain
          </Link>
        </h1>
      </div>
      <div className="flex w-full justify-end space-x-8">
        <span className="flex select-none items-center space-x-4 ">
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={disconnect}
                  className="h-4 w-4 rounded-full bg-green-500 duration-100 hover:bg-red-500"
                ></button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="select-none rounded-[4px] bg-slate-800/80 px-[15px] py-[10px] text-[15px] leading-none  text-white will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade  data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
                  sideOffset={5}
                >
                  Disconnect
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div className="rounded-full">
                  {"0x...." +
                    account
                      ?.slice(account.length - 5, account.length)
                      .toString()}
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="select-none rounded-[4px] bg-slate-800/80 px-[15px] py-[10px] text-[15px]  leading-none text-white will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade  data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
                  sideOffset={5}
                >
                  <div>{account}</div>
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </span>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="" asChild>
            <button
              className="inline-flex items-center justify-center rounded-full bg-white outline-none focus:outline-none"
              aria-label="Sidebar"
            >
              <HamburgerMenuIcon className="h-6 w-6 duration-100 hover:text-blue-500 focus:outline-none" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="flex flex-col  items-start bg-white p-4  will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
              sideOffset={5}
            >
              <DropdownMenu.Item className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none">
                <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto group-data-[highlighted]:text-blue-500">
                  <Link
                    href=""
                    className="text-lg duration-150 hover:text-blue-500"
                  >
                    Antiques
                  </Link>
                </div>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none">
                <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto group-data-[highlighted]:text-blue-500">
                  <Link
                    href=""
                    className="text-lg duration-150 hover:text-blue-500"
                  >
                    Admin
                  </Link>
                </div>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none">
                <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto group-data-[highlighted]:text-blue-500">
                  <Link
                    href=""
                    className="text-lg duration-150 hover:text-blue-500"
                  >
                    Repo
                  </Link>
                </div>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};
