"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <div>
      <Button
        onClick={() => signOut()}
        className=" bg-black hidden h-10 font-semibold lg:block"
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
