import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CartRight = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <div className="w-full">
      <Card className="p-4">
        <div className="flex justify-between">
          <p className="text-lg lg:text-xl font-medium">Total</p>
          <p className="text-black text-lg lg:text-xl">${totalPrice}</p>
        </div>
        <div className="flex items-center mt-4 gap-1">
          <IoShieldCheckmark />
          <p>Secure Delivery Guarantee</p>
        </div>
        <Button className="bg-black h-10 mt-3 w-full md:w-max">
          Proceed to Payment Options
        </Button>
      </Card>
    </div>
  );
};

export default CartRight;