"use client";
import React, { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardFooter } from "../ui/card";
import DeleteProduct from "./deleteProduct";
import { Button } from "../ui/button";
import { edit } from "@/actions/post";
import { EditPropsT } from "@/types/types";
import { Divider } from "@mui/material";
import { Textarea } from "../ui/textarea";
import Loader from "@/app/_components/loader";
import UploadthingButton from "@/app/_uploadthing/page";
import { useToast } from "../ui/use-toast";

interface Props {
  id: EditPropsT["id"];
  productData: EditPropsT["productData"];
  handleClose: () => void;
}

const EditProductForm = ({ id, productData, handleClose }: Props) => {
  const image = productData?.image;
  const [isPending, startTransition] = useTransition();
  const [url, setUrl] = useState("");
  const [newKey, setNewKey] = useState<string>("");
  const [newUrl, setNewUrl] = useState<string>(() => image || "");
  const { toast } = useToast();

  const handleEditSubmit = async (formData: FormData) => {
    try {
      await edit(formData);

      startTransition(() => {
        handleClose();
      });
      return toast({
        title: "Success!",
        description: "You have successfully updated your product",
        variant: "success",
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
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              placeholder="Url to image"
              value={newUrl}
              className="hidden"
              name="editUrl"
              onChange={(e) => setUrl(e.target.value)}
            />
            {newUrl?.length === 0 ? (
              <div className="mb-4">
                <UploadthingButton
                  setUrl={setUrl}
                  setNewKey={setNewKey}
                  setNewUrl={setNewUrl}
                />
              </div>
            ) : null}

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
      <Button className="w-full" onClick={() => setNewUrl("")}>
        Delete image
      </Button>
      <div className="mt-2 w-full">
        <DeleteProduct id={id} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default EditProductForm;
