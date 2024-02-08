"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Scroll = () => {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll({ top: 0, behavior: "auto" });
  }, [pathname]);
  return <></>;
};

export default Scroll;
