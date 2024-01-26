import React, { useRef, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { createProductWithImage } from "@/actions/post";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

const CreateProductForm = ({ handleClose }: { handleClose: () => void }) => {
  const ref = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  const handleCreateSubmit = async (formData: FormData) => {
    try {
      await createProductWithImage(formData);

      startTransition(() => {
        handleClose();
      });

      toast("Success!", {
        description: "You have successfully create your product",
      });
      ref.current?.reset();
    } catch (error) {
      console.error("Edit function failed", error);
    }
  };

  return (
    <div>
      <form
        ref={ref}
        onSubmit={async (e) => {
          e.preventDefault();
          await handleCreateSubmit(new FormData(e.target as HTMLFormElement));
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
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              id="price"
              placeholder="Price"
              name="price"
              required
            />
            <Label htmlFor="image">Url to image</Label>
            <Input
              id="image"
              placeholder="Url to image"
              name="image"
              required
            />
            {/* <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" name="picture" required /> */}
            <Button
              disabled={isPending}
              type="submit"
              className="bg-black w-full"
            >
              {isPending ? "Creating..." : "Create"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
