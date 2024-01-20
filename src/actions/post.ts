"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../lib/db";
import { dataT } from "@/types/types";
import { Buffer } from "buffer";

export async function getData(): Promise<dataT[]> {
  const data = await prisma.product.findMany();
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    model: item.model,
    prize: item.prize,
    image: item.image as string,
    // picture: item.picture,
  }));
}

export async function createProductWithImage(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const model = formData.get("model") as string;
    const description = formData.get("description") as string;
    const prize = parseFloat(formData.get("prize") as string);
    const image = formData.get("image") as string;
    // const pictureFile = formData.get("picture") as File;
    // const arrayBuffer = await pictureFile.arrayBuffer();
    // const buffer = Buffer.from(arrayBuffer);

    revalidatePath("/products");

    await prisma.product.create({
      data: {
        title: title,
        model: model,
        description: description,
        prize: prize,
        image: image,
        // picture: buffer,
      },
    });
  } catch (error) {
    console.error("Błąd podczas tworzenia produktu z obrazem:", error);
  }
}

export async function edit(formData: FormData) {
  try {
    const inputId = formData.get("inputId") as string;
    const input = formData.get("editTitle") as string;
    const input2 = formData.get("editModel") as string;
    const input3 = formData.get("editDescription") as string;
    const input4 = parseFloat(formData.get("editPrize") as string);
    const input6 = formData.get("editUrl") as string;
    // const input7 = formData.get("editPicture") as File;

    // let picture: Buffer | undefined;

    // if (input7) {
    //   const pictureBuffer = await input7.arrayBuffer();
    //   picture = Buffer.from(pictureBuffer);
    // }

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
        // picture: picture,
      },
    });

    revalidatePath("/products");
  } catch (error) {
    console.error("Błąd podczas edycji produktu:", error);
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

      revalidatePath("/products");
    } else {
      console.error(`Product with ID ${inputId} not found`);
    }
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}
