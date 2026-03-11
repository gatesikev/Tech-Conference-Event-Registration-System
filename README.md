# Tech Conference Event Registration System

## Overview
A **React web application** that allows users to register for a tech conference through a structured, multi-step process. Users can view event details, fill out a registration form, review their submission, confirm registration, and return later to see saved data stored in the browser.

---

## Features
- Event information page with conference details  
- Multi-step registration form (name, email, phone, organization, ticket type, dietary requirements, notes)  
- Review page to verify data before confirming  
- Confirmation page with success message  
- Persistent registration using **localStorage**  
- Automatic detection of returning users  
- Cancel registration functionality  
- Responsive interface using **Tailwind CSS**

---

## Technologies
- **React** & **React Router**  
- **Tailwind CSS** for responsive styling  
- **JavaScript (ES6+)**  
- **Local Storage API**  
- **Vite** for project setup and development

---

## Project Structure
```plaintext
src
├── components
│   └── Navbar.jsx
├── pages
│   ├── EventInfo.jsx
│   ├── RegisterForm.jsx
│   ├── ReviewPage.jsx
│   ├── Confirmation.jsx
│   └── MyRegistration.jsx
├── App.jsx
└── index.css
