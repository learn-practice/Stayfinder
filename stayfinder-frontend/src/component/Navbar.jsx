import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [logged, setLogged] = useState(true); // change to false to simulate not logged in
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleLogout = () => {
    setLogged(false);
    setProfileMenuOpen(false);
    // Add logout logic here
  };

  return (
    <>
      <nav className="bg-white text-[#7A316F] font-serif relative z-50">
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                src="/logo.png"
                alt="logo"
                className="w-[50px] rounded-full"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex justify-center item-center text-xl font-semibold gap-6">
            <Link to={"/"}>Home</Link>
            <Link to={"/property"}>Property</Link>
            <Link to={"/service"}>Service</Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center text-xl font-semibold gap-4 relative">
            {!logged ? (
              <Link to={"/login"}>Login</Link>
            ) : (
              <div className="relative">
                <button onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
                  <FaUserCircle className="text-3xl text-[#7A316F]" />
                </button>
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md py-2 z-10">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {menuOpen ? (
                <HiX className="text-3xl" />
              ) : (
                <HiMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-lg font-medium">
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to={"/property"} onClick={() => setMenuOpen(false)}>
              Property
            </Link>
            <Link to={"/service"} onClick={() => setMenuOpen(false)}>
              Service
            </Link>
            {!logged ? (
              <Link to={"/login"} onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            ) : (
              <>
                <Link
                  to={"/dashboard/profile"}
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="text-left">
                  Logout
                </button>
              </>
            )}
          </div>
        )}

        {/* Search Bar */}
        <div className="flex justify-center mt-4 mb-2 md:mt-5">
          <div className="relative w-[90%] md:w-1/2">
            <input
              type="text"
              placeholder="Enter place here"
              className="w-full pl-5 pr-12 py-3 rounded-full border border-[#461959] text-[#7A316F] text-lg font-medium focus:outline-none font-serif"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#461959] text-white p-2 rounded-full">
              <IoSearchOutline className="text-xl" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
