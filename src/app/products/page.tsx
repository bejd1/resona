import React from "react";
import Image from "next/image";
import img from "../../img/big.jpg";
import Link from "next/link";

const Products = () => {
  return (
    <div className="py-12 px-6 md:px-24 w-full">
      <h1 className="flex place-items-start text-4xl font-extrabold mb-2">
        Nasze produkty
      </h1>
      <div className="w-full h-[1px] bg-black mb-16"></div>
      <div className="flex md:grid flex-col lg:flex-wrap gap-10 cursor-pointer grid-cols-2  lg:px-4">
        <Link href="/products/id">
          <div className="tracking-wider hover:underline w-full">
            <Image src={img} alt="Picture of the author" />
            <h3 className="font-bold text-xl py-1">WSH-499</h3>
            <h4 className="text-lg">
              Wzmacniacz zintegrowany stereo o konstrukcji dual-mono
            </h4>
            <h4 className="text-lg">od PLN 1399</h4>
          </div>
        </Link>
        <div className="tracking-wider hover:underline ">
          <Image src={img} alt="Picture of the author" />
          <h3 className="font-bold text-xl py-1">WSH-499</h3>
          <h4 className="text-lg">
            Wzmacniacz zintegrowany stereo o konstrukcji dual-mono
          </h4>
          <h4 className="text-lg">od PLN 1399</h4>
        </div>
        <div className="tracking-wider hover:underline ">
          <Image src={img} alt="Picture of the author" />
          <h3 className="font-bold text-xl py-1">WSH-499</h3>
          <h4 className="text-lg">
            Wzmacniacz zintegrowany stereo o konstrukcji dual-mono
          </h4>
          <h4 className="text-lg">od PLN 1399</h4>
        </div>
        <div className="tracking-wider hover:underline ">
          <Image src={img} alt="Picture of the author" />
          <h3 className="font-bold text-xl py-1">WSH-499</h3>
          <h4 className="text-lg">
            Wzmacniacz zintegrowany stereo o konstrukcji dual-mono
          </h4>
          <h4 className="text-lg">od PLN 1399</h4>
        </div>
        <div className="tracking-wider hover:underline ">
          <Image src={img} alt="Picture of the author" />
          <h3 className="font-bold text-xl py-1">WSH-499</h3>
          <h4 className="text-lg">
            Wzmacniacz zintegrowany stereo o konstrukcji dual-mono
          </h4>
          <h4 className="text-lg">od PLN 1399</h4>
        </div>
      </div>
    </div>
  );
};

export default Products;
