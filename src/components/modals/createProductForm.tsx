"use client";
import React, { useRef, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { createProductWithImage } from "@/actions/post";
import { Textarea } from "../ui/textarea";
import Loader from "@/app/_components/loader";
import UploadthingButton from "@/app/_uploadthing/page";
import Image from "next/image";
import DeleteImageButton from "@/app/_components/deleteImageButton";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const CreateProductForm = ({ handleClose }: { handleClose: () => void }) => {
  const ref = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [url, setUrl] = useState<string>("");
  const [newUrl, setNewUrl] = useState<string>("");
  const [newKey, setNewKey] = useState<string>("");
  const { toast } = useToast();
  const router = useRouter();

  const handleCreateSubmit = async (formData: FormData) => {
    try {
      await createProductWithImage(formData);

      startTransition(() => {
        handleClose();
      });
      ref.current?.reset();
      router.refresh();
      router.push("/");
      setTimeout(() => {
        router.push("/products");
      }, 500);

      toast({
        title: "Success!",
        description: "You have successfully create your product",
        variant: "success",
      });
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
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              placeholder="Url to image"
              name="image"
              className="hidden"
              required
            />
            <div className="mb-4">
              <UploadthingButton
                setUrl={setUrl}
                setNewKey={setNewKey}
                setNewUrl={setNewUrl}
              />
            </div>
            <Button
              disabled={isPending || url.length === 0}
              type="submit"
              className="bg-black w-full"
            >
              {isPending ? <Loader text={"Create"} /> : "Create"}
            </Button>
          </div>
        </div>
      </form>
      <div className="flex flex-col">
        {url.length === 0 ? null : (
          <div className="flex items-center justify-center relative mt-3">
            <Image width={300} height={300} src={url} alt="Uploadthing image" />
            <DeleteImageButton
              setUrl={setUrl}
              setNewKey={setNewKey}
              url={url}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProductForm;
