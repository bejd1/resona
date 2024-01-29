import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const EmptyCart = () => {
  return (
    <div className="h-[80vh] md:h-[76vh] flex flex-col items-center justify-center">
      <div className="mb-20 flex flex-col items-center">
        <h2 className="flex place-items-start text-lg md:text-xl mb-2">
          Your cart is empty
        </h2>
        <Link href="/products">
          <Button className="bg-black h-10 mt-3 w-32 sm:w-40 font-bold">
            Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
