import React from "react";
import Image from "next/image";
import img from "../../img/big.jpg";
import Link from "next/link";
import CreateProductModal from "../_components/createModal";
import { getData } from "@/actions/post";

const Products = async () => {
  const data = await getData();
  return (
    <div className="py-12 px-6 md:px-24 w-full">
      <div className="flex justify-between items-center">
        <h1 className="flex place-items-start text-4xl font-extrabold mb-2">
          Nasze produkty
        </h1>
        <CreateProductModal />
      </div>
      <div className="w-full h-[1px] bg-black mb-16"></div>
      <div className="flex md:grid flex-col lg:flex-wrap gap-10 cursor-pointer grid-cols-2  lg:px-4">
        <Link href="/products/id">
          <div className="tracking-wider hover:underline w-full">
            <Image src={img} width={0} height={0} alt="Picture of the author" />
            <h3 className="font-bold text-xl py-1">WSH-499</h3>
            <h4 className="text-lg">
              Wzmacniacz zintegrowany stereo o konstrukcji dual-mono
            </h4>
            <h4 className="text-lg">od PLN 1399</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Products;
