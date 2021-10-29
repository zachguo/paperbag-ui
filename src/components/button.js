import React from 'react';
import PropTypes from "prop-types";

const Button = ({ type = 'primary', label, onClick, disabled }) => {
  const className = {
    primary: "button",
    outline: "button button-outline",
    clear: "button button-clear"
  }[type];
  return (
    <button type="button" className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'outline', 'clear']).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;