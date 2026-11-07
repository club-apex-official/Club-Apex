import React from "react";
import Container from "./Container";

const PageHeader = ({
  eyebrow,
  title,
  description,
  children,
  className = "",
}) => {
  return (
    <header className={`page-header ${className}`.trim()}>
      <Container>
        <div className="page-header-content">
          {eyebrow && (
            <span className="page-header-eyebrow">{eyebrow}</span>
          )}

          <h1 className="page-header-title">{title}</h1>

          {description && (
            <p className="page-header-description">{description}</p>
          )}

          {children && <div className="page-header-actions">{children}</div>}
        </div>
      </Container>
    </header>
  );
};

export default PageHeader;