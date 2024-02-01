"use client";

import React from "react";
import Image from "next/image";
import CartButtonGroup from "../_components/buttonGroup";
import { Card } from "@/components/ui/card";
import { CartItem } from "@/store/cart";
import DeleteButton from "./deleteButton";
import Link from "next/link";

interface CartLeftProps {
  item: CartItem;
  totalIndividualPrice: (id: string) => number;
}

const CartLeft: React.FC<CartLeftProps> = ({ item, totalIndividualPrice }) => {
  const { title, model, image, id, count, price } = item;
  const img = image?.toString() ?? "/default-image.jpg";
  const itemPrice = id ? totalIndividualPrice(id) : 0;

  return (
    <div className="flex flex-col gap-4 lg:w-[70%]">
      <Card>
        <div className="py-4 px-3 md:px-8 flex flex-col sm:flex-row justify-between lg:gap-4 ">
          <Link href={`/products/${id}`}>
            <div className="flex gap-4">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="w-3/5 sm:w-[200px] h-auto"
                src={img}
                style={{ borderRadius: "8px" }}
                alt="Product picture"
              />
              <div>
                <h2 className="text-sm lg:text-lg font-bold">{title}</h2>
                <h3 className="text-sm lg:text-lg font-medium">{model}</h3>
                <h3 className="text-sm lg:text-lg font-medium">${price}</h3>
              </div>
            </div>
          </Link>
          <div className="flex flex-row-reverse sm:flex-col justify-between sm:justify-normal items-center mt-4 sm:mt-0 gap-2 lg:gap-4">
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
