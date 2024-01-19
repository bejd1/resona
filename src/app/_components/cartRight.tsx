import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const CartRight = () => {
  return (
    <div className="p-4 bg-[#eff0f0]">
      <div className="flex justify-between">
        <p className="text-lg lg:text-xl font-medium">Do zapłaty</p>
        <p className="text-black text-lg lg:text-xl">PLN 14.999</p>
      </div>
      <div className="flex items-center mt-4 gap-1">
        <IoShieldCheckmark />
        <p>Gwarancja bezpiecznej dostawy</p>
      </div>
      <Button className="bg-black h-10 mt-3 w-full md:w-max">
        Przejdź do wyboru zapłaty
      </Button>
    </div>
  );
};

export default CartRight;
