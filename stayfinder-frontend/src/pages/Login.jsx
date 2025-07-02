import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center p-5 md:h-screen ">
      <div className="bg-white p-0 md:p-8 rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row items-center md:items-stretch">
        {/* Form Section */}
        <form className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#7A316F] font-serif">
            Login to Your Account
          </h2>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className="mb-1 text-sm font-semibold text-gray-700 font-serif"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A316F]"
            />
          </div>

          <div className="flex flex-col mb-4 relative">
            <label
              htmlFor="password"
              className="mb-1 text-sm font-semibold text-gray-700 font-serif"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A316F]"
            />
            <span
              className="absolute right-3 top-[40px] text-xl text-gray-600 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          <div className="mb-4 text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <a
              href="./signup"
              className="text-[#7A316F] font-semibold hover:underline"
            >
              Sign Up
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#7A316F] text-white p-3 rounded-lg font-semibold hover:bg-[#5c2453] transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Right Side Image - Only visible on md and above */}
        <div className="hidden md:block w-1/2 rounded-r-2xl overflow-hidden">
          <img
            src="/house1.png" 
            alt="Login Visual"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
