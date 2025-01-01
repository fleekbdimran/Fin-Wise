
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/FINWISE LOGO 1.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white py-4 px-6 flex justify-between items-center border-b border-gray-200 fixed top-0 left-0 w-full z-50 font-poppins">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/dashboard" className="flex items-center">
            <img
              src={logo}
              alt="FinWise Logo"
              className="w-10 h-10 rounded-full shadow-md"
            />
            <span className="text-orange-500 font-bold text-2xl ml-2">
              Fin<span className="text-gray-800">Wise</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          <Link to="/ourservice" className="hover:text-blue-600">
            Our Services
          </Link>
          <Link to="/aboutus" className="hover:text-blue-600">
            About Us
          </Link>
          <Link to="/contactus" className="hover:text-blue-600">
            Contact Us
          </Link>
          <Link to="/" className="hover:text-blue-600">
            Useful Tools
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-gray-800 hover:text-blue-600 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Log In Button */}
        <Link
          to="/login"
          className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-full"
        >
          Log In
        </Link>
      </nav>

      {/* Mobile Menu Dropdown */}

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white shadow-md border-t border-gray-200 absolute top-16 left-0 w-full z-40 transition-all ease-in-out duration-300"
        >
          <div className="flex flex-col items-center py-4 px-6 text-gray-800 font-semibold space-y-4">
            <Link to="/ourservice" className="hover:text-blue-600 w-full text-center">
              Our Services
            </Link>
            <Link to="/aboutus" className="hover:text-blue-600 w-full text-center">
              About Us
            </Link>
            <Link to="/contactus" className="hover:text-blue-600 w-full text-center">
              Contact Us
            </Link>
            <Link to="/" className="hover:text-blue-600 w-full text-center">
              Useful Tools
            </Link>
            <Link
              to="/login"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-full w-full text-center"
            >
              Log In
            </Link>
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;



