"use client";

import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupDemo() {
  const [showText, setShowText] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setShowText(true);
  };

  return (
    <div>
      <RadioGroup defaultValue="comfortable" className="flex flex-row mb-2">
        <div className="flex items-center space-x-2 bg-red-900 rounded-full">
          <RadioGroupItem
            value="default"
            id="r1"
            onClick={() => handleColorChange("Red")}
          />
        </div>
        <div className="flex items-center space-x-2 bg-black rounded-full">
          <RadioGroupItem
            value="comfortable"
            id="r2"
            onClick={() => handleColorChange("Black")}
          />
        </div>
      </RadioGroup>
      {showText && (
        <div className="text-xl mt-3 mb-2">
          Color: <span className="text-xl">{selectedColor}</span>
        </div>
      )}
    </div>
  );
}
