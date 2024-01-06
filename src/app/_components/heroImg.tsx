"use client";

// Importing necessary dependencies
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../img/bigger.jpg";

const HeroImg = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    // Adding event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxScroll = 201;

  const translateY = Math.min(scrollY, maxScroll);

  const isMobile = windowWidth < 480;

  const transformStyle = isMobile ? "none" : `translateY(-${translateY}px)`;

  return (
    <div className="max-h-[150px] md:max-h-[220px] lg:max-h-[300px] xl:max-h-[400px] 2xl:max-h-[550px] w-full overflow-hidden sm:mb-12 px-4 sm:px-8">
      <div className="relative w-full">
        <Image
          className="w-full h-full transform transition-transform sm:transform-none ease-out duration-300"
          style={{ transform: transformStyle }}
          width={0}
          height={0}
          src={img}
          alt="Picture of the author"
        />
        <div
          className="absolute w-full top-0 h-full"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            pointerEvents: "none",
            zIndex: "1",
          }}
        />
      </div>
    </div>
  );
};

export default HeroImg;
