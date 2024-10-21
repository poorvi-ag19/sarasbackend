// src/components/Header.js
import React from 'react';
import './Header.css'; // Import the CSS for styling

const Header = () => {
  return (
    <header className="header-container">
      {/* Left: Logo and Company Name */}
      <div className="logo-container">
        <img src={require('../img/logo1.jpg')} alt="Company Logo" className="logo" />
              </div>

      {/* Center: Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/program">Program</a></li>
          <li><a href="/admission">Admission</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
