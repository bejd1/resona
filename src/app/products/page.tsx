import { getData } from "@/actions/post";
import CreateProductModal from "../_components/createModal";
import { auth } from "../utils/auth";
import ProductCart from "../_components/productCart";

const Products = async () => {
  const data = await getData();
  const session = await auth();

  return (
    <div className="py-4 md:py-12 px-6 md:px-24 w-full">
      <div className="flex justify-between items-center mb-2">
        <h1 className="flex items-center text-2xl md:text-4xl font-extrabold">
          Our Products
        </h1>
        {session?.user.role !== "ADMIN" ? null : <CreateProductModal />}
      </div>
      <div className="w-full h-[1px] bg-black mb-8 md:mb-16"></div>
      <div className="flex md:grid flex-col lg:flex-wrap gap-10 cursor-pointer grid-cols-2 lg:px-4">
        {data.map((items) => {
          return (
            <div key={items.id}>
              <ProductCart items={items} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
