import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

function Navbar({ onMenuClick }) {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-red-600">YouTube</span>
        </Link>
      </div>
      <Search />
    </div>
  );
}

export default Navbar;

