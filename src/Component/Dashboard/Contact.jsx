import React from 'react'
import Pana from '../../image/pana.png';

const Contact = () => {
  return (
    <div>
         {/* <ContactUsText /> */}
      <div className=" md:px-20 lg:px-40 mt-20">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div>
            <div className="w-[434px] h-[435.1px] mt-[20px]">
              <img src={Pana} alt="Pana" />

            </div>

            <div>
              <p className="w-[434px] h-[120px] text-gray-800  leading-[30px] text-center mt-[-150px] text-base"
                style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px' }}>
                FinWise makes loan applications easy.
                Submit your form, connect with banks and corporations, and track your loan status effortlessly.
              </p>
            </div>
          </div>


          {/* Right Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
              Stay Connected With Us
            </h3>
            <form className="space-y-4">
              <div>
                <h2>Your Name</h2>
                <input
                  type="text"
                  // placeholder="Your Name"
                  className="w-[395px] h-[46px] px-4  border rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

              </div>
              <div>
                <h2>Phone number</h2>
                <input
                  type="tel"
                  // placeholder="Phone number"
                  className="w-[395px] h-[46px] px-4 border rounded-full  focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <h2>Email address</h2>
                <input
                  type="email"
                  // placeholder="Email address"
                  className="w-[395px] h-[46px] px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>


              <button className="px-6 py-3 bg-yellow-500 text-white rounded-full text-sm font-semibold hover:bg-yellow-600 transition mx-auto flex justify-center items-center"
                style={{ width: '134px', borderRadius: '50px', border: '2px', padding: '12px 36px', gap: '10px' }}>
                Send
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
