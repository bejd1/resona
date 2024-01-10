import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "The password is required"),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, "The name is required"),
  email: z.string().email(),
  password: z.string().min(4, "Minimum 4 characters required"),
});

export const ProductsSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  model: z.string(),
  description: z.string().min(1, { message: "Description is required" }),
  prize: z.number(),
  colorVariant: z.array(z.string()),
  image: z.string().optional(),
});
