import * as React from "react";
import { FaGithub } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "./ui/button";

export function CardWithFormRegister() {
  return (
    <Card className="w-5/6 sm:w-[420px] mb-32">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Start</CardTitle>
        <CardDescription>
          <Input className="my-4 h-12" placeholder="Login" />
          <Input className="h-12" type="password" placeholder="Password" />
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-col items-center gap-1 w-full">
          <div className="flex gap-1">
            <p className="mb-2">Have an account?</p>
            <Link href="/login">
              <span className="underline">Sign In</span>
            </Link>
          </div>
          <button className="bg-black px-4 py-3 font-poppins text-white rounded-md hover:text-gray-400 ease-in-out duration-300 w-full">
            CREATE ACCOUNT
          </button>
          <p>or</p>
          <Button className="bg-black hover:bg-black">
            <FaGithub />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
