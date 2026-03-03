import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-gray-300 text-gray-950 p-5 dark:bg-gray-900  dark:text-white duration-200 ">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">E-Shop</h1>
          <p className="text-sm">Quality products at affordable prices</p>
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <a
              className="text-blue-600 hover:text-brightColor transition-all cursor-pointer dark:text-blue-400"
              href="#"
              rel="noopener noreferrer"
            >
              Our Location
            </a>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <h3
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              href="#" // Added href
            >
              Home
            </h3>
            <h3
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              href="#" // Added href
            >
              shop
            </h3>
            <h3
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              href="#" // Added href
            >
              About
            </h3>
            <h3
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              href="#" // Added href
            >
              blogs
            </h3>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="mailto:#" // Changed to mailto:
            >
              E-shop{" "}
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="tel:#" // Changed to tel:
            >
              0114409633
            </a>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook">
                <FaFacebook style={{ color: "#3b5998" }} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter style={{ color: "#1da1f2" }} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram style={{ color: "#e4405f" }} />
              </a>
              <a href="#" aria-label="TikTok">
                <FaTiktok style={{ color: "#010101" }} />
              </a>
              <a href="#" aria-label="WhatsApp">
                <FaWhatsapp style={{ color: "#25d366" }} />
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div flex className="flex-col justify-center items-center text-center">
        <p className="text-center p-4">@copyright 2025 |All rights reserved</p>
        <p>Developed by Gachwe</p>
      </div>
    </div>
  );
};

export default Footer;
