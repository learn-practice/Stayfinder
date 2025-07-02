import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi"; // Icons for menu toggle

const Navbar = () => {
  const [logged, setLogged] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white text-[#7A316F] font-serif ">
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                src="./logo.png"
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
          <div className="hidden md:flex text-xl font-semibold justify-between items-center">
            {!logged ? (
              <Link to={"/login"}>Login</Link>
            ) : (
              <Link to={"/signup"}>SignUp</Link>
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
              <Link to={"/signup"} onClick={() => setMenuOpen(false)}>
                SignUp
              </Link>
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
