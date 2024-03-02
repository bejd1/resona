import React from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { Button } from "@/components/ui/button";

interface DeleteImageButtonProps {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setNewKey: React.Dispatch<React.SetStateAction<string>>;
  url: string;
}

const DeleteImageButton = ({
  setUrl,
  setNewKey,
  url,
}: DeleteImageButtonProps) => {
  const deleteImage = async () => {
    try {
      await axios.delete("api/uploadthing", {
        data: { url: url },
      });
      console.log("delete image");
      setUrl("");
      setNewKey("");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <Button
        variant={"outline"}
        onClick={deleteImage}
        type="submit"
        className="absolute top-2 sm:top-0 right-0"
      >
        <MdDelete className="text-2xl" />
      </Button>
    </div>
  );
};

export default DeleteImageButton;
