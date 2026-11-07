import React from "react";

const Badge = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
}) => {
  const classes = [
    "apex-badge",
    `apex-badge-${variant}`,
    `apex-badge-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
};

export default Badge;