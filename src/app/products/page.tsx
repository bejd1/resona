import CreateProductModal from "../_components/createModal";
import { auth } from "../utils/auth";
import ProductItems from "../_components/productData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};
const Products = async ({
  searchParams,
}: {
  searchParams?: {
    category?: string;
  };
}) => {
  const session = await auth();
  const query = searchParams?.category || "";

  return (
    <div className="py-4 md:py-12 px-6 md:px-16 lg:px-20 w-full">
      <div className="flex justify-between items-center mb-2">
        <h1 className="flex items-center text-2xl md:text-4xl font-extrabold">
          Our Products
        </h1>
        {session?.user.role !== "ADMIN" ? null : <CreateProductModal />}
      </div>
      <div className="w-full h-[1px] bg-black mb-8"></div>

      <div className="min-h-screen">
        <ProductItems query={query} />
      </div>
    </div>
  );
};

export default Products;
