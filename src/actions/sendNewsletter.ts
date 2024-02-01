"use server";
import { Resend } from "resend";
import NewsletterEmail from "../app/_components/emailTemplate";
import { revalidatePath } from "next/cache";
import prisma from "@/app/utils/db";

export async function send(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  // try {
  //   const email = formData.get("email") as string;

  //   revalidatePath("/products");
  //   await prisma.product.create({
  //     data: {
  //       email: email,
  //     },
  //   });
  // } catch (error) {
  //   console.error("Error creating product from image:", error);
  // }

  const { data } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "bejdi7@gmail.com",
    // to: {email},
    subject: "Resona Team",
    react: NewsletterEmail(),
  });
  console.log(data);
}
