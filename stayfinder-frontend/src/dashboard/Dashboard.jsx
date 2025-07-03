import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="w-full flex justify-center items-center text-center">
        <div>
          <div>
            <img src="/welcome.png" alt="welcome image" />
            <h1 className="text-3xl font-bold font-serif text-[#7A316F]">Welcome to StayFinder</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
