// Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./header.css";
import logo from '../assets/Logo.png'; // You'll need to add your logo to this path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) setMenuOpen(false);
  };

  // Check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container1">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Sri Sri Foods Logo" className="logo" />
          </Link>
        </div>
        
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''} 
                onClick={closeMenu}
              >
                About US
              </Link>
            </li>
            <li>
              <Link 
                to="/brands" 
                className={isActive('/brands') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Brands
              </Link>
            </li>
            <li>
              <Link 
                to="/infrastructure" 
                className={isActive('/infrastructure') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Infrastructure
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;