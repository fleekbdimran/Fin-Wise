import React from 'react'
import { XIcon } from '@heroicons/react/solid'

const RefienceSelection = () => {
  return (
    <div className="flex items-center justify-center bg-white">
    <div className="relative bg-white rounded-md shadow-md w-[666px] h-[351px]  p-6">
      <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
        &times;
      </button>
      
      <h1 className="text-center text-xl font-semibold text-amber-600  text-shadow mb-10">
        Select Your Refinance
      </h1>
      <ul className="text-gray-600 space-y-2 mb-14 md:whitespace-nowrap ml-16">
        <li>
          • If you don’t have any previous refinance, select First Refinance
        </li>
        <li>
          • Select Second Refinance if you already have first refinance
        </li>
      </ul>
      <div className="flex space-x-4 justify-center">
        <button className="px-4 py-2 text-amber-600 border-2 border-amber-400 rounded-full font-medium hover:bg-amber-100 transition">
          First Refinance
        </button>
        <button className="px-4 py-2 text-amber-600 border-2 border-amber-400 font-medium hover:bg-amber-100 transition rounded-full">
          Second Refinance
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default RefienceSelection



