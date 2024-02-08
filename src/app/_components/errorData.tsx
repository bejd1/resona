import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ErrorData = () => {
  return (
    <div className="flex flex-col col-span-2 items-center justify-center min-h-[85vh] w-full">
      <p className="mt-2">Somethink went wrong 😢</p>
      <Link href="/">
        <Button className="bg-black h-10 mt-3 w-32 sm:w-40  mb-40">Back</Button>
      </Link>
    </div>
  );
};

export default ErrorData;
