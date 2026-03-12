import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="font-bold text-lg">
          Tech Conference
        </h1>

        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>

          <Link to="/register" className="hover:underline">
            Register
          </Link>

          <Link to="/confirmation" className="hover:underline">
            Confirmation
          </Link>

          <Link to="/review" className="hover:underline">
            Review
          </Link>

          <Link to="/my-registration" className="hover:underline">
            My Registration
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;