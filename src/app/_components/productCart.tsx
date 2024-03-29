"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { dataT } from "@/types/types";

const ProductCart = ({ items }: { items: dataT }) => {
  const { id, title, model, price, image } = items;

  return (
    <div key={id}>
      <Link href={`/products/${id}`}>
        <div className="tracking-wider hover:underline w-full">
          <div>
            <Image
              src={image || ""}
              width={800}
              height={200}
              style={{ borderRadius: "8px" }}
              priority
              className="max-h-[280px] min-h-[280px] sm:max-h-[600px] lg:h-[600px] object-cover"
              alt={`Product picture ${title} `}
            />
          </div>
          <h3 className="font-bold text-md md:text-xl py-1">{title}</h3>
          <h4 className="text-md md:text-lg">{model}</h4>
          <h4 className="text-md md:text-lg">Starting from ${price}</h4>
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
