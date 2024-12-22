import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between">
        <h1 className="text-xl font-bold">Travel Website</h1>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/dashboard" className="mr-4">Dashboard</Link>
          <Link to="/booking-management" className="mr-4">Booking Management</Link>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/register" className="mr-4">Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;