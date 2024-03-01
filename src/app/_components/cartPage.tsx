"use client";
import { useCartStore } from "@/store/cart";
import React, { useEffect } from "react";
import EmptyCart from "./emptyCart";
import CartLeft from "./cartLeft";
import CartRight from "./cartRight";
import ContinueCart from "./continueCart";
import { useQuery } from "@tanstack/react-query";
import LoadingData from "./loadingData";
import ErrorData from "./errorData";

interface Session {
  user: string;
  token: string;
}

const CartPage = ({ session }: any) => {
  const { cart, totalCartPrice, totalIndividualPrice } = useCartStore();
  const totalPrice = totalCartPrice();

  const {
    data: items,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["items"],
    queryFn: async () => await cart,
  });
  if (isLoading) return <LoadingData />;
  if (isError) return <ErrorData />;

  return (
    <div>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="min-h-[80vh]">
          <h1 className="flex place-items-start text-2xl md:text-4xl font-extrabold mb-2">
            Your Cart
          </h1>
          <div className="w-full h-[1px] bg-black mb-8 md:mb-16"></div>
          <div className="flex flex-col gap-4 relative">
            {cart?.map((item) => {
              return (
                <CartLeft
                  key={item.id}
                  item={item}
                  totalIndividualPrice={totalIndividualPrice}
                />
              );
            })}
            <div className="lg:absolute lg:top-0 lg:right-0 lg:w-[27%]">
              <CartRight session={session} totalPrice={totalPrice} />
            </div>
          </div>
          <ContinueCart />
        </div>
      )}
    </div>
  );
};

export default CartPage;
