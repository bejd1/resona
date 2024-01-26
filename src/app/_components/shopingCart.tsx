"use client";

import Link from "next/link";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const ShopingCart = () => {
  return (
    <div className="relative md:mr-2">
      <div className="text-[25px] md:text-[35px] cursor-pointer">
        <Link href="cart">
          <CiShoppingCart />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        {/* {count() === 2 ? null : (
          <p className=" flex items-center justify-center absolute left-4 md:left-6 bottom-4 md:bottom-6 bg-blue-500 w-4 md:w-6 h-4 md:h-6 text-sm md:text-md font-normal md:font-black text-white rounded-full text-center">
            {count()}
          </p>
        )} */}
      </div>
    </div>
  );
};

export default ShopingCart;
