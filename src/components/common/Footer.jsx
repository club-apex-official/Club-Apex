import React from "react";
import { Link } from "react-router-dom";
import clubApexLogo from "../../assets/images/brand/club-apex-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
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
      label: "Activity Feed",
      path: "/activity",
    },
  ];

  const communityLinks = [
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

  return (
    <footer className="footer">

      {/* Main Footer */}
      <div className="container footer-container">

        {/* Brand Column */}
        <div className="footer-brand-column">

          <Link
            to="/"
            className="footer-brand"
          >
            <div className="footer-brand-mark">
              <img
                src={clubApexLogo}
                alt="Club Apex Logo"
              />
            </div>

            <div>
              <span className="footer-brand-name">
                Apex
              </span>

              <span className="footer-brand-subtitle">
                Coding & Development Club
              </span>
            </div>
          </Link>

          <p className="footer-description">
            A student-driven community focused on
            technology, development, open source,
            innovation, and collaboration.
          </p>

          <div className="footer-institute">
            <span>
              SVKM&apos;s IoT, Dhule
            </span>
          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3 className="footer-column-title">
            Explore
          </h3>

          <nav className="footer-links">
            {quickLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="footer-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>

        {/* Community Links */}
        <div className="footer-column">

          <h3 className="footer-column-title">
            Community
          </h3>

          <nav className="footer-links">
            {communityLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="footer-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>

        {/* Connect */}
        <div className="footer-column">

          <h3 className="footer-column-title">
            Connect
          </h3>

          <div className="footer-social-links">

            <a
              href="https://www.instagram.com/apex_codingclub"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              Instagram
            </a>

            <a
              href="#"
              className="footer-social-link"
              aria-label="Apex LinkedIn"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="footer-social-link"
              aria-label="Apex GitHub"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">

        <div className="container footer-bottom-container">

          <p className="footer-copyright">
            © {currentYear} Apex Coding & Development Club.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>

            <Link to="/admin-login">
              Admin
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
