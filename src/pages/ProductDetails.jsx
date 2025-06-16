import React from "react";
import Layout from "../components/layouts/Layout";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetailsCard from "../components/cards/product_details/ProductDetailsCard";

function ProductDetails() {
  const steps = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Astral D-Rex DWC HDPE Pipes" }, // current page, no href
  ];
  return (
    <Layout>
      <div className="container mx-auto">
        <Breadcrumb steps={steps} />
        <ProductDetailsCard />
      </div>
    </Layout>
  );
}

export default ProductDetails;
