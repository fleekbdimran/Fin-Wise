import React from 'react';
import Man from '../../image/Man.png';
import Homeq from '../../image/Homeq.png';
import Hands from '../../image/Hand.png';

const TypesOfUPASLC = () => {
    return (
        <div className="min-h-screen  from-blue-50 to-white py-12">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Types of UPAS/LC</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Personal */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                        <div className="flex justify-center mb-4">
                            <span className="text-yellow-500 text-4xl">
                                {/* <i className="fas fa-user"></i> */}
                                <div className="w-[67.83px] h-[88px]">
                                    <img src={Man} alt="Man" />
                                </div>
                            </span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Personal</h2>
                        <p className="text-gray-600 text-sm">
                            Personal UPAS/LC provide borrowers with flexibility in how they use the funds.
                        </p>
                    </div>

                    {/* Bank */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                        <div className="flex justify-center mb-4">
                            <span className="text-yellow-500 text-4xl">
                                {/* <i className="fas fa-university"></i> */}
                                <div className="w-[67.83px] h-[88px]">
                                    <img src={Homeq} alt="Homeq" />
                                </div>
                            </span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Bank</h2>
                        <p className="text-gray-600 text-sm">
                            Auto UPAS/LC Services provide financing options for individuals or businesses to purchase a vehicle.
                        </p>
                    </div>

                    {/* Corporate */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                        <div className="flex justify-center mb-4">
                            <span className="text-yellow-500 text-4xl">
                                {/* <i className="fas fa-briefcase"></i> */}
                                <div className="w-[67.83px] h-[88px]">
                                    <img src={Hands} alt="Hands" />
                                </div>
                            </span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Corporate</h2>
                        <p className="text-gray-600 text-sm">
                            Business UPAS/LC Services provide financial assistance to businesses for various purposes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypesOfUPASLC;
