import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EditProductModal from "@/app/_components/editModal";
import prisma from "../../../../lib/db";

const Product = async ({ params }: { params: { id: string } }) => {
  const productData = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });
  return (
    <div
      key={productData?.id}
      className="px-4 md:px-24 w-full flex flex-col justify-center items-center lg:items-start lg:grid grid-cols-[2fr,1fr] gap-16 mb-10 lg:mb-5 min-h-[85vh] overflow-hidden"
    >
      <div className="flex items-center justify-center h-full">
        <Image
          src={productData?.image || ""}
          width={1000}
          height={500}
          alt="Product picture"
        />
      </div>
      <div className="flex flex-col lg:mt-20 h-full lg:w-5/6">
        <h3 className="text-xl md:text-2xl font-medium">
          {productData?.title}
        </h3>
        <h2 className="text-2xl md:text-4xl my-2 font-black">
          {productData?.model}
        </h2>
        <p className="py-3 tracking-wide">{productData?.description}</p>
        <div className="flex justify-between">
          <p className="text-xl md:text-2xl font-medium">
            Starting from ${productData?.prize}
          </p>
          <EditProductModal id={productData?.id} productData={productData} />
        </div>
        <Button className="bg-black h-11 mt-3">Add to cart</Button>
      </div>
    </div>
  );
};

export default Product;
