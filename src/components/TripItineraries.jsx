import React, { useState } from "react";
import flight from "../Images/flight.svg"
import FlightSection from './FlightSection'

const TripItineraries = () => {
  const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount(count + 1);
    };
  return (
    <div >
    <div className='pl-10 pt-12 pb-8'>
      <p className='font-bold'>Trip Itineraries</p>
      <p className='text-sm'>Your trip itineraries are placed here</p>
    </div>
    <div className='pl-10 pt-6 bg-gray-200 p-2 rounded-lg border border-gray-100'>
    <div className="flex">
    <img src={flight} alt="Flight" className="h-4 w-4 cursor-pointer mr-2"/>
    <span>Flight </span>
    <button
          onClick={handleClick}
          className="ml-auto rounded-md pr-10 mb-4 font-normal py-2 px-4 text-blue-600 text-sm bg-[#FFFFFF] transition flex"
        >
          Add Flights
        </button>
      </div> 
    
    
      <FlightSection />
    </div>
    
    

    
    </div>
  )
}

export default TripItineraries