import React from 'react'
import mobile from '../../image/Mobile.png';
import store from '../../image/Appstore.png';

const Mobile = () => {
    return (
       

<div className="flex  items-center justify-center mx-auto  w-[826.88px] h-[487.68px] top-[4476px] left-[307px] gap-[120px]">
<div>
{/* <h1 className="text-3xl font-bold text-gray-800 mb-4">
    Download Our Mobile App
</h1>
<p className="text-gray-600 mb-8">Study Abroad Guidance at Your Fingertips</p> */}
<div className="w-[434px] h-[435.1px] mt-[200px]">
        <img src={store} alt="store" />

    </div>
</div>
<div className="flex space-x-4 mb-12">

    <div className="w-[434px] h-[435.1px] mt-[20px]">
        <img src={mobile} alt="mobile" />

    </div>
</div>
      
</div>
       
    )
}

export default Mobile
