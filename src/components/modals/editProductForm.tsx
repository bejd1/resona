import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardFooter } from "../ui/card";
import DeleteProduct from "./deleteProduct";
import { Button } from "../ui/button";
import { edit } from "@/actions/post";
import { EditProps } from "@/types/types";
import { Divider } from "@mui/material";

const EditProductForm = ({ id, productData }: EditProps) => {
  return (
    <div>
      <form action={edit}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <input type="hidden" name="inputId" value={id} />
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Title"
              name="editTitle"
              defaultValue={productData?.title}
            />
            <Label htmlFor="model">Model</Label>
            <Input
              id="model"
              placeholder="Model"
              name="editModel"
              defaultValue={productData?.model}
            />
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              placeholder="Description"
              name="editDescription"
              defaultValue={productData?.description}
            />
            <Label htmlFor="prize">Prize</Label>
            <Input
              id="prize"
              placeholder="Prize"
              name="editPrize"
              defaultValue={productData?.prize}
            />
            <Label htmlFor="colorVariant">Color Variant</Label>
            <Input
              id="colorVariant"
              placeholder="Color Variant"
              name="editVariant"
              defaultValue={productData?.colorVariant}
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
            <CardFooter className="flex justify-between p-0 w-full">
              <Button type="submit" className="bg-black w-full">
                Edit
              </Button>
            </CardFooter>
            <Divider>or</Divider>
          </div>
        </div>
      </form>
      <div className="mt-2 w-full">
        <DeleteProduct id={id} />
      </div>
    </div>
  );
};

export default EditProductForm;
