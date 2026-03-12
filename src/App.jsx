import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


// Importing your pages
import EventInfo from "./pages/EventInfo";
import RegisterForm from "./pages/RegisterForm";
import ReviewPage from "./pages/ReviewPage";
import Confirmation from "./pages/Confirmation";
import MyRegistration from "./pages/MyRegistration";
import Navbar from "./components/Navbar";


function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    ticketType: "Standard",
  });

  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("techConfUser");
    if (savedData) {
      setFormData(JSON.parse(savedData));
      setIsRegistered(true);
    }
  }, []);

 
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<EventInfo />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/my-registration" element={<MyRegistration />} />
      </Routes>

    </BrowserRouter>
  );
}
    
export default App;