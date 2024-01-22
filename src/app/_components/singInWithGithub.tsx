"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

const SingInWithGithub = () => {
  return (
    <>
      <Button
        onClick={() => signIn("github")}
        variant="outline"
        className="bg-white w-full py-5 text-black font-extrabold"
      >
        <FaGithub className="mr-1" />
        Github
      </Button>
    </>
  );
};

export default SingInWithGithub;
