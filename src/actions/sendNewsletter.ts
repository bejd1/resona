"use server";
import { Resend } from "resend";
import NewsletterEmail from "../app/_components/emailTemplate";
import { revalidatePath } from "next/cache";
import prisma from "@/app/utils/db";
import db from "@/app/utils/db";

export async function send(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const email = formData.get("email") as string;

  const existingUser = await db.newsletter.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "Email already in use" };
  }
  try {
    await prisma.newsletter.create({
      data: {
        email: email,
      },
    });

    const { data } = await resend.emails.send({
      // from: "Resona newsletter <resonateam@resona.com>",
      from: "Resona newsletter <onboarding@resend.dev>",
      to: email,
      subject: "Resona Team newsletter",
      react: NewsletterEmail(),
    });

    revalidatePath("/");
    console.log(data);

    return { success: "Success, you have subscribed to the newsletter" };
  } catch (error) {
    console.error("Error joining the newsletter:", error);
    throw error;
  }
}
