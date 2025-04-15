import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark shadow-navbar">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gold tracking-wider font-mono">
            Sandro's Portfolio
          </h1>
          <div className="flex space-x-8">
            <button className="px-3 py-2 text-silver hover:text-gold transition-colors duration-300 font-mono tracking-wide">
              About Me
            </button>
            <button className="px-3 py-2 text-silver hover:text-gold transition-colors duration-300 font-mono tracking-wide">
              Technologies
            </button>
            <button className="px-3 py-2 text-silver hover:text-gold transition-colors duration-300 font-mono tracking-wide">
              Projects
            </button>
            <button className="px-3 py-2 text-silver hover:text-gold transition-colors duration-300 font-mono tracking-wide">
              CV
            </button>
            <button className="px-3 py-2 text-silver hover:text-gold transition-colors duration-300 font-mono tracking-wide">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
