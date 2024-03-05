"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";

interface productsButtonI {
  name: string;
  href: string;
}

const SelectSortProducts = ({
  productsButton,
}: {
  productsButton: productsButtonI[];
}) => {
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(`/products?category=${href}`);
  };

  return (
    <div>
      <Select>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <MenuItem onClick={() => handleClick("")}>All</MenuItem>

          {productsButton.map((item, index) => (
            <MenuItem
              key={index}
              value={item.href}
              onClick={() => handleClick(item.href)}
            >
              <p>{item.name}</p>
            </MenuItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectSortProducts;
