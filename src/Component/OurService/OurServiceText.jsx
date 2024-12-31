import React from 'react'

const OurServiceText = () => {
    return (
        <div>
            <div>

                <div className="flex flex-col items-center justify-center mt-20">

                    <h2
                        className="w-[786px] h-[120px] font-bold text-gray-800 leading-[60px] text-center mt-10"
                        style={{
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            fontSize: '40px',
                            lineHeight: '60px',
                        }}
                    >
                        Comprehensive Loan Solutions Tailored to Your Needs.
                    </h2>

                    <p
                        className="w-[696px] h-[81px] text-gray-600 text-base leading-[27px] text-center mt-5"
                        style={{
                            fontFamily: 'Poppins',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '27px',
                        }}
                    >
                        Explore our range of services designed to simplify your borrowing experience. From easy application processes to personalized loan options, we ensure a seamless journey from start to finish.
                    </p>


                    <button
                        className="mt-5 bg-yellow-500 text-white rounded-full text-sm font-semibold hover:bg-yellow-600 transition flex justify-center items-center"
                        style={{
                            width: '162px',
                            height: '48px',
                            borderRadius: '50px',
                            border: '2px solid',
                            padding: '12px 20px',
                            gap: '10px',
                        }}
                    >
                        Apply for Loan
                    </button>


                </div>

            </div>
        </div>
    )
}

export default OurServiceText
