"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackText: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  fallbackText 
}) => {
  const [error, setError] = useState(false);
  
  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
        <p className="text-gray-400 text-sm">{fallbackText}</p>
      </div>
    );
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain"
      onError={() => setError(true)}
    />
  );
};

export default ImageWithFallback; 