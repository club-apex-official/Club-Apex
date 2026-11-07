import React from "react";

const coreTeamContacts = [
  {
    name: "Bhavesh Malpure",
    role: "Lead",
    phone: "+91 8329746715",
  },
  {
    name: "Vipul Mali",
    role: "Technical Lead",
    phone: "+91 93221 20663",
  },
  {
    name: "Yash Birari",
    role: "Technical Co-lead",
    phone: "+91 96999 15772",
  },
  {
    name: "Kartik Patil",
    role: "Finance Lead",
    phone: "+91 92261 29460",
  },
  {
    name: "Pranav Patil",
    role: "Documentation Lead",
    phone: "+91 96651 26716",
  },
  {
    name: "Bhumika Shimpi",
    role: "Marketing Lead",
    linkedin:
      "https://www.linkedin.com/in/bhumika-shimpi-922b89287/",
  },
  {
    name: "Gauravi Patil",
    role: "Creativity Lead",
    linkedin:
      "https://www.linkedin.com/in/gauravi-patil-a04453378/",
  },
];

const Contact = () => {
  return (
    <main className="contact-page">
      {/* Page Header */}
      <section className="contact-header">
        <div className="container">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h1 className="contact-title">
            Core Team Contacts
          </h1>

          <p className="contact-description">
            Have a question, idea, collaboration opportunity, or
            want to know more about Apex Club? Reach out to our core
            team.
          </p>
        </div>
      </section>

      {/* Core Team Contacts */}
      <section className="contact-team-section">
        <div className="container">

          <div className="contact-section-heading">
            <span className="contact-section-label">
              APEX CLUB
            </span>

            <h2>Core Team Contacts</h2>

            <p>
              Connect directly with the respective team lead for
              your query.
            </p>
          </div>

          <div className="contact-grid">
            {coreTeamContacts.map((member) => (
              <article
                key={member.name}
                className="contact-card"
              >
                {/* Avatar */}
                <div className="contact-avatar">
                  {member.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                {/* Member Information */}
                <div className="contact-card-content">
                  <h3>{member.name}</h3>

                  <p className="contact-role">
                    {member.role}
                  </p>

                  <p className="contact-club">
                    Apex Coding & Development Club
                  </p>

                  {/* Contact Actions */}
                  <div className="contact-actions">

                    {member.phone && (
                      <a
                        href={`tel:${member.phone.replace(
                          /\s/g,
                          ""
                        )}`}
                        className="contact-action contact-phone"
                      >
                        <span className="contact-action-icon">
                          ☎
                        </span>

                        <span>
                          {member.phone}
                        </span>
                      </a>
                    )}

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-action contact-linkedin"
                      >
                        <span className="contact-action-icon">
                          in
                        </span>

                        <span>LinkedIn Profile</span>
                      </a>
                    )}

                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* General Contact CTA */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-card">

            <div>
              <span className="contact-cta-label">
                APEX COMMUNITY
              </span>

              <h2>
                Let's build something together.
              </h2>

              <p>
                Apex Club is always open to collaborations,
                technical discussions, events, and new ideas.
              </p>
            </div>

            <a
              href="mailto:clubapex26@gmail.com"
              className="contact-cta-button"
            >
              Email Apex Club
            </a>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;