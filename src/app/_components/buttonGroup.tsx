import { Button } from "@/components/ui/button";
import React from "react";

const CartButtonGroup = () => {
  return (
    <div className="flex gap-1 mt-1">
      <Button
        className="bg-gray-300 hover:bg-gray-200 text-zinc-900 text-md lg:text-lg font-medium"
        size="icon"
      >
        +
      </Button>
      <Button
        className="bg-gray-300 hover:bg-gray-300 text-zinc-900 text-md lg:text-lg font-medium"
        size="icon"
      >
        0
      </Button>
      <Button
        className="bg-gray-300 hover:bg-gray-200 text-zinc-900 text-md lg:text-lg font-medium"
        size="icon"
      >
        -
      </Button>
    </div>
  );
};

export default CartButtonGroup;
