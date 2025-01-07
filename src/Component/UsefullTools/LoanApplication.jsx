import React from 'react'

const LoanApplication = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
    <h1 className="text-center text-xl font-semibold mb-4">Your UPAS/LC Application</h1>
    <div className="bg-[#fdfbf5] border  rounded-lg p-4">
      <div className="flex justify-between mb-2">
        <span className="font-medium">LC Applicant:</span>
        <span>Mr. Abul Kalam Ajad</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">Issue Bank:</span>
        <span>Dutch Bangla Bank</span>
      </div>
      <div className="flex justify-between mb-2">
        <span class="font-medium">LC Value:</span>
        <span>120000.00</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">LC Currency:</span>
        <span>USD</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">LC Maturity Date:</span>
        <span>12/12/2024</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">Product Name:</span>
        <span>Food and Nutritions</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">If Refinance:</span>
        <span>No</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">Tenor Required:</span>
        <span>180 days</span>
      </div>
      <div className="flex justify-between">
        <span class="font-medium">Status:</span>
        <span>Offered</span>
      </div>
    </div>
    <button className="mt-4 w-[150px] h-[52px] bg-amber-400 hover:bg-amber-500 text-white font-medium py-2 px-4 rounded-full flex justify-center items-center mx-auto">
      Close
    </button>
  </div>
    </div>
  )
}

export default LoanApplication
