import React from "react";
import { Link } from "react-router-dom";

const Recruitment = () => {
  return (
    <main className="recruitment-page">

      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="container home-hero-container">

          <div className="home-hero-content">
            <span className="home-hero-eyebrow">
              CLUB APEX RECRUITMENT
            </span>

            <h1>
              Build.
              <span>Contribute.</span>
              <span>Grow.</span>
            </h1>

            <p>
              Join Club Apex and become part of a student-driven
              community where you can learn, collaborate,
              contribute to real projects, and grow your skills.
            </p>

            <div className="home-hero-actions">
              <Link
                to="/signup"
                className="apex-button apex-button-primary"
              >
                Apply Now
              </Link>

              <a
                href="#why-apex"
                className="apex-button apex-button-outline"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="home-hero-visual">
            <div className="home-hero-orbit home-hero-orbit-one"></div>
            <div className="home-hero-orbit home-hero-orbit-two"></div>

            <div className="home-hero-core">
              <span>A</span>
            </div>
          </div>

        </div>
      </section>


      {/* ================= WHY JOIN APEX ================= */}
      <section
        id="why-apex"
        className="recruitment-section"
      >
        <div className="recruitment-container">

          <div className="recruitment-section-heading">
            <span>Why Join Apex</span>

            <h2>
              More than a club.
              <br />
              A place to build.
            </h2>

            <p>
              Apex gives students an environment where they can
              explore technology, work with others, and turn ideas
              into meaningful projects.
            </p>
          </div>

          <div className="recruitment-benefits-grid">

            <article className="recruitment-benefit-card">
              <span className="recruitment-benefit-number">01</span>
              <h3>Learn</h3>
              <p>
                Explore new technologies and improve your technical
                and problem-solving skills through practical work.
              </p>
            </article>

            <article className="recruitment-benefit-card">
              <span className="recruitment-benefit-number">02</span>
              <h3>Collaborate</h3>
              <p>
                Work with fellow students, share ideas, and
                contribute to projects as a team.
              </p>
            </article>

            <article className="recruitment-benefit-card">
              <span className="recruitment-benefit-number">03</span>
              <h3>Grow</h3>
              <p>
                Build your portfolio, gain experience, and develop
                skills that prepare you for future opportunities.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* ================= WHO CAN APPLY ================= */}
      <section className="recruitment-section recruitment-section-alt">
        <div className="recruitment-container">

          <div className="recruitment-apply-grid">

            <div className="recruitment-section-heading">
              <span>Who Can Apply</span>

              <h2>
                Bring your curiosity.
                <br />
                We'll build from there.
              </h2>

              <p>
                Recruitment is open to students who are interested
                in technology, creativity, collaboration, and
                contributing to the Apex community.
              </p>
            </div>

            <div className="recruitment-apply-list">

              <div className="recruitment-apply-item">
                <div>
                  <strong>Students who love technology</strong>
                  <p>
                    Interested in coding, development, AI, or
                    exploring new technologies.
                  </p>
                </div>
              </div>

              <div className="recruitment-apply-item">
                <div>
                  <strong>Creative contributors</strong>
                  <p>
                    Interested in design, content, documentation,
                    or creative problem solving.
                  </p>
                </div>
              </div>

              <div className="recruitment-apply-item">
                <div>
                  <strong>Team players</strong>
                  <p>
                    Ready to collaborate, learn from others, and
                    contribute to real initiatives.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ================= WHAT CONTRIBUTORS WORK ON ================= */}
      <section className="recruitment-section">
        <div className="recruitment-container">

          <div className="recruitment-section-heading">
            <span>What Contributors Work On</span>

            <h2>
              Ideas become
              <br />
              real work.
            </h2>

            <p>
              Contributors can take part in different kinds of
              activities and projects across the club.
            </p>
          </div>

          <div className="recruitment-work-grid">

            <article className="recruitment-work-card">
              <h3>Projects</h3>
              <p>
                Build practical projects and experiment with
                technologies that solve real problems.
              </p>
            </article>

            <article className="recruitment-work-card">
              <h3>Events</h3>
              <p>
                Help organize workshops, competitions, sessions,
                and other technical activities.
              </p>
            </article>

            <article className="recruitment-work-card">
              <h3>Open Source</h3>
              <p>
                Contribute to collaborative development and learn
                how real open-source projects work.
              </p>
            </article>

            <article className="recruitment-work-card">
              <h3>Community</h3>
              <p>
                Share knowledge, support other students, and help
                create an active learning community.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* ================= CONTRIBUTION CATEGORIES ================= */}
      <section className="recruitment-section recruitment-section-alt">
        <div className="recruitment-container">

          <div className="recruitment-section-heading">
            <span>Contribution Categories</span>

            <h2>
              Find where
              <br />
              you fit.
            </h2>

            <p>
              Choose an area that matches your interests and
              strengths. You can also explore new areas as you grow.
            </p>
          </div>

          <div className="recruitment-category-grid">
            <div className="recruitment-category">
              Development
            </div>

            <div className="recruitment-category">
              UI / UX Design
            </div>

            <div className="recruitment-category">
              AI & Innovation
            </div>

            <div className="recruitment-category">
              Content & Documentation
            </div>

            <div className="recruitment-category">
              Events & Community
            </div>

            <div className="recruitment-category">
              Open Source
            </div>
          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="recruitment-cta">
        <div className="recruitment-container">

          <div className="recruitment-cta-card">

            <h2>
              Ready to build with Apex?
            </h2>

            <p>
              Take the first step, join the community, and start
              contributing to something meaningful.
            </p>

            <div className="recruitment-cta-actions">

              <Link
                to="/signup"
                className="apex-button apex-button-primary"
              >
                Apply Now
              </Link>

              <Link
                to="/contact"
                className="apex-button apex-button-outline"
              >
                Contact Apex
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Recruitment;