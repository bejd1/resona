"use client";
import { Button } from "@/components/ui/button";
import { Product, useCartStore } from "@/store/cart";
import React from "react";

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

  return (
    <Button
      onClick={() => handleAddToCart(product)}
      className="bg-black h-11 mt-3"
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
