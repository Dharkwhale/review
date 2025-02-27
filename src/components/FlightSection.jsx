import React from 'react'
import airlinelogo from '../Images/airlinelogo.png'

const FlightSection = () => {
  return (
    <div>
    <div className='flex justify-between bg-white p-9 rounded-xl shadow-lg'>
      {/* logo and airline name */}
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

      {/* distance */}
      <div>

      </div>

      {/* arrival time */}
      <div className='flex flex-col justify-center text-center'>
        <p className="text-2xl font-semibold text-gray-900">08:35</p>
        <p className="text-sm text-gray-500">Sun, 20 Aug</p>
      </div>

      {/* amount */}
      <div>

      </div>
    </div>
    
    </div>
  )
}

export default FlightSection