import React, { useState } from "react";
import logo from "../Images/logo1.png";
import home from "../Images/home.svg";
import dashboard from "../Images/dashboard.svg";
import wallet from "../Images/wallet.svg";
import plan from "../Images/plan.svg";
import comission from "../Images/comission.svg";
import notification from "../Images/notification.svg";
import carts from "../Images/carts.svg";
import create from "../Images/create.svg";
import { IoSearchOutline } from "react-icons/io5";

// ProfileDropdown Component
const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-right">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleDropdown}>
        {/* Circle Profile Image */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wDGJzNIktEh4u09WrmOd1yI4xkPvfq.png"
          alt="Profile"
          className="w-10 h-10 rounded-full border"
        />
        {/* Downward Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li>
              <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </a>
            </li>
            <li>
              <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>
            </li>
            <li>
              <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Left Section: Logo and Search */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 bg-blue-500 p-1 rounded" />

        {/* Search Form */}
        <form className="w-[200px] relative">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-full p-2 pl-8 rounded-md bg-gray-100 text-sm"
            />
            <button
              type="submit"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <IoSearchOutline size={18} />
            </button>
          </div>
        </form>
      </div>

      {/* Right Section: Home Icon and Profile */}
      <div className="flex items-center gap-4">
        {/* Home Icon */}
        <div className="flex flex-col items-center">
          <img src={home} alt="Home" className="h-4 w-4 cursor-pointer" />
          <span className="text-sm text-gray-700">Home</span>
        </div> 
        <div className="flex flex-col items-center">
          <img src={dashboard} alt="Home" className="h-4 w-4 cursor-pointer" />
          <span className="text-sm text-gray-700">Dashboard</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={wallet} alt="Home" className="h-4 w-6 cursor-pointer" />
          <span className="text-sm text-gray-700">Wallet</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={plan} alt="Home" className="h-4 w-4 cursor-pointer" />
          <span className="text-sm text-gray-700">Plan</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={comission} alt="Home" className="h-4 w-4 cursor-pointer" />
          <span className="text-sm text-gray-700">Commission Of Life</span>
        </div>
        <div className="w-[1px] h-6 bg-gray-300"></div>
        
        {/* Subscribe Button */}
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Subscribe
        </button>

        <div className="flex flex-col items-center">
          <img src={notification} alt="Home" className="h-4 w-4 cursor-pointer" />
          <span className="text-sm text-gray-700">Notification</span>
        </div>

        <div className="flex flex-col items-center">
          <img src={carts} alt="Home" className="h-4 w-4 cursor-pointer" />
          <span className="text-sm text-gray-700">Carts</span>
        </div>

        <div className="flex flex-col items-center">
          <img src={create} alt="Home" className="h-4 w-4 cursor-pointer" />
          <span className="text-sm text-gray-700">Create</span>
        </div>




        {/* Profile Dropdown */}
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Navbar;


