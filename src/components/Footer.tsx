
import React from "react";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foundation-darkPurple text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Janakpur Foundation</h3>
            <p className="text-gray-300 mb-4">
              Making a difference in Nepal through sustainable development and community empowerment.
            </p>
            <div className="flex items-center space-x-2">
              <Heart size={20} className="text-foundation-orange" />
              <span>Thank you for your support</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:info@janakpurfoundation.org" className="text-gray-300 hover:text-white">
                  info@janakpurfoundation.org
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:janakpurfoundation01@gmail.com" className="text-gray-300 hover:text-white">
                  janakpurfoundation01@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+9771234567890" className="text-gray-300 hover:text-white">
                  +977 1234 567 890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Janakpur, Dhanusha District, Ward no.4, Nepal
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#history" className="text-gray-300 hover:text-white">
                  Our History
                </a>
              </li>
              <li>
                <a href="#donate" className="text-gray-300 hover:text-white">
                  Make a Donation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Janakpur Foundation. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
