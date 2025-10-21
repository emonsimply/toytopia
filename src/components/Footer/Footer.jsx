import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-10 rounded-3xl">
      <div className="p-10 grid md:grid-cols-3 gap-8">
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">ToyTopia</h2>
          <p className="text-sm leading-6">
            A vibrant marketplace for kids' toys — discover, explore, and bring joy home! 
            We support local toy sellers and happy little buyers.
          </p>
        </div>

        
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/terms" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl justify-center">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 text-center py-4 text-sm">
        <p>© 2025 ToyTopia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
