import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EventInfo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-10 text-center max-w-lg">

        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Tech Innovation Conference
        </h1>

        <p className="text-gray-600 mb-2">
          Date: June 15, 2026
        </p>

        <p className="text-gray-600 mb-2">
          Location: Kigali Convention Center
        </p>

        <p className="text-gray-500 mb-6">
          Join developers, designers, and entrepreneurs for a day of innovation and networking.
        </p>

        <Link to="/register">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Register Now
          </button>
        </Link>

      </div>
    </div>
  );
}

export default EventInfo;