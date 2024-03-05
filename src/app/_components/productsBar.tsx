"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import ProductBarSelect from "./productBarSelect";
import SelectSortProducts from "@/components/selectSortProducts";

interface SortOrderI {
  sortOrder: "asc" | "desc";
  setSortOrder: (value: "asc" | "desc") => void;
}

interface productsButtonI {
  name: string;
  href: string;
}

const ProductsBar = ({ sortOrder, setSortOrder }: SortOrderI) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const productsButton: productsButtonI[] = [
    {
      name: "Speakers",
      href: "speakers",
    },
    {
      name: "Turntables",
      href: "turntables",
    },
    {
      name: "Soundbars",
      href: "soundbars",
    },
    {
      name: "Mixers",
      href: "mixers",
    },
    {
      name: "Wireless Earbuds",
      href: "wireless-earbuds",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between mb-8 md:mb-16">
      <div className="hidden lg:flex gap-3">
        <Link href={`products?`}>
          <Button
            variant={"outline"}
            className={`border ${
              category === null || "" ? "border-blue-500 " : ""
            }`}
          >
            All
          </Button>
        </Link>
        {productsButton.map((product, index) => {
          return (
            <div key={index}>
              <Link href={`products?category=${product.href}`}>
                <Button
                  variant={"outline"}
                  className={`border ${
                    category === product.href ? "border-blue-500 " : ""
                  }`}
                >
                  {product.name}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="block lg:hidden gap-3">
        <SelectSortProducts productsButton={productsButton} />
      </div>
      <div>
        <ProductBarSelect sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
    </div>
  );
};

export default ProductsBar;
