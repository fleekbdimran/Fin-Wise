import React from 'react'
import backgroundImage from '../../image/AboutBack.png';

const OurServiceText = () => {
    return (
        <div>
            <div>
                <div
                    className="relative bg-cover bg-center h-screen"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-0"></div> {/* Dark overlay with opacity for visibility */}

                    <div className="flex flex-col items-center justify-center mt-20 relative z-10">

                        <h2
                            className="md:w-[786px] md:h-[120px] font-bold text-gray-800 md:leading-[60px] text-center md:mt-10"
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
                            className="md:w-[696px] md:h-[81px] text-gray-600 md:text-base md:leading-[27px] text-center mt-5"
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
                            className="mt-5 bg-yellow-500 text-white rounded-full md:text-sm font-semibold hover:bg-yellow-600 transition flex justify-center items-center"
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
        </div>
    )
}

export default OurServiceText
