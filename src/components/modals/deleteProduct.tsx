import React from "react";
import { Button } from "../ui/button";
import { deleteItem } from "@/actions/post";
import { useRouter } from "next/navigation";
const DeleteProduct = ({
  id,
  handleClose,
}: {
  id: string | undefined;
  handleClose: () => void;
}) => {
  const router = useRouter();

  const navigateToProducts = () => {
    router.back();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <form
        action={async (formData) => {
          handleClose();
          await deleteItem(formData);
        }}
      >
        <input type="hidden" name="inputId" value={id} />
        <Button
          formAction={deleteItem}
          onClick={navigateToProducts}
          className="bg-red-600 hover:bg-red-500 w-full"
        >
          Delete
        </Button>
      </form>
    </div>
  );
};

export default DeleteProduct;
