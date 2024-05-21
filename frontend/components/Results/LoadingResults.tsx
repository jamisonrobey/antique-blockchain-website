import { CircleIcon, ImageIcon } from "@radix-ui/react-icons";
import { interHeading } from "../fonts/fonts";
import React from "react";

interface LoadingResultsProps {
  number: number;
}
export const LoadingResults: React.FC<LoadingResultsProps> = ({ number }) => {
  const renderLoadingContent = () => {
    const loadingContent = [];
    for (let i = 0; i < number; i++) {
      loadingContent.push(
        <div
          key={i}
          className="m-4 flex flex-col items-center rounded-md border border-slate-200 p-3 shadow-sm"
        >
          <ImageIcon className="h-96 w-96 animate-pulse text-slate-200" />
          <div
            className={`${interHeading.className} my-2 flex w-full animate-pulse items-start`}
          >
            <span className="h-2 w-1/2 animate-pulse rounded-lg bg-slate-400"></span>
          </div>
          <div
            className={`${interHeading.className} my-2 flex w-full animate-pulse flex-col items-start space-y-2`}
          >
            <span className="h-2 w-full animate-pulse rounded-lg  bg-slate-200"></span>
            <span className="h-2 w-full animate-pulse rounded-lg  bg-slate-200"></span>
            <span className="h-2 w-full animate-pulse rounded-lg  bg-slate-200"></span>
            <span className="h-2 w-full animate-pulse rounded-lg  bg-slate-200"></span>
            <span className="h-2 w-full animate-pulse rounded-lg  bg-slate-200"></span>
            <span className="h-2 w-full animate-pulse rounded-lg  bg-slate-200"></span>
            <span className="h-2 w-full animate-pulse rounded-lg  bg-slate-200"></span>
            <span className="h-2 w-1/2 animate-pulse rounded-lg bg-slate-200"></span>
          </div>
          <div
            className={`${interHeading.className} my-2 flex w-full animate-pulse items-center justify-start space-x-2`}
          >
            <span className="h-2 w-1/4 animate-pulse rounded-lg bg-slate-400"></span>
            <CircleIcon className="h-8 w-8 animate-pulse text-slate-200" />
          </div>
        </div>,
      );
    }
    return loadingContent;
  };

  return <>{renderLoadingContent()}</>;
};
