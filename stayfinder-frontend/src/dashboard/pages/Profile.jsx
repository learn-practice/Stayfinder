import React, { useState } from "react";
import Sidebar from "../Sidebar";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Vaishnavi Deshmukh",
    userType: "Host",
    email: "example@gmail.com",
    phone: "+91 1234567890",
  });

  const handleEdit = () => {
    console.log("Edit clicked");
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", user);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 flex justify-center items-center p-6 md:p-12">
        <div className="relative flex flex-col md:flex-row w-full max-w-[700px] items-center md:items-stretch">
          {/* Image */}
          <div className="mb-6 md:mb-0 md:absolute md:-left-[90px] md:top-1/2 md:-translate-y-1/2 w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-[#7A316F] bg-white shadow-lg z-10 flex justify-center items-center">
            <img
              src="/house1.png"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="border-l-4 border-[#7A316F] md:pl-28 pl-5 py-10 w-full rounded-md text-[#7A316F] font-serif font-semibold space-y-5 bg-transparent"
          >
            {["name", "userType", "email", "phone"].map((field) => (
              <div key={field}>
                <label className="text-sm capitalize">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={user[field]}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full p-2 border-b-2 bg-transparent focus:outline-none ${
                    isEditing
                      ? "border-[#7A316F] focus:border-[#7A316F] text-black"
                      : "border-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                />
              </div>
            ))}

            {/* Submit Button Only */}
            {isEditing && (
              <div className="mt-6 text-right">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
                >
                  Submit
                </button>
              </div>
            )}
          </form>

          {/* Edit Button Outside the Form */}
          {!isEditing && (
            <div className="mt-4 text-right w-full md:absolute md:-bottom-5 md:right-10 z-20">
              <button
                type="button"
                onClick={handleEdit}
                className="bg-[#7A316F] text-white px-6 py-2 rounded-full hover:bg-[#5e255b] transition"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
