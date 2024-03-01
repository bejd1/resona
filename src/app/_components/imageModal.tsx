"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import ImageViewer from "react-simple-image-viewer";

const ImageModal = ({ image, title }: { title: string; image: any }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [image];

  const openImageViewer = useCallback((index: number) => {
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
          className="rounded-lg cursor-pointer object-cover sm:h-[800px] sm:w-[900px]"
          priority
          alt={`Product picture ${title} `}
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
