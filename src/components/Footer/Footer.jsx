import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10 rounded-3xl">
      <div className="p-10 grid md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-pink-500">ToyTopia</h2>
          <p className="text-sm leading-6 opacity-80">
            A vibrant marketplace for kids' toys — discover, explore, and bring joy home! 
            Supporting local toy sellers and happy little buyers.
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="/terms" className="hover:text-pink-500 transition">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-pink-500 transition">Privacy Policy</a></li>
            <li><a href="/about" className="hover:text-pink-500 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-pink-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>📍 123 Toy Street, Dhaka, Bangladesh</li>
            <li>📞 +880 1234-567890</li>
            <li>✉️ support@toyTopia.com</li>
            <li>🕐 Mon - Sat: 9:00 AM - 8:00 PM</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <p className="text-sm opacity-80 mb-3">
            Subscribe to get special offers, free giveaways, and new arrivals.
          </p>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="input text-black mb-2"
            />
            
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md text-white font-medium transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      
      <div className="border-t border-white/20 text-center py-6 text-sm">
        <p className="opacity-60">
          © {new Date().getFullYear()} ToyTopia. All rights reserved.
        </p>
        <p className="text-xs opacity-40 mt-1">
          Designed with ❤️ by ToyTopia Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
