import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { create } from "@/actions/post";
import { Textarea } from "../ui/textarea";

const CreateProductForm = () => {
  return (
    <div>
      <form action={create}>
        <div className=" w-full items-center gap-20">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Title" name="title" required />
            <Label htmlFor="model">Model</Label>
            <Input id="model" placeholder="Model" name="model" required />
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Description"
              name="description"
              required
            />
            <Label htmlFor="prize">Prize</Label>
            <Input
              type="number"
              id="prize"
              placeholder="Prize"
              name="prize"
              required
            />
            <Label htmlFor="colorVariant">Color Variant</Label>
            <Input
              id="colorVariant"
              placeholder="Color Variant"
              name="colorVariant"
              required
            />
            <Label htmlFor="image">Url to image</Label>
            <Input
              id="image"
              placeholder="Url to image"
              name="image"
              required
            />

            <Button type="submit" className="bg-black w-full">
              Create
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
