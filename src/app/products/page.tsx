import { getData } from "@/actions/post";
import Image from "next/image";
import Link from "next/link";
import CreateProductModal from "../_components/createModal";

const Products = async () => {
  const data = await getData();

  return (
    <div className="py-4 md:py-12 px-6 md:px-24 w-full">
      <div className="flex justify-between items-center mb-2">
        <h1 className="flex items-center text-2xl md:text-4xl font-extrabold">
          Nasze produkty
        </h1>
        <CreateProductModal />
      </div>
      <div className="w-full h-[1px] bg-black mb-8 md:mb-16"></div>
      <div className="flex md:grid flex-col lg:flex-wrap gap-10 cursor-pointer grid-cols-2 lg:px-4">
        {data.map((items) => {
          const { id, title, model, prize, image } = items;
          return (
            <div key={id}>
              <Link href={`/products/${id}`} scroll={true}>
                <div className="tracking-wider hover:underline w-full">
                  <div className="">
                    <Image
                      src={image || ""}
                      width={800}
                      height={200}
                      className="lg:h-[600px] md:object-cover"
                      alt="Picture of the author"
                    />
                  </div>
                  <h3 className="font-bold text-md md:text-xl py-1">{title}</h3>
                  <h4 className="text-md md:text-lg">{model}</h4>
                  <h4 className="text-md md:text-lg">od PLN {prize}</h4>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
