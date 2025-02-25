import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-12 w-auto" src="/muj-logo.png" alt="MUJ Logo" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Home</Link>
                <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">About</Link>
                <Link to="/services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Services</Link>
                <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Contact</Link>
                <Link to="/jaipur-events" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Jaipur Events</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link to="/signin" className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-500">
              Sign In
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">About</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Services</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Contact</Link>
            <Link to="/jaipur-events" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Jaipur Events</Link>
            <Link to="/signin" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Sign In</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;