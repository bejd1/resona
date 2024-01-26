import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IoIosCloseCircleOutline } from "react-icons/io";
import EditProductForm from "./editProductForm";
import { EditPropsT } from "@/types/types";

type Props = {
  handleClose: () => void;
};

export function EditProduct({
  handleClose,
  id,
  productData,
}: {
  handleClose: Props["handleClose"];
  id: EditPropsT["id"];
  productData: EditPropsT["productData"];
}) {
  return (
    <Card className="relative border-none">
      <IoIosCloseCircleOutline
        className="absolute right-4 top-3 text-4xl cursor-pointer border-none"
        onClick={handleClose}
      />
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Edit product</CardTitle>
      </CardHeader>
      <CardContent>
        <EditProductForm
          id={id}
          productData={productData}
          handleClose={handleClose}
        />
      </CardContent>
    </Card>
  );
}
