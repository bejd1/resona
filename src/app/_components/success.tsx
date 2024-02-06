import { useEffect } from "react";
import { useCartStore } from "@/store/cart";

export default function Success() {
  const { removeAll } = useCartStore();

  useEffect(() => {
    removeAll();
  }, [removeAll]);

  return <h1>Your payment was successful. Thank you for your purchase.</h1>;
}
