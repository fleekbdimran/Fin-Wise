// import React from 'react'
// import logo from "../image/FINWISE LOGO 1.png";
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <div>
//       <nav className="bg-white py-4 px-6 flex justify-between items-center border-b border-gray-200 fixed top-0 left-0 w-full z-50 font-poppins">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
//           <img
//             src={logo}
//             alt="FinWise Logo"
//             className="rounded-xl shadow-md"
//           />
//         </div>
//         <span className="text-orange-500 font-bold text-2xl ml-2">
//           Fin<span className="text-gray-800">Wise</span>
//         </span>
//       </div>

//       {/* Navigation Links (Hidden on mobile, visible on medium screens and up) */}
//       <div className="hidden md:flex space-x-8 text-gray-800 font-semibold">
//       <Link to="/ourservice" className="hover:text-blue-600">
//           Our Services
//           </Link>
//           <Link to="/aboutus" className="hover:text-blue-600">
//             About Us
//           </Link>
//           <Link to="/contactus" className="hover:text-blue-600">
//           Contact Us
//           </Link>
//           <Link to="/" className="hover:text-blue-600">
//           Useful Tools
//           </Link>
//       </div>



//       {/* Mobile Menu Icon (Visible on small screens) */}
//       <div className="md:hidden flex items-center space-x-4">
//         <button className="text-gray-800 hover:text-blue-600">
//           <i className="fas fa-bars"></i>
//         </button>
//       </div>

//       {/* Log In Button */}
//       <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-full">
//         Log In
//       </button>
//     </nav>

//     </div>
//   )
// }

// export default Header


import React, { useState } from 'react';
import logo from "../image/FINWISE LOGO 1.png";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white py-4 px-6 flex justify-between items-center border-b border-gray-200 fixed top-0 left-0 w-full z-50 font-poppins">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            {/* <img
              src={logo}
              alt="FinWise Logo"
              className="rounded-xl shadow-md"
            /> */}
            <Link to="/dashboard">
              <img
                src={logo}
                alt="FinWise Logo"
                className="rounded-xl shadow-md cursor-pointer"
              />
            </Link>
          </div>
         
          <span className="text-orange-500 font-bold text-2xl ml-2">
            <Link to="/dashboard">
              Fin<span className="text-gray-800">Wise</span>
            </Link>
          </span>
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




        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Log In Button */}
        <button className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-full">
          Log In
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 absolute top-16 left-0 w-full z-40">
          <div className="flex flex-col items-start py-4 px-6 text-gray-800 font-semibold space-y-4">

            <Link to="/ourservice" className="hover:text-blue-600 w-full">
              Our Services
            </Link>
            <Link to="/aboutus" className="hover:text-blue-600 w-full">
              About Us
            </Link>
            <Link to="/contactus" className="hover:text-blue-600 w-full">
              Contact Us
            </Link>
            <Link to="/" className="hover:text-blue-600 w-full">
              Useful Tools
            </Link>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-full w-full">
              Log In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;


