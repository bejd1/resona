"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { db } from "../../lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // Validate input using the RegisterSchema
  const validateFields = RegisterSchema.safeParse(values);

  // Check if validation was successful
  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, password } = validateFields.data;

  // Hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check if the user with the provided email already exists
  const existingUser = await db.user.findUnique({
    where: { email },
  });

  // If user already exists, return an error
  if (existingUser) {
    return { error: "Email already in use" };
  }

  // Create a new user in the database
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Registration successful" };
};
