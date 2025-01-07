import React from 'react'
// import clarityFormLine from '../../image/Profile/Logout.png';

const Profile = () => {
    return (
        <div>
            <div className="max-w-sm mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
                {/* User Info */}
                <div className="flex mb-6 ">
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Profile"
                        className="w-20 h-20 rounded-full shadow-md"
                    />
                    <div className='ml-4 mb-12'>
                        <h2 className="text-lg font-semibold text-gray-800 mt-3 ">Sorovi Akter</h2>
                        <p className="text-sm text-gray-500">example@gmail.com</p>
                    </div>
                </div>

                {/* Line */}
                <div className="mt-6 border-t pt-4">

                </div>

                {/* Menu Items */}
                <ul className="space-y-8">
                    {/* Home */}
                    <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-700 transition">
                        <svg
                            xmlns=""
                            className="h-5 w-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                            />
                        </svg>
                        {/* <div className="h-5 w-5 text-gray-500">
                            <img
                                src="/image/Profile/MenuIcon.png" // Replace this with your image path
                                alt="Icon"
                                className="object-contain h-full w-full"
                            />
                        </div> */}

                        {/* <span className="text-gray-700 font-medium">Home</span> */}

                        <span
                            className="text-gray-700 font-medium"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 500,
                                fontSize: '14.95px',
                                lineHeight: '18.68px',
                                width: '45px',
                                height: '19px',
                                display: 'inline-block', // Ensures width and height are respected
                            }}
                        >
                            Home
                        </span>

                    </li>

                    {/* Your Profile */}
                    <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-700 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5.121 17.804A6 6 0 1116.95 6.05m-4.95 2A6 6 0 1016.95 6.05"
                            />
                        </svg>
                        <span className="text-gray-700 font-medium">Your Profile</span>
                    </li>

                    {/* Change Password */}
                    <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-700 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                        <span className="text-gray-700 font-medium ">Change Password</span>
                    </li>
                </ul>

                {/* Logout */}
                <div className=" border-t pt-4 mt-44">

                    <button className="flex items-center space-x-3 text-red-500 hover:text-red-700 transition font-medium">
                        <svg
                            xmlns="image/Profile/Logout"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7"
                            />
                        </svg>

                        <span>Log out</span>
                    </button>
                </div>

                {/* <div className="border-t pt-4 mt-44">
  <button className="flex items-center space-x-3 text-red-500 hover:text-red-700 transition font-medium">
    
    <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]">
      <img src={clarityFormLine} alt="Clarity Form" className="object-cover rounded-full" />
    </div>
    
    
    <span>Log out</span>
  </button>
</div> */}





            </div>
        </div>
    )
}

export default Profile
