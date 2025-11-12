import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "./Images/mainlogo.png";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  return (
    <div>
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-16 py-4 bg-white shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-2xl font-bold text-[#001A54] hover:text-blue-600 transition-colors duration-300 tracking-wide"
          >
            Disability<span className="text-blue-500">ClaimAssist</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[#001A54] font-medium">
          <ul className="hidden md:flex gap-8 text-[#001A54] font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-red-600 transition-colors duration-200"
              >
                About
              </Link>
            </li>
          </ul>
</div>
        <div className="hidden md:flex items-center gap-8 text-[#001A54] font-medium">
          <ul className="hidden md:flex gap-8 text-[#001A54] font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-red-600 transition-colors duration-200"
              >
                About
              </Link>
            </li>
          </ul>

          {/* 🔹 Right Buttons (Desktop only) */}
          {location.pathname === "/survey" ? (
            <p className="text-[#001A54] font-semibold text-lg">
              📞 (800) 674-8141
            </p>
          ) : (
            <Link to="/survey">
              <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-700 transition">
                See if you qualify
              </button>
            </Link>
          )}
        </div>

        {/* 🔹 Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-[#001A54]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 🔹 Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col text-[#001A54] font-medium md:hidden">
            <div className="px-6 flex flex-col gap-3">
              <Link
                to="/"
                className="hover:text-red-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)} // closes menu on click
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-red-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>

             <div className="border-t border-gray-200 mt-3 pt-3 px-3 flex flex-col items-start gap-2">
              {location.pathname === "/survey" ? (
                <p className="text-[#001A54] font-semibold text-lg">
                  📞 (800) 674-8141
                </p>
              ) : (
                <Link to="/survey">
                  <button className="bg-red-600 text-white font-semibold px-2 py-2 rounded-md hover:bg-red-700 transition">
                    See if you qualify
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
