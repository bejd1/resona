import React, { useRef, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { createProductWithImage } from "@/actions/post";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

const CreateProductForm = ({ handleClose }: { handleClose: () => void }) => {
  const ref = useRef<HTMLFormElement>(null);
  const [isPending] = useTransition();

  return (
    <div>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          handleClose();
          await createProductWithImage(formData);
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
            {/* <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" name="picture" required /> */}
            <Button
              onClick={() =>
                toast("Create", {
                  description: "",
                  action: {
                    label: "X",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
              type="submit"
              className="bg-black w-full"
            >
              {!isPending ? "Creating..." : "Create"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
