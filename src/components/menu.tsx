import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import BurgerButton from "@/app/_components/burgerButton";
import { Divider } from "@mui/material";

interface linksI {
  label: string;
  href: string;
}

export function DrawerDemo() {
  const links: linksI[] = [
    {
      label: "LOGIN",
      href: "/login",
    },
    {
      label: "HOME",
      href: "/",
    },
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
    <Drawer>
      <DrawerTrigger>
        <BurgerButton />
      </DrawerTrigger>
      <DrawerContent style={{ position: "fixed", top: 0, width: "100%" }}>
        <div className="flex items-center justify-center h-full">
          <DrawerHeader>
            <div className="flex flex-col items-center gap-10">
              {links.map((link, index) => {
                return (
                  <div key={index}>
                    <Link href={link.href}>
                      <DrawerClose>
                        <p className="text-2xl text-center">{link.label}</p>
                      </DrawerClose>
                    </Link>
                  </div>
                );
              })}
            </div>
          </DrawerHeader>
        </div>
        <Divider />
        <DrawerFooter>
          <div className="flex items-center justify-center gap-6">
            <Link
              className="flex items-center text-2xl hover:text-gray-800 ease-in-out duration-300"
              href="https://www.linkedin.com/in/filip-bajdan-a6393b273/"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="flex items-center text-2xl hover:text-gray-800 ease-in-out duration-300"
              href="https://github.com/bejd1"
            >
              <FaGithub />
            </Link>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
