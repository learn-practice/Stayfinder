import React, { useState } from "react";
import Sidebar from "../Sidebar";

const Listing = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    pricePerNight: "",
    images: "",
    guests: "",
    bedrooms: "",
    bathrooms: "",
    amenities: "",
    availableDates: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <form
        onSubmit={handleSubmit}
        className=" w-[90%] md:w-[80%] mx-auto p-8 bg-white"
      >
        <h2 className="text-2xl font-semibold text-[#7A316F] mb-6 font-serif">
          Add Property Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side Inputs */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold block text-[#7A316F]">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block text-[#7A316F]">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block text-[#7A316F]">
                Price Per Night
              </label>
              <input
                type="number"
                name="pricePerNight"
                value={formData.pricePerNight}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block text-[#7A316F]">
                Guests
              </label>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block text-[#7A316F]">
                Images (comma-separated URLs)
              </label>
              <input
                type="text"
                name="images"
                value={formData.images}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>

          {/* Right Side Inputs */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold block text-[#7A316F]">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full border border-gray-300 p-2 rounded-md resize-none"
              ></textarea>
            </div>

            <div>
              <label className="text-sm font-semibold block text-[#7A316F]">
                Bedrooms
              </label>
              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block text-[#7A316F]">
                Bathrooms
              </label>
              <input
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block text-[#7A316F]">
                Amenities (comma-separated)
              </label>
              <input
                type="text"
                name="amenities"
                value={formData.amenities}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block text-[#7A316F]">
                Available Dates
              </label>
              <input
                type="text"
                name="availableDates"
                value={formData.availableDates}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="e.g. 2025-07-10, 2025-07-15"
              />
            </div>
          </div>
        </div>

        <div className="text-right mt-8">
          <button
            type="submit"
            className="bg-[#7A316F] text-white px-6 py-2 rounded-full hover:bg-[#5e255b] transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Listing;
