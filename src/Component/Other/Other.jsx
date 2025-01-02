import React from 'react'

const Other = () => {
  return (
    <div>
        <div className="mt-12">
    <div className="flex justify-between gap-10">
        {/* <!-- Left Section --> */}
        <div className="bg-white shadow-md rounded-md p-6 w-[400px]">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Updates</h3>
            <ul className="text-sm text-gray-600 list-disc pl-5">
                <li>3 platinum users requested to connect with you</li>
                <li>4 gold users approved your request</li>
                <li>2 gold users offered this request</li>
                <li>You approved a platinum user 00ID</li>
                <li>2 gold users accepted your connection request</li>
            </ul>
        </div>

        {/* <!-- Right Section --> */}
        <div className="bg-white shadow-md rounded-md p-6 flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Results in Chart</h3>
            <div className="flex justify-between items-center">
                {/* <!-- My Requests Chart --> */}
                <div className="text-center">
                    <h4 className="text-sm font-medium text-gray-700">My Requests</h4>
                    <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center mx-auto mt-2">
                        <span className="text-xl font-bold text-gray-800">12</span>
                    </div>
                    <div className="mt-3">
                        <p className="text-xs text-gray-600">Offered: 4</p>
                        <p className="text-xs text-gray-600">Pending: 6</p>
                        <p className="text-xs text-gray-600">Cancelled: 6</p>
                    </div>
                </div>

                {/* <!-- Incoming Requests Chart --> */}
                <div className="text-center">
                    <h4 className="text-sm font-medium text-gray-700">Incoming Requests</h4>
                    <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center mx-auto mt-2">
                        <span className="text-xl font-bold text-gray-800">12</span>
                    </div>
                    <div className="mt-3">
                        <p className="text-xs text-gray-600">Offered: 4</p>
                        <p className="text-xs text-gray-600">Pending: 6</p>
                        <p className="text-xs text-gray-600">Cancelled: 6</p>
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
  )
}

export default Other
