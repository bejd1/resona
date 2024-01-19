import React from "react";
import Image from "next/image";
import img from "../../img/aboutUsImg.jpg";

const MainAboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 pl-4 md:pl-8 md:px-16 my-4 md:my-12 w-full justify-center md:justify-around">
      <div className="w-4/5 sm:w-80 md:w-96">
        <h2 className="text-xl md:text-2xl font-medium">RESONA</h2>
        <h1 className="text-2xl md:text-4xl my-2 font-black">
          Piękno polskiej inżynierii
        </h1>
        <p className="tracking-wide">
          Inżynieria jest dla nas wzorcem ponadczasowego piękna. Nasze
          urządzenia są piękne, ponieważ są zaprojektowane zgodnie z najlepszymi
          praktykami inżynierii od projektu począwszy, a na najmniejszym detalu
          realizacji skończywszy. Jeżeli coś jest kunsztownie zaprojektowane od
          samego początku i starannie wykonane na końcu - to piękno emanuje na
          zewnątrz.
          <br />
          Zewnętrzne piękno jest emanacją kunsztownie zaprojektowanego wnętrza
          naszych urządzeń.
        </p>
      </div>
      <div className="w-full md:w-[500px]">
        <Image src={img} width={500} height={500} alt="Picture of the author" />
      </div>
    </div>
  );
};

export default MainAboutUs;
