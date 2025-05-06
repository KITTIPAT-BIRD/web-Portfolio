import React, { useState, useEffect } from "react";
import menu_icon from "../assets/menu.png";
import close_icon from "../assets/cross_icon.svg"; // ไอคอนปิดเมนู

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileMenu]);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-32">
        <h1 className="text-black font-bold text-2xl">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-black">
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a></li>
          <li><a href="#About" className="cursor-pointer hover:text-gray-400">About</a></li>
          <li><a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a></li>
          <li><a href="#Certificate" className="cursor-pointer hover:text-gray-400">Certificate</a></li>
          <li><a href="#Contact" className="cursor-pointer hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setShowMobileMenu(true)}>
          <img src={menu_icon} className="w-7" alt="Menu Icon" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0  z-20 transition-opacity duration-300 ${showMobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${showMobileMenu ? "translate-x-0" : "translate-x-full"}`}>
          
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button onClick={() => setShowMobileMenu(false)}>
              <img src={close_icon} className="w-6" alt="Close Icon" />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-medium">
            <li><a href="#Header" onClick={() => setShowMobileMenu(false)} className="hover:text-gray-400">Home</a></li>
            <li><a href="#About" onClick={() => setShowMobileMenu(false)} className="hover:text-gray-400">About</a></li>
            <li><a href="#Projects" onClick={() => setShowMobileMenu(false)} className="hover:text-gray-400">Projects</a></li>
            <li><a href="#Certificate" onClick={() => setShowMobileMenu(false)} className="hover:text-gray-400">Certificate</a></li>
            <li><a href="#Contact" onClick={() => setShowMobileMenu(false)} className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
