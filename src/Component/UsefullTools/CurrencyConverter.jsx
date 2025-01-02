import React, { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(30000);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4 text-center">Convert Currency</h2>

      {/* From Currency Input */}
      <div className="flex items-center mb-4">
        <select
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          defaultValue="BDT"
        >
          <option value="BDT">BDT</option>
        </select>
        <input
          type="number"
          className="ml-3 flex-1 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Converted Values */}
      <div className="flex justify-between items-center mb-4">
        {/* GBP Section */}
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="GBP"
              className="w-6 h-4 mr-2"
            />
            <span className="text-lg font-semibold">&pound; 199.50</span>
          </div>
          <p className="text-xs text-gray-500">1 BDT = 0.0067 GBP</p>
        </div>

        {/* USD Section */}
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="USD"
              className="w-6 h-4 mr-2"
            />
            <span className="text-lg font-semibold">$ 251.31</span>
          </div>
          <p className="text-xs text-gray-500">1 BDT = 0.0084 USD</p>
        </div>
      </div>

      {/* Convert Button */}
      <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={() => alert("Converted successfully!")}
      >
        Convert
      </button>
    </div>
  );
};

export default CurrencyConverter;
