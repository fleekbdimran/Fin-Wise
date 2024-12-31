// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import Finwiselogo from '../image/FINWISE LOGO 1.png';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-white to-[#03658C] text-white pt-12 mt-20">
//       <div className="container mx-auto px-4">
//         {/* Main Content */}
//         <div className="flex items-center justify-center">
//           <div className="bg-[#3b3b50] text-white rounded-[40px] p-[45.39px] mb-8 w-[1068.68px] h-[285px] gap-[9.08px]">
//             <div className="flex flex-col lg:flex-row justify-between items-center">
//               {/* Logo and Mission */}
//               <div className="mb-4 lg:mb-2">
//                 <h2 className="text-2xl font-bold mb-2 flex items-center">
//                   <span className="mr-2">

//                     <img src={Finwiselogo} alt="Finwiselogo" className='w-[120px] h-[106px]' />
//                   </span>

//                   <span className="text-orange-400 font-poppins font-normal text-[47.44px] leading-[28.46px] tracking-[0.59px]">
//                     FinWise
//                   </span>

//                 </h2>

//                 <p className="max-w-[543px] text-gray-300 font-roboto font-normal text-base leading-6 tracking-[0.01em]">
//                   Our mission is to empower individuals and businesses by providing them with the financial resources they need to achieve their goals.
//                 </p>

//               </div>

//               {/* Contact Us */}
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
//                 <form className="flex items-center">
//                   <input
//                     type="email"
//                     placeholder="Enter your email address"
//                     className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//                   />
//                   <button
//                     type="submit"
//                     className="bg-orange-500 text-white text-sm px-4 py-2 rounded-r-md hover:bg-orange-600 transition"
//                   >
//                     →
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>


//           {/* Links Section */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-200">
//           {/* Social Links */}
//           <div>
//             <h4 className="font-semibold text-lg mb-2 text-black">Follow on</h4>
//             <div className="flex space-x-4 mb-2">
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <FontAwesomeIcon icon={faFacebookF} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <FontAwesomeIcon icon={faTwitter} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <FontAwesomeIcon icon={faInstagram} />
//               </a>
//             </div>
//             <p className="text-sm">+8801790188891</p>
//             <p className="text-sm">info@finwise.com.bd</p>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4 text-black">Our Company</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="#" className="hover:underline">
//                   Our Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Terms and Condition
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Useful Links */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4 text-black">Useful Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="#" className="hover:underline">
//                   Converter
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Other Tools
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Address */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4 text-black">Addresses</h4>
//             <p className="text-sm">
//               House- 407, Road no-7, Baridhara DOHS, Dhaka-1206
//             </p>
//           </div>
//         </div>

//       </div>



//       {/* Footer Bottom */}
//       <div className=" pl-[800px]  text-sm py-4 border-t border-gray-600">
//         All rights reserved © 2024 A concern of Wise Corporation
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Finwiselogo from '../image/FINWISE LOGO 1.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-[#03658C] text-white pt-12 mt-20">

      {/* Main Content */}
      <div className="flex items-center justify-center">
        <div className="bg-[#3b3b50] text-white rounded-[40px] p-[45.39px] mb-8 w-[1068.68px] h-[285px] gap-[9.08px]">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Logo and Mission */}
            <div className="mb-4 lg:mb-2">
              <h2 className="text-2xl font-bold mb-2 flex items-center">
                <span className="mr-2">
                  <img
                    src={Finwiselogo}
                    alt="Finwiselogo"
                    className="w-[120px] h-[106px]"
                  />
                </span>
                <span className="text-orange-400 font-poppins font-normal text-[47.44px] leading-[28.46px] tracking-[0.59px]">
                  FinWise
                </span>
              </h2>
              <p className="max-w-[543px] text-gray-300 font-roboto font-normal text-base leading-6 tracking-[0.01em]">
                Our mission is to empower individuals and businesses by providing them with the financial resources they need to achieve their goals.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white text-sm px-4 py-2 rounded-r-md hover:bg-orange-600 transition"
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex justify-center items-start gap-[80px] flex-wrap">
        {/* Social Links */}
        <div className="w-[201px] h-[174.39px] gap-[14px]">
          <h4 className="font-semibold text-lg mb-2 text-black">Follow on</h4>
          <div className="flex space-x-1 mb-1">
            <a href="#" className="text-white hover:text-white h-[25.47px] w-[25.47px]">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-white hover:text-white h-[25.47px] w-[25.47px]">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white hover:text-white h-[25.47px] w-[25.47px]">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p className="text-sm">+8801790188891</p>
          <p className="text-sm">info@finwise.com.bd</p>
        </div>

        {/* Company Links */}
        <div className="w-[193px] h-[185px] gap-[14px]">
          <h4 className="font-semibold text-lg mb-2 text-black">Our Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and Condition
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="w-[193px] h-[147px] gap-[14px]">
          <h4 className="font-semibold text-lg mb-2 text-black">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Converter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Other Tools
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="w-[193px] h-[119px] gap-[14px]">
          <h4 className="font-semibold text-lg mb-2 text-black">Addresses</h4>
          <p className="text-sm">
            House- 407, Road no-7, Baridhara DOHS, Dhaka-1206
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pl-[800px] text-center text-sm py-4 ">
        All rights reserved © 2024 A concern of Wise Corporation
      </div>
    </footer>
  );
};

export default Footer;
