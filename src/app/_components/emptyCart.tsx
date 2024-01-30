import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const EmptyCart = () => {
  return (
    <div className="h-[80vh] md:h-[76vh] flex flex-col items-center justify-center px-4 sm:px-0">
      <div className="mb-32 flex flex-col justify-center sm:items-start">
        <h2 className="flex place-items-start items-start text-lg md:text-xl mb-2 font-bold">
          Your cart is empty 🙄
        </h2>
        <p className="text-sm sm:text-lg">
          If you add something to your cart it will appear here.
        </p>
        <Link href="/products">
          <Button className="bg-black h-10 mt-3 w-full sm:w-40">
            Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
