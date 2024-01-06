"use client";

import React from "react";
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
import { Button } from "../ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Divider from "@mui/material/Divider";
// import { FormSuccess } from "./formSuccess";
// import { FormError } from "./formError";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
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
                <Input placeholder="••••••••" type="password" {...field} />
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
        <Button className="py-5 mt-1 bg-black" type="submit">
          Submit
        </Button>
        <FormItem className="text-center my-1 divide-y divide-blue-200">
          <Divider>or</Divider>
        </FormItem>
      </form>
      <FormDescription className="flex gap-2">
        <Button className="bg-black w-full py-5">
          <FaGithub className="mr-2" />
          Github
        </Button>
        <Button className="bg-black w-full py-5">
          <FaGoogle className="mr-2" />
          Google
        </Button>
      </FormDescription>
    </Form>
  );
};

export default LoginForm;
