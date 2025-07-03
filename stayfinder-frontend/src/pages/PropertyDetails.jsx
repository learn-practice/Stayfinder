import React from "react";

const PropertyDetails = () => {
  const property = {
    description:
      "A luxurious beachside villa offering stunning ocean views, modern interiors, and world-class amenities. Perfect for a relaxing vacation with family or friends.",
    address: {
      street: "123 Palm Beach Road",
      city: "Goa",
      state: "Goa",
      country: "India",
      zip: "403001",
    },
    pricePerNight: 9500,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
      "Wi-Fi",
      "Air Conditioning",
      "Private Pool",
      "Sea View",
      "Kitchen",
      "Free Parking",
      "Washer",
      "TV",
      "24/7 Security",
    ],
    availableDates: ["2025-07-05", "2025-07-06", "2025-07-07", "2025-07-10"],
  };

  return (
    <div className="m-10">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
        {/* Left side: Image + Heading */}
        <div>
          <img
            src="/property.jpg"
            alt="property"
            className="w-full h-[300px] object-cover rounded-xl"
          />
          <h1 className="text-3xl font-bold mt-4 text-[#7A316F]">
            Beachside Villa in Goa
          </h1>
          <p className="text-lg">{property.description}</p>
        </div>

        {/* Right side: Property Info */}
        <div className="space-y-4 text-[#461959] font-serif">
          <div>
            <h2 className="font-semibold text-xl">Address:</h2>
            <p>
              {property.address.street}, {property.address.city},{" "}
              {property.address.state}, {property.address.country} -{" "}
              {property.address.zip}
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl">Price Per Night:</h2>
            <p>₹{property.pricePerNight}</p>
          </div>

          <div className="flex gap-4">
            <p> Guests: {property.guests}</p>
            <p> Bedrooms: {property.bedrooms}</p>
            <p> Bathrooms: {property.bathrooms}</p>
          </div>

          <div>
            <h2 className="font-semibold text-xl">Amenities:</h2>
            <ul className="list-disc ml-6">
              {property.amenities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl">Available Dates:</h2>
            <p>{property.availableDates.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
