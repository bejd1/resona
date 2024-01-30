"use client";
import { Button } from "@/components/ui/button";
import { Product, useCartStore } from "@/store/cart";
import React, { useTransition } from "react";

const AddToCartButton: React.FC<Product> = ({
  id,
  image,
  title,
  description,
  price,
  model,
}: Product) => {
  const { add: handleAddToCart } = useCartStore();
  const product = { id, image, title, description, price, model } as Product;
  const [isPending, startTransition] = useTransition();

  const handleEditSubmit = async () => {
    await startTransition(() => {});
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await handleEditSubmit();
      }}
    >
      <Button
        disabled={isPending}
        type="submit"
        onClick={() => handleAddToCart(product)}
        className="bg-black h-11 mt-5 w-full sm:w-40"
      >
        {isPending ? "Adding..." : "Add to cart"}
      </Button>
    </form>
  );
};

export default AddToCartButton;