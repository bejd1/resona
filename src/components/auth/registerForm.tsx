"use client";

import React, { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import Link from "next/link";
import { Divider } from "@mui/material";
import { FormSuccess } from "./formSuccess";
import { FormError } from "./formError";
import { register } from "@/actions/register";
import SingInWithGithub from "@/app/_components/singInWithGithub";
import SingInWithGoogle from "@/app/_components/singInWithGoogle";

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
      form.reset();
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-1"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="Mark Zuckerberg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="youremail@email.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="••••••••"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>
            Have an account?
            <Link
              className="ml-1 hover:underline ease-in duration-100"
              href="/login"
            >
              Sign In
            </Link>
          </FormLabel>
        </FormItem>

        <Button
          disabled={isPending}
          className="py-5 mt-1 bg-black"
          type="submit"
        >
          {!isPending ? " Create account" : "Creating..."}
        </Button>
        <FormItem className="text-center my-1 divide-y divide-blue-200">
          <Divider>or</Divider>
        </FormItem>
        <FormSuccess message={success} />
        <FormError message={error} />
      </form>
      <FormDescription className="flex gap-2">
        <SingInWithGithub />
        <SingInWithGoogle />
      </FormDescription>
    </Form>
  );
};

export default RegisterForm;
