
import React, { useState, useEffect } from "react";
import { Menu, X, Home, Info, FileText, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-[#a18fef] via-[#9361ff] to-[#1A1F2C] bg-clip-text text-transparent">
              Janakpur Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`font-medium flex items-center ${
              isScrolled ? 'text-[#000100] hover:text-foundation-purple' : 'text-[#F75C03] hover:text-foundation-purple'
            }`}>
              <Home size={18} className="nav-icon" /> 
              <span className="nav-text">Home</span>
            </Link>
            <Link to="/about" className={`font-medium flex items-center ${
              isScrolled ? 'text-[#000100] hover:text-foundation-purple' : 'text-[#F75C03] hover:text-foundation-purple'
            }`}>
              <Info size={18} className="nav-icon" />
              <span className="nav-text">About</span>
            </Link>
            <Link to="/projects" className={`font-medium flex items-center ${
              isScrolled ? 'text-[#000100] hover:text-foundation-purple' : 'text-[#F75C03] hover:text-foundation-purple'
            }`}>
              <FileText size={18} className="nav-icon" />
              <span className="nav-text">Projects</span>
            </Link>
            <Link to="/history" className={`font-medium flex items-center ${
              isScrolled ? 'text-[#000100] hover:text-foundation-purple' : 'text-[#F75C03] hover:text-foundation-purple'
            }`}>
              <History size={18} className="nav-icon" />
              <span className="nav-text">History</span>
            </Link>
            <Link to="/donate" className="donation-button">
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className={isScrolled ? "" : "text-white"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-foundation-purple font-medium py-2 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={18} className="mr-2" /> Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-800 hover:text-foundation-purple font-medium py-2 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info size={18} className="mr-2" /> About
              </Link>
              <Link 
                to="/projects" 
                className="text-gray-800 hover:text-foundation-purple font-medium py-2 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText size={18} className="mr-2" /> Projects
              </Link>
              <Link 
                to="/history" 
                className="text-gray-800 hover:text-foundation-purple font-medium py-2 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <History size={18} className="mr-2" /> History
              </Link>
              <Link 
                to="/donate" 
                className="donation-button text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;