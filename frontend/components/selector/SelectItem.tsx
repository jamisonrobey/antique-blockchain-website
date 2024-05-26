import React, { forwardRef } from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import { CheckIcon } from "@radix-ui/react-icons";

type SelectItemProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value, children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "relative  flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-slate-800 hover:bg-blue-500 hover:text-white data-[highlighted]:bg-blue-500 data-[highlighted]:text-white data-[highlighted]:outline-none",
          className,
        )}
        value={value}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);
