import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-2xl font-bold text-primary">
              Qalmax.
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-secondary font-semibold" : "text-primary hover:text-secondary"}>
              Home
            </NavLink>
            <NavLink to="/solutions" className={({ isActive }) => isActive ? "text-secondary font-semibold" : "text-primary hover:text-secondary"}>
              Solutions
            </NavLink>
            <NavLink to="/work" className={({ isActive }) => isActive ? "text-secondary font-semibold" : "text-primary hover:text-secondary"}>
              Work
            </NavLink>
            <NavLink to="/connect" className={({ isActive }) => isActive ? "text-secondary font-semibold" : "text-primary hover:text-secondary"}>
              Connect
            </NavLink>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/connect"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary hover:bg-opacity-90"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
