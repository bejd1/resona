"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button, MenuItem } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

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
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const handleClick = (href: string, name: string) => {
    setIsOpen(false);
    router.push(`/products?category=${href}`);
  };

  const handleSelectTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  function setSelectValue(category: string | null) {
    if (!category || category === "") {
      return "All";
    } else if (category === "wireless-earbuds") {
      return "Wireless Earbuds";
    } else {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
  }

  return (
    <div>
      <Select>
        <SelectTrigger
          className="w-full sm:w-[180px]"
          onClick={handleSelectTriggerClick}
        >
          <SelectValue placeholder={setSelectValue(category)} />
        </SelectTrigger>
        {isOpen && (
          <SelectContent>
            <MenuItem onClick={() => handleClick("", "All")}>All</MenuItem>

            {productsButton.map((item, index) => (
              <MenuItem
                key={index}
                value={item.href}
                onClick={() => handleClick(item.href, item.name)}
              >
                <p>{item.name}</p>
              </MenuItem>
            ))}
          </SelectContent>
        )}
      </Select>
    </div>
  );
};

export default SelectSortProducts;
