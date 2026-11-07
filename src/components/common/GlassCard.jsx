import React from "react";

const GlassCard = ({
  children,
  className = "",
  hover = false,
  dark = false,
  padding = "medium",
}) => {
  const classes = [
    "glass-card",
    dark ? "glass-card-dark" : "",
    hover ? "glass-card-hover" : "",
    `glass-card-padding-${padding}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
};

export default GlassCard;