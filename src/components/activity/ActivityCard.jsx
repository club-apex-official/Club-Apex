import React from "react";
import { Link } from "react-router-dom";
import ActivitySlider from "./ActivitySlider";

const ActivityCard = ({ activity }) => {
  return (
    <article className="activity-card">

      <ActivitySlider
        images={activity.images}
        title={activity.title}
        interval={2000}
      />

      <div className="activity-card-content">

        <div className="activity-card-meta">

          <span className="activity-card-type">
            {activity.type}
          </span>

          <span className="activity-card-participants">
            {activity.participants} Students
          </span>

        </div>

        <h2 className="activity-card-title">
          {activity.title}
        </h2>

        <p className="activity-card-description">
          {activity.shortDescription}
        </p>

        <div className="activity-card-footer">

          <span className="activity-card-year">
            {activity.date}
          </span>

          <Link
            to={`/activity/${activity.id}`}
            className="apex-button apex-button-outline"
          >
            Read More →
          </Link>

        </div>

      </div>

    </article>
  );
};

export default ActivityCard;