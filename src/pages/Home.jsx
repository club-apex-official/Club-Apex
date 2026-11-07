import React from "react";

import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Statistics from "../components/home/Statistics";
import UpcomingEvents from "../components/home/UpcomingEvents";
import TeamPreview from "../components/home/TeamPreview";
import TimelinePreview from "../components/home/TimelinePreview";
import CTASection from "../components/home/CTASection";
import Sponsors from "../components/home/Sponsors";

const Home = () => {
  return (
    <main className="home-page">
      {/* Hero */}
      <Hero />

      {/* What Apex offers */}
      <Features />

      {/* Club statistics */}
      <Statistics />

      {/* Upcoming events */}
      <UpcomingEvents />

      {/* Core team preview */}
      <TeamPreview />

      {/* Recent activities / milestones */}
      <TimelinePreview />

      {/* Sponsors / supporters */}
      <Sponsors />

      {/* Final call to action */}
      <CTASection />
    </main>
  );
};

export default Home;