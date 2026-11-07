import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clubApexLogo from "../../assets/images/brand/club-apex-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Events",
      path: "/events",
    },
    {
      label: "Team",
      path: "/team",
    },
    {
      label: "Activity",
      path: "/activity",
    },
    {
      label: "Recruitment",
      path: "/recruitment",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Brand */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <div className="navbar-brand-mark">
            <img
              src={clubApexLogo}
              alt="Club Apex Logo"
            />
          </div>

          <div className="navbar-brand-text">
            <span className="navbar-brand-name">
              Apex
            </span>

            <span className="navbar-brand-subtitle">
              Coding & Development Club
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `navbar-link ${
                  isActive ? "navbar-link-active" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <Link
            to="/login"
            className="navbar-login"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="apex-button apex-button-primary apex-button-small"
          >
            Join Apex
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`navbar-menu-button ${
            isMenuOpen
              ? "navbar-menu-button-open"
              : ""
          }`}
          onClick={() =>
            setIsMenuOpen(
              (previous) => !previous
            )
          }
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`navbar-mobile-menu ${
          isMenuOpen
            ? "navbar-mobile-menu-open"
            : ""
        }`}
      >
        <div className="container navbar-mobile-container">

          <nav className="navbar-mobile-navigation">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navbar-mobile-link ${
                    isActive
                      ? "navbar-mobile-link-active"
                      : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-mobile-actions">
            <Link
              to="/login"
              className="apex-button apex-button-outline apex-button-medium"
              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="apex-button apex-button-primary apex-button-medium"
              onClick={closeMenu}
            >
              Join Apex
            </Link>
          </div>

          <div className="navbar-mobile-admin">
            <Link
              to="/admin-login"
              onClick={closeMenu}
            >
              Admin Login
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
