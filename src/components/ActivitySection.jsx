import React, { useState } from "react";

const ActivitySection = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-row justify-center space-x-2 pl-10 w-3/5">
      <div className="bg-[#000031] text-white flex-1 h-full flex flex-col  rounded-lg border-2 p-4">
        <h3 className="font-semibold">Activities</h3>
        <p className="text-sm mb-4">
          Build, personalize, and optimize your itineraries with our trip planner
        </p>
        {/* Button inside the box */}
        <button
          onClick={handleClick}
          className="rounded-md font-normal py-2 px-4 text-white text-sm bg-blue-500 hover:bg-blue-600 transition"
        >
          Add Activities
        </button>
      </div>
      <div className="bg-[#E7F0FF] text-black flex-1 h-full flex flex-col w-60 rounded-lg border-2 p-4">
        <h3 className="font-semibold">Hotels</h3>
        <p className="text-sm mb-4">
          Build, personalize, and optimize your itineraries with our trip planner
        </p>
        {/* Button inside the box */}
        <button
          onClick={handleClick}
          className="rounded-md font-normal py-2 px-4 text-white text-sm bg-[#0D6EFD] hover:bg-blue-600 transition"
        >
          Add Hotels
        </button>
      </div>
      <div className="bg-[#0D6EFD] text-white flex-1 h-full flex flex-col w-60 rounded-lg border-2 p-4">
        <h3 className="font-semibold">Flights</h3>
        <p className="text-sm mb-4">
          Build, personalize, and optimize your itineraries with our trip planner
        </p>
        {/* Button inside the box */}
        <button
          onClick={handleClick}
          className="rounded-md font-normal py-2 px-4 text-blue-600 text-sm bg-[#FFFFFF] hover:bg-blue-600 transition"
        >
          Add Flights
        </button>
      </div>
    </div>
  );
};

export default ActivitySection;
