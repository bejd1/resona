import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EditProductForm = () => {
  return (
    <div>
      {" "}
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Title" />
            <Label htmlFor="model">Model</Label>
            <Input id="model" placeholder="Model" />
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Description" />
            <Label htmlFor="prize">Prize</Label>
            <Input id="prize" placeholder="Prize" />
            <Label htmlFor="colorVariant">Color Variant</Label>
            <Input id="colorVariant" placeholder="Color Variant" />
            <Label htmlFor="image">Url to image</Label>
            <Input id="image" placeholder="Url to image" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
