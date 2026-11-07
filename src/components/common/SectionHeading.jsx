import React from "react";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) => {
  const classes = [
    "section-heading",
    `section-heading-${align}`,
    light ? "section-heading-light" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {eyebrow && <span className="section-heading-eyebrow">{eyebrow}</span>}

      {title && <h2 className="section-heading-title">{title}</h2>}

      {description && (
        <p className="section-heading-description">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;