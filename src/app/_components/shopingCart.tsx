"use client";

import { useCartStore } from "@/store/cart";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

const ShopingCart = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { count } = useCartStore();

  useEffect(() => {
    setIsMounted(true);
  });

  if (!isMounted) return;
  return (
    <div className="relative md:mr-2">
      <div className="text-[30px] md:text-[35px] cursor-pointer">
        <Link href="/cart">
          <CiShoppingCart />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        {count() === 0 ? null : (
          <div className=" flex items-center justify-center absolute left-4 md:left-6 bottom-4 md:bottom-6 bg-blue-500 w-5 md:w-6 h-5 md:h-6 text-sm md:text-md font-normal md:font-black text-white rounded-full text-center">
            <p> {count()} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopingCart;
