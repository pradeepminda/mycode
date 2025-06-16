import React from "react";

function ProductImages() {
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="bg-gray-200 aspect-[4/3] rounded-lg flex items-center justify-center"></div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-200 aspect-[4/3] rounded-lg flex items-center justify-center"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
