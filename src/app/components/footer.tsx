import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#0f0f0f] flex items-center gap-6 md:gap-10 text-white text-[20px] justify-center h-10">
      <Link
        className="flex items-center text-xl  hover:text-gray-400 ease-in-out duration-300"
        href="https://www.linkedin.com/in/filip-bajdan-a6393b273/"
      >
        <FaLinkedin />
      </Link>
      <Link
        className="flex items-center text-xl  hover:text-gray-400 ease-in-out duration-300"
        href="https://github.com/bejd1"
      >
        <FaGithub />
      </Link>
    </div>
  );
};

export default Footer;
