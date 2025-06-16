import React from "react";

// Default product data
const defaultProduct = {
  title: "Astral D-Rex DWC HDPE Pipes",
  description: "Application: Non-pressure, underground pipes for drainage...",
  image: null, // placeholder for image
};

export default function ProductCard({
  product = defaultProduct,
  onClick,
  className = "",
  imageHeight = "h-46",
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Image Container */}
      <div
        className={`bg-white-200 ${imageHeight} flex items-center justify-center`}
      >
        {product.imgUrl ? (
          <img
            src={product.imgUrl?.[1] || product.imgUrl?.[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 aspect-square">
            {/* <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg> */}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="px-5 py-7">
        <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
}
