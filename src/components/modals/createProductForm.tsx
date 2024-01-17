import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { create } from "@/actions/post";
import { Textarea } from "../ui/textarea";

const CreateProductForm = ({ handleClose }: { handleClose: () => void }) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          handleClose();
          await create(formData);
        }}
      >
        <div className=" w-full items-center gap-20">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="title">Product name</Label>
            <Input
              id="title"
              placeholder="Product name"
              name="title"
              autoFocus
              required
            />
            <Label htmlFor="model">Model</Label>
            <Input id="model" placeholder="Model" name="model" required />
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Description"
              name="description"
              rows={4}
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
            <Label htmlFor="image">Url to image</Label>
            <Input
              id="image"
              placeholder="Url to image"
              name="image"
              required
            />
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" required />
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
