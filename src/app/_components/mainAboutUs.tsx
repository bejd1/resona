import React from "react";
import Image from "next/image";
import img from "../../img/aboutUsImg.jpg";

const MainAboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 pl-4 md:pl-8 md:px-16 my-4 md:my-12 w-full justify-center md:justify-around">
      <div className="w-4/5 sm:w-80 md:w-96">
        <h2 className="text-xl md:text-2xl font-medium">RESONA</h2>
        <h1 className="text-2xl md:text-4xl my-2 font-black">
          Elegance of Polish Engineering
        </h1>
        <p className="tracking-wide">
          Engineering is a timeless source of elegance for us. Our devices
          captivate not only with their external beauty but also with impeccable
          design, a result of the best engineering practices. The artistry of
          the design and precision in execution form the foundation on which the
          beauty of our products rests, radiating outward.
          <br />
          What we see on the outside is a harmonious manifestation of a
          meticulously designed interior of our devices.
        </p>
      </div>
      <div className="w-full md:w-[500px]">
        <Image src={img} width={500} height={500} alt="Speaker Tower" />
      </div>
    </div>
  );
};

export default MainAboutUs;
