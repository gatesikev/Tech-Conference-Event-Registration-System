import React, { useEffect, useState } from "react";



function MyRegistration() {
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
  const savedData = localStorage.getItem("registration");
  if (savedData) {
    setRegistration(JSON.parse(savedData));
  }
}, []);// The empty array [] means this runs once when the component mounts

  if (!registration) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No registration found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Your Registration Details
          </h2>
          <div className="space-y-3">
            <p><strong>Name:</strong> {registration.name}</p>
            <p><strong>Email:</strong> {registration.email}</p>
            <p><strong>Phone:</strong> {registration.phone}</p>
            <p><strong>Organization:</strong> {registration.organization}</p>
            <p><strong>Ticket Type:</strong> {registration.ticketType}</p>
            <p><strong>Dietary:</strong> {registration.dietary}</p>
            <p><strong>Notes:</strong> {registration.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyRegistration;