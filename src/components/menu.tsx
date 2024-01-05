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
import BurgerBtn from "@/app/components/burgerBtn";

interface linksI {
  label: string;
  href: string;
}

export function DrawerDemo() {
  const links: linksI[] = [
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
        <BurgerBtn />
      </DrawerTrigger>
      <DrawerContent style={{ position: "fixed", top: 0, width: "100%" }}>
        <div className="flex items-center justify-center h-full">
          <DrawerHeader>
            <div className="flex flex-col items-center gap-10">
              {links.map((link) => {
                return (
                  <Link href={link.href}>
                    <DrawerClose>
                      <p className="text-2xl text-center">{link.label}</p>
                    </DrawerClose>
                  </Link>
                );
              })}
            </div>
          </DrawerHeader>
        </div>
        <div className="w-full h-[1px] bg-black mb-2"></div>
        <DrawerFooter>
          <div className="flex items-center justify-center gap-5">
            <Link
              className="flex items-center text-xl"
              href="https://www.linkedin.com/in/filip-bajdan-a6393b273/"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="flex items-center text-xl"
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
