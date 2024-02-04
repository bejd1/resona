import { Card } from "@/components/ui/card";
import { CircularProgress } from "@mui/material";
import React from "react";

const LoadingData = () => {
  return (
    <div className="flex flex-col col-span-2 items-center justify-center min-h-[85vh] w-full">
      <Card className="flex items-center flex-col justify-center py-12 px-20 mb-40 mt-4">
        <CircularProgress />
        <p className="mt-4">Loading...</p>
      </Card>
    </div>
  );
};

export default LoadingData;
