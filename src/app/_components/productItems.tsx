"use client";
import { getData } from "@/actions/post";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCart from "./productCart";
import LoadingData from "./loadingData";
import ErrorData from "./errorData";

const ProductItems = ({ query }: { query: string }) => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => await getData(),
  });
  if (isLoading) return <LoadingData />;
  if (isError) return <ErrorData />;
  return (
    <>
      {products &&
        products.map((items) => {
          return (
            <div key={items.id}>
              <ProductCart items={items} />
            </div>
          );
        })}
    </>
  );
};

export default ProductItems;
