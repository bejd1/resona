"use server";

import { revalidatePath } from "next/cache";
import prisma from "../app/utils/db";
import { dataT } from "@/types/types";

export async function getData(
  category: string,
  sortOrder: string
): Promise<dataT[]> {
  let whereClause = {};
  if (category) {
    whereClause = {
      category: category,
    };
  }

  let orderByClause = {};
  if (sortOrder === "asc") {
    orderByClause = {
      price: "asc",
    };
  } else if (sortOrder === "desc") {
    orderByClause = {
      price: "desc",
    };
  }

  const data = await prisma.product.findMany({
    where: whereClause,
    orderBy: orderByClause,
  });

  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    model: item.model,
    price: item.price,
    category: item.category,
    image: item.image as string,
  }));
}

export async function createProductWithImage(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const model = formData.get("model") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const category = formData.get("category") as string;
    const image = formData.get("image") as string;

    await prisma.product.create({
      data: {
        title: title,
        model: model,
        description: description,
        price: price,
        category: category,
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
    const id = formData.get("inputId") as string;
    const title = formData.get("editTitle") as string;
    const model = formData.get("editModel") as string;
    const description = formData.get("editDescription") as string;
    const price = parseFloat(formData.get("editPrice") as string);
    const category = formData.get("category") as string;
    const image = formData.get("editUrl") as string;

    await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        model: model,
        description: description,
        price: price,
        category: category,
        image: image,
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
