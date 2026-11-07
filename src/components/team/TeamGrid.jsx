import React from "react";
import MemberCard from "./MemberCard";

const TeamGrid = ({ members }) => {
  if (!members || members.length === 0) {
    return (
      <div className="team-empty-state">
        <p>Team information will be available soon.</p>
      </div>
    );
  }

  return (
    <div className="team-grid">
      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
        />
      ))}
    </div>
  );
};

export default TeamGrid;