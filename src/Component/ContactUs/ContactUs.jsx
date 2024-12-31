// import React from 'react'
// import clarityFormLine from '../../image/amico.png';
// import ContactUsText from './ContactUsText';

// const ContactUs = () => {
//   return (
//    <>
//    <ContactUsText></ContactUsText>
//       <div>
//       <div className="bg-gray-50 md:px-20 lg:px-40">
//         {/* Main Container */}
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           <div className="w-[434px] h-[435.1px]">
//             <img src={clarityFormLine} alt="Clarity Form" />

//             <p className="w-[434px] h-[120px] text-gray-800 text-base leading-[30px] text-center"
//     style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px' }}>
//   FinWise makes loan applications easy. 
//   Submit your form, connect with banks and corporations, and track your loan status effortlessly.
// </p>

//           </div>

//           {/* Right Section */}
//           <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10">
//             <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
//               Stay Connected With Us
//             </h3>
//             <form className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="tel"
//                   placeholder="Phone number"
//                   className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
//               >
//                 SEND
//               </button>
//             </form>
//           </div>
//         </div>


//       </div>
//     </div>
//    </>
//   )
// }

// export default ContactUs


import React from 'react';
import clarityFormLine from '../../image/amico.png';
import ContactUsText from './ContactUsText';

const ContactUs = () => {
  return (
    <>
      <ContactUsText />
      <div className="bg-gray-50 md:px-20 lg:px-40 mt-20">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div>
            <div className="w-[434px] h-[435.1px]">
              <img src={clarityFormLine} alt="Clarity Form" />

            </div>

            <div>
              <p className="w-[434px] h-[120px] text-gray-800 text-base leading-[30px] text-center"
                style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px' }}>
                FinWise makes loan applications easy.
                Submit your form, connect with banks and corporations, and track your loan status effortlessly.
              </p>
            </div>
          </div>


          {/* Right Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
              Stay Connected With Us
            </h3>
            <form className="space-y-4">
              <div>
                <h2>Your Name</h2>
                <input
                  type="text"
                  // placeholder="Your Name"
                  className="w-[395px] h-[46px] px-4  border rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

              </div>
              <div>
                <h2>Phone number</h2>
                <input
                  type="tel"
                  // placeholder="Phone number"
                  className="w-[395px] h-[46px] px-4 border rounded-full  focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <h2>Email address</h2>
                <input
                  type="email"
                  // placeholder="Email address"
                  className="w-[395px] h-[46px] px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>


              <button className="px-6 py-3 bg-yellow-500 text-white rounded-full text-sm font-semibold hover:bg-yellow-600 transition mx-auto flex justify-center items-center"
                style={{ width: '134px', borderRadius: '50px', border: '2px', padding: '12px 36px', gap: '10px' }}>
                Send
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
