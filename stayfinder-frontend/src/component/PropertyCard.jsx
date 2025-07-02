import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

const PropertyCard = () => {
  return (
    <div className="flex justify-start w-full p-5">
      <div className="flex flex-col w-[200px]">
        {/* Image with Heart Icon */}
        <div className="relative">
          <img
            src="./property.jpg"
            alt="Property"
            className="w-[180px] h-[180px] rounded-2xl object-cover"
          />
          <FaHeart className="absolute top-3 right-8 shadow-purple-800 text-white text-xl z-10" />
          {/* in future if added rating */}
          {/* <FaStar className="absolute bottom-3 right-8 shadow-purple-800 text-white text-xl z-10" /> */}
        </div>

        {/* Property Details */}
        <div className="mt-1 text-[#461959] font-serif">
          <h2 className="text-lg font-bold">Heading</h2>
          <p className="text-sm ">2000 for 1 day and night</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
