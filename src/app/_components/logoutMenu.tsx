"use client";
import React from "react";
import { signOut } from "next-auth/react";

const LogoutMenu = () => {
  return (
    <div>
      <p onClick={() => signOut()} className=" text-2xl text-center">
        LOGOUT
      </p>
    </div>
  );
};

export default LogoutMenu;
