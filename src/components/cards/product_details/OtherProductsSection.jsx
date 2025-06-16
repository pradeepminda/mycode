import ProductCard from "../ProductCard";

export function OtherProductsSection() {
  const products = [
    {
      title: "Astral D-Rex DWC HDPE Pipes",
      description:
        "Application: Non-pressure, underground pipes for drainage...",
      image: null,
    },
    {
      title: "Astral D-Rex DWC HDPE Pipes",
      description:
        "Application: Non-pressure, underground pipes for drainage...",
      image: null,
    },
    {
      title: "Astral D-Rex DWC HDPE Pipes",
      description:
        "Application: Non-pressure, underground pipes for drainage...",
      image: null,
    },
    {
      title: "Astral D-Rex DWC HDPE Pipes",
      description:
        "Application: Non-pressure, underground pipes for drainage...",
      image: null,
    },
    {
      title: "Astral D-Rex DWC HDPE Pipes",
      description:
        "Application: Non-pressure, underground pipes for drainage...",
      image: null,
    },
    {
      title: "Astral D-Rex DWC HDPE Pipes",
      description:
        "Application: Non-pressure, underground pipes for drainage...",
      image: null,
    },
  ];

  const handleCardClick = (product) => {
    console.log("Card clicked:", product.title);
    // Add your navigation logic here
  };

  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Other Products
        </h2>

        {/* Horizontal Scrolling Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
            {products.map((product, index) => (
              <div key={index} className="w-55 flex-shrink-0">
                <ProductCard
                  product={product}
                  onClick={() => handleCardClick(product)}
                  imageHeight="h-32"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
