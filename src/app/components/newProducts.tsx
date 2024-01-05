import React from "react";
import Image from "next/image";
import img from "../../img/about.jpg";
import Link from "next/link";

const NewProducts = () => {
  return (
    <div className="py-12 px-4 md:px-24 w-full bg-[#eff0f0]">
      <h1 className="flex place-items-start text-4xl font-extrabold mb-2">
        Nowa linia produktów
      </h1>
      <div className="w-full h-[1px] bg-black mb-20"></div>
      <div className="flex-col md:flex-row gap-10 flex justify-around items-center">
        <div className="w-5/6 md:w-[500px]">
          <Image src={img} alt="Picture of the author" />
        </div>
        <div className="flex flex-col w-4/5 sm:w-80 md:w-2/5">
          <p className="tracking-wide">
            Poznaj nasz nowy zestaw wieżowy Unitra. Zainspirowani urządzeniami
            ze złotego okresu w historii naszej marki, stworzyliśmy
            bezkompromisowy, kompletny zestaw Hi-Fi stereo. Stworzyliśmy go z
            myślą o ludziach, którzy tęsknią za wysokiej jakości urządzeniami
            produkowanymi w Polsce i które znów, tak jak poprzednie generacje
            Unitra, będą trwać lata. Stworzyliśmy go dla ludzi, pasjonatów
            muzyki jak my, dla których przyjemność słuchania i emocje płynące z
            głośników stanowią przygodę życia.
          </p>
          <Link href="/products">
            <button className="bg-black px-4 py-3 font-poppins text-white rounded-md mt-8">
              Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
