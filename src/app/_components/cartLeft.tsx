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

const CartLeft = ({ item, totalIndividualPrice }: CartLeftProps) => {
  const { title, model, image, id, count, price } = item;
  const img = image?.toString() ?? "/default-image.jpg";
  const itemPrice = id ? totalIndividualPrice(id) : 0;

  return (
    <div className="flex flex-col gap-4 lg:w-[70%]">
      <Card>
        <div className="py-4 px-3 md:px-8 flex flex-col sm:flex-row justify-between lg:gap-4 ">
          <Link href={`/products/${id}`} as={`/products/${id}`}>
            <div className="flex gap-4">
              <div className="min-w-[180px] sm:w-[220px] max-w-[120px] sm:max-w-[220px] min-h-[150px] max-h-[150px] sm:min-h-[190] sm:max-h-[190px]">
                <Image
                  width={221}
                  height={221}
                  quality={100}
                  priority
                  src={img}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt={`Product picture ${title}`}
                  loading="eager"
                />
              </div>
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
