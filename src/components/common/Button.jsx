import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  href,
  type = "button",
  className = "",
  disabled = false,
  onClick,
  target,
  rel,
  ...props
}) => {
  const classes = [
    "apex-button",
    `apex-button-${variant}`,
    `apex-button-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;