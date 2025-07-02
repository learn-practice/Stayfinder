import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PropertyDetail from "./pages/PropertyDetails";
import Property from "./pages/Property";
import Navbar from "./component/Navbar";
import Service from "./pages/Service";
import Footer from "./pages/Footer";

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
      </Routes>
      <Footer />
    </>
  );
};

export default App;
