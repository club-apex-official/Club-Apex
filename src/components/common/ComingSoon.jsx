import React from "react";
import GlassCard from "./GlassCard";
import Badge from "./Badge";

const ComingSoon = ({
  title = "Coming Soon",
  description = "This feature is currently being developed by the Apex community.",
  className = "",
}) => {
  return (
    <GlassCard
      dark
      padding="large"
      className={`coming-soon ${className}`.trim()}
    >
      <div className="coming-soon-content">
        <Badge variant="accent">Coming Soon</Badge>

        <h3 className="coming-soon-title">{title}</h3>

        <p className="coming-soon-description">{description}</p>
      </div>
    </GlassCard>
  );
};

export default ComingSoon;