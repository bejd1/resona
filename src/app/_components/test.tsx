"use client";

import { Button } from "@/components/ui/button";
import { useStore } from "@/store/cart";
import React from "react";

const Test = () => {
  const { count, inc } = useStore();
  return (
    <div>
      <div className="flex flex-col items-center">
        <span className="mb-2">{count}</span>
        <Button onClick={inc}>one up</Button>
      </div>
    </div>
  );
};

export default Test;
