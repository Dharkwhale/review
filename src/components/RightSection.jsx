import React from 'react'
import Hero from './Hero';
import TripHeader from './TripHeader';
import ActivitySection from './ActivitySection'
import TripItineraries from './TripItineraries';
import FlightSection from './FlightSection';
import HotelSection from './HotelSection';
import flight from '../Images/flight.svg';
import hotel from '../Images/hotel.svg';
import activities from '../Images/activities.svg'
import TripActivities from './TripActivities';

const RightSection = () => {
    return (
      <div className='flex-1 flex flex-col pl-8'> 
          <Hero/>
          <TripHeader/>
          <ActivitySection />
          <div className='pl-10 pt-12 pb-8'>
            <p className='font-bold'>Trip Itineraries</p>
            <p className='text-sm'>Your trip itineraries are placed here</p>
          </div>
          <TripItineraries flightSection = {<FlightSection />} buttonText = "Add flight" leftText = "fight" svg = {flight} /> 
          <TripItineraries hotelSection = {<HotelSection/>} buttonText = "Add hotels" leftText = "Hotels" svg = {hotel}/>
          <TripItineraries tripActivities = {<TripActivities/>} buttonText = "Add Activities" leftText = "Activities" svg = {activities}/>
      </div>
    )
  }
  

export default RightSection