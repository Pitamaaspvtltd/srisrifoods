"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import "./header.css"
import productLinks from "../helpers/productLinks"

const logo = "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745923152/Logo_wystlp.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  // Close menus when location changes
  useEffect(() => {
    setMenuOpen(false)
    setIsMobileMenuOpen(false)

    // Force remove any hover states by adding and removing a class to the body
    document.body.classList.add("navigating")

    // Small delay to ensure CSS transitions have time to complete
    const timer = setTimeout(() => {
      document.body.classList.remove("navigating")
    }, 100)

    return () => clearTimeout(timer)
  }, [location])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setMenuOpen(false)
  const isActive = (path) => location.pathname === path

  // Handle category, item, and subitem clicks with improved event handling
  const handleCategoryClick = (e, categorySlug) => {
    e.preventDefault()
    e.stopPropagation() // Stop event from bubbling up

    // Force close all menus
    setMenuOpen(false)
    setIsMobileMenuOpen(false)

    // Add a class to body to disable hover effects during navigation
    document.body.classList.add("navigating")

    // Navigate to the page
    navigate(`/product/${categorySlug}`)
  }

  const handleItemClick = (e, categorySlug, itemSlug) => {
    e.preventDefault()
    e.stopPropagation() // Stop event from bubbling up

    // Force close all menus
    setMenuOpen(false)
    setIsMobileMenuOpen(false)

    // Add a class to body to disable hover effects during navigation
    document.body.classList.add("navigating")

    // Navigate to the page
    navigate(`/product/${categorySlug}/${itemSlug}`)
  }

  const handleSubitemClick = (e, categorySlug, itemSlug, subitemSlug) => {
    e.preventDefault()
    e.stopPropagation() // Stop event from bubbling up

    // Force close all menus
    setMenuOpen(false)
    setIsMobileMenuOpen(false)

    // Add a class to body to disable hover effects during navigation
    document.body.classList.add("navigating")

    // Navigate to the page
    navigate(`/product/${categorySlug}/${itemSlug}/${subitemSlug}`)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${isMobile ? "mobile" : ""}`}>
      {!isMobile && (
        <div className={`logo-overflow ${scrolled ? "hidden" : ""}`}>
          <div className="logo-container-outer">
            <Link to="/" onClick={closeMenu}>
              <img src={logo || "/placeholder.svg"} alt="Logo" className="logo" />
            </Link>
          </div>
        </div>
      )}

      <div className="container">
        <div className="logo-container1">
          <Link to="/" onClick={closeMenu}>
            <img src={logo || "/placeholder.svg"} alt="Logo" className="logo" />
          </Link>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive("/") ? "active" : ""} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={closeMenu}>
                About
              </Link>
            </li>

            {/* PRODUCTS MENU */}
            <li
              className={`dropdown ${isMobileMenuOpen ? "active" : ""}`}
              ref={menuRef}
              onClick={isMobile ? toggleMobileMenu : undefined}
            >
              <Link  onClick={(e) => e.preventDefault()}>
                Products <i className="fas fa-chevron-down"></i>
              </Link>
              <ul className="sub-menu">
  {productLinks.map((category, index) => (
    <li key={index} className="dropdown">
      <span
        onClick={(e) => handleCategoryClick(e, category.category)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{category.category}</span>
      </span>

      {!isMobile && (
        <ul className="sub-menu">
          {category.items.map((item, idx) => (
            <li key={idx} className="dropdown">
              <span
                onClick={(e) => handleItemClick(e, category.category, item.name)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{item.name}</span>
              </span>

              <ul className="sub-menu">
                {item.subitems.map((subitem, subidx) => (
                  <li key={subidx}>
                    <span
                      onClick={(e) =>
                        handleSubitemClick(e, category.category, item.name, subitem.name)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {subitem.name}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>

            </li>
            <li>
              <Link to="/brands" className={isActive("/brands") ? "active" : ""} onClick={closeMenu}>
                Brands
              </Link>
            </li>

            <li>
              <Link to="/private" className={isActive("/private") ? "active" : ""} onClick={closeMenu}>
                Private Labelling
              </Link>
            </li>

            <li>
              <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
