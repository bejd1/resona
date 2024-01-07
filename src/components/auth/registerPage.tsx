import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import RegisterForm from "./registerForm";

export function RegisterCard() {
  return (
    <Card className="w-5/6 sm:w-[420px] mb-32">
      <CardHeader>
        <CardTitle className="text-center text-2xl mb-1">
          Create a new account
        </CardTitle>
        <RegisterForm />
      </CardHeader>
    </Card>
  );
}
