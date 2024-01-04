import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#0f0f0f] flex items-center gap-10 md:gap-14 text-white text-[20px] justify-center h-10">
      <Link className="flex items-center text-xl" href="/">
        <IoLogoInstagram style={{ color: "white" }} />
      </Link>
      <Link className="flex items-center text-xl" href="/">
        <FaSquareXTwitter />
      </Link>
      <Link className="flex items-center text-xl" href="/">
        <FaFacebook />
      </Link>
    </div>
  );
};

export default Footer;
