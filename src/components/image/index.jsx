// SmartImage.jsx
import { useState } from "react";

export default function SmartImage({
  src,
  alt,
  width,
  height,
  className = "",
  placeholderSrc, // past sifatli blur rasm (LQIP)
  fallbackSrc, // xatoda ko'rsatiladigan rasm
  srcSet, // "img-640.jpg 640w, img-1280.jpg 1280w" kabi
  sizes, // "(max-width: 768px) 100vw, 768px" kabi
  style,
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const showSrc = error && fallbackSrc ? fallbackSrc : src;

  return (
    <div
      className={`relative overflow-hidden  ${className}`}
      style={{
        width,
        height,
        ...style,
      }}
    >
      {/* Blur placeholder */}
      {placeholderSrc && !loaded && !error && (
        <img
          src={placeholderSrc}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "blur(20px)", transform: "scale(1.05)" }}
        />
      )}

      <img
        src={showSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        srcSet={srcSet}
        sizes={sizes}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
