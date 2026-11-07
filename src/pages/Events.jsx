import React from "react";
import EventGrid from "../components/events/EventGrid";
import SectionHeading from "../components/common/SectionHeading";
import events from "../mock/events";

const Events = () => {
  return (
    <main className="events-page">

      {/* Page Header */}
      <section className="page-section events-header-section">
        <div className="container">

          <div className="events-header-content">
            <span className="page-eyebrow">
              Club Apex Events
            </span>

            <h1 className="page-title">
              Learn. Build. Contribute.
            </h1>

            <p className="page-description">
              Explore workshops, programs, technical events,
              and community initiatives organized by Club Apex.
            </p>
          </div>

        </div>
      </section>

      {/* Events */}
      <section className="page-section events-list-section">
        <div className="container">

          <SectionHeading
            eyebrow="Upcoming"
            title="Featured Events"
            description="Discover opportunities to learn, build projects, collaborate with other students, and contribute to the developer community."
          />

          <EventGrid events={events} />

        </div>
      </section>

    </main>
  );
};

export default Events;