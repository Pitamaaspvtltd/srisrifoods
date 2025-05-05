// Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./header.css";
// import logo from 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1745923152/Logo_wystlp.png';
const logo = "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745923152/Logo_wystlp.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''}`}>
      {!isMobile && (
        <div className={`logo-overflow ${scrolled ? 'hidden' : ''}`}>
          <div className="logo-container-outer">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Sri Sri Foods Logo" className="logo" />
            </Link>
          </div>
        </div>
      )}
      
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