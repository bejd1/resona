"use client";

import { useCartStore } from "@/store/cart";
import Link from "next/link";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import ShoppingCartCount from "./shoppingCartCount";

const ShopingCart = () => {
  const { count } = useCartStore();

  return (
    <div className="relative md:mr-2">
      <div className="text-[30px] md:text-[35px] cursor-pointer">
        <Link href="/cart">
          <CiShoppingCart />
        </Link>
      </div>
      <ShoppingCartCount count={count} />
    </div>
  );
};

export default ShopingCart;
