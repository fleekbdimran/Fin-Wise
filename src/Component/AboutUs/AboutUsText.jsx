
// // import React from 'react';
// // import CustomBox from './CustomBox';


// // const AboutUsText = () => {
// //   return (
// //     <>
// //         <div className="relative h-screen">
// //           <div className="absolute flex flex-col justify-center items-center py-[40px] px-[60px] w-[1130px] h-[350px] top-[50px] left-[155px] rounded-[16px] " style={{ backgroundColor: 'rgba(254, 197, 54, 0.1)' }}>
// //             <div className="w-[930px] h-[56px] flex justify-center items-center">
// //               <h2 className="font-poppins font-bold text-[30px] leading-[55.8px] text-center">
// //                 About Us
// //               </h2>
// //             </div>
// //             <div>
// //               <p className="w-[930px] h-[104px] font-poppins font-normal text-[16px] leading-[26px] text-gray-600 text-justify">
// //                 At Finwise, we streamline the loan application process to make borrowing simple and efficient. Our platform allows you to submit a loan application, connect with multiple banks and corporations, and track your loan status easily. We offer quick approvals and personalized solutions to meet your unique financial needs, empowering you to achieve your financial goals. Trust Finwise to guide you through every step of your loan journey with ease.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //       <CustomBox></CustomBox>
// //     </>
// //   );
// // };

// // export default AboutUsText;



// import React from 'react';
// import CustomBox from './CustomBox';

// const AboutUsText = () => {
//   return (
//     <>
//       <div className="relative h-screen">
//         <div className="absolute flex flex-col justify-center items-center py-10 px-16 w-[1130px] h-[350px] top-[50px] left-[155px] rounded-lg" style={{ backgroundColor: 'rgba(254, 197, 54, 0.1)' }}>
//           <div className="w-[930px] h-[56px] flex justify-center items-center">
//             <h2 className="font-poppins font-bold text-3xl leading-[55.8px] text-center">
//               About Us
//             </h2>
//           </div>
//           <div>
//             <p className="w-[930px] h-[104px] font-poppins font-normal text-lg leading-6 text-gray-600 text-justify">
//               At Finwise, we streamline the loan application process to make borrowing simple and efficient. Our platform allows you to submit a loan application, connect with multiple banks and corporations, and track your loan status easily. We offer quick approvals and personalized solutions to meet your unique financial needs, empowering you to achieve your financial goals. Trust Finwise to guide you through every step of your loan journey with ease.
//             </p>
//           </div>
//         </div>
//       </div>

//       <CustomBox />
//     </>
//   );
// };

// export default AboutUsText;

import React from 'react';
import CustomBox from './CustomBox';

const AboutUsText = () => {
  return (
    <>
      <div className="relative mt-20">
        {/* About Us Section */}
        <div
          className="flex flex-col justify-center items-center py-10 px-16 max-w-[1130px] mx-auto mt-10 rounded-lg"
          style={{ backgroundColor: 'rgba(254, 197, 54, 0.1)' }}
        >
          <div className="w-full flex justify-center items-center mb-4">
            <h2 className="font-poppins font-bold text-3xl leading-tight text-center">
              About Us Test
            </h2>
          </div>
          <div>
            <p className="w-full font-poppins font-normal text-lg leading-6 text-gray-600 text-justify">
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

      <div className='mt-20'>
      <CustomBox />
      </div>
    </>
  );
};

export default AboutUsText;
