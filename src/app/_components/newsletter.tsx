import Image from "next/image";
import React from "react";
import img from "../../img/vaido-un1RE76gHDg-unsplash.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        <Input
          className="h-11"
          placeholder="youremail@email.com"
          type="email"
        />
        <Button className=" bg-black h-11 mt-3">Subscribe</Button>
      </div>
      <div className="w-5/6 md:w-[500px]">
        <Image src={img} width={0} height={0} alt="Picture" />
      </div>
    </div>
  );
};

export default Newsletter;
