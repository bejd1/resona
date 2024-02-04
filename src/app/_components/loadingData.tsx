import { CircularProgress } from "@mui/material";
import React from "react";

const LoadingData = () => {
  return (
    <div className="flex flex-col col-span-2 items-center justify-center min-h-[85vh] w-full">
      <CircularProgress />
      <p className="mt-4 mb-40">Loading...</p>
    </div>
  );
};

export default LoadingData;
