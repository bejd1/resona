import React from "react";
import Image from "next/image";
import { RadioGroupDemo } from "@/components/radioGroup";
import { Button } from "@/components/ui/button";
import EditProductModal from "@/app/_components/editModal";
import prisma from "../../../../lib/db";

const Product = async ({ params }: { params: { id: string } }) => {
  const productData = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });

  const img = productData?.image?.toString();

  return (
    <div
      key={productData?.id}
      className="mb-20 px-4 md:px-24 w-full flex flex-col md:flex-row gap-10 justify-center md:justify-around items-center"
    >
      <Image
        src={img || ""}
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <div className="flex flex-col w-4/5 sm:w-80 md:w-96">
        <h3 className="text-2xl font-medium">{productData?.title}</h3>
        <h2 className="text-3xl md:text-4xl my-2 font-black">
          {productData?.model}
        </h2>
        <p className="py-3 tracking-wide">{productData?.description}</p>
        <RadioGroupDemo />
        <div className="flex justify-between">
          <p className="text-2xl font-medium">PLN {productData?.prize}</p>
          <EditProductModal id={productData?.id} productData={productData} />
        </div>
        <Button className="bg-black h-11 mt-3">Add to cart</Button>
      </div>
    </div>
  );
};

export default Product;
