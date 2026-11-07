import React from "react";
import { Link, useParams } from "react-router-dom";
import ActivitySlider from "../components/activity/ActivitySlider";
import activities from "../mock/activities";

const ActivityDetails = () => {
  const { activityId } = useParams();

  const activity =
    activities.find((item) => item.id === activityId) ||
    activities[0];

  if (!activity) {
    return (
      <main className="activity-details-page">

        <section className="page-section">

          <div className="container">

            <div className="activity-empty-state">

              <h2>Activity not found</h2>

              <Link
                to="/activity"
                className="apex-button apex-button-primary"
              >
                Back to Activity
              </Link>

            </div>

          </div>

        </section>

      </main>
    );
  }

  return (
    <main className="activity-details-page">

      {/* =================================================
          HEADER
          ================================================= */}

      <section className="page-hero activity-details-hero">

        <div className="container">

          <div className="page-hero-content">

            <span className="page-eyebrow">
              {activity.type}
            </span>

            <h1 className="page-title">
              {activity.title}
            </h1>

            <p className="page-description">
              {activity.shortDescription}
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          ACTIVITY CONTENT
          ================================================= */}

      <section className="page-section">

        <div className="container">

          <div className="activity-details-layout">

            {/* Photos */}

            <div className="activity-details-media">

              <ActivitySlider
                images={activity.images}
                title={activity.title}
                interval={2000}
              />

            </div>


            {/* Information */}

            <aside className="activity-details-info">

              <div className="activity-info-card">

                <span className="page-eyebrow">
                  Activity Information
                </span>

                <div className="activity-info-item">
                  <span>Activity</span>
                  <strong>{activity.title}</strong>
                </div>

                <div className="activity-info-item">
                  <span>Type</span>
                  <strong>{activity.type}</strong>
                </div>

                <div className="activity-info-item">
                  <span>Year</span>
                  <strong>{activity.date}</strong>
                </div>

                <div className="activity-info-item">
                  <span>Participation</span>
                  <strong>
                    {activity.participants} Students
                  </strong>
                </div>

              </div>

            </aside>

          </div>


          {/* =================================================
              DESCRIPTION
              ================================================= */}

          <div className="activity-details-content">

            <span className="page-eyebrow">
              About the Activity
            </span>

            <h2 className="section-title">
              {activity.title}
            </h2>

            <p>
              {activity.description}
            </p>

            <p>
              {activity.extendedDescription}
            </p>


            {/* =================================================
                HIGHLIGHTS
                ================================================= */}

            <div className="activity-highlights">

              {activity.highlights.map(
                (highlight, index) => (
                  <div
                    className="activity-highlight"
                    key={index}
                  >

                    <span className="activity-highlight-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      {highlight}
                    </span>

                  </div>
                )
              )}

            </div>

          </div>


          {/* Back */}

          <div className="activity-details-back">

            <Link
              to="/activity"
              className="apex-button apex-button-outline"
            >
              ← Back to Activity
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ActivityDetails;