import React from "react";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-lg">

        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Registration Successful 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for registering for the Tech Innovation Conference.
          Your seat has been reserved.
        </p>

        <Link to="/my-registration">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            View My Registration
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Confirmation;