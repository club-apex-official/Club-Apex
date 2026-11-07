import React from "react";
import ActivityGrid from "../components/activity/ActivityGrid";
import activities from "../mock/activities";

const ActivityFeed = () => {
  return (
    <main className="activity-page">

      {/* =================================================
          PAGE HERO
          ================================================= */}

      <section className="page-hero activity-page-hero">

        <div className="container">

          <div className="page-hero-content">

            <span className="page-eyebrow">
              Inside Apex
            </span>

            <h1 className="page-title">
              Activity
              <span className="text-gradient">
                {" "}Feed
              </span>
            </h1>

            <p className="page-description">
              Explore workshops, events and activities
              happening across the Apex community.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          ACTIVITIES
          ================================================= */}

      <section className="page-section activity-feed-section">

        <div className="container">

          <div className="section-heading">

            <div>
              <span className="page-eyebrow">
                What We've Been Building
              </span>

              <h2 className="section-title">
                Recent Activities
              </h2>
            </div>

          </div>

          <ActivityGrid activities={activities} />

        </div>

      </section>

    </main>
  );
};

export default ActivityFeed;