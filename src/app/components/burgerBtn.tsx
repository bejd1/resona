import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const BurgerBtn = () => {
  return (
    <div className="text-black block lg:hidden text-[25px] sm:text-[33px] cursor-pointer">
      <GiHamburgerMenu />
    </div>
  );
};

export default BurgerBtn;
