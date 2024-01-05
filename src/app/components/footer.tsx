import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#0f0f0f] flex items-center gap-6 md:gap-10 text-white text-[20px] justify-center h-10">
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
  );
};

export default Footer;
