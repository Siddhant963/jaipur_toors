import React from 'react';
import {
  FaRegCalendarAlt,
  FaMapMarkedAlt,
  FaHotel,
  FaUtensils,
} from 'react-icons/fa';

const Tourinfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 top-4">
      {/* Header Section */}
      <div className="bg-gray-700 p-6 text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Tour Information</h3>
      </div>

      {/* Details Section */}
      <div className="p-6">
        <div className="space-y-4 mb-6">
          {/* Duration */}
          <div className="flex flex-wrap justify-between items-center pb-2 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-blue-500" />
              <span className="text-gray-700 text-sm sm:text-base">Duration</span>
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base">
              10 Days / 9 Nights
            </span>
          </div>

          {/* Destinations */}
          <div className="flex flex-wrap justify-between items-center pb-2 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <FaMapMarkedAlt className="text-blue-500" />
              <span className="text-gray-700 text-sm sm:text-base">Destinations</span>
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base">
              8 Cities
            </span>
          </div>

          {/* Hotels */}
          <div className="flex flex-wrap justify-between items-center pb-2 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <FaHotel className="text-blue-500" />
              <span className="text-gray-700 text-sm sm:text-base">Hotels</span>
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base">
              4★ Accommodation
            </span>
          </div>

          {/* Meals */}
          <div className="flex flex-wrap justify-between items-center pb-2 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <FaUtensils className="text-blue-500" />
              <span className="text-gray-700 text-sm sm:text-base">Meals</span>
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base">
              Breakfast Included
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourinfo;
