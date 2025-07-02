import React from "react";
import {
  FaHome,
  FaSearch,
  FaCalendarAlt,
  FaChartBar,
  FaShieldAlt,
  FaCamera,
} from "react-icons/fa";

const Service = () => {
  return (
    <div className="px-6 md:px-16 py-10 text-[#7A316F] font-serif">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          All-in-One Property Platform
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover, list, and manage properties with ease — all from one simple
          platform.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <FaHome />,
            title: "Property Listing",
            desc: "Upload and manage your listings effortlessly.",
          },
          {
            icon: <FaSearch />,
            title: "Search & Explore",
            desc: "Find your next home with advanced filters.",
          },
          {
            icon: <FaCalendarAlt />,
            title: "Booking Management",
            desc: "Control your calendar, bookings, and availability.",
          },
          {
            icon: <FaChartBar />,
            title: "Host Dashboard",
            desc: "Track your property's performance and inquiries.",
          },
          {
            icon: <FaShieldAlt />,
            title: "Verified Listings",
            desc: "We ensure authenticity for every listing.",
          },
          {
            icon: <FaCamera />,
            title: "High-Quality Media",
            desc: "Upload stunning visuals to attract renters.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-purple-50 shadow-lg border border-#7A316F rounded-xl p-6 text-center hover:shadow-2xl transition"
          >
            <div className="text-3xl mb-4 bg-[#7A316F] text-white flex justify-center  inline-block p-5 rounded-full">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">1. Create Account</h3>
            <p className="text-gray-600">
              Sign up as a host or guest in seconds.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">2. Upload Property</h3>
            <p className="text-gray-600">
              Add details, media, pricing, and go live.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              3. Start Receiving Inquiries
            </h3>
            <p className="text-gray-600">
              Get discovered and manage your bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-5">
          Join thousands of users listing and renting properties today.
        </p>
        <a
          href="/signup"
          className="inline-block bg-[#7A316F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5c2453] transition"
        >
          Sign Up Now
        </a>
      </section>
    </div>
  );
};

export default Service;
