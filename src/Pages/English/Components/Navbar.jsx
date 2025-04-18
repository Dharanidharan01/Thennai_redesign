import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-text">THENNAI</Link>
        </div>
        
        <div className="navbar-links">
          <Link to="/features" className="nav-link">About us</Link>
          <Link to="/pricing" className="nav-link">Products</Link>
          <Link to="/about-us" className="nav-link">Coconut Farming</Link>
          <Link to="/resources" className="nav-link">Blog</Link>
          <Link to="/support" className="nav-link">Contact us</Link>
        </div>
        
        <div className="navbar-cta">
          <Link to="/get-started" className="get-started-btn">Languages</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;