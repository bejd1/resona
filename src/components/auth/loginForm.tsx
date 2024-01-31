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
import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import { FormSuccess } from "./formSuccess";
import { FormError } from "./formError";
import { login } from "@/actions/login";
import SingInWithGoogle from "@/app/_components/singInWithGoogle";
import SingInWithGithub from "@/app/_components/singInWithGithub";

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
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
            Don't have an account?
            <Link
              className="ml-1 hover:underline ease-in duration-100"
              href="/register"
            >
              Create it
            </Link>
          </FormLabel>
        </FormItem>
        <Button disabled={isPending} className="py-5 mt-1" type="submit">
          Login
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

export default LoginForm;
