import React from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    initials: "BM",
    name: "Bhavesh Malpure",
    role: "Lead",
  },
  {
    initials: "VM",
    name: "Vipul Mali",
    role: "Technical Lead",
  },
  {
    initials: "YB",
    name: "Yash Birari",
    role: "Technical Co-lead",
  },
];

const TeamPreview = () => {
  return (
    <section className="home-team-section">
      <div className="container">
        <div className="home-section-heading home-section-heading-row">
          <div>
            <span>THE PEOPLE</span>
            <h2>Meet the team.</h2>
          </div>

          <Link
            to="/team"
            className="home-section-link"
          >
            Meet everyone →
          </Link>
        </div>

        <div className="home-team-preview-grid">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="home-team-preview-card"
            >
              <div className="home-team-avatar">
                {member.initials}
              </div>

              <div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;