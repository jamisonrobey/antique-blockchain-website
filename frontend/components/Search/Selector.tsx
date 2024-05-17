import React from "react";
import * as Select from "@radix-ui/react-select";
import { SelectItem } from "./SelectItem";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

type SelectorProps = {
  type: string;
  items: string[];
  value: string;
  onValueChange: (value: string) => void;
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const Selector: React.FC<SelectorProps> = ({
  type,
  items,
  value,
  onValueChange,
}) => {
  const handleValueChange = (value: string) => {
    onValueChange(value);
  };
  return (
    <div className="flex flex-col items-center ">
      <p className="w-full p-1 text-left text-xs text-slate-400">{type}</p>
      <Select.Root onValueChange={handleValueChange}>
        <Select.Trigger
          className="inline-flex h-[35px] items-center justify-between gap-[5px] rounded border border-slate-200 bg-white px-[15px] text-[13px] leading-none text-slate-800 shadow-sm outline-none hover:bg-blue-500 hover:text-white focus:shadow-[0_0_0_2px] focus:shadow-blue-500 sm:w-[120px]"
          aria-label={type}
        >
          <Select.Value placeholder={capitalizeFirstLetter(value)} />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <Select.ScrollUpButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-[5px]">
              <Select.Group>
                <Select.Label className="px-[25px] text-xs leading-[25px] text-slate-800">
                  Categories
                </Select.Label>
                <Select.SelectSeparator className="mb-2 h-[1px] bg-slate-200" />
                {items.map((item) => (
                  <SelectItem key={item} value={item}>
                    {capitalizeFirstLetter(item)}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-slate-800">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
