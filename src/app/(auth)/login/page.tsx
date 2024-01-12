import { LoginCard } from "@/components/auth/loginPage";
import React from "react";

const Login = () => {
  return (
    <div className="flex space-x-6 h-[82vh] px-0 sm:px-12 lg:px-24 py-16 items-center justify-center">
      <LoginCard />
    </div>
  );
};

export default Login;