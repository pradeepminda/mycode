import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import ProductCard from "../../components/cards/ProductCard";
import { Cat_1_Products, categories,AllProducts } from "../../utils/data";

const ProductShowcase = () => {
  const swiperRef = useRef(null);

  const [products, setProducts] = useState(Cat_1_Products)

  return (
    <div className="pb-12 px-4 md:px-12 bg-white">
      <div className="text-center mb-2 lg:mb-16">
        <h2 className="text-sm font-semibold text-gray-600 mb-2">
          Top Selling
        </h2>
        <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
          Our Best Quality Products
        </h1>
      </div>

      <div className="hidden md:flex  flex-col md:flex-row gap-8">
        {/* Left Sidebar - Hidden on mobile */}
        <div className="w-full md:w-1/4 bg-white rounded-lg shadow-2xl shadow-gray-200 p-4 max-h-[400px] overflow-y-auto">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
              onClick={()=>{setProducts(cat?.products ||[])}}
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

        {/* Product Carousel - Full width on mobile */}
        <div className="relative w-full md:w-3/4">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
            }}
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="mb-4">
                  <ProductCard product={product} imageHeight='h-64' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 group backdrop-blur-sm"
          >
            <LuChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 group backdrop-blur-sm"
          >
            <LuChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
       <div className="block md:hidden relative w-full md:w-3/4 pt-6" >
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
            }}
          >
            {AllProducts.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="mb-4">
                  <ProductCard product={product} imageHeight='h-64' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 group backdrop-blur-sm"
          >
            <LuChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 group backdrop-blur-sm"
          >
            <LuChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
    </div>
  );
};

export default ProductShowcase;