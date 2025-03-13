import React from 'react'
import { PiUserPlus } from "react-icons/pi";
import { MoreHorizontal, Settings } from "lucide-react";
import { CiCalendar } from "react-icons/ci";
import { MdArrowForward } from "react-icons/md";

const TripHeader = () => {
  return (
<div className='pl-10 mt-32'>
  <div className='flex justify-between'>
   <div className='flex bg-[#FEF4E6] px-2 h-5 rounded-md shadow-sm border border-gray-200 text-xs'> 
      <div className='flex items-center space-x-1'>
        <CiCalendar className='text-brown-700 text-xs'/>
        <span className="">21 March 2024</span>
      </div>
      <div className='flex items-center space-x-1'>
        <MdArrowForward className='text-brown-700 text-xs'/>
        <span className=''>21 April 2024</span>
      </div>
      
   </div>
    <div className='pr-10 flex items-center justify-between '>
      <div className="flex items-center justify-center w-40 mr-10 py-3 bg-blue-100  rounded-lg">
        <PiUserPlus className="text-blue-500" size={20} />
        </div>
        <MoreHorizontal className="text-gray-500" size={20} />
      
    </div>
    
  </div>
  <div className='flex justify-between'>
   <div className=''>
   <h1 className='text-black-500 font-bold' style={{fontFamily: "Poppins, sans-serif"}}>
      Bahamas Family Trip
    </h1>

    <div className='flex'>
    <h5 className='text-sm text-black text-opacity-60'>
      New York, United States Of America
    </h5>
    <div className="w-[1px] h-3 bg-gray-300 m-2"></div>
    <h5 className='text-sm text-black text-opacity-60'>Solo Trip</h5>
    </div>
    </div> 
  
    <span className='pr-10'>
    <div className="flex flex-col items-center space-y-4">
      {/* Top Section with UserPlus Icon */}
     

      {/* User Avatar Connected to Settings */}
      <div className="flex items-center space-x-2 pt-6 pr-14">
        {/* User Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Connection Line */}
        <div className="h-0.5 w-8 bg-gray-300"></div>

        {/* Settings Icon in Circle */}
        <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full bg-white shadow mr-14">
          <Settings className="text-gray-500" size={20} />
        </div>
      </div>
    </div>
    </span>
  </div>
    
    
    
    
    </div>  
    )
}

export default TripHeader