import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import { Cat_1_Product, categories } from "../utils/data";
import ProductCard from "../components/cards/ProductCard";
import PageHeader from "../components/cards/PageHeader";

// const products = [
//   {
//     title: "Astral D-Rex DWC HDPE Pipes",
//     description: "Application: Non-pressure, underground pipes for drainage...",
//     image: null,
//   },
//   {
//     title: "Astral D-Rex DWC HDPE Pipes",
//     description: "Application: Non-pressure, underground pipes for drainage...",
//     image: null,
//   },
//   {
//     title: "Astral D-Rex DWC HDPE Pipes",
//     description: "Application: Non-pressure, underground pipes for drainage...",
//     image: null,
//   },
//   {
//     title: "Astral D-Rex DWC HDPE Pipes",
//     description: "Application: Non-pressure, underground pipes for drainage...",
//     image: null,
//   },
//   {
//     title: "Astral D-Rex DWC HDPE Pipes",
//     description: "Application: Non-pressure, underground pipes for drainage...",
//     image: null,
//   },
//   {
//     title: "Astral D-Rex DWC HDPE Pipes",
//     description: "Application: Non-pressure, underground pipes for drainage...",
//     image: null,
//   },
// ];

const steps = [{ label: "Home", href: "/" }, { label: "Products" }];

const Products = () => {
  const handleCardClick = (product) => {
    console.log("Card clicked:", product.title);
    // Add your navigation logic here
  };
  const [title, setTitle] = useState("UNDERGROUND DRAINAGE")
  const [products, setProducts] = useState(Cat_1_Product)
  const totalCount = categories.reduce((sum, category) => sum + category.count, 0);
  return (
    <Layout activeMenu="Products">
      <div className="container mx-auto py-10">
        <PageHeader
          steps={steps}
          pageTitle="Product Catalog"
          infoText="All the products are technically approved, cost effective, saves on labor, time are having Very long life. While the range of products they deal in is large, given below are some of the products that will be of interest to you."
        />

        <div className="grid grid-cols-12 mt-5 gap-10">
          <div className="col-span-3">
            <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 mx-1">
              <h3 className="text-lg font-semibold text-black">Catalog</h3>
              <span className="text-xs font-medium bg-blue-100 text-blue-600 rounded-full px-4 py-0.5">
               {totalCount}
              </span>
            </div>

            <div className="w-full bg-white rounded-lg p-4 max-h-[400px] overflow-y-auto border border-gray-100">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  onClick={()=>{setProducts(cat?.products ||[])
                    setTitle(cat.name)
                  }}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-[13px] font-medium text-gray-700">
                    {cat.name}
                  </span>
                  <span className="text-xs font-medium bg-blue-100 text-blue-600 rounded-full px-4 py-0.5">
                    {cat.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-9">
            <div className="mt-2.5">
              <h3 className="text-lg font-semibold text-black">
                {title}
              </h3>
              <div className="grid grid-cols-4 mt-5 gap-5">
                {products.map((product, index) => (
                  <div key={index} className=" flex-shrink-0">
                    <ProductCard
                      product={product}
                      onClick={() => handleCardClick(product)}
                      imageHeight="h-48"
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
