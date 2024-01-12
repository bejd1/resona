"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../lib/db";

export async function getData() {
  const data = await prisma.product.findMany();

  return data;
}

export async function create(formData: FormData) {
  "use server";

  try {
    const title = formData.get("title") as string;
    const model = formData.get("model") as string;
    const description = formData.get("description") as string;
    const prize = parseFloat(formData.get("prize") as string);
    const image = formData.get("image") as string;

    await prisma.product.create({
      data: {
        title: title,
        model: model,
        description: description,
        prize: prize,
        colorVariant: [],
        image: image,
      },
    });
    revalidatePath("/products");
  } catch (error) {
    return "Failed to Create";
  }
}

export async function edit(formData: FormData) {
  "use server";

  const input = formData.get("input") as string;
  const input2 = formData.get("input2") as string;
  const input3 = formData.get("input3") as string;
  const input4 = parseFloat(formData.get("input4") as string);
  const input5 = formData.get("input5") as string;
  const inputId = formData.get("inputId") as string;

  await prisma.product.update({
    where: {
      id: inputId,
    },
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

export async function deleteItem(formData: FormData) {
  "use server";

  const inputId = formData.get("inputId") as string;

  await prisma.product.delete({
    where: {
      id: inputId,
    },
  });

  revalidatePath("/");
}
