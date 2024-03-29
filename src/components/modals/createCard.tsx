import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CreateProductForm from "./createProductForm";

type Props = {
  handleClose: () => void;
};

export function CreateProduct({ handleClose }: Props) {
  return (
    <Card className="relative">
      <IoIosCloseCircleOutline
        className="absolute right-4 top-3 text-4xl cursor-pointer"
        onClick={handleClose}
      />
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl sm:text-3xl">
          Create a new product
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CreateProductForm handleClose={handleClose} />
      </CardContent>
    </Card>
  );
}
