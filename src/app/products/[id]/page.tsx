import React from "react";
import Image from "next/image";
import EditProductModal from "@/app/_components/editModal";
import prisma from "../../utils/db";
import { auth } from "@/app/utils/auth";
import AddToCartButton from "@/app/_components/addToCartButton";

const Product = async ({ params }: { params: { id: string } }) => {
  const session = await auth();
  const productData = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });

  const image: string | undefined = productData?.image!;

  return (
    <div
      key={productData?.id}
      className="px-4 md:px-24 w-full flex flex-col justify-center items-center lg:items-start lg:grid grid-cols-[3fr,3fr] gap-6 lg:gap-10 mb-10 lg:mb-5 min-h-[85vh] overflow-hidden"
    >
      <div className="flex flex-col lg:mt-20 lg:ml-8">
        <Image
          src={productData?.image || ""}
          width={700}
          height={700}
          style={{ borderRadius: "8px" }}
          alt="Product picture"
        />
      </div>
      <div className="flex flex-col lg:mt-20 h-full lg:w-4/6 lg:ml-32">
        <h3 className="text-xl md:text-2xl font-medium">
          {productData?.title}
        </h3>
        <h2 className="text-2xl md:text-4xl my-2 font-black">
          {productData?.model}
        </h2>
        <p className="py-3 tracking-wide">{productData?.description}</p>
        <div className="flex justify-between">
          <p className="text-xl md:text-2xl font-medium">
            Starting from ${productData?.price}
          </p>
          {session?.user.role !== "ADMIN" ? null : (
            <EditProductModal id={productData?.id} productData={productData} />
          )}
        </div>
        <AddToCartButton
          id={productData?.id}
          title={productData?.title}
          description={productData?.description}
          price={productData?.price}
          model={productData?.model}
          image={image}
        />
      </div>
    </div>
  );
};

export default Product;
