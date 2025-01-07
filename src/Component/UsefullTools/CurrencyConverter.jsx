
import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(30000);

  return (
    <div className="mx-auto py-10 ">
      {/* Header */}
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        <span className="flex items-center justify-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m-1-4h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-2 0h2m-2 0v1m8-1h-2v-6a2 2 0 00-2-2h-2m4 0v-1m4 0h-4m4 0v6a2 2 0 01-2 2h-4" />
          </svg>
          <span>Convert Currency</span>
        </span>
      </h2>

      {/* From Section */}
<div className="flex items-center justify-between mb-6 border-b pb-4">
  <div className="flex items-center space-x-2">

    <select
      className="rounded-md  text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
      defaultValue="BDT"
    >
      
    </select>
    <img
      src="https://flagcdn.com/w40/bd.png"
      alt="Bangladesh"
      className="w-7 h-5"
    />
    <option value="BDT">BDT</option>
  </div>
  <div className="flex items-center space-x-4">
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="w-[1030px] border rounded-lg p-2 text-gray-800 text-right"
    />
    <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
      Convert
    </button>
  </div>
</div>

  {/* Currency List */}
<div className="flex space-x-4">
  {/* GBP Conversion */}
  <div className="flex items-center justify-between border rounded-lg p-4 w-[700px]">
    <div className="flex items-center space-x-2">
    
      <select
        className="rounded-md  text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        defaultValue="GBP"
      >
       
      </select>
      <img
        src="https://flagcdn.com/w40/gb.png"
        alt="UK"
        className="w-6 h-6"
      />
       <option value="GBP">GBP</option>
    </div>
    <div className="text-right">
      <div className="text-gray-800 font-semibold">
        £ {(amount * 0.0067).toFixed(2)}
      </div>
      <div className="text-sm text-gray-500">1 BDT = 0.0067 GBP</div>
    </div>
  </div>

  {/* USD Conversion */}
  <div className="flex items-center justify-between border rounded-lg p-4 w-[700px]">
    <div className="flex items-center space-x-2">
   
      <select
        className="rounded-md  text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        defaultValue="USD"
      >
        
      </select>
      <img
        src="https://flagcdn.com/w40/us.png"
        alt="USA"
        className="w-6 h-6"
      />
      <option value="USD">USD</option>
    </div>
    <div className="text-right">
      <div className="text-gray-800 font-semibold">
        $ {(amount * 0.0084).toFixed(2)}
      </div>
      <div className="text-sm text-gray-500">1 BDT = 0.0084 USD</div>
    </div>
  </div>

  {/* Add Currency Button */}
  <div className="flex items-end justify-end p-4">
    <button className="flex items-center justify-center space-x-2 bg-gray-50 py-1 px-4 text-teal-600 hover:bg-teal-50 border rounded-lg text-sm">
      <span className="text-xl font-bold">+</span>
      <span>Add</span>
    </button>
  </div>
</div>



    </div>
  );
};

export default CurrencyConverter;


// import React, { useState } from 'react';

// const CurrencyConverter = () => {
//   const [amount, setAmount] = useState(30000);

//   return (
//     <div className="mx-auto py-10 px-4 sm:px-6 lg:px-8">
//       {/* Header */}
//       <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
//         <span className="flex items-center justify-center space-x-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-teal-600"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m-1-4h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-2 0h2m-2 0v1m8-1h-2v-6a2 2 0 00-2-2h-2m4 0v-1m4 0h-4m4 0v6a2 2 0 01-2 2h-4" />
//           </svg>
//           <span>Convert Currency</span>
//         </span>
//       </h2>

//       {/* From Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between mb-6 border-b pb-4">
//         <div className="flex items-center space-x-2 mb-4 md:mb-0">
//           <select
//             className="rounded-md text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
//             defaultValue="BDT"
//           >
//             <option value="BDT">BDT</option>
//           </select>
//           <img
//             src="https://flagcdn.com/w40/bd.png"
//             alt="Bangladesh"
//             className="w-7 h-5"
//           />
//         </div>
//         <div className="flex items-center space-x-4">
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] border rounded-lg p-2 text-gray-800 text-right"
//           />
//           <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
//             Convert
//           </button>
//         </div>
//       </div>

//       {/* Currency List */}
//       <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 md:flex-wrap">
//         {/* GBP Conversion */}
//         <div className="flex items-center justify-between border rounded-lg p-4 w-full sm:w-[300px] md:w-[350px] lg:w-[450px]">
//           <div className="flex items-center space-x-2">
//             <select
//               className="rounded-md text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
//               defaultValue="GBP"
//             >
//               <option value="GBP">GBP</option>
//             </select>
//             <img
//               src="https://flagcdn.com/w40/gb.png"
//               alt="UK"
//               className="w-6 h-6"
//             />
//           </div>
//           <div className="text-right">
//             <div className="text-gray-800 font-semibold">
//               £ {(amount * 0.0067).toFixed(2)}
//             </div>
//             <div className="text-sm text-gray-500">1 BDT = 0.0067 GBP</div>
//           </div>
//         </div>

//         {/* USD Conversion */}
//         <div className="flex items-center justify-between border rounded-lg p-4 w-full sm:w-[300px] md:w-[350px] lg:w-[450px]">
//           <div className="flex items-center space-x-2">
//             <select
//               className="rounded-md text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
//               defaultValue="USD"
//             >
//               <option value="USD">USD</option>
//             </select>
//             <img
//               src="https://flagcdn.com/w40/us.png"
//               alt="USA"
//               className="w-6 h-6"
//             />
//           </div>
//           <div className="text-right">
//             <div className="text-gray-800 font-semibold">
//               $ {(amount * 0.0084).toFixed(2)}
//             </div>
//             <div className="text-sm text-gray-500">1 BDT = 0.0084 USD</div>
//           </div>
//         </div>

//         {/* Add Currency Button */}
//         <div className="flex items-end justify-end p-4">
//           <button className="flex items-center justify-center space-x-2 bg-gray-50 py-1 px-4 text-teal-600 hover:bg-teal-50 border rounded-lg text-sm">
//             <span className="text-xl font-bold">+</span>
//             <span>Add</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CurrencyConverter;
