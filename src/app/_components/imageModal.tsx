"use client";
import React, { useState, useCallback, useEffect, lazy } from "react";
import Image from "next/image";
import ImageViewer from "react-simple-image-viewer";
import { CircularProgress } from "@mui/material";

const ImageModal = ({ image }: any) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [image];

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    if (isViewerOpen) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "scroll";
    return () => {};
  }, [isViewerOpen]);

  return (
    <div>
      {images.map((src, index) => (
        <Image
          onClick={() => openImageViewer(index)}
          src={src}
          key={index}
          height={700}
          width={900}
          style={{ borderRadius: "8px", cursor: "pointer" }}
          priority
          alt="Product picture"
        />
      ))}
      <div className="z-4">
        {isViewerOpen && (
          <div className="z-[122]">
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
