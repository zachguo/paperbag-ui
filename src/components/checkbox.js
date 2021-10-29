import React from 'react';
import PropTypes from "prop-types";

const CheckBox = ({ checked, label, onChange }) => (
  <div onClick={() => onChange(!checked)} className={`input ${checked ? "active" : ""}`} style={{ display: "inline-block", cursor: "default" }}>
    {label}
    <input type="checkbox" checked={checked} readOnly={true} />
  </div>
);
CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CheckBox;