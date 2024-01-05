import Image from "next/image";
import React from "react";
import img from "../../img/vaido-un1RE76gHDg-unsplash.jpg";
import { InputWithLabel } from "@/components/Input";

const Newsletter = () => {
  return (
    <div className="mt-12 mb-20 px-4 md:px-24 w-full flex flex-col md:flex-row gap-10 justify-center md:justify-around items-center">
      <div className="flex flex-col justify-center w-4/5 sm:w-80 md:w-96">
        <h2 className=" text-3xl md:text-4xl my-2 font-black">
          Dołącz do pasjonatów muzyki i inżynierskiego sprzętu!
        </h2>
        <p className="py-3 tracking-wide">
          Subskrybuj nasz newsletter, aby otrzymywać bieżące informacje na temat
          nowych produktów, promocji oraz aktualnych wydarzeń.
        </p>
        <InputWithLabel />
        <button className="bg-black px-4 py-2 font-poppins text-white rounded-md mt-4">
          Zapisz
        </button>
      </div>
      <div className="w-5/6 md:w-[500px]">
        <Image src={img} alt="Picture" />
      </div>
    </div>
  );
};

export default Newsletter;
