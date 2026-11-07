import React from "react";
import TeamGrid from "../components/team/TeamGrid";
import team from "../mock/team";

const Team = () => {
  return (
    <main className="team-page">

      {/* =================================================
          PAGE HERO
          ================================================= */}

      <section className="page-hero team-page-hero">
        <div className="container">

          <div className="page-hero-content">

            <span className="page-eyebrow">
              Meet the Community
            </span>

            <h1 className="page-title">
              The People Behind
              <span className="text-gradient">
                {" "}Apex
              </span>
            </h1>

            <p className="page-description">
              Apex is driven by students who build, create,
              collaborate and help others grow through
              technology and open source.
            </p>

          </div>

        </div>
      </section>


      {/* =================================================
          CORE TEAM
          ================================================= */}

      <section className="page-section team-section">

        <div className="container">

          <div className="section-heading team-section-heading">

            <div>
              <span className="page-eyebrow">
                Our Leadership
              </span>

              <h2 className="section-title">
                Core Team
              </h2>
            </div>

            <p className="section-description">
              Meet the students who help shape Apex,
              organize initiatives and build the community.
            </p>

          </div>


          <TeamGrid members={team} />

        </div>

      </section>


      {/* =================================================
          TEAM CTA
          ================================================= */}

      <section className="page-section team-cta-section">

        <div className="container">

          <div className="team-cta-card">

            <div className="team-cta-content">

              <span className="page-eyebrow">
                Build With Us
              </span>

              <h2 className="section-title">
                Want to be part of Apex?
              </h2>

              <p className="section-description">
                Whether you're interested in development,
                open source, design, documentation or
                community building, there's a place for you.
              </p>

            </div>

            <a
              href="/recruitment"
              className="apex-button apex-button-primary apex-button-large"
            >
              Join the Community
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Team;