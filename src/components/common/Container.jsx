import React from "react";

const Container = ({
  children,
  className = "",
  size = "default",
  as: Component = "div",
}) => {
  const sizeClass =
    size === "wide"
      ? "container-wide"
      : size === "narrow"
        ? "container-narrow"
        : "";

  return (
    <Component className={`container ${sizeClass} ${className}`.trim()}>
      {children}
    </Component>
  );
};

export default Container;