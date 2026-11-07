import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <article className="event-card">
      <div className="event-card-image-wrapper">
        <img
          src={event.image}
          alt={event.title}
          className="event-card-image"
        />

        <span className="event-card-status">
          {event.status}
        </span>
      </div>

      <div className="event-card-content">
        <div className="event-card-meta">
          <span>{event.type}</span>
          <span>{event.mode}</span>
        </div>

        <h3 className="event-card-title">
          {event.title}
        </h3>

        <p className="event-card-date">
          {event.duration}
        </p>

        <p className="event-card-description">
          {event.shortDescription}
        </p>

        <div className="event-card-actions">
          <Link
            to={`/events/${event.id}`}
            className="apex-button apex-button-outline apex-button-small"
          >
            View Details
          </Link>

          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="apex-button apex-button-primary apex-button-small"
          >
            Register Now
          </a>
        </div>
      </div>
    </article>
  );
};

export default EventCard;