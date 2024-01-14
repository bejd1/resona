import React from "react";
import { Button } from "../ui/button";
import { deleteItem } from "@/actions/post";

const DeleteProduct = ({ id }: { id: string | undefined }) => {
  return (
    <div>
      <form action={deleteItem}>
        <input type="hidden" name="inputId" value={id} />
        <Button className="bg-red-600 hover:bg-red-500">Delete</Button>
      </form>
    </div>
  );
};

export default DeleteProduct;
