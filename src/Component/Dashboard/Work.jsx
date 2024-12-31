import React from 'react'
import clarityFormLine from '../../image/image 14.png';
import image18 from '../../image/image 18.png';
import Line from '../../image/Line.png';

const Work = () => {
    return (
        <div>
            <div className="mt-[-200px] ">
                <div className=" px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">How it works?</h1>
                    <p className="text-lg text-gray-600">
                        This is a process, how you can get UPAS/LC for yourself.
                    </p>
                    <div className="relative flex justify-center items-center mt-[-160px]">
                        <div className="w-[1440px] h-[1024px]">
                            <img src={clarityFormLine} alt="Clarity Form" />
                        </div>
                        <div className="absolute flex flex-col items-center">
                            <div className="flex flex-col items-center mb-8">
                                <div className="w-[261px] h-[213px]">
                                    <img src={image18} alt="image18" />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-700">Create account</h2>
                                <p className="text-gray-600 text-sm max-w-xs">
                                    The borrower fills out the UPAS/LC application form, providing essential details. Once complete, the application is submitted for processing.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 
        <div className="mt-12">
          <div className="flex flex-col items-center gap-10">
          <div className="w-[620.36px] h-[757.48px] top-[2498.44px] left-[241.14px] flex justify-center items-center mt-[-280px]">
                  <img src={Line} alt="Line" />
                </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full text-xl font-bold">
                01
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Create account</h3>
                <p className="text-gray-600 text-sm max-w-md">
                  The borrower fills out the UPAS/LC application form, providing essential details. Once complete, the application is submitted for processing.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full text-xl font-bold">
                02
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Apply For UPAS</h3>
                <p className="text-gray-600 text-sm max-w-md">
                  The borrower fills out the UPAS/LC application form, providing essential details. Once complete, the application is submitted for processing.
                </p>
              </div>
            </div>
          </div>
        </div> */}


                    <div className="mt-12">
                        <div className="flex items-center justify-between gap-10">
                            <div className="flex items-center gap-4 mt-[-950px]">
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full text-xl font-bold">
                                    01
                                </div>
                                <div >
                                    <h3 className="text-gray-800 text-[23.9px] font-sarala font-bold leading-[40.56px] tracking-[0.36px] w-[340.4px] h-[41px]">
                                        Create account
                                    </h3>


                                    <p className=" text-gray-600 text-sm max-w-md w-[327.36px] h-[63px] font-sarala font-normal text-[13.04px] leading-[21.25px] tracking-[0.36px]">
                                        The borrower fills out the UPAS/LC application form, providing essential details. Once complete, the application is submitted for processing.
                                    </p>

                                </div>
                            </div>

                            {/* Line Section */}
                            <div className="w-[620.36px] h-[757.48px] flex justify-center items-center mt-[-280px] ml-[-50px]">
                                <img src={Line} alt="Line" />
                            </div>

                            <div className="flex items-center gap-4 mt-[-850px]">
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full text-xl font-bold">
                                    02
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Apply For UPAS</h3>
                                    <p className="text-gray-600 text-sm max-w-md">
                                        The borrower fills out the UPAS/LC application form, providing essential details. Once complete, the application is submitted for processing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Work
