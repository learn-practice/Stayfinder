import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-16 bg-gradient-to-b from-white-100 to-purple-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* left: Quick Links */}
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg font-semibold text-[#7A316F] mb-3 font-serif">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-[#7A316F] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#7A316F] transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/property" className="hover:text-[#7A316F] transition">
                Property
              </Link>
            </li>
            {/* <li>
              <Link to="/about" className="hover:text-[#7A316F] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#7A316F] transition">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>

        {/* middle: Contact & Social */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#7A316F] mb-3 font-serif">
            Contact Us
          </h3>
          <p className="flex justify-center md:justify-start items-center gap-2 text-gray-700 text-sm mb-1">
            <FaEnvelope /> info@example.com
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2 text-gray-700 text-sm mb-4">
            <FaPhoneAlt /> +91 12345 67890
          </p>

          <div className="flex justify-center md:justify-start gap-4 text-[#7A316F] text-lg">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="hover:scale-110 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="hover:scale-110 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="hover:scale-110 transition" />
            </a>
          </div>
        </div>
        {/* right: Logo / Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src="/footer.png" // Replace with your image path
            alt="Footer Logo"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom text */}
      <p className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} StayFinder. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
