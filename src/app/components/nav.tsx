"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: "PRODUCTS",
      href: "/page",
    },
    {
      label: "ABOUT US",
      href: "/page",
    },
  ];

  return (
    <div className="flex space-x-6 h-16 px-48 pt-16 pb-8 items-center justify-between">
      <div className="flex gap-10">
        <Link className="flex items-center text-xl" href="/">
          <p className="font-black font-poppins text-3xl">RESONA</p>
        </Link>
        <ul className="flex gap-10 items-center">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link
                  className="text-xl font-medium font-poppins text-[#242323]"
                  // className={`${
                  //   link.href !== currentPath ? "text-red-600" : "text-red-200"
                  // } hover:text-zinc-800 transition-colors`}
                  href={link.href}
                >
                  {link.label.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="bg-black px-4 py-3 font-poppins text-white rounded-md">
        SIGN UP
      </button>
    </div>
  );
};

export default Navbar;
