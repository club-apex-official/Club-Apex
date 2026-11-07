import React from "react";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  return (
    <section className="home-events-section">
      <div className="container">
        <div className="home-section-heading home-section-heading-row">
          <div>
            <span>WHAT'S HAPPENING</span>
            <h2>Upcoming events.</h2>
          </div>

          <Link
            to="/events"
            className="home-section-link"
          >
            View all events →
          </Link>
        </div>

        <div className="home-event-placeholder">
          <div>
            <span className="home-event-badge">
              UPCOMING
            </span>

            <h3>
              Events and workshops are coming soon.
            </h3>

            <p>
              Stay connected with Apex to discover our latest
              workshops, competitions, sessions, and community
              activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;