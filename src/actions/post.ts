"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import prisma from "../app/utils/db";
import { dataT } from "@/types/types";

export async function getData(): Promise<dataT[]> {
  const data = await prisma.product.findMany();
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    model: item.model,
    price: item.price,
    image: item.image as string,
  }));
}

export async function createProductWithImage(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const model = formData.get("model") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const image = formData.get("image") as string;

    await prisma.product.create({
      data: {
        title: title,
        model: model,
        description: description,
        price: price,
        image: image,
      },
    });
    revalidatePath("/products");
  } catch (error) {
    console.error("Error creating product from image:", error);
  }
}

export async function edit(formData: FormData) {
  try {
    const inputId = formData.get("inputId") as string;
    const input = formData.get("editTitle") as string;
    const input2 = formData.get("editModel") as string;
    const input3 = formData.get("editDescription") as string;
    const input4 = parseFloat(formData.get("editPrice") as string);
    const input6 = formData.get("editUrl") as string;

    await prisma.product.update({
      where: {
        id: inputId,
      },
      data: {
        title: input,
        model: input2,
        description: input3,
        price: input4,
        image: input6,
      },
    });

    revalidatePath("/products");
  } catch (error) {
    console.error("Error while editing the product:", error);
  }
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
      revalidatePath(`/products/${inputId}`);
    } else {
      console.error(`Product with ID ${inputId} not found`);
    }
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}
