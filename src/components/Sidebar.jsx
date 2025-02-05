import React from "react";
import { FaUmbrellaBeach, FaHotel, FaPlane, FaGraduationCap, FaPassport, FaUserShield, FaBriefcaseMedical, FaBox } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-100 h-screen bg-gray-100 p-4 flex flex-col px-9 justify-between">
      {/* Navigation Items */}
      <div className="space-y-8 bg-white p-8">
        <SidebarItem icon={<FaUmbrellaBeach />} label="Activities" />
        <SidebarItem icon={<FaHotel />} label="Hotels" />
        <SidebarItem icon={<FaPlane />} label="Flights" />
        <SidebarItem icon={<FaGraduationCap />} label="Study" />
        <SidebarItem icon={<FaPassport />} label="Visa" />
        <SidebarItem icon={<FaUserShield />} label="Immigration" />
        <SidebarItem icon={<FaBriefcaseMedical />} label="Medical" />
        <SidebarItem icon={<FaBox />} label="Vacation Packages" />

        <div className="bg-gray-200 p-3 w-[200px] rounded-md flex items-center justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Go</button>
        <div className="flex items-center gap-2">
          <span className="text-[12px]">Personal Account</span>
          <IoChevronDown />
      </div>
      
        </div>
      </div>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-blue-500">
      <span className="text-sm">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;
