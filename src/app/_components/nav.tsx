import Link from "next/link";
import React from "react";
import { TbHexagonLetterR } from "react-icons/tb";
import { CiShoppingCart } from "react-icons/ci";
import { DrawerDemo } from "@/components/menu";
import { Button } from "@/components/ui/button";
import Logout from "./logout";
import { auth } from "../utils/auth";

interface linksI {
  label: string;
  href: string;
}
const Navbar = async () => {
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
  const session = await auth();

  return (
    <div className="flex space-x-6 h-16 px-6 sm:px-12 lg:px-24 py-12 md:py-16 items-center justify-between">
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
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  className="text-xl font-medium font-poppins text-[#242323]"
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
          <Link href="cart">
            <CiShoppingCart />
          </Link>
        </div>
        {!session ? (
          <Link href="/login">
            <Button className=" bg-black hidden h-10 font-semibold lg:block">
              SIGN UP
            </Button>
          </Link>
        ) : (
          <Logout />
        )}

        <DrawerDemo />
      </div>
    </div>
  );
};

export default Navbar;
