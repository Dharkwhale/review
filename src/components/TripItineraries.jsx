import React, { useState } from "react";
import flight from "../Images/flight.svg"
import FlightSection from './FlightSection'
import HotelSection from './HotelSection'
import TripActivities from './TripActivities'

const TripItineraries = ({ flightSection, hotelSection, tripActivities, buttonText, leftText, svg }) => {
  const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount(count + 1);
    };
  return (
    <div >
    <div className={`pl-10 pt-6 p-2 rounded-lg border border-gray-100 ${
    flightSection
      ? "bg-[#F0F2F5]"
      : tripActivities
      ? "bg-[#0054E4]" 
      : "bg-[#344054]"
  }`}>
    <div className="flex">
    <img src={svg} alt="Flight" className="h-4 w-4 cursor-pointer mr-2"/>
  <span> {leftText} </span>
    <button
          onClick={handleClick}
          className="ml-auto rounded-md pr-10 mb-4 font-normal py-2 px-4 text-blue-600 text-sm bg-[#FFFFFF] transition flex"
        >
          {buttonText}
        </button>
      </div>
    
    
      {/* {/* <FlightSection /> */}
       <div className="mb-5"></div>
      {flightSection}
      {hotelSection}
      {tripActivities}
      </div>
    
    

    
    </div>

  )
}

export default TripItineraries