import React from "react";
import Image from "next/image";
import Link from "next/link";
import CreateProductModal from "../_components/createModal";
import { getData } from "@/actions/post";

type dataT = {
  id: string;
  title: string;
  model: string;
  prize: number;
  image: string | undefined;
};

const Products = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className="py-12 px-6 md:px-24 w-full">
      <div className="flex justify-between items-center">
        <h1 className="flex place-items-start text-4xl font-extrabold mb-2">
          Nasze produkty
        </h1>
        <CreateProductModal />
      </div>
      <div className="w-full h-[1px] bg-black mb-16"></div>
      <div className="flex md:grid flex-col lg:flex-wrap gap-10 cursor-pointer grid-cols-2  lg:px-4">
        {data.map((items) => {
          const { id, title, model, prize, image, colorVariant } = items;
          const img = image?.toString();
          console.log(img);

          return (
            <div key={id}>
              <Link href="/products/id">
                <div className="tracking-wider hover:underline w-full">
                  <img
                    src="https://cdn.discordapp.com/attachments/818823559904100363/1194731989169885184/rn_image_picker_lib_temp_9feb2a09-f4bd-461a-9af5-bbdca3d3f718.jpg?ex=65b16bdf&is=659ef6df&hm=6c30b3d5b5d3ade46113648d8d7e2700c166750eb49e93c1f3ce74dc20ed5cf8&"
                    alt=""
                  />
                  <Image
                    src="https://cdn.discordapp.com/attachments/818823559904100363/1194731989169885184/rn_image_picker_lib_temp_9feb2a09-f4bd-461a-9af5-bbdca3d3f718.jpg?ex=65b16bdf&is=659ef6df&hm=6c30b3d5b5d3ade46113648d8d7e2700c166750eb49e93c1f3ce74dc20ed5cf8&"
                    width={0}
                    height={0}
                    alt="Picture of the author"
                  />
                  <h3 className="font-bold text-xl py-1">{model}</h3>
                  <h4 className="text-lg">{title}</h4>
                  <h4 className="text-lg">od PLN {prize}</h4>
                  <h4 className="text-lg">kolorek {colorVariant}</h4>
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
