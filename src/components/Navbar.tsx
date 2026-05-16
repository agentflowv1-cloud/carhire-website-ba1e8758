import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 bg-gray-100 md:py-6 lg:py-8">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700">Responsive Design</h1>
      <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
        <li><a href="#" className="text-sm md:text-base lg:text-lg text-gray-600 hover:text-gray-800">Home</a></li>
        <li><a href="#" className="text-sm md:text-base lg:text-lg text-gray-600 hover:text-gray-800">About</a></li>
        <li><a href="#" className="text-sm md:text-base lg:text-lg text-gray-600 hover:text-gray-800">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
