import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PropertyDetail from "./pages/PropertyDetails";
import Property from "./pages/Property";
import Navbar from "./component/Navbar";
import Service from "./pages/Service";
import Profile from "./dashboard/pages/Profile";
import Footer from "./pages/Footer";
import Listing from "./dashboard/pages/Listing";
import Dashboard from "./dashboard/Dashboard";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/property"} element={<Property />} />
        <Route path={"/property/:id"} element={<PropertyDetail />} />
        <Route path={"/service"} element={<Service />} />
        {/* dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/listing" element={<Listing />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
