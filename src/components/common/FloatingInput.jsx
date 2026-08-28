import React from "react";

const FloatingInput = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  icon: Icon,
  action,
  autoComplete,
  required = false,
  className = "",
  inputStyle,
}) => {
  return (
    <div className={`apex-field ${className}`.trim()}>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={label}
        value={value}
        onChange={onChange}
        className="apex-field-input"
        style={inputStyle}
        required={required}
      />
      {Icon && (
        <span className="apex-field-icon">
          <Icon size={18} />
        </span>
      )}
      <label htmlFor={id} className="apex-field-label">
        {label}
      </label>
      {action}
    </div>
  );
};

export default FloatingInput;
