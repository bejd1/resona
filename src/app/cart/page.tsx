import React from "react";
import CartPage from "../_components/cartPage";
import { Metadata } from "next";
import { auth } from "../utils/auth";

export const metadata: Metadata = {
  title: "Cart",
};

interface SessionI {
  user: string;
  token: string;
}

const Cart = async () => {
  const session = await auth();
  return (
    <div className="py-6 md:py-12 px-4 md:px-8 lg:px-12 xl:px-20 max-h-max">
      <CartPage session={session} />
    </div>
  );
};

export default Cart;
