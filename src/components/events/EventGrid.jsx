import React from "react";
import EventCard from "./EventCard";

const EventGrid = ({ events = [] }) => {
  if (!events.length) {
    return (
      <div className="events-empty-state">
        <h3>No events available</h3>
        <p>
          New Club Apex events will appear here soon.
        </p>
      </div>
    );
  }

  return (
    <div className="events-grid">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
};

export default EventGrid;