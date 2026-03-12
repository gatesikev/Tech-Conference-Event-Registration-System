import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


function ReviewPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Try to get data from navigation state, 
  // OR fallback to localStorage if they refreshed the page.
  const formData = location.state || JSON.parse(localStorage.getItem("registration"));

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No registration data found. Please register first.</p>
      </div>
    );
  }
  
  // ... rest of your code
  // Inside your handleSubmit function in Register.jsx
const handleSubmit = (e) => {
  e.preventDefault();
  // ... your form logic
  navigate("/review", { state: formData }); // This 'state' is what Review.jsx is looking for!
};
  const handleConfirm = () => {
    // save data to local storage
    localStorage.setItem("registration", JSON.stringify(formData));

    navigate("/confirmation");
  };

  const handleEdit = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Review Your Registration
        </h2>

        <div className="space-y-3">

          <p><strong>Name:</strong> {formData.name}</p>

          <p><strong>Email:</strong> {formData.email}</p>

          <p><strong>Phone:</strong> {formData.phone}</p>

          <p><strong>Organization:</strong> {formData.organization}</p>

          <p><strong>Ticket Type:</strong> {formData.ticketType}</p>

          <p><strong>Dietary Requirements:</strong> {formData.dietary}</p>

          <p><strong>Notes:</strong> {formData.notes}</p>

        </div>

        <div className="flex justify-between mt-6">

          <button
            onClick={handleEdit}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Edit
          </button>

          <button
            onClick={handleConfirm}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Confirm Registration
          </button>

        </div>

      </div>
    </div>
    
  );
}

export default ReviewPage;


