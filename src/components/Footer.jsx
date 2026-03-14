import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-20">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Useful Links */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Useful Links</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="cursor-pointer hover:text-black">Blog</li>
            <li className="cursor-pointer hover:text-black">Privacy</li>
            <li className="cursor-pointer hover:text-black">Terms</li>
            <li className="cursor-pointer hover:text-black">FAQs</li>
            <li className="cursor-pointer hover:text-black">Security</li>
            <li className="cursor-pointer hover:text-black">Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Categories</h2>
            <span className="text-green-600 cursor-pointer hover:underline">
              see all
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600 text-sm">
            <ul className="space-y-2">
              <li>Vegetables & Fruits</li>
              <li>Cold Drinks & Juices</li>
              <li>Bakery & Biscuits</li>
              <li>Dry Fruits, Masala & Oil</li>
              <li>Pharma & Wellness</li>
              <li>Personal Care</li>
            </ul>

            <ul className="space-y-2">
              <li>Dairy & Breakfast</li>
              <li>Instant & Frozen Food</li>
              <li>Sweet Tooth</li>
              <li>Sauces & Spreads</li>
              <li>Organic & Premium</li>
              <li>Cleaning Essentials</li>
            </ul>

            <ul className="space-y-2">
              <li>Munchies</li>
              <li>Tea, Coffee & Milk Drinks</li>
              <li>Atta, Rice & Dal</li>
              <li>Chicken, Meat & Fish</li>
              <li>Baby Care</li>
              <li>Beauty & Cosmetics</li>
            </ul>

            <ul className="space-y-2">
              <li>Kitchen & Dining</li>
              <li>Stationery Needs</li>
              <li>Pet Care</li>
              <li>Books</li>
              <li>Fashion & Accessories</li>
              <li>E-Gift Cards</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Middle Section */}
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-600 text-center md:text-left">
            © 2026 GroceryKro Private Limited. All rights reserved.
          </p>

          {/* Download App */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Download App</span>
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
              App Store
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
              Google Play
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-white">
            <div className="bg-black p-3 rounded-full cursor-pointer">
              <FaFacebookF size={14} />
            </div>
            <div className="bg-black p-3 rounded-full cursor-pointer">
              <FaXTwitter size={14} />
            </div>
            <div className="bg-black p-3 rounded-full cursor-pointer">
              <FaInstagram size={14} />
            </div>
            <div className="bg-black p-3 rounded-full cursor-pointer">
              <FaLinkedinIn size={14} />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-500">
        GroceryKro is an independent grocery delivery platform. All product
        names, logos and brands are property of their respective owners.
      </div>

    </div>
  );
};

export default Footer;