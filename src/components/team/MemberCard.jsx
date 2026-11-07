import React from "react";

const MemberCard = ({ member }) => {
  const initials = member.name
    .split(" ")
    .map((name) => name.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="team-member-card">

      {/* Profile Visual */}
      <div className="team-member-image-wrapper">
        <div className="team-member-placeholder">
          <span>{initials}</span>
        </div>

        <div className="team-member-number">
          {String(member.id).padStart(2, "0")}
        </div>
      </div>

      {/* Member Information */}
      <div className="team-member-content">

        <div className="team-member-role">
          {member.role}
        </div>

        <h3 className="team-member-name">
          {member.name}
        </h3>

        {/* Social Links */}
        {(member.linkedin || member.github) && (
          <div className="team-member-socials">

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="team-member-social-link"
                aria-label={`${member.name} LinkedIn`}
              >
                LinkedIn
              </a>
            )}

            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="team-member-social-link"
                aria-label={`${member.name} GitHub`}
              >
                GitHub
              </a>
            )}

          </div>
        )}

      </div>

    </article>
  );
};

export default MemberCard;