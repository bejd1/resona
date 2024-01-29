"use client";

import React from "react";
import Image from "next/image";
import CartButtonGroup from "../_components/buttonGroup";
import { Card } from "@/components/ui/card";
import { CartItem } from "@/store/cart";
import DeleteButton from "./deleteButton";

interface CartLeftProps {
  item: CartItem;
  totalIndividualPrice: (id: string) => number;
}

const CartLeft: React.FC<CartLeftProps> = ({ item, totalIndividualPrice }) => {
  const { title, model, image, id, count } = item;
  const img = image?.toString() ?? "/default-image.jpg";
  const itemPrice = id ? totalIndividualPrice(id) : 0;

  return (
    <div className="flex flex-col lg:grid lg:col-span-2 gap-4">
      <Card className="w-full">
        <div className="py-4 px-3 md:px-8 flex justify-between lg:gap-4 ">
          <div className="flex gap-4">
            <Image width={200} height={200} src={img} alt="Product picture" />
            <div>
              <h2 className="text-lg lg:text-xl font-bold">{title}x</h2>
              <h3 className="text-lg lg:text-xl font-medium">{model}D</h3>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <div className="flex gap-2 lg:gap-4 items-center">
              <p className="text-black text-lg lg:text-xl">${itemPrice}</p>
              <div className="text-lg lg:text-xl cursor-pointer hover:text-primary/95">
                <DeleteButton id={id} />
              </div>
            </div>

            <CartButtonGroup count={count} id={id} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CartLeft;
