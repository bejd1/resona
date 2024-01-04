import Image from "next/image";
import React from "react";
import img from "../../img/vaido-un1RE76gHDg-unsplash.jpg";

const Newsletter = () => {
  return (
    <div className="my-12 px-4 md:px-24 w-full flex justify-around">
      <div className="flex flex-col justify-center w-4/5 sm:w-80 md:w-96">
        <h2 className="text-4xl my-2 font-black">
          Dołącz do pasjonatów muzyki i inżynierskiego sprzętu!
        </h2>
        <p className="py-3 tracking-wide">
          Subskrybuj nasz newsletter, aby otrzymywać bieżące informacje na temat
          nowych produktów, promocji oraz aktualnych wydarzeń.
        </p>
        <input type="text" className="border-black border-2 pt-4 my-2" />
        <button className="bg-black px-4 py-3 font-poppins text-white rounded-md mt-8">
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
