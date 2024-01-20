import React from "react";
import Image from "next/image";
import img from "../../img/aboutUsImg.jpg";
import { FaTrash } from "react-icons/fa6";
import CartButtonGroup from "../_components/buttonGroup";

const CartLeft = () => {
  return (
    <div className="flex flex-col lg:grid lg:col-span-2 gap-4">
      <div className="py-4 px-3 md:px-8 flex justify-between lg:gap-4 bg-[#eff0f0]">
        <div className="flex gap-4">
          <div className="w-[100px] md:w-[150px]">
            <Image width={0} height={0} src={img} alt="Product picture" />
          </div>
          <div>
            <h2 className="text-lg lg:text-xl font-bold">Harmony SoundWave</h2>
            <h3 className="text-lg lg:text-xl font-medium">WSH-805</h3>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 lg:gap-4">
          <div className="flex gap-2 lg:gap-4 items-center">
            <p className="text-black text-lg lg:text-xl">$ 1499</p>
            <div className="text-lg lg:text-xl cursor-pointer hover:text-primary/95">
              <FaTrash />
            </div>
          </div>
          <CartButtonGroup />
        </div>
      </div>
    </div>
  );
};

export default CartLeft;
