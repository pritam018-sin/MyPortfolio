import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-fit flex items-center md:bg-black/5 md:backdrop-blur-lg md:border-b md:border-white/15 md:shadow-xl rounded-full">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm px-4 py-2 rounded-full font-medium transition-all duration-300 ${isActive
                    ? 'text-red-400 border border-red-400 bg-white/5'
                    : 'text-white hover:border hover:border-red-400 hover:bg-white/5'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 right-4 w-48 rounded-xl shadow-2xl bg-black/60 backdrop-blur-md border border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-4 scale-95'
          }`}
      >
        <div className="flex flex-col items-center py-6 gap-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-base px-4 py-2 w-full text-center transition duration-200 
                  ${isActive
                    ? 'bg-white/10 text-red-400 border border-red-400 rounded-lg'
                    : 'text-white hover:bg-white/10 hover:text-red-400'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
