import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart";
import React from "react";

const CartButtonGroup = ({
  count,
  id,
}: {
  count: number;
  id: string | undefined;
}) => {
  const { increase, decrease } = useCartStore();

  const handleDecrease = () => {
    if (id) {
      decrease(id);
    }
  };

  const handleIncrease = () => {
    if (id) {
      increase(id);
    }
  };

  return (
    <div className="flex gap-1 mt-1">
      <Button
        onClick={handleDecrease}
        className="bg-black text-white text-md lg:text-lg font-medium"
        size="icon"
      >
        -
      </Button>
      <Button
        className="bg-black hover:bg-black  text-white text-md lg:text-lg font-medium cursor-default"
        size="icon"
      >
        {count}
      </Button>
      <Button
        onClick={handleIncrease}
        className="bg-black text-white text-md lg:text-lg font-medium"
        size="icon"
      >
        +
      </Button>
    </div>
  );
};

export default CartButtonGroup;
