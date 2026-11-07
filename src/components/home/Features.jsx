import React from "react";

const features = [
  {
    number: "01",
    title: "Learn",
    description:
      "Workshops, technical sessions, and peer learning opportunities to strengthen your skills.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turn ideas into real projects by working with students across different technical domains.",
  },
  {
    number: "03",
    title: "Contribute",
    description:
      "Participate in open-source initiatives and gain practical experience through collaboration.",
  },
];

const Features = () => {
  return (
    <section className="home-features-section">
      <div className="container">
        <div className="home-section-heading">
          <span>WHAT WE DO</span>
          <h2>More than a coding club.</h2>
          <p>
            Apex creates an environment where students can
            learn, experiment, collaborate, and contribute.
          </p>
        </div>

        <div className="home-features-grid">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="home-feature-card"
            >
              <span className="home-feature-number">
                {feature.number}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;