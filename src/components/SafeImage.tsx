"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export default function SafeImage({
  src,
  alt,
  className = "",
  fallbackSrc = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  ...props
}: SafeImageProps) {
  const [prevSrc, setPrevSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  if (prevSrc !== src) {
    setPrevSrc(src);
    setHasError(false);
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-charcoal-deep/20">
      <Image
        decoding="async"
        {...props}
        src={hasError ? fallbackSrc : src}
        alt={alt}
        className={`transition-transform duration-700 ease-luxury ${className}`}
        onError={() => {
          setHasError(true);
        }}
      />
    </div>
  );
}
