import React from 'react'
import airlinelogo from '../Images/airlinelogo.png'
import { PiAirplaneTakeoff } from "react-icons/pi";
import { PiAirplaneLanding } from "react-icons/pi";
import { MdLuggage } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { PiUsbDuotone } from "react-icons/pi";

const FlightSection = () => {
  return (
    <div>
        <div className=' bg-white rounded-xl shadow-lg'>
          <div className='flex justify-between items-center'>
            {/* left details */}
            <div className='flex flex-col'>
            <div className='flex items-center space-x-10'>
              <div className="flex space-x-3">
              <img src={airlinelogo} alt="Airline Logo" className="h-5" />
              {/* airline name */}
              <div>
                <span className="text-lg font-semibold text-gray-900 block">
                  American Airlines
                </span>

                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <span>AA-829</span>
                  <span className="text-gray-300">•</span>
                  <button className="bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded">
                    First Class
                  </button>
                </div>
              </div>
              </div>
               {/* departure time */}
              <div className='flex flex-col justify-center text-center'>
                <p className="text-2xl font-semibold text-gray-900">08:35</p>
                <p className="text-sm text-gray-500">Sun, 20 Aug</p>
                
              </div>

              {/* Distance covered */}
              <div className='flex flex-col items-center text-gray-500 text-sm'>
                <div className='flex'>
                <PiAirplaneTakeoff className='mr-2' />
                  <p>Duration: <span className='font-medium'> 1h 45m</span></p>
                  <PiAirplaneLanding className='ml-2' />
                </div>
                <div className="relative w-full flex flex-col items-center mt-2">
                  <div className="w-full h-1 bg-blue-100 rounded-full relative">
                    <div className="absolute left-1/4 w-1/2 h-1 bg-blue-600 rounded-full"></div>
                  </div>
                  </div>
                  <div className="flex justify-between w-full text-sm font-medium mt-2">
                  <span className="text-gray-900">LOS</span>
                  <span className="text-gray-500">Direct</span>
                  <span className="text-gray-900">SIN</span>
                </div>
              </div>

               {/* arrival time */}
              <div className='flex flex-col justify-center text-center'>
                <p className="text-2xl font-semibold text-gray-900">08:35</p>
                <p className="text-sm text-gray-500">Sun, 20 Aug</p>
              </div>

              {/* amount */}
              <div>
              <p className="text-xl font-bold text-black-600">₦123,450.00</p>
              </div>
          

            </div>
            
            {/* facilities */}
            <div className='flex items-center  w-full border border-s pt-2 pb-2 pl-4 gap-x-4'>
              <p className='flex  items-center gap-x-2'>Facilities:</p>
              <MdLuggage className='flex flex-col' />
              <span>Baggage: 20kg, Cabin Baggage: 8kg</span>
              <TfiVideoClapper />
              <span>in flight entertainment</span>
              <TbToolsKitchen2 />
              <span> In flight meal</span>
              <PiUsbDuotone />
              <span>USB Port</span>
            </div>
            {/* flight, price, edit */}
            <div className="flex justify-between items-center px-4">
            <div className="flex space-x-4">
              <button className="text-blue-500 font-semibold">Flight details</button>
              <button className="text-blue-500 font-semibold">Price details</button>
            </div>
            <button className="text-blue-500 font-semibold">Edit details</button>
          </div>
            
            </div>
            {/* red button */}
            <div className="w-10 bg-red-100 flex items-center justify-center rounded">
              <button className="text-red-600 text-2xl">&times;</button>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default FlightSection