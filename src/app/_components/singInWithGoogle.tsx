"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const SingInWithGoogle = () => {
  return (
    <>
      <Button
        onClick={() => signIn("google")}
        variant="outline"
        className="bg-white w-full py-5 text-black font-extrabold"
      >
        <FcGoogle className="mr-1" />
        Google
      </Button>
    </>
  );
};

export default SingInWithGoogle;
