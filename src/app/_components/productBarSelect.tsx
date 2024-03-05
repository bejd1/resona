import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownRight } from "react-icons/go";

interface SortOrderI {
  sortOrder: "asc" | "desc";
  setSortOrder: (value: "asc" | "desc") => void;
}

const ProductBarSelect = ({ sortOrder, setSortOrder }: SortOrderI) => {
  const handleChange = (value: "asc" | "desc") => {
    setSortOrder(value);
  };

  const sortBy = [
    { value: "asc", icon: <MdArrowOutward /> },
    { value: "desc", icon: <GoArrowDownRight /> },
  ];

  return (
    <div>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          {sortBy.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              <div className="flex items-center gap-1">
                Price <p className="text-lg">{item.icon}</p>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductBarSelect;
