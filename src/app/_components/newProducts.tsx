import React from "react";
import Image from "next/image";
import img from "../../img/newProductImg.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NewProducts = () => {
  return (
    <div className="py-12 px-4 md:px-24 w-full bg-[#eff0f0]">
      <h1 className="flex place-items-start text-2xl md:text-4xl font-extrabold mb-2">
        New Product Line
      </h1>
      <div className="w-full h-[1px] bg-black mb-8 md:mb-16"></div>
      <div className="flex-col md:flex-row gap-10 flex justify-around items-center">
        <div className="w-5/6 md:w-[500px]">
          <Image src={img} width={0} height={0} alt="Picture of the author" />
        </div>
        <div className="flex flex-col w-4/5 sm:w-80 md:w-2/5">
          <p className="tracking-wide">
            Discover our new Resona stereo system. Drawing inspiration from
            devices of the golden era in the history of our brand, we have
            crafted an uncompromising, all-encompassing Hi-Fi stereo setup.
            Conceived with individuals in mind who yearn for high-quality
            devices made in Poland, much like the previous Resona generations,
            this system is designed to endure for years. We've tailored it for
            music enthusiasts like ourselves, where the pleasure of listening
            and the emotions flowing from the speakers create an adventure of a
            lifetime.
          </p>
          <Link href="/products">
            <Button className=" bg-black h-10 mt-3 w-full sm:w-40">
              Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
