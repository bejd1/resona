import { auth } from "@/app/utils/auth";
import { LoginCard } from "@/components/auth/loginPage";
import { redirect } from "next/navigation";
import React from "react";

const Login = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="flex space-x-6 h-[86vh] md:h-[82vh] px-0 sm:px-12 lg:px-24 py-16 items-center justify-center">
      <LoginCard />
    </div>
  );
};

export default Login;
