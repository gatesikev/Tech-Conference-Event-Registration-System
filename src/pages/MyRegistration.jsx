import React from "react";
import { useEffect, useState } from "react";

function MyRegistration() {
  const [registration, setRegistration] = useState(null);


  if (!registration) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No registration found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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

          <p><strong>Dietary Requirements:</strong> {registration.dietary}</p>

          <p><strong>Notes:</strong> {registration.notes}</p>

        </div>

      </div>
    </div>
  );
}

export default MyRegistration;