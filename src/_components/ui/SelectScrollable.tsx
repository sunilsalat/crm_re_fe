"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import * as React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";

interface Option {
  value: string;
  label: string;
}

interface SelectScrollableProps {
  options: Option[];
  onValueChange: (val: string) => void;
  placeholder?: string;
}

export const SelectScrollable: React.FC<SelectScrollableProps> = ({ options, onValueChange, placeholder }) => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);

  const handleOnChange = (val: string) => {
    setSelectedValue(val);
    onValueChange(val);
  };

  return (
    <Select onValueChange={handleOnChange} value={selectedValue}>
      <SelectTrigger className="w-[180px] border-gray-300 border-2 flex justify-between px-3 items-center rounded-sm text-start py-1 text-gray-800">
        <SelectValue className="text-gray-600 " placeholder={placeholder}>
          {selectedValue ? options.find(option => option.value === selectedValue)?.label : placeholder}
        </SelectValue>
        <span><IoChevronDownOutline className="text-xl"/></span>
      </SelectTrigger>
      <SelectContent className="bg-white border border-gray-300 w-[180px] p-2 rounded-sm">
        {options.map((type) => (
          <SelectItem className="hover:bg-gray-200 rounded-sm cursor-pointer py-1 px-3" key={type.value} value={type.value}>
            {type.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
