import React from "react";
import * as Select from "@radix-ui/react-select";
import { SelectItem } from "./SelectItem";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

type SelectorProps = {
  items: { value: string; label: string }[];
};

export const Selector: React.FC<SelectorProps> = ({ items }) => {
  return (
    <Select.Root>
      <Select.Trigger
        className="inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none text-slate-800 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-blue-500 hover:text-white focus:shadow-[0_0_0_2px] focus:shadow-blue-500"
        aria-label="category"
      >
        <Select.Value placeholder="Category" />
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
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
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
  );
};
