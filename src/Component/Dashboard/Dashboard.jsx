import React from 'react'
import clarityFormLine from '../../image/Dashboard.png';
import Work from './Work';
import TypesOfUPASLC from './TypesOfUPASLC';
import Contact from './Contact';
import Mobile from './Mobile';

const Dashboard = () => {
  return (

   <>
      <div className="pt-[100px] bg-gradient-to-b  flex items-center justify-center mb-20">
      <div className=" px-4  ">


        <h1
          className="text-[43px] font-sarala font-bold text-gray-800 leading-[63px] mb-4 "
          style={{ width: '770px', height: '129px' }}
        >
          Empowering Your Financial Future Access UPAS/LC with Ease.
        </h1>

        <p
          className="text-[18px] font-sarala font-normal text-gray-600 leading-[29.35px] mb-[30px] "
          style={{ width: '542px', height: '58px' }}
        >
          Simplifying UPAS/LC Applications for Customers, Streamlining Approvals for Banks.
        </p>

        <button
          className="px-[40px] py-[20px] bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold rounded-[50px] border-[2.39px] shadow"
          style={{ width: '387px', height: '74px' }}
        >
          Add UPAS/LC Application
        </button>

      </div>
      <div className="">
        <div className="w-[474.57px] h-[441.22px]">
          <img src={clarityFormLine} alt="Clarity Form" />
        </div>
      </div>
    </div>

    
      <div className='mt-[200px]'>
        <TypesOfUPASLC></TypesOfUPASLC>
      </div>
      <div className='mb-36'>
      <Work></Work>
      </div>
      <div className='mb-36'>
       <Contact></Contact>
      </div>
      <div className='mt-[50px]'>
       <Mobile></Mobile>
      </div>
    
   </>


  )
}

export default Dashboard



