import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";
import company_logo from "../../assets/company-logo-1.webp";

// Mock data for mega menu based on the catalog image
const MEGA_MENU_DATA = {
  categories: [
    {
      id: "plumbing",
      title: "Plumbing Pipes & Fittings",
      count: 21,
      items: [
        "Flowguard Plus- CPVC Hot and Cold Portable",
        "Easyfit - UPVC Plumbing Systems"
      ]
    },
    {
      id: "drainage",
      title: "Underground Drainage",
      count: 10,
      items: [
        "SWR Pipes",
        "Drainage Fittings",
        "Manholes & Covers"
      ]
    },
    {
      id: "swr",
      title: "SWR",
      count: 4,
      items: [
        "SWR Pipes",
        "SWR Fittings"
      ]
    },
    {
      id: "industrial",
      title: "Industrial Piping System",
      count: 2,
      items: [
        "Industrial Pipes",
        "Industrial Fittings"
      ]
    },
    {
      id: "cable",
      title: "Cable Agriculture & Borewell",
      count: 3,
      items: [
        "Cable Conduits",
        "Agricultural Pipes",
        "Borewell Accessories"
      ]
    },
    {
      id: "water",
      title: "Water Storage",
      count: 2,
      items: [
        "Water Tanks",
        "Storage Solutions"
      ]
    }
  ]
};

const BLOG_NAVBAR_DATA = [
  {
    id: "01",
    label: "Home",
    path: "/",
  },
  {
    id: "02",
    label: "Products",
    path: "/products",
    hasMegaMenu: true,
  },
  {
    id: "03",
    label: "About Us",
    path: "/about-us",
  },
];

const Navbar = ({ activeMenu }) => {
  const navigate = useNavigate();
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleMenuItemHover = (item) => {
    if (item.hasMegaMenu) {
      setShowMegaMenu(true);
    }
  };

  const handleMenuItemLeave = () => {
    setShowMegaMenu(false);
  };

  return (
    <>
      <div className="bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">
        <div className="container mx-auto flex items-center justify-between gap-5">
          <div className="flex gap-5">
            <button
              className="block lg:hidden text-black -mt-1"
              onClick={() => {
                setOpenSideMenu(!openSideMenu);
              }}
            >
              {openSideMenu ? (
                <HiOutlineX className="text-2xl" />
              ) : (
                <HiOutlineMenu className="text-2xl" />
              )}
            </button>

            <Link to="/" className="md:flex items-center pl-10">
              <img src={company_logo} alt="logo" className="h-[24px] md:h-[66px]" />
              <h6 className="text-xl px-5 font-semibold text-sky-950">Mangrish</h6>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-10 relative">
            {BLOG_NAVBAR_DATA.map((item, index) => {
              if (item?.onlySideMenu) return;

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleMenuItemHover(item)}
                  onMouseLeave={handleMenuItemLeave}
                >
                  <Link to={item.path}>
                    <li className="text-[15px] text-black font-medium list-none relative group cursor-pointer">
                      {item.label}
                      <span
                        className={`absolute inset-x-0 -bottom-[4px] h-[2.5px] rounded-full bg-sky-500 transition-all duration-300 origin-left ${
                          activeMenu == item.label ? "scale-x-100" : "scale-x-0"
                        } group-hover:scale-x-100`}
                      ></span>
                    </li>
                  </Link>

                  {/* Mega Menu */}
                  {item.hasMegaMenu && showMegaMenu && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white shadow-2xl rounded-lg border border-gray-200 z-50">
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                          <h3 className="text-2xl font-bold text-sky-950">Product Catalog</h3>
                          <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm font-medium">
                            {MEGA_MENU_DATA.categories.reduce((total, cat) => total + cat.count, 0)} Products
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-6">
                          {MEGA_MENU_DATA.categories.map((category) => (
                            <div key={category.id} className="group cursor-pointer">
                              <div className="bg-gray-50 hover:bg-sky-50 p-4 rounded-lg transition-all duration-200 border hover:border-sky-200">
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">
                                    {category.title}
                                  </h4>
                                  <span className="bg-sky-100 text-sky-600 px-2 py-1 rounded-full text-xs font-medium">
                                    {category.count}
                                  </span>
                                </div>
                                <ul className="space-y-2">
                                  {category.items.map((item, idx) => (
                                    <li key={idx} className="text-sm text-gray-600 hover:text-sky-600 transition-colors">
                                      • {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-gray-500">Featured Products:</span>
                              <div className="flex gap-2">
                                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs">
                                  CPVC Pipes
                                </span>
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                                  UPVC Systems
                                </span>
                              </div>
                            </div>
                            <Link 
                              to="/products" 
                              className="text-sky-600 hover:text-sky-700 font-medium text-sm flex items-center gap-1"
                            >
                              View All Products →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-6">
            <button
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-xs md:text-sm font-semibold text-white px-5 md:px-7 py-2 rounded-full hover:bg-black hover:text-white transition-all cursor-pointer hover:scale-[1.05] hover:shadow-2xl hover:shadow-cyan-200"
              onClick={() => navigate('/contact-us')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Overlay to close mega menu when clicking outside */}
      {showMegaMenu && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-20"
          onClick={() => setShowMegaMenu(false)}
        />
      )}
    </>
  );
};

export default Navbar;