import { Button } from "@/components/ui/button";
import React from "react";

const CartButtonGroup = () => {
  return (
    <div className="flex gap-1 mt-1">
      <Button
        className="bg-black text-white text-md lg:text-lg font-medium"
        size="icon"
      >
        -
      </Button>
      <Button
        className="bg-black hover:bg-black  text-white text-md lg:text-lg font-medium"
        size="icon"
      >
        1
      </Button>
      <Button
        className="bg-black text-white text-md lg:text-lg font-medium"
        size="icon"
      >
        +
      </Button>
    </div>
  );
};

export default CartButtonGroup;
