"use client";
import React, { useEffect, useState } from "react";

type CountFunction = () => number;

const ShoppingCartCount = ({ count }: { count: CountFunction }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;
  return (
    <div className="flex items-center justify-center">
      {count() === 0 ? null : (
        <div className=" flex items-center justify-center absolute left-4 md:left-6 bottom-4 md:bottom-6 bg-blue-500 w-5 md:w-6 h-5 md:h-6 text-sm md:text-md font-normal md:font-black text-white rounded-full text-center">
          <p> {count()} </p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartCount;
