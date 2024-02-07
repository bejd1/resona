import React from "react";
import Image from "next/image";
import EditProductModal from "@/app/_components/editModal";
import prisma from "../../utils/db";
import { auth } from "@/app/utils/auth";
import AddToCartButton from "@/app/_components/addToCartButton";
import NotFound from "@/app/not-found";
import Newsletter from "@/app/_components/newsletter";
import ImageModal from "@/app/_components/imageModal";

const Product = async ({ params }: { params: { id: string } }) => {
  const session = await auth();
  const productData = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });

  const image: string | undefined = productData?.image!;
  const price: number | undefined = productData?.price!;

  if (productData?.id !== params.id) return <NotFound />;

  return (
    <div className="p-0">
      <div
        key={productData?.id}
        className="px-4 md:px-24 w-full flex flex-col justify-center items-center lg:items-start lg:grid grid-cols-[3fr,3fr] gap-6 lg:gap-10 mb-20 lg:mb-32 overflow-hidden"
      >
        <div className="lg:mt-20 ">
          <ImageModal image={image} />
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
              <EditProductModal
                id={productData?.id}
                productData={productData}
              />
            )}
          </div>
          <AddToCartButton
            id={productData?.id}
            title={productData?.title}
            description={productData?.description}
            price={price}
            model={productData?.model}
            image={image}
          />
        </div>
      </div>
      <div className="bg-[#eff0f0] py-4 mb-16">
        <Newsletter />
      </div>
    </div>
  );
};

export default Product;
