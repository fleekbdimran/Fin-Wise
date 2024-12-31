
// import React from 'react';
// import clarityFormLine from '../../image/clarity_form-line.png';
// import fluent from '../../image/fluent_flash-sparkle-16-regular.png';
// import AboutUsText from './AboutUsText';
// import backgroundImage from '../../image/AboutBack.png';



// const AboutUs = () => {
//   return (


//     <>

// <div
//   className=" bg-cover bg-center h-screen"
//   style={{ backgroundImage: `url(${backgroundImage})` }}
// >
// </div>

//       <div>
//         <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4 text-center mb-10">


//           {/* Hero Section */}
//           <div className="pt-[100px]"> {/* Added padding to push content down */}
//             <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
//               <h1 className="w-[786px] h-[120px] font-poppins font-bold text-[40px] leading-[60px] mb-6 text-[#000]">
//                 Simplifying UPAS/LC, Empowering Your Financial Journey.
//               </h1>
//               <p className="w-[653px] h-[54px] font-poppins font-normal text-[18px] leading-[27px] text-gray-600 mb-6">
//                 Efficient applications, quick approvals, and personalized solutions to help you reach your financial goals.
//               </p>
//               <button className="w-[134px] h-[48px] bg-transparent border-2 border-[#E4AE4C] text-[#E4AE4C] hover:bg-[#E4AE4C] hover:text-white transition duration-300 rounded-full px-5 py-3 flex items-center justify-center gap-2">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Cards Section */}
//           <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
//             {/* Card 1 */}
//             <div className="bg-[rgba(254, 254, 254, 1)] shadow-lg rounded-[16.64px] p-[23.76px] flex flex-col items-center w-[400px] h-[236px] gap-[11.88px]">
//               <div className="text-yellow-500 text-2xl mb-2">
//                 <div className="w-[70px] h-[70px]">
//                   <img src={clarityFormLine} alt="Clarity Form" />
//                 </div>
//               </div>
//               <h3 className="text-[26px] font-[700] leading-[39px] text-[rgba(47, 47, 47, 0.9)] mb-2" style={{ fontFamily: 'Poppins' }}>
//                 Easy Application
//               </h3>
//               <p className="text-[14px] font-[400] leading-[21px] text-[rgba(47, 47, 47, 0.9)] mb-2" style={{ width: '233px', height: '42px', fontFamily: 'Poppins' }}>
//                 Quick and straightforward online form submission.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-[rgba(254, 254, 254, 1)] shadow-lg rounded-[16.64px] p-[23.76px] flex flex-col items-center w-[400px] h-[236px] gap-[11.88px]">
//               <div className="text-yellow-500 text-2xl mb-2">
//                 <div className="w-[70px] h-[70px]">
//                   <img src={fluent} alt="fluent_flash-sparkle" />
//                 </div>
//               </div>
//               <h3 className="text-[26px] font-[700] leading-[39px] text-[rgba(47, 47, 47, 0.9)] mb-2" style={{ fontFamily: 'Poppins' }}>
//                 Personalized Solutions
//               </h3>
//               <p className="text-[14px] font-[400] leading-[21px] text-[rgba(47, 47, 47, 0.9)] mb-2" style={{ width: '233px', height: '42px', fontFamily: 'Poppins' }}>
//                 Tailored loan options and competitive rates to fit your needs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>


//       <AboutUsText></AboutUsText>

//     </>
//   );
// };

// export default AboutUs;

import React from 'react';
import clarityFormLine from '../../image/clarity_form-line.png';
import fluent from '../../image/fluent_flash-sparkle-16-regular.png';
import AboutUsText from './AboutUsText';
import backgroundImage from '../../image/AboutBack.png';



const AboutUs = () => {
  return (


    <>
      <div

        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0"></div> {/* Dark overlay with opacity for visibility */}

        {/* Text on Background Image */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
            <h1 className="w-[786px] h-[120px] font-poppins font-bold text-[40px] leading-[60px] mb-6 text-[#000]">
              Simplifying UPAS/LC, Empowering Your Financial Journey.
            </h1>
            <p className="w-[653px] h-[54px] font-poppins font-normal text-[18px] leading-[27px] text-gray-600 mb-6">
              Efficient applications, quick approvals, and personalized solutions to help you reach your financial goals.
            </p>
            <button className="w-[134px] h-[48px] bg-transparent border-2 border-[#E4AE4C] text-[#E4AE4C] hover:bg-[#E4AE4C] hover:text-white transition duration-300 rounded-full px-5 py-3 flex items-center justify-center gap-2">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center  text-center ">
        {/* Cards Section */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          {/* Card 1 */}
          <div className="bg-[rgba(254, 254, 254, 1)] shadow-lg rounded-[16.64px] p-[23.76px] flex flex-col items-center w-[400px] h-[236px] gap-[11.88px]">
            <div className="text-yellow-500 text-2xl mb-2">
              <div className="w-[70px] h-[70px]">
                <img src={clarityFormLine} alt="Clarity Form" />
              </div>
            </div>
            <h3 className="text-[26px] font-[700] leading-[39px] text-[rgba(47, 47, 47, 0.9)] mb-2" style={{ fontFamily: 'Poppins' }}>
              Easy Application
            </h3>
            <p className="text-[14px] font-[400] leading-[21px] text-[rgba(47, 47, 47, 0.9)] mb-2" style={{ width: '233px', height: '42px', fontFamily: 'Poppins' }}>
              Quick and straightforward online form submission.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[rgba(254, 254, 254, 1)] shadow-lg rounded-[16.64px] p-[23.76px] flex flex-col items-center w-[400px] h-[236px] gap-[11.88px]">
            <div className="text-yellow-500 text-2xl mb-2">
              <div className="w-[70px] h-[70px]">
                <img src={fluent} alt="fluent_flash-sparkle" />
              </div>
            </div>
            <h3 className="text-[26px] font-[700] leading-[39px] text-[rgba(47, 47, 47, 0.9)] mb-2" style={{ fontFamily: 'Poppins' }}>
              Personalized Solutions
            </h3>
            <p className="text-[14px] font-[400] leading-[21px] text-[rgba(47, 47, 47, 0.9)] mb-2" style={{ width: '233px', height: '42px', fontFamily: 'Poppins' }}>
              Tailored loan options and competitive rates to fit your needs.
            </p>
          </div>
        </div>
      </div>


      <AboutUsText></AboutUsText>

    </>
  );
};

export default AboutUs;



