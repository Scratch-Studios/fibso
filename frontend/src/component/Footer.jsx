import React from 'react';
// Import specific icons from react-icons/fa (Font Awesome)
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8 animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold text-blue-400 mb-5">Contact Info</h3>
          <ul className="space-y-2 text-gray-300">
            <li>111 Main</li>
            <li>Chennai, 600007</li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-blue-300 transition-colors duration-200">(123) 456-7890</a></li>
            <li>Email: <a href="mailto:info@example.com" className="hover:text-blue-300 transition-colors duration-200">demo@example.com</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold text-blue-400 mb-5">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-blue-300 transition-colors duration-200">Home</a></li>
            <li><a href="#products" className="hover:text-blue-300 transition-colors duration-200">Products</a></li>
            <li><a href="#about" className="hover:text-blue-300 transition-colors duration-200">About Us</a></li>
            <li><a href="#contact" className="hover:text-blue-300 transition-colors duration-200">Contact</a></li>
            <li><a href="#privacy" className="hover:text-blue-300 transition-colors duration-200">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media & Map */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold text-blue-400 mb-5">Social Media</h3>
          <div className="flex space-x-4 mb-8">
            {/* Using React Icons here */}
            <a href="#facebook" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white text-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              <FaFacebookF />
            </a>
            <a href="#twitter" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white text-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              <FaTwitter />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white text-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              <FaLinkedinIn />
            </a>
            <a href="#instagram" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white text-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              <FaInstagram />
            </a>
          </div>
          <div className="bg-gray-700 w-full h-48 flex items-center justify-center text-gray-400 text-lg rounded-lg">
            MAP 
            {/* You'd embed a real map here, e.g., <iframe src="your_map_embed_url"></iframe> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;