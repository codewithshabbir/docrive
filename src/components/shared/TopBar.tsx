import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="bg-primary text-white text-sm px-6 py-3">
      <div className="flex justify-between items-stretch flex-wrap gap-2">
        {/* Social Icons */}
        <div className="flex divide-x divide-blue-900">
          <div className="px-3 flex items-center">
            <FaFacebookF className="hover:text-gray-200 transition" />
          </div>
          <div className="px-3 flex items-center">
            <FaLinkedinIn className="hover:text-gray-200 transition" />
          </div>
          <div className="px-3 flex items-center">
            <FaXTwitter className="hover:text-gray-200 transition" />
          </div>
        </div>

        {/* Timing & Contact */}
        <div className="flex divide-x divide-blue-900 text-xs sm:text-sm">
          <div className="flex items-center gap-2 px-4">
            <FaClock />
            <span>Mon - Fri: 09:00 - 21:00</span>
          </div>
          <div className="flex items-center gap-2 px-4">
            <FaPhoneAlt />
            <span>Emergency: +1-555-122</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;