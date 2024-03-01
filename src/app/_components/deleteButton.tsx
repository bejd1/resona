"use client";
import { useToast } from "@/components/ui/use-toast";
import { useCartStore } from "@/store/cart";
import React from "react";
import { FaTrash } from "react-icons/fa6";

const DeleteButton = ({ id }: { id: any }) => {
  const { remove } = useCartStore();
  const { toast } = useToast();

  const del = () => {
    remove(id);
    return toast({
      title: "Success!",
      description: "You remove item from the cart",
      variant: "success",
    });
  };

  return (
    <div>
      <FaTrash onClick={del} />
    </div>
  );
};

export default DeleteButton;
