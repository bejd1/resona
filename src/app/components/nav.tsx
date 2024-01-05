"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { TbHexagonLetterR } from "react-icons/tb";
import { CiShoppingCart } from "react-icons/ci";
import { DrawerDemo } from "@/components/menu";

interface linksI {
  label: string;
  href: string;
}
const Navbar = () => {
  const currentPath = usePathname();

  const links: linksI[] = [
    {
      label: "PRODUCTS",
      href: "/products",
    },
    {
      label: "ABOUT US",
      href: "/about-us",
    },
  ];

  return (
    <div className="flex space-x-6 h-16 px-6 sm:px-12 lg:px-24 py-16 items-center justify-between">
      <div className="flex gap-10">
        <Link className="flex items-center text-xl" href="/">
          <div className="flex gap-0 md:gap-2 items-center font-black font-poppins mr-4 text-xl sm:text-3xl">
            <div className="text-[25px] md:text-[35px]">
              <TbHexagonLetterR />
            </div>
            RESONA
          </div>
        </Link>
        <ul className="hidden lg:flex gap-10 items-center">
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
      <div className="flex items-center justyfy-center gap-2 md:gap-4">
        <div className="text-[25px] md:text-[35px] cursor-pointer">
          <CiShoppingCart />
        </div>
        <Link href="/login">
          <button className="hidden lg:block bg-black px-4 py-3 font-poppins text-white rounded-md hover:text-gray-400 ease-in-out duration-300">
            SIGN UP
          </button>
        </Link>
        <DrawerDemo />
      </div>
    </div>
  );
};

export default Navbar;
