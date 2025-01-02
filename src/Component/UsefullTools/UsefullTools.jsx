import React from 'react'
import clarityFormLine from '../../image/Charts.png';
import { PieChart } from 'react-minimal-pie-chart';
import CurrencyConverter from './CurrencyConverter';

const UsefullTools = () => {
    return (
       <>
          <div>
            <div className="container mx-auto mt-32">
                <div className="flex justify-between gap-10">
                    {/* <!-- Left Section --> */}
                    <div className="bg-white shadow-md rounded-md p-6 w-[400px]">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 bg-gray-300">Recent Updates</h3>
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                            <li>3 platinum users requested to connect with you</li>
                            <li>4 gold users approved your request</li>
                            <li>2 gold users offered this request</li>
                            <li>You approved a platinum user 00ID</li>
                            <li>2 gold users accepted your connection request</li>
                        </ul>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className='bg-white shadow-lg rounded-lg p-6 flex-1 w-[400px]'>
                        <h3 className="text-lg font-semibold bg-white text-gray-800 mb-6 text-center">Results in Chart</h3>
                        <div className="flex flex-wrap gap-3">


                            {/* Card 1 */}
                            <div className="bg-white  shadow-lg rounded-lg p-6 flex-1 w-[400px]">
                                <div className="flex flex-col items-center">
                                    {/* <!-- My Requests Chart --> */}
                                    <div className="w-full text-center mb-6">
                                        <div className="flex justify-between items-center bg-[rgba(252,246,235,1)] p-4 rounded-md">
                                            <h4 className="text-sm font-medium text-gray-700">My Requests</h4>
                                            <span className="text-xl font-bold text-gray-800">{12}</span>
                                        </div>

                                        <div className="flex justify-center items-center mt-4 space-x-14">
                                            <div className="space-y-2 text-center">
                                                <p className="text-lg font-semibold text-gray-600">Offered: 4</p>
                                                <p className="text-lg font-semibold text-gray-600">Pending: 6</p>
                                                <p className="text-lg font-semibold text-gray-600">Cancelled: 6</p>
                                            </div>

                                            <div className="w-[131px] h-[131px] rounded-full flex items-center justify-center">
                                                {/* Chart Placeholder */}
                                                <img src={clarityFormLine} alt="Clarity Form" className="w-full h-auto" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>



                            {/* Card 2 */}
                            <div className="bg-white shadow-lg rounded-lg p-6 flex-1 w-[400px]">
                                <div className="flex flex-col items-center">
                                    {/* <!-- Incoming Requests Chart --> */}
                                    <div className="w-full text-center mb-6">
                                        <div className="flex justify-between items-center bg-[#f1f8f9] p-4 rounded-md">
                                            <h4 className="text-sm font-medium text-gray-700">Incoming Requests</h4>
                                            <span className="text-xl font-bold text-gray-800">{12}</span>
                                        </div>

                                        <div className="flex justify-center items-center mt-4 space-x-14">
                                            <div className="space-y-2 text-center">
                                                <p className="text-lg font-semibold text-gray-600">Offered: 4</p>
                                                <p className="text-lg font-semibold text-gray-600">Pending: 6</p>
                                                <p className="text-lg font-semibold text-gray-600">Cancelled: 6</p>
                                            </div>

                                            <div className="w-[131px] h-[131px] rounded-full flex items-center justify-center">
                                                {/* Chart Placeholder */}
                                                {/* <img src={clarityFormLine} alt="Clarity Form" className="w-full h-auto" /> */}
                                                {/* <PieChart
                                                    data={[
                                                        { title: 'One', value: 10, color: '#E38627' },
                                                        { title: 'Two', value: 15, color: '#C13C37' },
                                                        { title: 'Three', value: 20, color: '#6A2135' },
                                                    ]}
                                                    label={({ dataEntry }) => `${dataEntry.title}`}
                                                    labelStyle={{
                                                        fontSize: '5px',
                                                        fontWeight: 'bold',
                                                        fill: 'white',
                                                    }}
                                                    labelPosition={50}
                                                /> */}
                                                <div className="flex items-center justify-center h-screen">
                                                    <div className="relative w-25 h-25">
                                                        <PieChart
                                                            data={[
                                                                { title: '6', value: 6, color: '#FF6B6B' },
                                                                { title: '6', value: 6, color: '#FFD93D' },
                                                                { title: '4', value: 4, color: '#6BCB77' },
                                                            ]}
                                                            label={({ dataEntry }) => `${dataEntry.title}`}
                                                            labelStyle={{
                                                                fontSize: "6px",
                                                                fontWeight: "bold",
                                                                fill: "#fff",
                                                            }}
                                                            labelPosition={50}
                                                        />
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <span className=" font-bold">12</span>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* <!-- Button Section --> */}
                <div className="flex justify-center mt-8">
                    <button className="bg-yellow-500 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-yellow-600 transition">
                        + Add UPAS/LC Application
                    </button>
                </div>
            </div>
        </div>

        <CurrencyConverter></CurrencyConverter>
       </>
    )
}

export default UsefullTools
