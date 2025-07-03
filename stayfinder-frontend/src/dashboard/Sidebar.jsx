import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GiMushroomHouse } from "react-icons/gi";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    {
      label: "Profile",
      icon: <CgProfile className="text-2xl" />,
      path: "/dashboard/profile",
    },
    {
      label: "Listing",
      icon: <GiMushroomHouse className="text-2xl" />,
      path: "/dashboard/listing",
    },
  ];

  return (
    <div className="bg-amber-50 md:min-h-screen w-full md:w-64  p-4 sticky top-0 z-40">
      <nav className="flex flex-row md:flex-col justify-around md:justify-start gap-6 md:gap-8 text-[#7A316F] font-serif text-lg">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-2 rounded-lg transition duration-200 hover:bg-amber-100 ${
              location.pathname === item.path
                ? "bg-amber-200 font-semibold"
                : ""
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
