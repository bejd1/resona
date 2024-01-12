import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoIosCloseCircleOutline } from "react-icons/io";
import EditProductForm from "./editProductForm";
import DeleteProduct from "./deleteProduct";

type Props = {
  handleClose: () => void;
};

export function EditProduct({ handleClose }: Props) {
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
        <EditProductForm />
      </CardContent>
      <CardFooter className="flex justify-between">
        <DeleteProduct />
        <Button className=" bg-black">Edit</Button>
      </CardFooter>
    </Card>
  );
}
