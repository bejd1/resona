import React, { useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardFooter } from "../ui/card";
import DeleteProduct from "./deleteProduct";
import { Button } from "../ui/button";
import { edit } from "@/actions/post";
import { EditPropsT } from "@/types/types";
import { Divider } from "@mui/material";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import Loader from "@/app/_components/loader";

interface Props {
  id: EditPropsT["id"];
  productData: EditPropsT["productData"];
  handleClose: () => void;
}

const EditProductForm = ({ id, productData, handleClose }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleEditSubmit = async (formData: FormData) => {
    try {
      await edit(formData);

      startTransition(() => {
        handleClose();
      });
      toast("Success!", {
        description: "You have successfully updated your product",
        style: { backgroundColor: "#dbf5ec", color: "#10b981" },
      });
    } catch (error) {
      console.error("Edit function failed", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleEditSubmit(new FormData(e.target as HTMLFormElement));
        }}
      >
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <input type="hidden" name="inputId" value={id} />
            <Label htmlFor="title">Product name</Label>
            <Input
              id="title"
              placeholder="Product name"
              name="editTitle"
              defaultValue={productData?.title}
              autoFocus
            />
            <Label htmlFor="model">Model</Label>
            <Input
              id="model"
              placeholder="Model"
              name="editModel"
              defaultValue={productData?.model}
            />
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Description"
              name="editDescription"
              rows={4}
              defaultValue={productData?.description}
            />
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              placeholder="Price"
              name="editPrice"
              defaultValue={productData?.price}
            />
            <Label htmlFor="image">Url to image</Label>
            <Input
              id="image"
              placeholder="Url to image"
              name="editUrl"
              defaultValue={
                productData?.image !== null ? productData?.image : undefined
              }
            />
            {/* <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" name="editPicture" required /> */}
            <CardFooter className="flex justify-between p-0 w-full">
              <Button
                disabled={isPending}
                type="submit"
                className="bg-black w-full"
              >
                {isPending ? <Loader text={"Edit"} /> : "Edit"}
              </Button>
            </CardFooter>
            <Divider>or</Divider>
          </div>
        </div>
      </form>
      <div className="mt-2 w-full">
        <DeleteProduct id={id} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default EditProductForm;
