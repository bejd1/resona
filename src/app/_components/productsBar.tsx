"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

// construction site

const ProductsBar = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="gap-4 hidden mb-12">
      <Link href={`products?category=loudspeaker`}>
        <Button>loud</Button>
      </Link>
      <Link href={`products?category=micro`}>
        <Button>micro</Button>
      </Link>
    </div>
  );
};

export default ProductsBar;
