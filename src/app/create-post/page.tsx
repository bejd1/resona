import React from "react";
import prisma from "../../../lib/db";
import { revalidatePath } from "next/cache";
import { Divider } from "@mui/material";

async function getData() {
  const data = await prisma.product.findMany();

  return data;
}

async function create(formData: FormData) {
  "use server";

  const input = formData.get("input") as string;
  const input2 = formData.get("input2") as string;
  const input3 = formData.get("input3") as string;
  const input4 = parseFloat(formData.get("input4") as string);
  const input5 = formData.get("input5") as string;

  await prisma.product.create({
    data: {
      title: input,
      model: input2,
      description: input3,
      prize: input4,
      colorVariant: [],
      image: input5,
    },
  });

  revalidatePath("/");
}
const page = async () => {
  const data = await getData();
  return (
    <div>
      <form className="flex flex-col" action={create}>
        <input
          type="text"
          name="input"
          className="border p-1 border-gray-800"
        />
        <input
          type="text"
          name="input2"
          className="border p-1 border-gray-800"
        />
        <input
          type="text"
          name="input3"
          className="border p-1 border-gray-800"
        />
        <input
          type="number"
          name="input4"
          className="border p-1 border-gray-800"
        />
        <input
          type="text"
          name="input5"
          className="border p-1 border-gray-800"
        />
        <button
          className="bg-green-500 rounded-lg mt-2 text-white py-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        <ul>
          {data.map((d) => {
            const { title, model, description, prize, image } = d;
            return (
              <>
                <Divider className="my-8" />

                <li>{title}</li>
                <li>{model}</li>
                <li>{description}</li>
                <li>{prize}</li>
                <li>{image}</li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default page;
