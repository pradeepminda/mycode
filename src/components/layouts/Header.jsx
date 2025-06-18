import React, { useState, useEffect, useRef } from "react";
import company_logo from "../../assets/company-logo-1.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { categories } from "../../utils/data";

// ProductImage and ProductCard components remain the same...

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
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('button[aria-expanded]')) {
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
                      <div className="lg:col-span-2">
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