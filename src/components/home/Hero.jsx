import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="home-hero">
      <div className="container home-hero-container">
        <div className="home-hero-content">
          <span className="home-hero-eyebrow">
            SVKM'S INSTITUTE OF TECHNOLOGY, DHULE
          </span>

          <h1>
            Where students
            <span> build the future.</span>
          </h1>

          <p>
            Apex Coding & Development Club is a student-driven
            community focused on technology, innovation,
            development, and open-source collaboration.
          </p>

          <div className="home-hero-actions">
            <Link
              to="/events"
              className="apex-button apex-button-primary"
            >
              Explore Events
            </Link>

            <Link
              to="/about"
              className="apex-button apex-button-outline"
            >
              Discover Apex
            </Link>
          </div>
        </div>

        <div className="home-hero-visual">
          <div className="home-hero-orbit home-hero-orbit-one"></div>
          <div className="home-hero-orbit home-hero-orbit-two"></div>

          <div className="home-hero-core">
            <span>A</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;