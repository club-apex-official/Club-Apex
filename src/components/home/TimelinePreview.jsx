import React from "react";
import { Link } from "react-router-dom";

const TimelinePreview = () => {
  return (
    <section className="home-timeline-section">
      <div className="container">
        <div className="home-section-heading">
          <span>APEX TIMELINE</span>

          <h2>
            From ideas to impact.
          </h2>

          <p>
            Follow the journey of Apex through events,
            achievements, projects, and milestones.
          </p>
        </div>

        <div className="home-timeline-preview">
          <div className="home-timeline-line"></div>

          <div className="home-timeline-item">
            <span className="home-timeline-dot"></span>

            <div>
              <span>2026</span>
              <h3>Building the next chapter.</h3>
              <p>
                A growing student community focused on
                technology and open-source collaboration.
              </p>
            </div>
          </div>

          <Link
            to="/activity"
            className="home-section-link"
          >
            Explore the timeline →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TimelinePreview;