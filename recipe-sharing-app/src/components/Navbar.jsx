import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Recipe Sharing App</Link>
        <div>
          <Link to="/add" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
            Add New Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;