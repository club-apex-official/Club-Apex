import React from "react";
import ActivityCard from "./ActivityCard";

const ActivityGrid = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return (
      <div className="activity-empty-state">
        <h3>No activities available</h3>
        <p>
          Club Apex activities and events will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="activity-grid">
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
        />
      ))}
    </div>
  );
};

export default ActivityGrid;