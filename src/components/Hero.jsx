import React from 'react';
import banner from '../Images/banner.png';

const Hero = () => {
  return (
    <div className="w-full relative bottom-10 h-screen p-10">
    <div className="relative w-full h-[120px] pt-5">
      {/* Banner Image Positioned at the Top */}
      <img src={banner} alt="banner" className="absolute top-0 left-0 w-full h-auto" />
    </div>
    </div>
  );
};

export default Hero;



