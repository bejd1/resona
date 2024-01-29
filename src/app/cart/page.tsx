"use client";

import React from "react";
import CartLeft from "../_components/cartLeft";
import CartRight from "../_components/cartRight";
import { useCartStore } from "@/store/cart";
import EmptyCart from "../_components/emptyCart";

const Cart = () => {
  const { cart, totalCartPrice, totalIndividualPrice } = useCartStore();
  const totalPrice = totalCartPrice();
  return (
    <div className="py-6 md:py-12 px-4 md:px-8 lg:px-12 xl:px-20 h-[86vh] md:h-[82vh] min-h-max">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <h1 className="flex place-items-start text-2xl md:text-4xl font-extrabold mb-2">
            Your Cart
          </h1>
          <div className="w-full h-[1px] bg-black mb-8 md:mb-16"></div>
          <div className="flex flex-col lg:grid grid-cols-3 relative gap-4">
            {cart.map((item) => {
              return (
                <CartLeft
                  key={item.id}
                  item={item}
                  totalIndividualPrice={totalIndividualPrice}
                />
              );
            })}
            <div className="max-h-max">
              <CartRight totalPrice={totalPrice} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
