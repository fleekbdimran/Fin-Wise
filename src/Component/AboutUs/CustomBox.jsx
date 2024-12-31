
import React from 'react';

const CustomBox = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[800px] h-[100px] bg-white rounded-[50px] flex justify-between items-center p-[20px] px-[30px] border shadow-md">
        <span className="text-gray-800">Looking for help?</span>
        <button className="px-4 py-2 text-sm font-semibold text-yellow-700 border border-yellow-700 rounded-full hover:bg-yellow-700 hover:text-white transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CustomBox;
