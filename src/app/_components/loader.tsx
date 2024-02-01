import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = ({ text }: any) => {
  return (
    <div className="flex justify-center items-center gap-2">
      {text} <CircularProgress size={20} />
    </div>
  );
};

export default Loader;
