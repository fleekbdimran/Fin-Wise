import React from 'react';
// import backgroundImage from '../../image/Contact Us.png';
import backgroundImage from '../../image/ContactUs.png';


const ContactUsText = () => {
    return (


        // <div>
        //     <div className="flex flex-col items-center justify-center mt-20">
        //         <h2 className="w-96 h-auto text-3xl lg:text-4xl font-bold text-gray-800 leading-15 text-center mb-8 mt-10"
        //             style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
        //             Get in Touch with Us
        //         </h2>
        //         <p className="w-[696px] h-auto text-gray-600 text-base leading-[27px] text-center mb-8"
        //             style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
        //             We’re here to assist you with any questions or concerns. Whether you need support with your loan application or have inquiries about our company, feel free to reach out. Our team is dedicated to providing prompt and helpful responses to ensure your needs are met.
        //         </p>

        //         <button className="px-6 py-3 bg-yellow-500 text-white rounded-full text-sm font-semibold hover:bg-yellow-600 transition"
        //             style={{ width: '134px', borderRadius: '50px', border: '2px', padding: '12px 20px', gap: '10px' }}>
        //             Learn More
        //         </button>

        //     </div>
        // </div>

        <div
            className="relative bg-cover bg-center h-screen"
            style={{
                backgroundImage: `url(${backgroundImage || 'https://via.placeholder.com/3840x2160'})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-0"></div>

            <div className="flex flex-col items-center justify-center mt-20 relative z-10">
                <h2
                    className="w-96 h-auto text-3xl lg:text-4xl font-bold text-gray-800 leading-15 text-center mb-8 mt-10"
                    style={{ fontFamily: 'Poppins', fontWeight: 700 }}
                >
                    Get in Touch with Us
                </h2>
                <p
                    className="w-[696px] h-auto text-gray-600 text-base leading-[27px] text-center mb-8"
                    style={{ fontFamily: 'Poppins', fontWeight: 400 }}
                >
                    We’re here to assist you with any questions or concerns. Whether you need
                    support with your loan application or have inquiries about our company,
                    feel free to reach out. Our team is dedicated to providing prompt and
                    helpful responses to ensure your needs are met.
                </p>
                <button
                    className="px-6 py-3 bg-yellow-500 text-white rounded-full text-sm font-semibold hover:bg-yellow-600 transition"
                    style={{
                        width: '134px',
                        borderRadius: '50px',
                        border: '2px solid',
                        padding: '12px 20px',
                        gap: '10px',
                    }}
                >
                    Learn More
                </button>
            </div>
        </div>

    );
}

export default ContactUsText;
