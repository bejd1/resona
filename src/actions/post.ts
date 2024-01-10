"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../lib/db";

export async function create(prevState: any, formData: FormData) {
  "use server";

  try {
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
  } catch (error) {
    return "Failed to Create";
  }
}
