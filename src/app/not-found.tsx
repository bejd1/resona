"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-[86vh] md:h-[82vh] flex flex-col items-center justify-center pb-20">
      <div className="flex">
        <p className="text-lg sm:text-xl font-bold">404</p>
        <p className="text-xl sm:text-2xl px-2">|</p>
        <p className="text-lg sm:text-xl"> This page could not be found.</p>
      </div>
      <Link href="/">
        <Button className="bg-black h-10 mt-3 w-32 sm:w-40">Back</Button>
      </Link>
    </div>
  );
};

export default NotFound;
