import React from "react";
import { Link, useParams } from "react-router-dom";
import EventBanner from "../components/events/EventBanner";
import events from "../mock/events";

const EventDetails = () => {
  const { eventId } = useParams();

  const event =
    events.find((item) => item.id === eventId) ||
    events[0];

  return (
    <main className="event-details-page">

      <EventBanner event={event} />

      <section className="page-section">
        <div className="container">

          <div className="event-details-layout">

            {/* Main Content */}
            <div className="event-details-main">

              <span className="page-eyebrow">
                About the Event
              </span>

              <h2 className="section-title">
                {event.title}
              </h2>

              <p className="event-details-description">
                {event.description}
              </p>

              <h3 className="event-details-subtitle">
                What you'll experience
              </h3>

              <div className="event-highlights">

                {event.highlights.map((highlight, index) => (
                  <div
                    className="event-highlight"
                    key={index}
                  >
                    <span className="event-highlight-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{highlight}</p>
                  </div>
                ))}

              </div>

            </div>

            {/* Event Information */}
            <aside className="event-details-sidebar">

              <div className="event-info-card">

                <span className="event-info-label">
                  Event Information
                </span>

                <div className="event-info-item">
                  <span>Event Type</span>
                  <strong>{event.type}</strong>
                </div>

                <div className="event-info-item">
                  <span>Date</span>
                  <strong>{event.duration}</strong>
                </div>

                <div className="event-info-item">
                  <span>Mode</span>
                  <strong>{event.mode}</strong>
                </div>

                <div className="event-info-item">
                  <span>Location</span>
                  <strong>{event.location}</strong>
                </div>

                <div className="event-info-item">
                  <span>Eligibility</span>
                  <strong>{event.participants}</strong>
                </div>

                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apex-button apex-button-primary apex-button-large event-register-button"
                >
                  Register Now
                </a>

              </div>

            </aside>

          </div>

          <div className="event-details-back">
            <Link
              to="/events"
              className="apex-button apex-button-outline"
            >
              ← Back to Events
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
};

export default EventDetails;