import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="home-cta-section">
      <div className="container">
        <div className="home-cta-card">
          <div className="home-cta-content">
            <span className="home-cta-label">
              JOIN THE COMMUNITY
            </span>

            <h2>
              Build. Contribute. Grow with Apex.
            </h2>

            <p>
              Join a student-driven technology community where
              you can learn, build projects, contribute to open
              source, and collaborate with other passionate
              developers.
            </p>
          </div>

          <div className="home-cta-actions">
            <Link
              to="/signup"
              className="apex-button apex-button-primary"
            >
              Join Apex
            </Link>

            <Link
              to="/events"
              className="apex-button apex-button-outline"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;