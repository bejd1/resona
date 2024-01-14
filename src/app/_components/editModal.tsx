"use client";
import * as React from "react";
import Modal from "@mui/material/Modal";
import { FaRegEdit } from "react-icons/fa";
import { EditProduct } from "@/components/modals/editCard";
import { EditProps } from "@/types/types";

export default function EditProductModal({ id, productData }: EditProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative border-0">
      <FaRegEdit
        className="text-3xl text-light cursor-pointer"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="border-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-8 sm:px-0 sm:w-[550px]">
          <EditProduct
            handleClose={handleClose}
            id={id}
            productData={productData}
          />
        </div>
      </Modal>
    </div>
  );
}
