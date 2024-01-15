import React from "react";
import Image from "next/image";
import img from "../../img/aboutUsImg.jpg";
import { FaTrash } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const Cart = () => {
  return (
    <div className="py-12 px-6 md:px-24 w-full h-[82vh]">
      <h1 className="flex place-items-start text-4xl font-extrabold mb-2">
        Twój koszyk
      </h1>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="py-4 px-8 flex justify-between bg-[#eff0f0] col-span-2">
          <div className="flex gap-4">
            <Image
              className="h-[150px] w-[320px]"
              width={0}
              height={0}
              src={img}
              alt="Picture of the author"
            />
            <div>
              <h3 className="text-2xl font-medium">WSH-805</h3>
              <div className="text-xl mt-3 mb-2">
                Color: <span className="text-xl">Red</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-4 text-2xl">
              <p>+</p>
              <p>1</p>
              <p>-</p>
            </div>
            <p className="text-black text-2xl">PLN1499</p>
            <div className="text-2xl cursor-pointer">
              <FaTrash />
            </div>
          </div>
        </div>
        <div className="py-4 px-8 bg-[#eff0f0] col-span-1">
          <div className="">
            <div className="flex justify-between">
              <p className="text-2xl font-medium">Do zapłaty</p>
              <p className="text-black text-2xl">PLN 14.999</p>
            </div>
            <div className="flex items-center mt-4 gap-1">
              <IoShieldCheckmark />
              <p>Gwarancja bezpiecznej dostawy</p>
            </div>
            <Button className=" bg-black h-10 mt-3">
              Przejdź do wyboru zapłaty
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
