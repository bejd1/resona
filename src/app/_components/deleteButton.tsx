"use client";
import { useCartStore } from "@/store/cart";
import React from "react";
import { FaTrash } from "react-icons/fa6";

const DeleteButton = ({ id }: { id: any }) => {
  const { remove } = useCartStore();

  return (
    <div>
      <FaTrash onClick={() => remove(id)} />
    </div>
  );
};

export default DeleteButton;
