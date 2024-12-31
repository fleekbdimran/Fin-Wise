import React from 'react'
import OurServiceText from './OurServiceText'
import fluent from '../../image/Pen.png';
import Victor from '../../image/Vector.png';
import Text from '../../image/Text.png';
import fly from '../../image/Fly.png';
import Group from '../../image/Group (1).png';
import hugeicons_customize from '../../image/hugeicons_customize.png';

const OurService = () => {
    return (
        <>
            <OurServiceText></OurServiceText>
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-[40px] font-extrabold text-[#006B7F] leading-[60px] tracking-[0.5px] text-center">Our Services</h2>

                    <p className="mt-4 text-lg font-poppins font-medium leading-[27px] tracking-[0.5px] text-center">
                        Explore the range of loan options and financial solutions we <br></br> offer to meet your needs.
                    </p>

                </div>

                <div className="mt-12 grid gap-[50px] sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    <div className="p-6 bg-white shadow rounded-lg ">
                        <div className="text-blue-500 text-4xl mb-4">
                            {/* <i className="fas fa-edit"></i> */}
                            <div className="w-[42px] h-[42px] ">
                                <img src={fluent} alt="fluent_flash-sparkle" />
                            </div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Easy Application</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Fill out and submit your loan form online with ease.
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow rounded-lg ">
                        <div className="text-blue-500 text-4xl mb-4">
                            {/* <i className="fas fa-network-wired"></i> */}

                            <div className="w-[42px] h-[42px] ">
                                <img src={Victor} alt="Victor" />
                            </div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Wide Network</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Access a diverse range of banks and corporations.
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow rounded-lg">
                        <div className="text-blue-500 text-4xl mb-4">
                            {/* <i className="fas fa-file-alt"></i> */}
                            <div className="w-[42px] h-[42px] ">
                                <img src={Text} alt="Text" />
                            </div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Document Collection</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Submit and verify required documents efficiently.
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow rounded-lg ">
                        <div className="text-blue-500 text-4xl mb-4">
                            {/* <i className="fas fa-rocket"></i> */}
                            <div className="w-[42px] h-[42px] ">
                                <img src={fly} alt="fly" />
                            </div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Fast Approval</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Get quick decisions and timely access to funds.
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow rounded-lg">
                        <div className="text-blue-500 text-4xl mb-4">
                            {/* <i className="fas fa-tachometer-alt"></i> */}
                            <div className="w-[42px] h-[42px] ">
                                <img src={Group} alt="Group" />
                            </div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Status Tracking</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Monitor your loan progress with real-time notifications.
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow rounded-lg ">
                        <div className="text-blue-500 text-4xl mb-4">
                            {/* <i className="fas fa-cogs"></i> */}
                            <div className="w-[42px] h-[42px] ">
                                <img src={hugeicons_customize} alt="hugeicons_customize" />
                            </div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Personalized Solutions</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Receive tailored loan options and competitive rates to fit your needs.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurService
