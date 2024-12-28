import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary shadow-md">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/">Xperitechlab</Link>
      </div>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:underline hover:text-gray-300 transition duration-300">Home</Link></li>
        <li><Link to="/about" className="hover:underline hover:text-gray-300 transition duration-300">About Us</Link></li>
        <li className="group relative">
          <Link to="/services" className="hover:underline hover:text-gray-300 transition duration-300">Services</Link>
          <ul className="absolute left-0 hidden group-hover:block bg-white text-black shadow-md mt-2 py-2 rounded transition duration-300">
            <li><Link to="/services/website-development" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Website Development</Link></li>
            <li><Link to="/services/digital-marketing" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Digital Marketing</Link></li>
          </ul>
        </li>
        <li><Link to="/schools" className="hover:underline hover:text-gray-300 transition duration-300">Schools</Link></li>
        <li><Link to="/lodges" className="hover:underline hover:text-gray-300 transition duration-300">Lodges</Link></li>
        <li><Link to="/contact" className="hover:underline hover:text-gray-300 transition duration-300">Contact</Link></li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;