import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IoIosCloseCircleOutline } from "react-icons/io";
import EditProductForm from "./editProductForm";

type Props = {
  handleClose: () => void;
  id: string | undefined;
};

export function EditProduct({ handleClose, id }: Props) {
  return (
    <Card className="relative">
      <IoIosCloseCircleOutline
        className="absolute right-4 top-3 text-4xl cursor-pointer"
        onClick={handleClose}
      />
      <CardHeader>
        <CardTitle className="text-2xl sm:text-3xl">Edit product</CardTitle>
      </CardHeader>
      <CardContent>
        <EditProductForm id={id} />
      </CardContent>
    </Card>
  );
}
