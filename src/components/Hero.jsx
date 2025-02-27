import React from 'react';
import banner from '../Images/banner.png';
import arrow from '../Images/arrow.svg'

const Hero = () => {
  return (
    <div className="w-full relative bottom-10  p-10">
    <div className="relative w-full pt-5">
      {/* Banner Image Positioned at the Top */}
      <img src={banner} alt="banner" className="absolute top-0 left-0 w-full h-[200px]" />
    </div>
    <div className='absolute left-16 top-16'>
      <img src={arrow} alt="arrow" className='' />
    </div>
    </div>
  
  );
};

export default Hero;



