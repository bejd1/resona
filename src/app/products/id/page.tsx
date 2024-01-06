import React from "react";
import Image from "next/image";
import img from "../../../img/kevin-woblick-LRamvPjq5Ho-unsplash (1).jpg";
import { RadioGroupDemo } from "@/components/radioGroup";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="mt-12 mb-20 px-4 md:px-24 w-full flex flex-col md:flex-row gap-10 justify-center md:justify-around items-center">
      <div className="w-5/6 md:w-[500px]">
        <Image
          className="w-full"
          width={0}
          height={0}
          src={img}
          alt="Picture"
        />
      </div>
      <div className="flex flex-col w-4/5 sm:w-80 md:w-96">
        <h3 className="text-2xl font-medium">WSH-805</h3>
        <h2 className=" text-3xl md:text-4xl my-2 font-black">
          Wzmacniacz zintegrowany stereo o konstrukcji dual-mono
        </h2>
        <p className="py-3 tracking-wide">
          Wzmacniacz zintegrowany stereo o konstrukcji dual-mono. Inspirowany
          złotą erą stereo lat 70-tych. Ponadczasowy design ze wskaźnikami
          wychyłowymi oraz opatentowaną technologią automatycznych
          przełączników. Wykonany w topologii current feedback, o świetnych
          parametrach w pełni analogowego toru audio, w szczególności idealnej
          separacji kanałów audio oraz unikalnej czystości dźwięku. Posiada
          funkcję zmiany klasy pracy oraz szeroki wybór wejść sygnałowych, w tym
          wejścia zbalansowane.
        </p>
        <RadioGroupDemo />
        <p className="text-2xl font-medium">PLN 14.999</p>
        <Button className=" bg-black h-11 mt-3">Add to cart</Button>
      </div>
    </div>
  );
};

export default page;
