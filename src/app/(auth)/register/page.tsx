import { auth } from "@/app/utils/auth";
import { RegisterCard } from "@/components/auth/registerPage";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Join to Resona",
};

const Login = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="flex space-x-6 h-[86vh] md:h-[82vh] px-0 sm:px-12 lg:px-24 py-16 items-center justify-center">
      <RegisterCard />
    </div>
  );
};

export default Login;
