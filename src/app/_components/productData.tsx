"use client";
import { getData } from "@/actions/post";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProductCart from "./productCart";
import LoadingData from "./loadingData";
import ErrorData from "./errorData";
import ProductsBar from "./productsBar";

const ProductData = ({ query }: { query: string }) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", query, sortOrder],
    queryFn: async () => await getData(query, sortOrder),
  });
  if (isLoading) return <LoadingData />;
  if (isError) return <ErrorData />;

  return (
    <>
      <div className="mb-4 sm:mb-10">
        <ProductsBar sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      <div className="flex md:grid flex-col lg:flex-wrap gap-10 cursor-pointer grid-cols-2 lg:px-4">
        {products &&
          products.map((items) => {
            return (
              <div key={items.id}>
                <ProductCart items={items} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProductData;
