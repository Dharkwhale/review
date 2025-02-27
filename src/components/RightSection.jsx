import React from 'react'
import Hero from './Hero';
import TripHeader from './TripHeader';
import ActivitySection from './ActivitySection'
import TripItineraries from './TripItineraries';

const RightSection = () => {
    return (
      <div className='flex-1 flex flex-col pl-8'> 
          <Hero/>
          <TripHeader/>
          <ActivitySection />
          <TripItineraries />

      </div>
    )
  }
  

export default RightSection