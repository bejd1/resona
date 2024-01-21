import React, { useTransition } from "react";
import { Button } from "../ui/button";
import { deleteItem } from "@/actions/post";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const DeleteProduct = ({
  id,
  handleClose,
}: {
  id: string | undefined;
  handleClose: () => void;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDeleteSubmit = async (formData: FormData) => {
    try {
      await deleteItem(formData);

      startTransition(() => {
        handleClose();
      });
      toast("Success!", {
        description: "You have successfully delete your product",
      });
    } catch (error) {
      console.error("Edit function failed", error);
    }
    router.back();
  };

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleDeleteSubmit(new FormData(e.target as HTMLFormElement));
        }}
      >
        <input type="hidden" name="inputId" value={id} />
        <Button
          disabled={isPending}
          type="submit"
          className="bg-red-600 hover:bg-red-500 w-full"
        >
          {!isPending ? "Delete" : "Deleting..."}
        </Button>
      </form>
    </div>
  );
};

export default DeleteProduct;
