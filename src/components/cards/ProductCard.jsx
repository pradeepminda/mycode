import React from "react";

// Default product data
const defaultProduct = {
  title: "Astral D-Rex DWC HDPE Pipes",
  description: "Non-pressure, underground pipes for drainage...",
  image: null, // placeholder for image
};

export default function ProductCard({
  product = defaultProduct,
  onClick,
  className = "",
  imageHeight = "h-40 md:h-46", // Responsive image height
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Image Container */}
      <div
        className={`bg-gray-100 ${imageHeight} flex items-center justify-center w-full`}
      >
        {product.imgUrl ? (
          <img
            src={product.imgUrl?.[1] || product.imgUrl?.[0]}
            alt={product.name}
            className="w-full h-full object-contain p-2" // Added padding and contain for better image display
            loading="lazy" // Add lazy loading
          />
        ) : (
          <div className="text-gray-400 w-full h-full flex items-center justify-center bg-gray-200">
            <svg 
              className="w-12 h-12 md:w-16 md:h-16" // Responsive SVG size
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-3 md:px-5 md:py-4"> {/* Responsive padding */}
        <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1 md:mb-2 leading-tight line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
}