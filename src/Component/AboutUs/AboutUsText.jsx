
// import React from 'react';
// import CustomBox from './CustomBox';

// const AboutUsText = () => {
//   return (
//     <>
//       <div className="relative mt-20">
//         {/* About Us Section */}
//         <div
//           className="flex flex-col justify-center items-center py-10 px-16 max-w-[1130px] mx-auto mt-10 rounded-lg"
//           style={{ backgroundColor: 'rgba(254, 197, 54, 0.1)' }}
//         >
//           <div className="w-full flex justify-center items-center mb-4">
//             <h2 className="font-poppins font-bold text-3xl leading-tight text-center">
//               About Us 
//             </h2>
//           </div>
//           <div>
//             <p className="w-full font-poppins font-normal text-lg leading-6 text-gray-600 text-justify">
//               At Finwise, we streamline the loan application process to make
//               borrowing simple and efficient. Our platform allows you to submit
//               a loan application, connect with multiple banks and corporations,
//               and track your loan status easily. We offer quick approvals and
//               personalized solutions to meet your unique financial needs,
//               empowering you to achieve your financial goals. Trust Finwise to
//               guide you through every step of your loan journey with ease.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className='mt-20'>
//       <CustomBox />
//       </div>
//     </>
//   );
// };

// export default AboutUsText;


import React from 'react';
import CustomBox from './CustomBox';

const AboutUsText = () => {
  return (
    <>
      <div className="relative mt-10 sm:mt-12 md:mt-16">
        {/* About Us Section */}
        <div
          className="flex flex-col justify-center items-center py-6 sm:py-8 md:py-10 px-6 sm:px-8 lg:px-16 max-w-full sm:max-w-[1130px] mx-auto mt-6 sm:mt-10 rounded-lg"
          style={{ backgroundColor: 'rgba(254, 197, 54, 0.1)' }}
        >
          <div className="w-full flex justify-center items-center mb-4">
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-center">
              About Us
            </h2>
          </div>
          <div>
            <p className="w-full font-poppins font-normal text-sm sm:text-base md:text-lg leading-6 text-gray-600 text-justify">
              At Finwise, we streamline the loan application process to make
              borrowing simple and efficient. Our platform allows you to submit
              a loan application, connect with multiple banks and corporations,
              and track your loan status easily. We offer quick approvals and
              personalized solutions to meet your unique financial needs,
              empowering you to achieve your financial goals. Trust Finwise to
              guide you through every step of your loan journey with ease.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-12 md:mt-16">
        <CustomBox />
      </div>
    </>
  );
};

export default AboutUsText;
