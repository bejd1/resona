"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../lib/db";
import { dataT } from "@/types/types";

export async function getData(): Promise<dataT[]> {
  const data = await prisma.product.findMany();
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    model: item.model,
    prize: item.prize,
    image: item.image as string,
    // picture: item.image,
  }));
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

  const inputId = formData.get("inputId") as string;
  const input = formData.get("editTitle") as string;
  const input2 = formData.get("editModel") as string;
  const input3 = formData.get("editDescription") as string;
  const input4 = parseFloat(formData.get("editPrize") as string);
  const input6 = formData.get("editUrl") as string;

  await prisma.product.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
      model: input2,
      description: input3,
      prize: input4,
      image: input6,
    },
  });

  revalidatePath("/products");
}

export async function deleteItem(formData: FormData) {
  "use server";

  try {
    const inputId = formData.get("inputId") as string;

    const existingProduct = await prisma.product.findUnique({
      where: {
        id: inputId,
      },
    });

    if (existingProduct) {
      await prisma.product.delete({
        where: {
          id: inputId,
        },
      });

      revalidatePath("/products");
    } else {
      console.error(`Product with ID ${inputId} not found`);
    }
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}
