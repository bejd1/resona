"use client";

import * as React from "react";
import Modal from "@mui/material/Modal";
import { CreateProduct } from "@/components/modals/createCard";
import { CiCirclePlus } from "react-icons/ci";

export default function CreateProductModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative border-0">
      <CiCirclePlus className="text-4xl cursor-pointer" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="border-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-8 sm:px-0 sm:w-[550px]">
          <CreateProduct handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
}
