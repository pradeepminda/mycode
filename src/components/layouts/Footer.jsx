import React from "react";
import { LuYoutube, LuFacebook, LuInstagram } from "react-icons/lu";

import company_logo from "../../assets/company-logo-1.webp";

function Footer() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Terms & Conditions", href: "/termsAndConditions" },
  ];
  return (
    <footer className="bg-gray-100">
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="bg-white-600 text-white px-3 py-2 rounded font-bold text-lg">
                <img
                  src={company_logo}
                  alt="logo"
                  className="h-[24px] md:h-[44px]"
                />
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <nav className="flex md:hidden items-center space-x-8">
              <a
                href={"/termsAndConditions"}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
              >
                {"Terms & Conditions"}
              </a>
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61577527138032"
                className="bg-white rounded-full p-2 border border-gray-300 hover:border-gray-500 transition duration-300 ease-in-out"
                aria-label="Facebook"
              >
                <LuFacebook className="text-black-500 text-md" />
              </a>
              <a
                href="https://www.instagram.com/mangrishprince?utm_source=qr"
                className="bg-white rounded-full p-2 border border-gray-300 hover:border-gray-500 transition duration-300 ease-in-out"
                aria-label="Instagram"
              >
                <LuInstagram className="text-black-500 text-md" />
              </a>
              <a
                href="https://www.youtube.com/@MsMANGRISH"
                className="bg-white rounded-full p-2 border border-gray-300 hover:border-gray-500 transition duration-300 ease-in-out"
                aria-label="YouTube"
              >
                <LuYoutube className="text-black-500 text-md" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-blue-500 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">
              Copyright © 2025 MANGRISH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
