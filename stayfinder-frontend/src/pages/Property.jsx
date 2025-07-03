import React from "react";
import PropertyCard from "../component/PropertyCard";
const Property = () => {
  return (
    <div className="m-2 md:m-5">
      <div className="grid grid-cols-2 md:grid-cols-5">
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
    </div>
  );
};

export default Property;
