import React from "react";

const EventBanner = ({ event }) => {
  return (
    <section className="event-banner">
      <div className="event-banner-overlay"></div>

      <div className="container event-banner-container">
        <span className="event-banner-eyebrow">
          {event.status}
        </span>

        <h1 className="event-banner-title">
          {event.title}
        </h1>

        <p className="event-banner-description">
          {event.shortDescription}
        </p>

        <div className="event-banner-meta">
          <span>{event.type}</span>
          <span>{event.mode}</span>
          <span>{event.duration}</span>
        </div>

        <a
          href={event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="apex-button apex-button-primary apex-button-large"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default EventBanner;