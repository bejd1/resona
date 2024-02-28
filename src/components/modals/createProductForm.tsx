"use client";
import React, { useRef, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { createProductWithImage } from "@/actions/post";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import Loader from "@/app/_components/loader";
import UploadthingButton from "@/app/_uploadthing/page";
import Image from "next/image";

const CreateProductForm = ({ handleClose }: { handleClose: () => void }) => {
  const ref = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [url, setUrl] = useState<string>("");
  const [newKey, setNewKey] = useState<string>("");
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);

  const handleCreateSubmit = async (formData: FormData) => {
    try {
      await createProductWithImage(formData);

      startTransition(() => {
        handleClose();
      });
      toast("Success!", {
        description: "You have successfully create your product",
        style: { backgroundColor: "#dbf5ec", color: "#10b981" },
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
            <Label htmlFor="price">Image</Label>
            <Input
              id="image"
              value={url}
              placeholder="Url to image"
              name="image"
              className="hidden"
              required
            />
            <p>{isImageUploaded ? "ADD IMAGE" : "ADD IMAGE"}</p>
            <p>{url.length === 0 ? "NO IMAGE" : "ADD IMAGE"}</p>
            <div className="mb-4">
              <UploadthingButton
                setUrl={setUrl}
                setNewKey={setNewKey}
                setIsImageUploaded={setIsImageUploaded}
              />
            </div>
            <Button
              disabled={isPending}
              type="submit"
              className="bg-black w-full"
            >
              <div className="flex flex-col mt-6">
                {url.length === 0 ? null : (
                  <div className="relative">
                    <Image width={200} height={200} src={url} alt="myimg" />

                    {/* <DeleteImageButton
                setUrl={setUrl}
                setNewKey={setNewKey}
                url={url}
              /> */}
                  </div>
                )}
              </div>
              {isPending ? <Loader text={"Create"} /> : "Create"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
