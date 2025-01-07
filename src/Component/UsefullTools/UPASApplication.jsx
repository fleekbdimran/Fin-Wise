import React from "react";

const UPASApplication = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="relative bg-white rounded-lg shadow-lg w-[560px] h-[300px]  p-6">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <h1 className="text-center text-xl font-semibold text-amber-600 mb-6">
          Apply for Your UPAS/LC Today
        </h1>
        <p className="text-center text-gray-600 mb-14">
          Quick, Easy, and Secure – Get the Funds You Need Fast
        </p>
        <div className="flex space-x-4 justify-center">
          <button className="px-6 py-2 text-amber-600 border-2 border-amber-400 rounded-lg md:rounded-full font-medium hover:bg-amber-100 transition w-[180px] h-[50px]">
            UPAS
          </button>
          <button className="px-6 py-2 text-amber-600 border-2 border-amber-400 rounded-lg md:rounded-full font-medium hover:bg-amber-100 transition w-[180px] h-[50px]">
            Refinance
          </button>
        </div>
      </div>
    </div>
  );
};

export default UPASApplication;

