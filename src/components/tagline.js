import React from "react";
import PropTypes from "prop-types";

const Tagline = ({ children }) => (
  <blockquote className="tagline">
    {children}
  </blockquote>
);
Tagline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default Tagline;