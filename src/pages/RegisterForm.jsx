import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    ticketType: "Standard",
    dietary: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Save to local storage immediately so other pages can see it
    localStorage.setItem("registration", JSON.stringify(formData));

    // 2. Navigate to review
    navigate("/review", { state: formData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Event Registration
        </h2>

        {/* Full Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
          required
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
          required
        />

        {/* Organization */}
        <input
          type="text"
          name="organization"
          placeholder="Organization / Institution"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
        />

        {/* Ticket Type */}
        <select
          name="ticketType"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
        >
          <option>Standard</option>
          <option>VIP</option>
          <option>Student</option>
        </select>

        {/* Dietary */}
        <input
          type="text"
          name="dietary"
          placeholder="Dietary Requirements"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
        />

        {/* Notes */}
        <textarea
          name="notes"
          placeholder="Additional Notes"
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Continue to Review
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;