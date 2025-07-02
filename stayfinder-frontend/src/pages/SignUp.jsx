import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [isHost, setIsHost] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-center items-center py-10 w-full">
      <form className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#7A316F] font-serif">
          Create an Account
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700 font-serif">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A316F] outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700 font-serif">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A316F] outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700 font-serif">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A316F] outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col relative">
            <label className="mb-1 text-sm font-semibold text-gray-700 font-serif">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A316F] outline-none"
            />
            <span
              className="absolute right-3 top-[40px] text-xl text-gray-600 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          {/* isHost */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isHost"
              checked={isHost}
              onChange={() => setIsHost(!isHost)}
              className="mr-2"
            />
            <label htmlFor="isHost" className="text-sm text-gray-700 font-serif">
              Sign Up as a Host
            </label>
          </div>

          {/* Avatar Upload */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700 font-serif">
              Upload Avatar
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="text-sm"
            />
            {avatar && (
              <img
                src={avatar}
                alt="avatar-preview"
                className="mt-2 w-20 h-20 rounded-full object-cover border border-gray-300"
              />
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-[#7A316F] text-white p-3 rounded-lg font-semibold hover:bg-[#5c2453] transition duration-300"
          >
            Register
          </button>
        </div>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#7A316F] font-semibold hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
