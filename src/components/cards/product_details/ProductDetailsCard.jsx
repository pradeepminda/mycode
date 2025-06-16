import React from "react";
import ProductImages from "./ProductImages";
import ProductBody from "./ProductBody";
import ProductTable from "./ProductTable";
import { OtherProductsSection } from "./OtherProductsSection";

function ProductDetailsCard() {
  return (
    <div className="py-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Image Gallery */}
        <ProductImages />

        {/* Right Column - Product Details */}
        <ProductBody />
      </div>
      <ProductTable />
      <OtherProductsSection />
    </div>
  );
}

export default ProductDetailsCard;
