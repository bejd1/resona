import React from "react";
import prisma from "../../../lib/db";
import { revalidatePath } from "next/cache";
import { Divider } from "@mui/material";
import { deleteItem } from "@/actions/post";

type dataT = {
  id: string;
  title: string;
  model: string;
  prize: number;
  image: string;
};

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

async function edit(formData: FormData) {
  "use server";

  const input = formData.get("input") as string;
  const inputId = formData.get("inputId") as string;

  await prisma.product.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
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
        {data.map((d) => {
          const { title, model, description, prize, image, id } = d;
          return (
            <div key={id}>
              <Divider className="my-8" />
              <input type="hidden" name="inputId" />
              <div>{id}</div>
              <div>{title}</div>
              <div>{model}</div>
              <div>{description}</div>
              <div>{prize}</div>
              <div>{image}</div>
            </div>
          );
        })}
        <div className="mt-5 flex flex-col gap-y-2">
          {data.map((todo) => (
            <form key={todo.id} className="flex" action={edit}>
              <input type="hidden" name="inputId" value={todo.id} />
              <input
                type="text"
                name="input"
                defaultValue={todo.title}
                className="border p-1"
              />

              <button type="submit" className="border bg-green-400 ">
                Save
              </button>
              <button formAction={deleteItem} className="border bg-red-400">
                Delete
              </button>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
