import React, { useState, useEffect, useRef } from "react";
import company_logo from "../../assets/company-logo-1.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { categories } from "../../utils/data";

// // Sample data
// const categories = [
//   {
//     name: "Electronics",
//     count: 24,
//     products: [
//       {
//         title: "Wireless Headphones",
//         description: "Premium noise-canceling audio experience",
//         image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop"
//       },
//       {
//         title: "Smart Watch",
//         description: "Advanced fitness tracking and notifications",
//         image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop"
//       },
//       {
//         title: "Laptop Stand",
//         description: "Ergonomic aluminum laptop stand",
//         image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop"
//       },
//       {
//         title: "Wireless Mouse",
//         description: "Precision wireless mouse with long battery",
//         image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=200&fit=crop"
//       }
//     ]
//   },
//   {
//     name: "Clothing",
//     count: 18,
//     products: [
//       {
//         title: "Summer T-Shirt",
//         description: "Comfortable cotton blend casual wear",
//         image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop"
//       },
//       {
//         title: "Denim Jacket",
//         description: "Classic vintage-style denim jacket",
//         image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=200&fit=crop"
//       },
//       {
//         title: "Running Shoes",
//         description: "Lightweight athletic shoes for daily wear",
//         image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop"
//       },
//       {
//         title: "Winter Coat",
//         description: "Warm and stylish winter outerwear",
//         image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=300&h=200&fit=crop"
//       }
//     ]
//   },
//   {
//     name: "Home & Garden",
//     count: 32,
//     products: [
//       {
//         title: "Indoor Plant Set",
//         description: "Beautiful low-maintenance houseplants",
//         image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop"
//       },
//       {
//         title: "Kitchen Utensils",
//         description: "Professional grade cooking tools",
//         image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop"
//       },
//       {
//         title: "Throw Pillows",
//         description: "Decorative cushions for living spaces",
//         image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop"
//       },
//       {
//         title: "Garden Tools",
//         description: "Essential tools for outdoor gardening",
//         image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop"
//       }
//     ]
//   },
//   {
//     name: "Sports",
//     count: 15,
//     products: [
//       {
//         title: "Yoga Mat",
//         description: "Non-slip exercise mat for yoga and fitness",
//         image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop"
//       },
//       {
//         title: "Water Bottle",
//         description: "Insulated stainless steel water bottle",
//         image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=300&h=200&fit=crop"
//       },
//       {
//         title: "Resistance Bands",
//         description: "Versatile exercise bands for strength training",
//         image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=300&h=200&fit=crop"
//       },
//       {
//         title: "Basketball",
//         description: "Professional grade basketball",
//         image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=200&fit=crop"
//       }
//     ]
//   }
// ];

// Image component with loading and error states
const ProductImage = ({ src, alt, className = "" }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  if (error) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

// Product card component
const ProductCard = ({ product, openProduct }) => (
  <div
    className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    onClick={() => openProduct(product)}
  >
    <ProductImage
      src={product.imgUrl?.[1] || product.imgUrl?.[0]}
      alt={product.title}
      className="w-full h-32 sm:h-40"
    />
    <div className="p-3">
      <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
        {product.name}
      </h4>
      <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
        {product.description}
      </p>
    </div>
  </div>
);

// Category item component
const CategoryItem = ({ category, isActive, onHover, onClick }) => (
  <button
    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
      isActive
        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
    }`}
    onMouseEnter={onHover}
    onClick={onClick}
    aria-pressed={isActive}
    role="tab"
  >
    <span className="font-medium">{category.name}</span>
    <span
      className={`text-xs px-2 py-1 rounded-full transition-colors ${
        isActive
          ? "bg-blue-100 text-blue-700"
          : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
      }`}
    >
      {category.count}
    </span>
  </button>
);
const Header = ({ activeMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const menuRef = useRef(null);
  const timeoutRef = useRef();
  const mobileMenuRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Handle mega menu visibility with delay
  const handleMouseEnter = () => {
    if (window.innerWidth < 1024) return; // Only for desktop
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 1024) return; // Only for desktop
    timeoutRef.current = setTimeout(() => {
      setShowMegaMenu(false);
    }, 150);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mega menu if clicked outside
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMegaMenu(false);
      }

      // Close mobile menu if clicked outside
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("button[aria-expanded]")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setShowMegaMenu(false);
  }, [location]);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={company_logo}
                alt="logo"
                className="h-[24px] md:h-[36px] lg:h-[56px]"
              />
              <h6 className="text-[18px] lg:text-xl px-3 sm:px-5 font-semibold text-sky-950">
                Mangrish
              </h6>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
          >
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                activeMenu === "Home"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* Products with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={menuRef}
            >
              <button
                className={`font-medium transition-colors duration-200 px-3 py-2 rounded-md flex items-center ${
                  activeMenu === "Products"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                aria-expanded={showMegaMenu}
                aria-haspopup="true"
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    navigate("/products");
                  } else {
                    setShowMegaMenu(!showMegaMenu);
                  }
                }}
              >
                Products
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    showMegaMenu ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mega Menu - Desktop only */}
              {showMegaMenu && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
                  role="tabpanel"
                  aria-label="Products menu"
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Categories Column */}
                      <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Categories
                        </h3>
                        <div className="space-y-1" role="tablist">
                          {categories.map((category, index) => (
                            <CategoryItem
                              key={category.name}
                              category={category}
                              isActive={activeCategory === index}
                              onHover={() => setActiveCategory(index)}
                              onClick={() => setActiveCategory(index)}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Products Grid Column */}
                      {/* <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          {categories[activeCategory].name}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {categories[activeCategory].products.map(
                            (product, index) => (
                              <ProductCard
                                key={`${product.title}-${index}`}
                                product={product}
                                openProduct={(data) => {
                                  navigate(`/single-product`, {
                                    state: { productDetails: data || "" },
                                  });
                                }}
                              />
                            )
                          )}
                        </div>
                      </div> */}
                      {/* Products Grid Column */}
                      <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          {categories[activeCategory].name}
                        </h3>
                        <div className="max-h-[400px] overflow-y-auto pr-2">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {categories[activeCategory].products.map(
                              (product, index) => (
                                <ProductCard
                                  key={`${product.title}-${index}`}
                                  product={product}
                                  openProduct={(data) => {
                                    navigate(`/single-product`, {
                                      state: { productDetails: data || "" },
                                    });
                                  }}
                                />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about-us"
              className={`font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                activeMenu === "About Us"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              About Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact-us"
              className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="lg:hidden py-4 border-t border-gray-200 bg-white"
            ref={mobileMenuRef}
          >
            <nav className="space-y-2 px-4" role="navigation">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                  activeMenu === "Home"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={toggleMobileMenu}
              >
                Home
              </Link>

              <Link
                to="/products"
                className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                  activeMenu === "Products"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={toggleMobileMenu}
              >
                Products
              </Link>

              <Link
                to="/about-us"
                className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                  activeMenu === "About"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>

              <Link
                to="/contact-us"
                className="sm:hidden block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-md mt-4"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
