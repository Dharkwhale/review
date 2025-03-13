import React from 'react'
import hotelsimg from '../Images/hotelsimg.png'
import { FaMapMarkerAlt, FaStar, FaBed } from "react-icons/fa";
import { PiSwimmingPoolBold } from "react-icons/pi";
import { PiWine } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";

const HotelSection = () => {
  return (
    <div>
      <div className='bg-white rounded-xl shadow-lg flex text-sm'>
        <div >
            <img src={hotelsimg} alt="HotelImage" className="h-50 p-4" />
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
          <div>
            <p className='pt-3 font-bold text-lg'>Riviera Resort, Lekki</p>
            <p className='font-semibold'> 18, Kenneth Agbakuru street, Off Access Bank Admiralty way, <br></br> Lekki Phase1 </p>
          </div>
            <div dir="rtl" className='pl-10 pt-3 pr-5'>
              <p className="text-xl font-bold text-black-600">₦123,450.00</p>
              <p>Total Price: NGN 560,000 </p>
              <span>1 room x 10 nights incl. taxes</span>
            </div>
          </div>
          <div className='flex items-center space-x-4 text-gray-600 text-sm pt-3'>
             {/* Map */}
          <div className="flex items-center space-x-1 text-blue-500 font-semibold cursor-pointer">
            <FaMapMarkerAlt className="text-lg" />
            <span>Show in map</span>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="font-semibold text-gray-900">8.5</span>
            <span className="text-gray-500">(436)</span>
          </div>

          {/* Room */}
          <div className="flex items-center space-x-1">
            <FaBed className="text-gray-500 text-lg" />
            <span className="text-gray-900">King size room</span>
          </div>
          </div>
          {/* Facilities */}
          
          <div className=' flex flex-grow items-center w-full pb-9'>
            <div className='flex border border-s pt-2 pl-6 pb-2 gap-x-2 w-full'>
              <div className='flex gap-x-2'>
                <p className='flex text-gray-900 '>Facilities: </p>
                <div className='flex items-center space-x-1'>
                  <PiSwimmingPoolBold  className='text-gray-800' />
                  <span className='text-gray-900'>Pool</span>
                </div>
                <div className='flex items-center space-x-1'>
                  <PiWine className='text-gray-800' />
                  <span className='text-gray-900'>Bar</span>
                </div>
                
              </div>
              <div className="ml-auto flex gap-x-2 pr-4">
                <div className='flex items-center space-x-1'>
                  <CiCalendar className='text-gray-700 text-xs'/>
                  <span className='text-gray-700'> Check In:20-0402024</span>
                </div>
                <div className='flex items-center space-x-1'>
                  <CiCalendar className='text-gray-700 text-xs'/>
                  <span className='text-gray-700'> Check Out:29-04-2024</span>
                </div>
                
              </div>
              
            </div>
            
          
          
          </div>
          <div className="flex justify-between items-center px-2 pt-2 pb-4">
            <div className="flex space-x-4 pl-4">
              <button className="text-blue-500 font-semibold">Hotel details</button>
              <button className="text-blue-500 font-semibold">Price details</button>
            </div>
            <button className="text-blue-500 font-semibold pr-5">Edit details</button>
          </div>
          
        </div>
          <div className="bg-red-100 flex items-stretch">
              <button className="text-red-600 text-2xl w-10 flex items-center justify-center">
                &times;
              </button>
          </div>
      </div>
      
    </div>
    
    
  )
}

export default HotelSection